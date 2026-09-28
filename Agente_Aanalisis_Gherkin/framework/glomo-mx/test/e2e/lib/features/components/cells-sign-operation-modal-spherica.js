import CellsSignOperationModal from './cells-sign-operation-modal';

export default class CellsSignOperationModalSpherica extends CellsSignOperationModal {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-sign-operation-modal-spherica',
            elements: {
                header: '#modal #content .header#header',
                smsPasswordLabel: '#modal h1[slot="heading"]',
                closeButton: '#modal #content .header#header button.btn-close',
                closeIcon: '#modal #content #closeButton',
                smsImage: '#modal #sign #heading .subheader iron-image.subheader-img',
                smsIcon: '#modal #sign .signForm cells-atom-icon-spherica',
                insertSmsLabel: '#modal #sign .modal-main-title',
                mainTitle: '#modal #sign .signForm .modal-main-title p',
                smsInformationLabel: '#modal #sign .signForm .timer .timer-header',
                timerIcon: '#modal #sign .signForm .timer .timer-content .icon-size-16',
                timer: '#modal #sign .signForm .timer .timer-content #timer',
                circularTimer: '#modal #sign .signForm .timer-custom-content cells-circular-timer-spherica#timer .wrapper',
                textAdditionalTimer: '#modal #sign .signForm .timer-custom-content .confirm-info-text-additional p',
                smsPasswordInputField: '#modal #sign .signForm #user-input-pwd.sign-modal .field-icons-wrapper .field #ironInput #input.field__input',
                smsInfoMessage: '#modal #sign .signForm #user-input-pwd.sign-modal cells-icon-message-spherica.message-input',
                smsErrorMessage: '#modal #sign .signForm #user-input-pwd.sign-modal cells-icon-message-spherica[type="error"].message-input',
                resendMiddleButton: '#modal #sign .signForm cells-st-button-spherica#resend button.btn-link',
                requestNewSmsLink: '#modal #sign .signForm .signButtons #cancel button',
                smsContinueButton: '#modal .signButtons cells-st-button-spherica#accept button.btn',
                userInputPassword: '#modal #sign .signForm #user-input-pwd.sign-modal',
            }
        };

        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return {
            web: 'cells-sign-operation-modal-spherica',
            isWithoutRoot: true,
        };
    }
}
