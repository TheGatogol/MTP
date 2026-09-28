import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page()
class LiteOnboardingForeigners extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-onboardingForeigners[state="active"]',
            elements: {
                welcome:{
                    properties:{root:'bbva-onboarding-cta-digital-n2-extranjeros-offer'},
                    header: '#helpModalHeader',
                    buttonOpenAccount: 'bbva-button-default',
                    linkKnowMore: 'bbva-type-link',
                    buttonClose: '#btn-close',
                },
                step0:{
                    properties:{root:'#step-0'},
                    inputName: '#user-name-input input',
                    inputFirstLastName: '#last-name-input input',
                    inputSecondLastName: '#second-last-name-input input',
                    inputDate:'[data-tag-name="bbva-form-date"]',
                    inputPassport: '#passport-input input',
                    inputCountry: 'bbva-form-select #button',
                    inputCountryOption: 'bbva-form-option[id="__OPTION__"]',
                    genderOption: 'bbva-form-control-input[value="__GENDER__"]',
                    buttonContinuePersonalData: 'personal-data-step bbva-button-default.action',
                    buttonModifyPersonalData: '#editButton',
                    linkKnowMoreStep0: 'bbva-type-link',
                    messageError: 'bbva-notification-help',
                },
                step1:{
                    properties:{root:'#step-1'},
                    inputStreet: '#street-name-input input',
                    inputExternalNumber: '#external-number-input input',
                    inputInternalNumber: '#internal-number-input input',
                    inputZipCode: '#postal-code-input input',
                    inputColony: '#colonySelect #button',
                    inputColonyOption: 'bbva-form-option[id="__OPTION__"]',
                    buttonContinueContactDetails: 'current-address-step #buttonConfirm',
                    buttonModifyCurrentAddress: '#editButton',
                    messageError: 'bbva-notification-help',
                },
                step2:{
                    properties:{root:'#step-2'},
                    inputCellPhoneNumber: '#contactNumber input',
                    inputEmail: '#contactEmail input',
                    inputEmailConfirm: '#contactEmailConfirm input',
                    notificationMessage: 'contact-data-step bbva-notification-message',
                    checkPrivacyNotice: 'contact-data-step #item-checkbox',
                    buttonContinueIdentityVerification: 'contact-data-step bbva-button-default.action',
                    linkSeePrivacyNotice: 'bbva-type-link',
                    messageError: 'bbva-notification-help',
                },
                step3:{
                    properties:{root:'#step-3'},
                    buttonUploadInformation: 'identity-verification-step button bbva-type-text',
                },
                modalManager:{
                    properties:{root:'bbva-onboarding-cta-digital-n2-extranjeros-modal-manager'},
                    headerUploadDocumentation: '#helpModalTitle',
                    buttonScanYourPassport: 'bbva-type-text[text="bbva-feature-lite-onboarding-foreigners-mx-create-account-dynamic-modal-verify-identity-scan-your-passport"]',
                    buttonTakeASelfie: 'bbva-type-text[text="bbva-feature-lite-onboarding-foreigners-mx-create-account-dynamic-modal-verify-identity-take-selfie"]',
                    buttonContinueAndUnderstood: 'bbva-button-default',
                    buttonCloseModal: '#btn-close',
                },
            },
            requiredElements: [
                'welcome.header'
            ]
        });
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.welcome.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button open account':
                await this.welcome.buttonOpenAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link know more':
                await this.welcome.linkKnowMore.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button close welcome':
                await this.welcome.buttonClose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input name':
                await this.step0.inputName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input first last name':
                await this.step0.inputFirstLastName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input second last name':
                await this.step0.inputSecondLastName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input country':
                await this.step0.inputCountry.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input street':
                await this.step1.inputStreet.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input external number':
                await this.step1.inputExternalNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input internal number':
                await this.step1.inputInternalNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input postal code':
                await this.step1.inputZipCode.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input cells phone number':
                await this.step2.inputCellPhoneNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input email':
                await this.step2.inputEmail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification message contact details':
                await this.step2.notificationMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check privacy notice':
                await this.step2.checkPrivacyNotice.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header upload documentation':
                await this.modalManager.headerUploadDocumentation.scrollIntoView();
                await this.modalManager.headerUploadDocumentation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button scan your passport':
                await this.modalManager.buttonScanYourPassport.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button take a selfie':
                await this.modalManager.buttonTakeASelfie.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button continue upload documentation':
                await this.modalManager.buttonContinueAndUnderstood.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error message personal data':
                await this.step0.messageError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error message current address':
                await this.step1.messageError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error message contact details':
                await this.step2.messageError.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async accessOpenAccount() {
        await this.welcome.buttonOpenAccount.scrollIntoView({ block: 'nearest'});
        await this.welcome.buttonOpenAccount.waitForDisplayed({timeout: config.wait.M});
        await this.welcome.buttonOpenAccount.click({useActions: true});
    }

    async firstPartOfRegistrationForeing(name, firstLastName, secondLastName, country, passport, gender){
        await this.addName(name);
        await this.addFirstLastName(firstLastName);
        await this.addSecondLastName(secondLastName);
        await this.addDateOfBirthForeing();
        await this.addCountryForeing(country);
        await this.addNumberPassportForeing(passport);
        await this.addGenderForeing(gender);
        await this.accessRealAddress();
    }

    async addName(value) {
        await this.step0.inputName.waitForDisplayed({timeout: config.wait.M});
        await this.step0.inputName.setValue({value: value});
    }

    async addFirstLastName(value) {
        await this.step0.inputFirstLastName.waitForDisplayed({timeout: config.wait.M});
        await this.step0.inputFirstLastName.setValue({value: value});
    }

    async addSecondLastName(value) {
        await this.step0.inputSecondLastName.waitForDisplayed({timeout: config.wait.M});
        await this.step0.inputSecondLastName.setValue({value: value});
    }

    async setDateForeing(root, date) {
        await root.execute({
            script: (value) => {
                this.value = value;
                this.dispatchEvent(new Event('input'));
                this.dispatchEvent(new Event('form-field-input-blur'));
            },
            args: [date],
        });
    }

    async addDateOfBirthForeing() {
        const {birthDate} = (((user || {}).people || {}).customer || {}).birthData || {};
        await this.step0.inputDate.scrollIntoView();
        await this.step0.inputDate.waitForDisplayed({timeout: config.wait.L});
        await this.setDateForeing(this.step0.inputDate, birthDate);
    }

    async addForeignMinorsDateOfBirth() {
        const {birthDate} = (((user || {}).peopleError || {}).customer || {}).birthData || {};
        await this.step0.inputDate.scrollIntoView();
        await this.step0.inputDate.waitForDisplayed({timeout: config.wait.L});
        await this.setDateForeing(this.step0.inputDate, birthDate);
    }

    async addNumberPassportForeing(value) {
        await this.step0.inputPassport.waitForDisplayed({timeout: config.wait.M});
        await this.step0.inputPassport.setValue({value: value});
    }

    async addGenderForeing(value){
        const selectgender = this.step0.genderOption.specifySelector({placeholder:'__GENDER__', value: value});
        await selectgender.waitForDisplayed({timeout: config.wait.M});
        await selectgender.click();
    }

    async addCountryForeing(value){
        await this.step0.inputCountry.waitForDisplayed({timeout: config.wait.M});
        await this.step0.inputCountry.click();
        const selectgender = this.step0.inputCountryOption.specifySelector({placeholder:'__OPTION__', value: value});
        await selectgender.waitForDisplayed({timeout: config.wait.M});
        await selectgender.click();
    }

    async accessRealAddress(){
        await this.step0.buttonContinuePersonalData.scrollIntoView({ block: 'nearest' });
        await this.step0.buttonContinuePersonalData.waitForDisplayed({timeout: config.wait.M});
        await this.step0.buttonContinuePersonalData.click({useActions: true});
    }

    async secondPartOfRegistrationForeing(street, outerNumber, internalNumber, zipCode, colony){
        await this.addStreet(street);
        await this.addExternalNumber(outerNumber);
        await this.addInternalNumber(internalNumber);
        await this.addZipCodeForeing(zipCode);
        await this.addColonyForeing(colony);
        await this.accessContactDetails();
    }

    async addStreet(value) {
        await this.step1.inputStreet.scrollIntoView({ block: 'nearest' });
        await this.step1.inputStreet.waitForDisplayed({timeout: config.wait.M});
        await this.step1.inputStreet.setValue({value: value,  forceFocus: false});

    }

    async addExternalNumber(value) {
        await this.step1.inputExternalNumber.waitForDisplayed({timeout: config.wait.M});
        await this.step1.inputExternalNumber.setValue({value: value});
    }

    async addInternalNumber(value) {
        await this.step1.inputInternalNumber.waitForDisplayed({timeout: config.wait.M});
        await this.step1.inputInternalNumber.setValue({value: value});
    }

    async addZipCodeForeing(value) {
        await this.step1.inputZipCode.waitForDisplayed({timeout: config.wait.M});
        await this.step1.inputZipCode.setValue({value: value});
    }

    async addColonyForeing(value){
        await this.step1.inputColony.waitForDisplayed({timeout: config.wait.M});
        await this.step1.inputColony.click();
        const selectcolony = this.step1.inputColonyOption.specifySelector({placeholder:'__OPTION__', value: value});
        await selectcolony.waitForExist({timeout: config.wait.M});
        await selectcolony.waitForAnimation({timeout: config.wait.M});
        await selectcolony.scrollIntoView({ block: 'nearest' });
        await selectcolony.waitForDisplayed({timeout: config.wait.M});
        await selectcolony.click({useActions: true});
    }

    async accessContactDetails(){
        await this.step1.buttonContinueContactDetails.scrollIntoView({ block: 'nearest' });
        await this.step1.buttonContinueContactDetails.waitForDisplayed({timeout: config.wait.M});
        await this.step1.buttonContinueContactDetails.click({useActions: true});
    }

    async threePartOfRegistrationForeign(number, email, emailConfim){
        await this.addCellPhoneNumber(number);
        await this.addEmail(email);
        await this.addEmailConfirm(emailConfim);
        await this.step2.checkPrivacyNotice.scrollIntoView();
        await this.step2.checkPrivacyNotice.waitForDisplayed({timeout: config.wait.M});
        await this.step2.checkPrivacyNotice.click();
        await this.accessIdentityVerification();
        await this.step3.buttonUploadInformation.waitForDisplayed({timeout: config.wait.M});
        await this.step3.buttonUploadInformation.click();
    }

    async addCellPhoneNumber(value) {
        await this.step2.inputCellPhoneNumber.scrollIntoView();
        await this.step2.inputCellPhoneNumber.waitForDisplayed({timeout: config.wait.M});
        await this.step2.inputCellPhoneNumber.setValue({value: value});
    }

    async addEmail(value) {
        await this.step2.inputEmail.scrollIntoView();
        await this.step2.inputEmail.waitForDisplayed({timeout: config.wait.M});
        await this.step2.inputEmail.setValue({value: value});
    }

    async addEmailConfirm(value) {
        await this.step2.inputEmailConfirm.scrollIntoView();
        await this.step2.inputEmailConfirm.waitForDisplayed({timeout: config.wait.M});
        await this.step2.inputEmailConfirm.setValue({value: value});
    }

    async accessIdentityVerification(){
        await this.step2.buttonContinueIdentityVerification.scrollIntoView();
        await this.step2.buttonContinueIdentityVerification.waitForDisplayed({timeout: config.wait.M});
        await this.step2.buttonContinueIdentityVerification.click();
    }

    async modifyNameAndContinue(name){
        await this.waitForElementsExist(this.step0.buttonModifyPersonalData);
        await (await this.step0.buttonModifyPersonalData.elements()).value[0].waitForAnimation({timeout: config.wait.M, interval: 300});
        await (await this.step0.buttonModifyPersonalData.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
        await (await this.step0.buttonModifyPersonalData.elements()).value[0].click();
        await this.addName(name);
        await this.accessRealAddress();
    }

    async modifyStreetAndContinue(street){
        await this.waitForElementsExist(this.step1.buttonModifyCurrentAddress);
        await (await this.step1.buttonModifyCurrentAddress.elements()).value[0].waitForAnimation({timeout: config.wait.M, interval: 300});
        await (await this.step1.buttonModifyCurrentAddress.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
        await (await this.step1.buttonModifyCurrentAddress.elements()).value[0].click();
        await this.addStreet(street);
        await this.accessContactDetails();
    }

    async modalOptions(value){
        switch(value.toLowerCase()) {
            case 'understood':
                await this.modalManager.buttonContinueAndUnderstood.waitForDisplayed({timeout: config.wait.M});
                await this.modalManager.buttonContinueAndUnderstood.click();
                break;
            case 'closes':
                await this.modalManager.buttonCloseModal.waitForDisplayed({timeout: config.wait.M});
                await this.modalManager.buttonCloseModal.click();
                break;
            default:
                throw new Error(`The action "${value}" is not defined.`);
        }
    }

    async closeModalKnowMoreWelcome(value){
        await this.welcome.linkKnowMore.waitForDisplayed({timeout: config.wait.M});
        await this.welcome.linkKnowMore.click();
        await this.modalOptions(value);
    }

    async closeModalKnowMorePersonalData(value){
        await this.step0.linkKnowMoreStep0.waitForDisplayed({timeout: config.wait.M});
        await this.step0.linkKnowMoreStep0.click();
        await this.modalOptions(value);
    }

    async closeModalPrivacyNotice(value){
        await this.step2.linkSeePrivacyNotice.waitForDisplayed({timeout: config.wait.M});
        await this.step2.linkSeePrivacyNotice.click();
        await this.modalOptions(value);
    }

    async dataOptionToEnterPersonalData(value){
        switch(value.toLowerCase()) {
            case 'name':
                await this.addName(user.dataError[0].name);
                break;
            case 'date':
                await this.addForeignMinorsDateOfBirth();
                break;
            case 'passport':
                await this.addNumberPassportForeing(user.dataError[0].passport);
                break;
            default:
                throw new Error(`The action "${value}" is not defined.`);
        }
    }

    async dataOptionToEnterCurrentAddress(value){
        switch(value.toLowerCase()) {
            case 'street':
                await this.addStreet(user.address[0].invalidstreet);
                break;
            case 'postal code':
                await this.addZipCodeForeing(user.address[0].invalidZP);
                break;
            case 'postal code five characters':
                await this.addZipCodeForeing(user.address[0].invalidZPcharacters);
                break;
            default:
                throw new Error(`The action "${value}" is not defined.`);
        }
    }

    async dataOptionToEnterContactDetails(value){
        switch(value.toLowerCase()) {
            case 'cell number':
                await this.addCellPhoneNumber(user.contact[0].invalidPhone);
                break;
            case 'email':
                await this.addEmail(user.contact[0].invalidEmail);
                break;
            case 'email confirm':
                await this.addEmail(user.contact[0].email);
                await this.addEmailConfirm(user.contact[0].invalidEmail);
                break;
            default:
                throw new Error(`The action "${value}" is not defined.`);
        }
    }
}

export default new LiteOnboardingForeigners();
