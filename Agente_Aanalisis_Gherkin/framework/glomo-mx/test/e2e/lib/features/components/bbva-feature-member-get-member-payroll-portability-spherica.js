import AbstractGlomoComponent from './abstract-glomo-component';

export default class BbvaFeatureMemberGetMemberPayrollPortabilitySpherica extends AbstractGlomoComponent {

    constructor(args) {
        super(Object.assign({
            name: 'bbva-feature-member-get-member-payroll-portability-spherica',
            elements: {
                header: 'section > [data-tag-name="bbva-header-main"]',
                title: 'div [data-tag-name="member-get-member-personal"] [data-tag-name="bbva-header-category"]',
                description: '[data-tag-name="member-get-member-personal"] [data-tag-name="bbva-type-text"]#descriptionStep',
                amountContinueBtn: '[data-tag-name="bbva-button-default"] [name="continue-button"]',
                inputName: '[data-tag-name="member-get-member-personal"] [data-tag-name="bbva-form-input"][name="name"] input',
                inputFirstSurname: '[data-tag-name="member-get-member-personal"] [data-tag-name="bbva-form-input"][name="firstLastName"] input',
                inputSecondLastName: '[data-tag-name="member-get-member-personal"] [data-tag-name="bbva-form-input"][name="secondLastName"] input',
                inputEmail: '[data-tag-name="member-get-member-personal"] [data-tag-name="bbva-form-input"][name="email"] input',
                inputBirthdate: 'div [data-tag-name="member-get-member-personal"] [data-tag-name="bbva-form-input"][name="birthday"] [data-tag-name="bbva-form-date"]',
                notificationMessage: '[data-tag-name="member-get-member-personal"] [data-tag-name="bbva-notification-message"]',
                buttonDefault: '[data-tag-name="member-get-member-personal"] div.content-footer-container > [data-tag-name="bbva-button-default"]',
                formFirstSurnameInputXButton : '[data-tag-name="member-get-member-personal"] [data-tag-name="bbva-form-input"][name="firstLastName"] [data-tag-name="bbva-form-text"]  div.field  [data-tag-name="bbva-button-default"]',
                formFirstSurnameInputWarning:'[data-tag-name="member-get-member-personal"] [data-tag-name="bbva-form-input"][name="firstLastName"] [data-tag-name="bbva-form-text"] div.message.error [data-tag-name="bbva-notification-help"] [data-tag-name="bbva-type-text"] p',
                formSecondLastNameInputXButton:'[data-tag-name="member-get-member-personal"] [data-tag-name="bbva-form-input"][name="secondLastName"] [data-tag-name="bbva-form-text"] div.field [data-tag-name="bbva-button-default"]',
                formSecondLastNameInputWarning:'[data-tag-name="member-get-member-personal"] [data-tag-name="bbva-form-input"][name="secondLastName"] [data-tag-name="bbva-form-text"] div.message.error [data-tag-name="bbva-notification-help"] [data-tag-name="bbva-type-text"] p',
                eMailInputXButton: '[data-tag-name="member-get-member-personal"] [data-tag-name="bbva-form-input"][name="email"] [data-tag-name="bbva-form-text"] div.field [data-tag-name="bbva-button-default"]',
                eMailInputWarning: '[data-tag-name="member-get-member-personal"] [data-tag-name="bbva-form-input"][name="email"] [data-tag-name="bbva-form-text"] div.message.error [data-tag-name="bbva-notification-help"] [data-tag-name="bbva-type-text"] p',
                birthDayInputXButton: '[data-tag-name="member-get-member-personal"] [data-tag-name="bbva-form-input"][name="birthday"] [data-tag-name="bbva-form-date"] div.field  span.clear [data-tag-name="bbva-type-icon"]',
                birthDayInputWarning: '[data-tag-name="member-get-member-personal"] [data-tag-name="bbva-form-input"][name="birthday"] [data-tag-name="bbva-form-date"] div.message.error [data-tag-name="bbva-notification-help"] [data-tag-name="bbva-type-text"] p',
                buttonDefaultInvite: '[data-tag-name="bbva-transition-container"] div [data-tag-name="bbva-widget-member-get-member-receipt-spherica"] #button-default-payroll-portability',
                guestRegisteredSuccessfullyTitle:'[data-tag-name="bbva-transition-container"] div [data-tag-name="bbva-widget-member-get-member-receipt-spherica"] div div.header-content > [data-tag-name="bbva-type-text"]#receiptTitle',
                guestRegisteredSuccessfullyInfoText: '[data-tag-name="bbva-transition-container"] div [data-tag-name="bbva-widget-member-get-member-receipt-spherica"] div div.header-content > [data-tag-name="bbva-type-text"]#receiptInfo',
                guestRegisteredSuccessfullyFullName: '[data-tag-name="bbva-transition-container"] div [data-tag-name="bbva-widget-member-get-member-receipt-spherica"] div.summary-content [data-tag-name="bbva-type-text"]#fullNameValue',
                guestRegisteredSuccessfullyeMail: '[data-tag-name="bbva-transition-container"] div [data-tag-name="bbva-widget-member-get-member-receipt-spherica"] div.summary-content [data-tag-name="bbva-type-text"]#emailValue',
                guestRegisteredSuccessfullyBirthDay: '[data-tag-name="bbva-transition-container"] div [data-tag-name="bbva-widget-member-get-member-receipt-spherica"] div.summary-content [data-tag-name="bbva-type-text"]#birthDateValue',
                guestRegisteredSuccessfullyAccordion: '[data-tag-name="bbva-transition-container"] div [data-tag-name="bbva-widget-member-get-member-receipt-spherica"] div [data-tag-name="bbva-expandable-accordion"]'
            },
            requiredElements: [
                '__root',
            ],
        }, args));
    }

    static get _baseRoot() {
        return 'bbva-feature-member-get-member-payroll-portability-spherica';
    }

    async writeName(){
        const message = global.user.name;
        await this.inputName.waitForDisplayed();
        await this.inputName.setValue({value: message});
    }

    async writeFirstLastName(correct){
        const message = correct ? global.user.firstLastName : global.user.wrongfirstLastName;
        await this.inputFirstSurname.waitForDisplayed();
        await this.inputFirstSurname.setValue({value: message});
    }

    async writeSecondLastName(correct){
        const message = correct ? global.user.secondLastName : global.user.wrongSecondLastName;
        await this.inputSecondLastName.waitForDisplayed();
        await this.inputSecondLastName.setValue({value: message});
    }

    async writeEmail(correct){
        const message = correct ? global.user.email : global.user.wrongEmail;
        await this.inputEmail.waitForDisplayed();
        await this.inputEmail.setValue({value: message});
    }

    async writeBirthday(correct){
        const message = correct ? global.user.birthday : global.user.wrongBirthday;
        await (await this.inputBirthdate.waitForEnabled({timeout: config.wait.M}))
            .sendKeys({keys: message.split('-').reverse().join('')});
    }

    async registerGuest(){
        await this.buttonDefault.waitForClickable();
        await this.buttonDefault.click();
    }

    async inviteSomeOneElse(){
        await this.buttonDefaultInvite.waitForClickable();
        await this.buttonDefaultInvite.click();
    }
}
