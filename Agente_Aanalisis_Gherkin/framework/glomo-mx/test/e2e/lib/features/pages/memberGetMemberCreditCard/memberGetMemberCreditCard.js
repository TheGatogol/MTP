import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page()
class MemberGetMemberCreditCard extends AbstractGlomoPage {

    constructor() {
        const formField = '#personal > div.content > member-get-member-personal [data-tag-name="bbva-form-input"]';
        const addressField = '#address > div.content > member-get-member-address';
        super({
            root: '#cells-template-memberGetMemberCreditCard bbva-feature-member-get-member-credit-card-spherica',
            elements: {
                formHeader: '[data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-header-main"][id="header-main"]',
                formHeaderCloseButton: '[data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-header-main"][id="header-main"] #btn-close',
                personalFormTitle: '#personal #headingLabel',
                personalFormButton: '#personal > div.content > member-get-member-personal [data-tag-name="bbva-button-default"] div [data-tag-name="bbva-type-text"]',
                nameField: `${formField}:nth-child(2) input`,
                firstLastNameField: `${formField}:nth-child(3) input`,
                secondLastNameField: `${formField}:nth-child(4) input`,
                emailField: `${formField}:nth-child(5) input`,
                birthdayField: `${formField}:nth-child(6) [data-tag-name="bbva-form-date"]`,
                personalFormSummaryHeader: '#personal #headingLabel',
                addressFormHeader: '#address #headingLabel',
                addresFormButton: `${addressField} [data-tag-name="bbva-button-default"] div [data-tag-name="bbva-type-text"]`,
                addresFormButtonClick: `${addressField} .cta`,
                addressFormSummaryHeader: '#address #headingLabel',
                streetInput: '#address member-get-member-address [data-tag-name="bbva-form-input"][name="street"] input',
                externalNumerInput: '#address member-get-member-address [data-tag-name="bbva-form-input"][name="externalNumber"] input',
                internalNumberInput: '#address member-get-member-address [data-tag-name="bbva-form-input"][name="internalNumber"] input',
                postalCodeInput: `${addressField} #postalCode input`,
                colonyInput: `${addressField} #colony #button`,
                colonyInputOptions: `${addressField} #colony #list > [data-tag-name="bbva-form-option"]:nth-child(2)`,
                confirmRegisterButton: '[data-tag-name="bbva-expandable-multistep"] > div.confirm-step > [data-tag-name="bbva-button-default"][text="Confirmar"]',
                successHeader: '[data-tag-name="bbva-transition-container"] div.slot-header [data-tag-name="bbva-header-main"]',
                successHeaderCloseButton: '[data-tag-name="bbva-transition-container"] div > div.content > section > div.modal-header > slot.header-slot > [data-tag-name="bbva-header-main"] #btn-close',
                successTitleText: '[data-tag-name="bbva-transition-container"] [data-tag-name="bbva-widget-member-get-member-receipt-spherica"] [data-tag-name="bbva-type-text"][id="receiptTitle"]',
                newRegisterButton: '[data-tag-name="bbva-transition-container"] div [data-tag-name="bbva-widget-member-get-member-receipt-spherica"] #button-default-credit-card',
                anotherTimeButton: '[data-tag-name="bbva-transition-container"] > div > [data-tag-name="bbva-widget-member-get-member-receipt"] #type-link-credit-card',
                postalCodeHalfModalButton: '#address div.content member-get-member-address bbva-feature-member-get-member-credit-card-help-modal-spherica[id="modal-address"] #postalCodeRegistrationErrorRetry div div.content div.help-modal div.modal-main div.modal-footer div.slot-footer [data-tag-name="bbva-button-default"]',
                postalCodeHeader: '#address div.content member-get-member-address bbva-feature-member-get-member-credit-card-help-modal-spherica#modal-address #postalCodeRegistrationError #helpModalHeader #text',
                postalCodeCloseButton: '#address div.content member-get-member-address bbva-feature-member-get-member-credit-card-help-modal-spherica#modal-address #postalCodeRegistrationError #helpModalHeader #btn-close',
                postalCodeTitleText: '#address div.content member-get-member-address bbva-feature-member-get-member-credit-card-help-modal-spherica#modal-address #postalCodeRegistrationError [data-tag-name="bbva-type-text"] p',
                postalCodeButton: '#address > div.content > member-get-member-address bbva-feature-member-get-member-credit-card-help-modal #postalCodeRegistrationError div > div.content > section > div > div.modal-main > div.modal-footer > slot > div.slot-footer > [data-tag-name="bbva-button-default"][text="Entendido"]',
                registerErrorHeader: '[data-tag-name="bbva-feature-member-get-member-credit-card-help-modal-spherica"][id="modal-main"] #registrationErrorFullModal #helpModalHeader #text',
                registerErrorCloseButton: '[data-tag-name="bbva-feature-member-get-member-credit-card-help-modal-spherica"][id="modal-main"] #registrationErrorFullModal #helpModalHeader #btn-close',
                registerErrorTitleText: '[data-tag-name="bbva-feature-member-get-member-credit-card-help-modal-spherica"][id="modal-main"] #registrationErrorFullModal [data-tag-name="bbva-type-text"] p',
                registerErrorButton: '[data-tag-name="bbva-feature-member-get-member-credit-card-help-modal"]:nth-child(5) #registrationErrorFullModal div > div.content > section > div > div.modal-main > div.modal-footer > slot > div.slot-footer > [data-tag-name="bbva-button-default"][text="Entendido"]',
                registerErrorHalfModalButton: '[data-tag-name="bbva-feature-member-get-member-credit-card-help-modal-spherica"][id="modal-main"] #referredRegistrationErrorRetry div.content div.help-modal div.modal-main div.modal-footer div.slot-footer [data-tag-name="bbva-button-default"]',
                mapSearchLink: '#address > div.content > member-get-member-address [data-tag-name="bbva-type-link"]',
                mapSearchHalfModalButton: '#address div.content member-get-member-address bbva-feature-member-get-member-credit-card-help-modal-spherica[id="modal-address"] #mapSearchInfo div.content div.help-modal div.modal-main div.modal-footer div.slot-footer [data-tag-name="bbva-button-default"]'
            },
            requiredElements: [
                'formHeader'
            ]
        });
    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            case 'form header':
                await this.formHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'form header close button':
                await this.formHeaderCloseButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'personal form title':
                await this.personalFormTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'personal form button':
                await this.personalFormButton.waitForEnabled({ timeout: config.wait.M, reverse: value === 'disabled' });
                break;
            case 'personal form button disabled':
                await this.personalFormButton.waitForEnabled({ timeout: config.wait.M, reverse: value !== 'disabled' });
                break;
            case 'personal form summary header':
                await this.personalFormSummaryHeader.waitForExist({timeout: config.wait.M});
                break;
            case 'address form summary header':
                await this.addressFormSummaryHeader.waitForExist({timeout: config.wait.M});
                break;
            case 'address form header':
                await this.addressFormHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address form button':
                await this.addresFormButton.waitForEnabled({ timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'address form button disabled':
                await this.addresFormButton.waitForEnabled({ timeout: config.wait.M, reverse: value !== 'disabled'});
                break;
            case 'confirm register button':
                await this.confirmRegisterButton.waitForEnabled({ timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'success header':
                await this.successHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success close button':
                await this.successHeaderCloseButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success title text':
                await this.successTitleText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success register button':
                await this.newRegisterButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success link button':
                await this.anotherTimeButton.waitForDisplayed({timeout: config.wait.M, reverse:this.isSpherica()});
                break;
            case 'postal code header':
                await this.postalCodeHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'postal code header button':
                await this.postalCodeCloseButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'postal code text':
                await this.postalCodeTitleText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'postal code button':
                await this.postalCodeButton.waitForDisplayed({timeout: config.wait.M, reverse:this.isSpherica()});
                break;
            case 'register error header':
                await this.registerErrorHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'register error close button':
                await this.registerErrorCloseButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'register error text':
                await this.registerErrorTitleText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'register error button':
                await this.registerErrorButton.waitForDisplayed({timeout: config.wait.M, reverse:this.isSpherica()});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async registerPersonalInformation(){
        await this.writeName();
        await this.writeFirstLastName();
        await this.writeSecondLastName();
        await this.writeEmail();
        await this.writeBirthday();
    }

    async writeName(){
        const message = global.user.name;
        await this.nameField.waitForDisplayed();
        await this.nameField.setValue({value: message});
    }

    async writeFirstLastName(){
        const message = global.user.firstLastName;
        await this.firstLastNameField.waitForDisplayed();
        await this.firstLastNameField.setValue({value: message});
    }

    async writeSecondLastName(){
        const message = global.user.secondLastName;
        await this.secondLastNameField.waitForDisplayed();
        await this.secondLastNameField.setValue({value: message});
    }

    async writeEmail(value){
        const message = value ? value : global.user.email;
        await this.emailField.waitForDisplayed();
        await this.emailField.setValue({value: message});
    }

    async writeBirthday(){
        const message = global.user.birthday;
        await (await this.birthdayField.waitForEnabled({timeout: config.wait.M}))
            .sendKeys({keys: message.split('-').reverse().join('')});
    }

    async personalFormCompleted(){
        await this.registerPersonalInformation();
        await this.personalFormButton.waitForEnabled({timeout: config.wait.M});
        await this.personalFormButton.waitForClickable({timeout: config.wait.M});
        await this.personalFormButton.click();
    }

    async personalIncorrectInformation(){
        const wrongEmail = global.user?.wrongEmail;
        await this.writeName();
        await this.writeFirstLastName();
        await this.writeSecondLastName();
        await this.writeEmail(wrongEmail);
        await this.writeBirthday();
    }

    async mapSearchModalInformation(){
        await this.personalFormCompleted();
        await this.mapSearchLink.waitForClickable({timeout: config.wait.M});
        await this.mapSearchLink.click();
        await this.mapSearchHalfModalButton.waitForClickable({timeout: config.wait.M});
        await this.mapSearchHalfModalButton.click();
    }

    async registerAddressInformation(errorData = {}, colony = true){
        await this.personalFormCompleted();
        await this.writeStreet(errorData.street);
        await this.writeExternalNumer(errorData.externalNumber);
        await this.writeInternalNumer(errorData.internalNumber);
        await this.writePostalCode(errorData.postalCode);
        if(colony){
            await this.selectColony();
        }
    }

    async writeStreet(message = global.user.street){
        await this.streetInput.waitForDisplayed();
        await this.streetInput.setValue({value: message});
    }

    async writeExternalNumer(message = global.user.externalNumber){
        await this.externalNumerInput.waitForDisplayed();
        await this.externalNumerInput.setValue({value: message});
    }

    async writeInternalNumer(message = global.user.internalNumber){
        await this.internalNumberInput.waitForDisplayed();
        await this.internalNumberInput.setValue({value: message});
    }

    async writePostalCode(message = global.user.postalCode){
        await this.postalCodeInput.waitForDisplayed();
        await this.postalCodeInput.setValue({value: message});
    }

    async selectColony(){
        await this.colonyInput.waitForDisplayed();
        await this.colonyInput.waitForEnabled({timeout: config.wait.M});
        await this.colonyInput.click();
        await this.colonyInputOptions.waitForDisplayed();
        await this.colonyInputOptions.waitForEnabled({timeout: config.wait.M});
        await this.colonyInputOptions.click();
    }

    async addressFormCompleted(data = {}){
        await this.registerAddressInformation(data);
        await this.addresFormButtonClick.waitForEnabled({timeout: config.wait.M});
        await this.addresFormButtonClick.waitForClickable({timeout: config.wait.M});
        await this.addresFormButtonClick.click();
    }

    async finishRegister() {
        const data = {
            street: global.user.street,
            externalNumber: global.user.externalNumber,
            internalNumber: global.user.internalNumber,
            postalCode: global.user.postalCode,
        };
        await this.addressFormCompleted(data);
        await this.ctaConfirmRegister();
    }

    async finishRegisterError() {
        const errorData = {
            street: global.user.street,
            externalNumber: global.user.externalNumber,
            internalNumber: global.user.internalNumber,
            postalCode: global.user.postalCode,
        };
        await this.addressFormCompleted(errorData);
        await this.ctaConfirmRegister();
        await this.registerErrorHalfModal();
        await this.ctaConfirmRegister();
        await this.registerErrorHalfModal();
        await this.ctaConfirmRegister();
        await this.registerErrorHalfModal();
        await this.ctaConfirmRegister();

    }

    async finishRegisterAnContinueInviting() {
        await this.addressFormCompleted();
        await this.ctaConfirmRegister();
        await this.newRegisterButton.waitForClickable({timeout: config.wait.M});
        await this.newRegisterButton.click({timeout: config.wait.M});
    }

    async ctaConfirmRegister(){
        await this.confirmRegisterButton.waitForClickable({timeout: config.wait.XL});
        await this.confirmRegisterButton.click();
    }

    async registerErrorHalfModal(){
        await this.registerErrorHalfModalButton.waitForClickable({timeout: config.wait.XL});
        await this.registerErrorHalfModalButton.click();
    }

    async postalCodeHalfModal(){
        await this.postalCodeHalfModalButton.waitForClickable({timeout: config.wait.XL});
        await this.postalCodeHalfModalButton.click();
    }

    async postalCodeError() {
        const errorData = {
            postalCode: global.user.postalCodeError,
        };
        await this.registerAddressInformation(errorData, false);
        await this.postalCodeHalfModal();
        await this.writePostalCode(errorData.postalCode);
        await this.postalCodeHalfModal();
        await this.writePostalCode(errorData.postalCode);
        await this.postalCodeHalfModal();
        await this.writePostalCode(errorData.postalCode);
    }
}

export default new MemberGetMemberCreditCard();
