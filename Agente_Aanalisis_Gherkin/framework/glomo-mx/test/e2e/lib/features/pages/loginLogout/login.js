import {Commands, page, ScreenValidationKeyNotFound} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class Login extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-login[state="active"]',

            elements: {
                title: {
                    web: '.credentials-form__user__lite',
                    android: '//*[@resource-id="__PACKAGE__:id/greetingTextView"]',
                    ios: '~glomo_login_title_label',
                },
                logo: {
                    web: '#logo',
                },
                userInputField: {
                    web: '#user-input-id #input',
                    android: '//androidx.appcompat.widget.LinearLayoutCompat[@resource-id="__PACKAGE__:id/form_container"]//android.widget.RelativeLayout[@index=0]//android.widget.EditText',
                    ios: '~login_user_textfield',
                },
                deviceIdInputField: {
                    web: '#user-input-secondary-id #input',
                },
                userNameField: {
                    web: '#user-input-login-name .field__input',
                },
                pwdInputField: {
                    web: '#user-input-pwd #input',
                    android: '//androidx.appcompat.widget.LinearLayoutCompat[@resource-id="__PACKAGE__:id/form_container"]//android.widget.RelativeLayout[@index=1]//android.widget.EditText',
                    ios: '~login_pass_textfield',
                },
                accessButton: {
                    web: '#loginBtn',
                    android: '//android.widget.Button[@resource-id="__PACKAGE__:id/primary_button"]',
                    ios: '~login_enter_button',
                },
                continueButton: {
                    web: '#continueBtn',
                    android: '//android.widget.Button[@resource-id="__PACKAGE__:id/nextButton"]',
                    ios: '~login_continue_button',
                },
                backButton: {
                    web: '#goBackBtn',
                    android: '//android.widget.ImageButton[@resource-id="__PACKAGE__:id/toolbar_ic_close"]',
                    ios: '~glomo_login_close_button',
                },
                nameBox: {
                    web: '.credentials-form__user__greeting',
                    android: '//*[@resource-id="__PACKAGE__:id/greetingTextView"]',
                    ios: '//XCUIElementTypeStaticText[contains(@name,"Buen")]',
                },
                // Cannot find in the release/last date 29/01/2018
                errorMessage: {
                    web: 'iron-label-0',
                    android: '',
                    ios: '',
                },
                sidebarButton: {
                    web: '#btnRight',
                    android: '//*[@resource-id="__PACKAGE__:id/action_menu"]',
                    ios: '//XCUIElementTypeOther[@name="menu_button_accessibility_identifier"]',
                },
                passwordError: {
                    web: '.error',
                    android: '//*[@resource-id="__PACKAGE__:id/errorLabel"]',
                    ios: '~password_text_field_error_view',
                },
                usernameError: {
                    web: '.error',
                    android: '//*[@resource-id="__PACKAGE__:id/errorLayout"]',
                    ios: '~document_text_field_error_view',
                },
                retryButton: {
                    web: 'acceptButton',
                    android: '',
                    ios: '~Reintentar',
                },
                loginGate: {
                    web: 'acceptButton',
                    android: '//*[@resource-id="__PACKAGE__:id/loaderLottieView"]',
                    ios: '~Verificando credenciales...',
                },
                forgotPasswordButton: {
                    web: 'p.credentials-form__forgotten-pwd .transparent [type="button"]'
                },
                registerButton: {
                    web: 'cells-login-view #credentialsUserPwd #step_1 > p > cells-st-button > button'
                },
                loginModalErrorPrimaryButton: {
                    android: '//*[@resource-id="__PACKAGE__:id/positiveButton"]',
                    ios: '~modal_full_blockeduser_button',
                },
            },
            requiredElements: [
                'userInputField',
            ],
            contextType: 'NATIVE_APP',
        });
    }

    async welcomeFutura() {
        const futuraData = {
            firstViewHome: 'true',
            firstViewWelcome: 'true',
            sessionNumber: '2',
            firstClickBlue: 'false'
        };
        await Commands.execute({
            script: (key, val) => localStorage.setItem(key, val),
            args: ['futuraFirstView', JSON.stringify(futuraData)]
        });
    }

    async cardDetailData() {
        const cardConfig = {
            'on': false,
            'off': false,
            'debitOn': false,
            'debitOff': false,
            'additionalCardOn': false,
            'additionalCardOff': false,
            'digitalActivation': false,
            'paymentSimulationAdvice': false,
            'cardsActivationAccept': [],
            'visits': global.user?.tooltipDigitalCard === true ? 0 : 1
        };
        await Commands.execute({
            script: (key, val) => localStorage.setItem(key, val),
            args: ['card_detail_data', JSON.stringify(cardConfig)]
        });
        await Commands.pause({ time: config.wait.S });
    }

    async loginDataInLocalStorage() {
        const loginData = global.user.customer?.id ?? {grantingTicketUserId: 'D0987217'};
        await Commands.execute({
            script: (key, val) => localStorage.setItem(key, val),
            args: ['loginData', JSON.stringify(loginData)]
        });
    }

    async waitForLoaded(timeout = config.wait.XXXL, ...args) {
        await super.waitForLoaded(timeout, ...args);
        if (Commands.flags.isWeb) {

            // Check to avoid cells i18n errors. Not remove this validation
            await (await this.continueButton
                .waitForDisplayed({timeout: config.wait.L}))
                .waitForText({
                    text: 'Continuar',
                    timeout: config.wait.L,
                    errorMessage: 'The button on LoginPage should have the text "Continuar", but it have another text (check screenshot/video).'
                });
        }
    }

    async login(accessToForgotPassword = false) {
        const {user: username, password, deviceId} = user.authentication;
        await this.welcomeFutura();
        await this.insertDocumentNumber(username);
        if ( Commands.flags.isWeb ) {
            await this.insertDeviceId(deviceId);
            await (await this.continueButton.waitForClickable({timeout: config.wait.M}))
                .click();
        }

        if (accessToForgotPassword) {
            await (await this.forgotPasswordButton
                .waitForDisplayed({timeout: config.wait.L}))
                .click();
        } else {
            await this.insertPassword(password);
            await this._hideKeyboard();
            await (await this.accessButton
                .waitForDisplayed({timeout: config.wait.L}))
                .click();
        }

        await this.loginDataInLocalStorage();
        await this.cardDetailData();
    }

    async insertDocumentNumber(document = '11111111') {
        await (await this.userInputField
            .waitForDisplayed({timeout: config.wait.M}))
            .setValue({value: document});

        await this._hideKeyboard();
    }

    async insertDeviceId(deviceId = '11111111') {
        await (await this.deviceIdInputField
            .waitForDisplayed({timeout: config.wait.M}))
            .setValue({value: deviceId});

        await this._hideKeyboard();
    }

    async _hideKeyboard() {
        if (Commands.flags.isAndroid) {
            await Commands.Mobile.hideKeyboard();
        } else if (Commands.flags.isIOS) {
            await (await this.title
                .waitForDisplayed({timeout: config.wait.S}))
                .click();
        }
    }

    async insertPassword(password = '11111') {
        await (await this.pwdInputField
            .waitForDisplayed({timeout: config.wait.M}))
            .setValue({value: password});
    }

    async accessToSidebar() {
        await this.sidebarButton.waitForAnimation({timeout: config.wait.M});
        await this.sidebarButton.click();
    }

    async accessRegister() {
        await this.registerButton.waitForAnimation({timeout: config.wait.M});
        await this.registerButton.click();
    }

    async goBack() {
        await this.backButton.waitForDisplayed({timeout: config.wait.M});
        await this.backButton.click();
    }

    async unlock() {
        await this.loginModalErrorPrimaryButton.waitForDisplayed();
        await this.loginModalErrorPrimaryButton.click();
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'document number':
            case 'document number input':
                await this.userInputField.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'password':
            case 'password input':
                await this.pwdInputField.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'continue button disabled':
                await (await this.continueButton
                    .waitForDisplayed({timeout: config.wait.M}))
                    .waitForDisabled({timeout: config.wait.M});
                break;
            case 'username':
            case 'username input':
                await this.userInputField.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'access button disabled':
                await (await this.accessButton
                    .waitForDisplayed({timeout: config.wait.M}))
                    .waitForDisabled({timeout: config.wait.M});
                break;
            case 'forgot password button':
                await this.forgotPasswordButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'register button':
                await this.registerButton.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new Login();
