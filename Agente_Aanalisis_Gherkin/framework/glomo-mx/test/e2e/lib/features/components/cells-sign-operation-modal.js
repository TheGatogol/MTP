import AbstractGlomoComponent from './abstract-glomo-component';

export default class CellsSignOperationModal extends AbstractGlomoComponent {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-sign-operation-modal',
            elements: {
                header: '#modal #content .header#header',
                smsPasswordLabel: '#modal h1[slot="heading"]',
                closeButton: '#modal #content .header#header button.btn-close',
                closeIcon: '#modal #content #closeButton',
                smsImage: '#modal #sign #heading .subheader iron-image.subheader-img',
                insertSmsLabel: '#modal #sign #main.main p.text',
                mainTitle: '#modal #sign .signForm .modal-main-title p',
                smsInformationLabel: '#modal #sign .signForm .timer .timer-header',
                timerIcon: '#modal #sign .signForm .timer .timer-content .icon-size-16',
                timer: '#modal #sign .signForm .timer .timer-content #timer',
                circularTimer: '#modal #sign .signForm .timer-custom-content cells-circular-timer#timer .wrapper',
                textAdditionalTimer: '#modal #sign .signForm .timer-custom-content .confirm-info-text-additional p',
                smsPasswordInputField: '#modal #sign .signForm #user-input-pwd.sign-modal .field-icons-wrapper .field #ironInput #input.field__input',
                userInputPassword: '#modal #sign .signForm #user-input-pwd.sign-modal',
                smsInfoMessage: '#modal #sign .signForm #user-input-pwd.sign-modal cells-icon-message.message-input',
                smsErrorMessage: '#modal #sign .signForm #user-input-pwd.sign-modal cells-icon-message[type="error"].message-input',
                resendMiddleButton: '#modal #sign .signForm cells-st-button#resend button.btn-link',
                requestNewSmsLink: '#modal #sign .signForm .signButtons #cancel button',
                smsContinueButton: '#modal #sign .signForm .signButtons cells-st-button#accept button.btn',
            },
            requiredElements: [
                'smsPasswordInputField',
            ],
        };

        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return {
            web: 'cells-sign-operation-modal',
            isWithoutRoot: true,
        };
    }

    async setPassword(password, changeFocus = false) {
        await this.smsPasswordInputField.waitForDisplayed({timeout: config.wait.L});
        await this.smsPasswordInputField.waitForAnimation({timeout: config.wait.L});
        await this.smsPasswordInputField.waitForEnabled({timeout: config.wait.L});
        await this.smsPasswordInputField.setValue({value: password, slow: true});

        if (changeFocus) {
            await this.changeFocus();
        }
    }

    async confirmPassword() {
        await this.smsContinueButton.waitForDisplayed({timeout: config.wait.L});
        await this.smsContinueButton.click({useActions: false, scrollOptions: {block: 'end'}});
    }

    async isLoaded() {
        return this.smsPasswordInputField.waitForDisplayed({timeout: config.wait.L, failOnError: false});
    }

    async closeModal() {
        await this.closeButton.waitForDisplayed({timeout: config.wait.L});
        await this.closeButton.click();
    }

    async closeModalIcon() {
        await this.closeIcon.waitForDisplayed({timeout: config.wait.L});
        await this.closeIcon.click();
    }

    async changeFocus() {
        await this.mainTitle.waitForDisplayed({timeout: config.wait.L});
        await this.mainTitle.click();
    }

    async insertSmsValue(smsKey) {
        await (await (await this.userInputPassword.waitForDisplayed({timeout: config.wait.L}))
            .waitForAnimation({timeout: config.wait.L}))
            .waitForEnabled({timeout: config.wait.L});
        await this.userInputPassword.execute({
            script: (value) => this.value = value,
            args: [smsKey]
        });
        await (await (await (await this.smsContinueButton.waitForDisplayed({timeout: config.wait.L}))
            .waitForAnimation({timeout: config.wait.L}))
            .waitForEnabled({timeout: config.wait.L}))
            .click({useActions: false, scrollOptions: {block: 'end'}});
    }

}
