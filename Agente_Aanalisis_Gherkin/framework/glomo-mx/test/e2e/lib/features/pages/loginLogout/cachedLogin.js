import AbstractGlomoPage from '../abstract-glomo-page';
import {Commands, ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class CachedLogin extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-login[state="active"]',
            elements: {
                title: {
                    web: '.credentials-form__user__lite',
                    android: '//*[@resource-id="__PACKAGE__:id/loginToolbar"]',
                    ios: '//XCUIElementTypeImage[@name="ic_bbva_logo"]',
                },
                userInputField: {
                    web: '#user-input-id #input',
                    android: '//androidx.appcompat.widget.LinearLayoutCompat[@resource-id="__PACKAGE__:id/form_container"]//android.widget.RelativeLayout[@index=0]//android.widget.EditText',
                    ios: '~login_user_textfield',
                },
                pwdInputField: {
                    web: '#user-input-pwd #input',
                    android: '//android.widget.EditText[@resource-id="__PACKAGE__:id/editText"]',
                    ios: '~login_pass_textfield',
                },
                accessButton: {
                    web: '#loginBtn',
                    android: '//android.widget.Button[@resource-id="__PACKAGE__:id/primaryActionButton"]',
                    ios: '~login_enter_button',
                },
                changeUserButton: {
                    web: '.credentials-form__change-user button',
                    android: '//*[@resource-id="__PACKAGE__:id/changeUserButton"]',
                    ios: '~Cambiar usuario',
                },
                errorMessage: {
                    web: 'iron-label-0',
                    android: '//*[@resource-id="__PACKAGE__:id/errorLabel"]',
                    ios: '~ic_warning_image_white',
                },
                backButton: {
                    web: '#goBackBtn',
                    android: '//android.widget.ImageButton[@resource-id="__PACKAGE__:id/toolbar_ic_close"]',
                    ios: '~glomo_login_close_button'
                },
                sidebarButton: {
                    web: '#btnRight',
                    android: '//*[@resource-id="__PACKAGE__:id/action_menu"]',
                    ios: '~menu_button_accessibility_identifier',
                },
                changeUserDialog: {
                    web: '#modal',
                    android: '//*[@resource-id="__PACKAGE__:id/design_bottom_sheet"]',
                    ios: '//XCUIElementTypeStaticText[@name="¿Estás seguro de que quieres cambiar de usuario?"]\n',
                },
                acceptChangeUserBtn: {
                    web: '#acceptButton',
                    android: '//*[@resource-id="__PACKAGE__:id/positiveButton"]',
                    ios: '//XCUIElementTypeButton[@name="Cambiar"]\n',
                },
                dataError: {
                    web: 'body',
                    android: '',
                },
                retryButton: {
                    web: 'acceptButton',
                    android: '',
                    ios: '//XCUIElementTypeButton[@name="Reintentar"]',
                },
                loginGate: {
                    web: 'acceptButton',
                    android: '~__PACKAGE__:id/loaderLottieView',
                    ios: '~Verificando Credenciales...',
                },
            },
            requiredElements: [
                'pwdInputField',
            ],
            contextType: 'NATIVE_APP',
        });
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

    /* Perform login */
    async login() {
        await this.insertPassword(user.authentication.password);
        await this.accessButton.waitForEnabled({timeout: config.wait.L});
        await this.accessButton.click();
        await Commands.waitForSpinner({spinner: this.loginGate});
    }

    async insertPassword(password) {
        await this.pwdInputField.waitForDisplayed({timeout: config.wait.L});
        await this.pwdInputField.click();
        await this.pwdInputField.setValue({value: password});
        await this._hideKeyboard();
    }

    async changeUser() {
        await this.changeUserButton.waitForDisplayed({timeout: config.wait.M});
        await this.changeUserButton.waitForAnimation({timeout: config.wait.M});
        await this.changeUserButton.click();
    }

    async acceptChangeUser() {
        if (Commands.flags.isWeb) {
            return this.confirmDialog();
        }

        await this.changeUserDialog.waitForDisplayed({timeout: config.wait.L});
        await this.acceptChangeUserBtn.click();
    }

    async changeUserLinkDisplays(reverse = false) {
        await this.changeUserButton.waitForDisplayed({timeout: config.wait.L, reverse: reverse});
    }

    async passwordInputDisplays(reverse = false) {
        await this.pwdInputField.waitForDisplayed({timeout: config.wait.L, reverse: reverse});
    }

    async completeChangeUser() {
        await this.changeUser();
        await this.acceptChangeUser();
    }

    async changeFocus() {
        await this.title.click();
    }

    async accessToSidebar() {
        await Commands.pause({time: config.wait.XS});
        await this.sidebarButton.waitForDisplayed({timeout: config.wait.M});
        await this.sidebarButton.click();
    }

    /* ACCESS */
    async accessButtonIsEnabled(reverse = false) {
        await this.accessButton.waitForDisplayed({timeout: config.wait.L});
        reverse === true
            ? await this.accessButton.waitForEnabled({timeout: config.wait.M, reverse: true})
            : await this.accessButton.waitForEnabled({timeout: config.wait.M});
    }

    /* USERNAME */
    async usernameInputDisplays(reverse = false) {
        reverse === true
            ? await this.userInputField.waitForNotDisplayed({timeout: config.wait.M})
            : await this.userInputField.waitForDisplayed({timeout: config.wait.M});
    }

    async _screenValidation({item, visibility} = {}) {
        switch (item) {
            case 'Username input':
                await this.usernameInputDisplays();
                break;
            case 'Access button disabled':
                await this.accessButtonIsEnabled(true);
                break;
            case 'Password input':
                await this.passwordInputDisplays();
                break;
            case 'Change user link':
                await this.changeUserLinkDisplays(visibility === 'hidden');
                break;
            case 'Back button':
                await this.backButton.waitForDisplayed({timeout: config.wait.L, reverse: visibility === 'hidden'});
                break;
            case 'Sidebar button':
                await this.sidebarButton.waitForDisplayed({timeout: config.wait.L, reverse: visibility === 'hidden'});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new CachedLogin();
