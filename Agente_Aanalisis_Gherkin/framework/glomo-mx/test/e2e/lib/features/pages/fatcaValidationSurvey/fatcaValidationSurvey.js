import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page()
class FatcaValidationSurvey extends AbstractGlomoPage {
    constructor() {
        super({
            root:'#cells-template-fatcaValidationSurvey[state="active"]',
            elements: {
                multistep: {
                    properties: {root: '[data-tag-name=fatca-survey-multistep]'},
                    header: '[data-tag-name=bbva-header-main]#helpModalHeader',
                    confirmation: {
                        properties: {root: '[data-tag-name=bbva-expandable-step]#step2'},
                        isCorrectRadioButton: '[data-tag-name="bbva-form-radio-button"][name="reasonsList"] [data-tag-name="bbva-form-radio-button-input"][value="1"]',
                        otherResidenceRadioButton: '[data-tag-name="bbva-form-radio-button"][name="reasonsList"] [data-tag-name="bbva-form-radio-button-input"][value="2"]',
                        incorrectInfoRadioButton: '[data-tag-name="bbva-form-radio-button"][name="reasonsList"] [data-tag-name="bbva-form-radio-button-input"][value="3"]',
                        privacyNoticeLink: '[data-tag-name=bbva-type-link]#privacyNoticeLink',
                        continueBtnStepConfirm: '[data-tag-name=bbva-button-default]#confirmDataButton',
                        editLinkSummaryStepConfirm: '[data-tag-name=bbva-type-link]#editButton',
                    },
                    addTaxResidences: {
                        properties: {root: '[data-tag-name=bbva-expandable-step]#step3'},
                        addOtherResidenceLink: '[data-tag-name=bbva-type-link]#addResidenceLink',
                        buttonConfirmAddResidence: '[data-tag-name=bbva-button-default] [data-tag-name=bbva-type-text]',
                        iconEditResidenceLink: '[data-tag-name=bbva-type-icon]#iconEditItemResidence',
                        iconDeleteResidenceLink: '[data-tag-name=bbva-type-icon]#iconDeleteItemResidence',
                        textAddResidenceFiscal: '[data-tag-name=bbva-type-text]',
                        editLinkSummaryStepResidences: '[data-tag-name=bbva-type-link]#editButton',
                    },
                    editSummary: {
                        swornDeclarationLink: '[data-tag-name=bbva-type-link]#swornDeclarationLink',
                        confirmButtonSummary: '[data-tag-name=bbva-button-default]#buttonConfirm',
                    },
                    closeFatcaMultistep: '[data-tag-name=bbva-help-modal]#helpModal [data-tag-name=bbva-header-main]#helpModalHeader [data-id="iconsRight"]',
                },
                modals: {
                    properties: {root: '[data-tag-name=fatca-survey-half-modal] [data-tag-name=bbva-help-modal]#fatcaSurveyHalfModal'},
                    closeMediumModal: '[data-tag-name=bbva-header-main]#helpModalHeader [data-id="iconsRight"]',
                    headerMediumModal: '[data-tag-name=bbva-header-main]#helpModalHeader',
                    textModalInvalidResidence: '[data-tag-name=bbva-button-default]',
                    buttonInvalidResidenceModal: '[data-tag-name=bbva-button-default]',
                    iconWarning: '[data-tag-name=bbva-type-icon]',
                    buttonConfirmDeletedResidence: '[data-tag-name=bbva-button-default]',
                    linkCancelDeletedResidence: '[data-tag-name=bbva-header-main]#helpModalHeader [data-id="iconsRight"]',
                    buttonConfirmExitResidence: '[data-tag-name=bbva-button-default]',
                    retryBtn: '[data-tag-name=bbva-button-default]',
                },
                formCountry: {
                    properties: {root: '[data-tag-name=fatca-survey-residence-form]#fatcaTaxResidenceForm [data-tag-name=bbva-help-modal]#fatcaForm'},
                    selectCountryForm: '[data-tag-name=bbva-form-select]#formSelect button#button [data-tag-name=bbva-type-icon]',
                    residenceIdTyped: '[data-tag-name=bbva-form-input]#formInput [data-tag-name=bbva-form-text] input',
                    buttonAddLink: '[data-tag-name=bbva-button-default] [data-tag-name=bbva-type-text]',
                    textAddedResidenceMediumModal: '[data-tag-name=bbva-type-text].modal-text',
                    selectCountryFormSpecificAFG: '[data-tag-name=bbva-form-select]#formSelect [data-tag-name=bbva-form-option]#optionSelectCountryAFG',
                    selectCountryFormSpecificALB: '[data-tag-name=bbva-form-select]#formSelect [data-tag-name=bbva-form-option]#optionSelectCountryALB',
                    selectCountryFormSpecificALA: '[data-tag-name=bbva-form-select]#formSelect [data-tag-name=bbva-form-option]#optionSelectCountryALA',
                    selectCountryFormSpecificARN: '[data-tag-name=bbva-form-select]#formSelect [data-tag-name=bbva-form-option]#optionSelectCountryARN',
                },
                screenSuccess: {
                    properties: {root: '[data-tag-name=fatca-survey-success-modal] [data-tag-name=bbva-help-modal]'},
                    closeHalfModal: '[data-tag-name=bbva-header-main]#helpModalHeader [data-id="iconsRight"]',
                    headerModalSuccess: '[data-tag-name=bbva-header-main]#helpModalHeader [data-tag-name=bbva-type-text]',
                    iconSuccess: 'bbva-clip-box-item[icon-status="success"]',
                    textSuccessModal: '[data-tag-name=bbva-panel-info-spherica] [data-tag-name=bbva-type-text]',
                    notificationEmail: '.email-confirmation',
                },
                multistepSuccess: '[data-tag-name=fatca-survey-success-modal] [data-tag-name=bbva-help-modal]',
                closeFullModal: '[data-tag-name=bbva-feature-fatca-validation-survey-mx-spherica] [data-tag-name=fatca-survey-full-modal] [data-tag-name=bbva-help-modal]#fatcaSurveyFullModal [data-tag-name=bbva-header-main]#helpModalHeader [data-id="iconsRight"]',
                closeExitResidences: '[data-tag-name=bbva-help-modal]#helpModal [data-tag-name=bbva-header-main]#helpModalHeader [data-id="iconsRight"]',
            },
            requiredElements: [
                'multistep.header',
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.multistep.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm radio button':
                await this.multistep.confirmation.isCorrectRadioButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm radio button other residence':
                await this.multistep.confirmation.otherResidenceRadioButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link privacy notice survey':
                await this.multistep.confirmation.privacyNoticeLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link declaration jured':
                await this.multistep.editSummary.swornDeclarationLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close medium modal':
                await this.modals.closeMediumModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm button step residences':
                await this.multistep.confirmation.continueBtnStepConfirm.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm button summary':
                await this.multistep.editSummary.confirmButtonSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'select country form':
                await this.formCountry.selectCountryForm.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'select input':
                await this.formCountry.residenceIdTyped.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button add residence':
                await this.formCountry.buttonAddLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header invalid residence':
                await this.modals.headerMediumModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text invalid residence':
                await this.modals.textModalInvalidResidence.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button invalid residence':
                await this.modals.buttonInvalidResidenceModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon warning':
                await this.modals.iconWarning.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon delete residence':
                await this.multistep.addTaxResidences.iconDeleteResidenceLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button confirm deleted residence':
                await this.modals.buttonConfirmDeletedResidence.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link cancel deleted residence':
                await this.modals.linkCancelDeletedResidence.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link add residence fiscal':
                await this.multistep.addTaxResidences.addOtherResidenceLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button confirm add residence':
                await this.multistep.addTaxResidences.buttonConfirmAddResidence.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text add residence fiscal':
                await this.multistep.addTaxResidences.textAddResidenceFiscal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modify link summary step confirmation':
                await (await (await this.multistep.confirmation.editLinkSummaryStepConfirm.elements()).value[0].waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'modify link summary step residences':
                await (await (await this.multistep.addTaxResidences.editLinkSummaryStepResidences.elements()).value[0].waitForDisplayed({
                    timeout: config.wait.M
                }));
                break;
            case 'text added residence medium modal':
                await this.formCountry.textAddedResidenceMediumModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header modal success':
                await this.screenSuccess.headerModalSuccess.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'close modal success':
                await this.screenSuccess.closeHalfModal.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'icon success':
                await this.screenSuccess.iconSuccess.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'text success modal':
                await this.screenSuccess.textSuccessModal.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'email notification':
                await this.screenSuccess.notificationEmail.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'icon edit residence':
                await this.multistep.addTaxResidences.iconEditResidenceLink.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async optionSelectionRadioOption(action) {
        switch(action.toLowerCase()) {
            case 'correct info':
                await this.multistep.confirmation.isCorrectRadioButton.waitForDisplayed({timeout: config.wait.M});
                await this.multistep.confirmation.isCorrectRadioButton.click({useActions: true});
                break;
            case 'in other countries':
                await this.multistep.confirmation.otherResidenceRadioButton.waitForDisplayed({timeout: config.wait.M});
                await this.multistep.confirmation.otherResidenceRadioButton.waitForClickable({timeout: config.wait.M});
                await this.multistep.confirmation.otherResidenceRadioButton.click();
                break;
            case 'incorrect info':
                await this.multistep.confirmation.incorrectInfoRadioButton.waitForDisplayed({timeout: config.wait.M});
                await this.multistep.confirmation.incorrectInfoRadioButton.waitForClickable({timeout: config.wait.M});
                await this.multistep.confirmation.incorrectInfoRadioButton.click();
                break;
            default:
                throw new Error(`the ${action} is not defined`);
        }
    }

    async showModalPrivacyNotice() {
        await (await this.multistep.confirmation.privacyNoticeLink.waitForDisplayed({timeout: config.wait.M})).click({useActions: true});
        await (await this.modals.closeMediumModal.waitForDisplayed({timeout: config.wait.M})).click({useActions: true});
    }

    async showDeclareJuredModal() {
        await (await this.multistep.editSummary.swornDeclarationLink.waitForDisplayed({timeout: config.wait.M})).click({useActions: true});
        await await this.modals.closeMediumModal.scrollIntoView({block: 'end'});
        await (await this.modals.closeMediumModal.waitForDisplayed({timeout: config.wait.M})).click({useActions: true});
    }

    async showTaxResidenceInformation() {
        await this.showModalPrivacyNotice();
        await this.continueStepConfirm();
        await this.showDeclareJuredModal();
        await (await this.multistep.editSummary.confirmButtonSummary.waitForDisplayed({timeout: config.wait.M})).click({useActions: true});
        await this.setOtp();
        await (await this.screenSuccess.closeHalfModal.waitForDisplayed({timeout: config.wait.M})).click({useActions: true});
    }

    async showTaxInformationIncorrectResidence() {
        await this.continueStepConfirm();
        await this.multistepSuccess.scrollIntoView({block: 'start'});
        await (await this.closeFullModal.waitForClickable({timeout: config.wait.M})).click();
    }

    async addTaxResidence() {
        await this.continueStepConfirm();
        await this.multistep.addTaxResidences.addOtherResidenceLink.waitForDisplayed({timeout: config.wait.M});
        await (await this.multistep.addTaxResidences.addOtherResidenceLink.waitForAnimation({timeout: config.wait.M})).click({ useActions: true });
    }

    async continueStepConfirm() {
        await this.multistep.confirmation.continueBtnStepConfirm.waitForAnimation({timeout: config.wait.M, interval: 400});
        await this.multistep.confirmation.continueBtnStepConfirm.click({ useActions: true });
    }

    async enterDataIntoTheForm(taxId, country) {
        await (await this.formCountry.selectCountryForm.waitForClickable({timeout: config.wait.M})).click();
        await (await this.formCountry[`selectCountryFormSpecific${country}`].waitForClickable({timeout: config.wait.M})).click();
        await (await this.formCountry.residenceIdTyped.waitForClickable({timeout: config.wait.M})).click();
        await this.formCountry.residenceIdTyped.setValue(taxId);
    }

    async continueAddResidence() {
        await (await this.formCountry.buttonAddLink.waitForClickable({timeout: config.wait.M})).click();
        await (await this.multistep.addTaxResidences.buttonConfirmAddResidence.waitForClickable({timeout: config.wait.M})).click();
        await (await this.multistep.editSummary.confirmButtonSummary.waitForClickable({timeout: config.wait.M})).click();
        await this.setOtp();
        await (await this.screenSuccess.closeHalfModal.waitForClickable({timeout: config.wait.M})).click();
    }

    async editTaxResidence(taxId) {
        await this.continueStepConfirm();
        await this.multistep.addTaxResidences.iconEditResidenceLink.waitForDisplayed({timeout: config.wait.M});
        await (await this.multistep.addTaxResidences.iconEditResidenceLink.waitForAnimation({timeout: config.wait.M, interval: 400})).click();
        await (await this.formCountry.selectCountryForm.waitForClickable({timeout: config.wait.M})).click();
        await (await this.formCountry.selectCountryFormSpecificAFG.waitForClickable({timeout: config.wait.M})).click();
        await (await this.formCountry.residenceIdTyped.waitForDisplayed({timeout: config.wait.M})).click();
        await this.formCountry.residenceIdTyped.setValue(taxId);
    }

    async deletedTaxResidence() {
        await this.continueStepConfirm();
        await this.multistep.addTaxResidences.iconDeleteResidenceLink.waitForDisplayed({timeout: config.wait.M});
        await (await this.multistep.addTaxResidences.iconDeleteResidenceLink.waitForAnimation({timeout: config.wait.M, interval: 400})).click();
        await this.modals.buttonConfirmExitResidence.waitForDisplayed({timeout: config.wait.M});
        await (await this.modals.linkCancelDeletedResidence.waitForAnimation({timeout: config.wait.S})).click();
        await (await this.multistep.addTaxResidences.iconDeleteResidenceLink.waitForClickable({timeout: config.wait.M})).click();
        await (await this.modals.buttonConfirmDeletedResidence.waitForClickable({timeout: config.wait.M})).click();
    }

    async showTaxSummary() {
        await this.showModalPrivacyNotice();
        await this.continueStepConfirm();
        await this.showDeclareJuredModal();
    }

    async continueAddResidenceInvalid() {
        await (await this.formCountry.buttonAddLink.waitForClickable({timeout: config.wait.M})).click();
    }

    async editSummaryStepConfirmationSummary(result) {
        await this.continueStepConfirm();
        await this.multistep.confirmation.editLinkSummaryStepConfirm.scrollIntoView({block: 'start'});
        await (await (await this.multistep.confirmation.editLinkSummaryStepConfirm.elements()).value[0].waitForClickable({timeout: config.wait.M})).click();
        switch(result.toLowerCase()) {
            case 'not completed':
                await this.optionSelectionRadioOption('in other countries');
                await this.addTaxResidence();
                break;
            case 'completed':
                await this.optionSelectionRadioOption('correct info');
                await this.continueStepConfirm();
                await (await this.multistep.editSummary.confirmButtonSummary.waitForClickable({timeout: config.wait.M})).click();
                await this.setOtp();
                break;
            default:
                throw new Error(`the ${result} is not defined`);
        }

    }

    async editResidenceSummary(taxId) {
        await this.continueStepConfirm();
        await (await this.multistep.addTaxResidences.buttonConfirmAddResidence.waitForClickable({timeout: config.wait.M})).click();
        await this.multistep.addTaxResidences.editLinkSummaryStepResidences.scrollIntoView({block: 'start'});
        await (await (await this.multistep.addTaxResidences.editLinkSummaryStepResidences.elements()).value[0].waitForClickable({
            timeout: config.wait.M
        })).click();
        await  this.multistep.addTaxResidences.iconEditResidenceLink.waitForDisplayed({timeout: config.wait.M});
        await (await this.multistep.addTaxResidences.iconEditResidenceLink.waitForAnimation({timeout: config.wait.M, interval: 400})).click();
        await (await this.formCountry.residenceIdTyped.waitForClickable({timeout: config.wait.M})).click();
        await this.formCountry.residenceIdTyped.setValue(taxId);
        await (await this.formCountry.buttonAddLink.waitForClickable({timeout: config.wait.M})).click();
        await (await this.multistep.addTaxResidences.buttonConfirmAddResidence.waitForClickable({timeout: config.wait.M})).click();
        await (await this.multistep.editSummary.confirmButtonSummary.waitForClickable({timeout: config.wait.M})).click();
        await this.setOtp();
    }

    async editSummaryStepConfirmation() {
        await this.continueStepConfirm();
        await this.multistep.confirmation.editLinkSummaryStepConfirm.scrollIntoView({block: 'start'});
        await (await (await this.multistep.confirmation.editLinkSummaryStepConfirm.elements()).value[0].waitForClickable({timeout: config.wait.M})).click();
        await this.optionSelectionRadioOption('incorrect info');
        await this.showTaxInformationIncorrectResidence();
    }

    async exitProcessFlow() {
        await (await this.multistep.closeFatcaMultistep.waitForClickable({timeout: config.wait.M})).click();
    }

    async exitProcessAddResidence() {
        await this.continueStepConfirm();
        await (await this.closeExitResidences.waitForClickable({timeout: config.wait.M})).click();
        await (await this.modals.buttonConfirmExitResidence.waitForClickable({timeout: config.wait.M})).click();
    }

    async serviceFailure() {
        await this.showModalPrivacyNotice();
        await this.continueStepConfirm();
        await this.showDeclareJuredModal();
        await (await this.multistep.editSummary.confirmButtonSummary.waitForClickable({timeout: config.wait.M})).click();
        await this.setOtp();
        await (await this.modals.retryBtn.waitForClickable({timeout: config.wait.M})).click();
        await (await this.modals.retryBtn.waitForClickable({timeout: config.wait.M})).click();
        await (await this.modals.retryBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async showOtp() {
        await this.showDeclareJuredModal();
        await (await this.multistep.editSummary.confirmButtonSummary.waitForClickable({timeout: config.wait.M})).click();
        await (await this.screenSuccess.closeHalfModal.waitForClickable({timeout: config.wait.M})).click();
    }

    async setOtp() {
        await this.fillOtp('12345678');
        await this.multistepSuccess.scrollIntoView({block: 'start'});
    }

    async enterTaxResidenceWithStatus(state) {
        switch (state.toLowerCase()) {
            case 'success':
                await this.continueAddResidence();
                break;
            case 'invalid':
                await this.continueAddResidenceInvalid();
                break;
            default:
                throw new Error(`Error, invalid option ${state.toLowerCase()}.`);
        }
    }

    async enterInformationCountryInForm(type) {
        switch (type.toLowerCase()) {
            case 'country':
                await this.enterDataIntoTheForm('Q666666j', 'ALB');
                await this.continueAddResidence();
                break;
            case 'countries':
                await this.enterDataIntoTheForm('54321', 'AFG');
                await this.enterDataIntoTheForm('123452A', 'ALA');
                await this.enterDataIntoTheForm('Q666666j', 'ALB');
                await this.continueAddResidence();
                break;
            case 'residence':
                await this.enterDataIntoTheForm('99999', 'ARN');
                await this.continueAddResidenceInvalid();
                break;
            default:
                throw new Error(`Error, invalid option ${type.toLowerCase()}.`);
        }
    }
}

export default new FatcaValidationSurvey();
