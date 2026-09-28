import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page('zeroPartyData')
class ZeroPartyData extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-__cross[state="cached"] feedback-client-voice-connect-gl',
            elements: {
                welcome: {
                    properties: { root: '[name="feedback-help-modal-welcome"]'},
                    header: '#helpModalHeader',
                    microillustration: 'div[slot="slot-content"] div slot svg',
                    description: '[slot="slot-content"] [data-tag-name="bbva-type-text"]',
                    button: 'div .content [data-tag-name="bbva-button-default"]',
                    exitButton: '#helpModalHeader #btn-close',
                },
                link: '[name="feedback_zero_party-link-privacy"]',
                linkSinglePage: '[name="feedback_zero_party_bbva-link-privacy"]',
                modalResponse: {
                    properties: { root: '[data-tag-name="bbva-help-modal"][visible]'},
                    headerOtherMoment: '#helpModalHeader',
                    closeButtonOtherMoment: '#helpModalHeader #btn-close',
                    iconOtherMoment: '#helpModalTitle [data-tag-name="bbva-type-icon"]',
                    descriptionOtherMoment: '[slot="slot-content"] [data-tag-name="bbva-type-text"]',
                },
                stepOneHeader: {
                    properties: { root: '[name="feedback-help-modal-questionary"]'},
                    headerForm: '.header-main',
                    closeFormButton: '#helpModalHeader #btn-close',
                },
                stepOne: {
                    properties: { root: '[name="step-feedback-1"]'},
                    titleFormFirst: '#heading #headingLabel',
                    firstStepNumber: '#heading #currentStep',
                    radioButton: '[data-tag-name="bbva-form-control-input"][value="__OPTION__"]',
                    checkOption: '#qy5ZVZgBKLT2a8nBIMEr',
                    birthMonth: '[name="feedback-form-select-1"] #button',
                    birthMonthSelect: '[data-tag-name="bbva-form-option"][value="__MONTH__"]',
                    continueButton: '[data-tag-name="bbva-button-default"][text="Siguiente"]',
                },
                firstStep: '[name="step-feedback-1"]',
                areYouSure: {
                    properties: { root: '[data-tag-name="bbva-help-modal"][visible]'},
                    headerAreYouSure: '#helpModalHeader',
                    closeButtonAreYouSure: '#helpModalHeader #btn-close',
                    iconAreYouSure: '#helpModalTitle [data-tag-name="bbva-type-icon"]',
                    descriptionAreYouSure: '[slot="slot-content"] [data-tag-name="bbva-type-text"]',
                    exitButtonAreYouSure: '.modal-main .slot-footer [data-tag-name="bbva-button-default"]',
                    backLinkAreYouSure: '.modal-main .slot-footer [variant="link"]',
                },
                stepTwo: {
                    properties: { root: '[name="step-feedback-2"]'},
                    titleFormSecond: '#heading #headingLabel',
                    secondStepNumber: '#heading #currentStep',
                    typeOfTransport: '[name="feedback-form-select-2"] #button',
                    typeOfTransportSelect: '[data-tag-name="bbva-form-option"][value="__TRANSPORT__"]',
                    radioButtonHome: '[data-tag-name="bbva-form-control-input"][value="__HOME__"]',
                    continueButtonTwo: '[data-tag-name="bbva-button-default"][text="Siguiente"]',
                },
                secondStep: '[name="step-feedback-2"]',
                resumeHeader: {
                    properties: { root: '[data-tag-name="bbva-help-modal"][visible]'},
                    headerFormSummary: '[data-tag-name="bbva-header-main"]',
                    closeFormSummary: '[data-tag-name="bbva-header-main"] #btn-close',
                },
                changeStepOne: '#step-feedback-1 #editButton',
                changeStepTwo: '#step-feedback-2 #editButton',
                submitButton: '[data-tag-name="bbva-help-modal"] div.confirm-step [data-tag-name="bbva-button-default"]',
                formSinglePage: {
                    properties: { root: '[name="feedback-help-modal-questionary-single"]'},
                    headerForm: '#helpModalHeader',
                    closeFormButton: '#helpModalHeader #btn-close',
                    radioButton: '[data-tag-name="bbva-form-control-input"][value="__OPTION__"]',
                    checkOption: '[data-tag-name="bbva-form-control-input"][type="checkbox"][value="Nadie, solo yo"]',
                    birthMonth: '[name="feedback-form-select-1"] #button',
                    birthMonthSelect: '[data-tag-name="bbva-form-option"][value="__MONTH__"]',
                    typeOfTransport: '[name="feedback-form-select-2"] #button',
                    typeOfTransportSelect: '[data-tag-name="bbva-form-option"][value="__TRANSPORT__"]',
                    radioButtonHome: '[data-tag-name="bbva-form-control-input"][value="__HOME__"]',
                    buttonSubmit: '[name="feedback-submit-button-default"]'
                },
                thankYou: {
                    properties: { root: '[name="help-modal-thank-you"]'},
                    headerThankYou: '#helpModalHeader',
                    exitThankYou: '#helpModalHeader #btn-close',
                    microillustrationThankYou: '[slot="slot-content"] [icon-status="success"]',
                    titleThankYou: 'div bbva-type-text[text="¡Listo!"] p',
                    descriptionThankYou: 'div bbva-type-text[text="Gracias por tus respuestas."] p',
                },
                notificationToast: '#notification-success',
                answered: {
                    properties: { root: '#answered-form'},
                    headerAnswered: '#helpModalHeader',
                    exitAnswered: '#helpModalHeader #btn-close',
                    microillustrationAnswered: '#helpModalTitle slot [data-tag-name="bbva-type-icon"]',
                    titleAnswered: '#helpModalTitle #title-text',
                    descriptionAnswered: '#helpModalContent div slot div',
                },
                header: '[data-tag-name="bbva-help-modal"][visible] #helpModalHeader',
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item = {}}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.welcome.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'microillustration':
                await this.welcome.microillustration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description':
                await this.welcome.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link notice privacy':
                await this.link.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button':
                await this.welcome.button.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.welcome.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header other moment':
                await this.modalResponse.headerOtherMoment.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close other moment':
                await this.modalResponse.closeButtonOtherMoment.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon other moment':
                await this.modalResponse.iconOtherMoment.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description other moment':
                await this.modalResponse.descriptionOtherMoment.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header are you sure':
                await this.areYouSure.headerAreYouSure.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close are you sure':
                await this.areYouSure.closeButtonAreYouSure.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon are you sure':
                await this.areYouSure.iconAreYouSure.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description are you sure':
                await this.areYouSure.descriptionAreYouSure.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit are you sure':
                await this.areYouSure.exitButtonAreYouSure.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link are you sure':
                await this.areYouSure.backLinkAreYouSure.waitForDisplayed({timeout: config.wait.M});
                break;
            case  'header answered':
                await this.answered.headerAnswered.waitForDisplayed({timeout: config.wait.M});
                break;
            case  'close answered':
                await this.answered.exitAnswered.waitForDisplayed({timeout: config.wait.M});
                break;
            case  'title answered':
                await this.answered.titleAnswered.waitForDisplayed({timeout: config.wait.M});
                break;
            case  'description answered':
                await this.answered.descriptionAnswered.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async showQuestions(){
        await this.welcome.button.waitForClickable({timeout: config.wait.M});
        await this.welcome.button.click();
    }

    async exitYourLifestyle(){
        await this.welcome.exitButton.waitForClickable({timeout: config.wait.M});
        await this.welcome.exitButton.click();
    }

    async exitAboutYou(typeForm){
        switch(typeForm) {
            case 'multistep':
                await this.stepOneHeader.closeFormButton.waitForClickable({timeout: config.wait.M});
                await this.stepOneHeader.closeFormButton.click();
                break;
            case 'single':
                await this.formSinglePage.closeFormButton.waitForClickable({timeout: config.wait.M});
                await this.formSinglePage.closeFormButton.click();
                break;
            default:
                throw new Error(`The "typeForm" assertion in page: ${typeForm} is not implemented or not valid`);
        }
    }

    async fillFirstStep(){
        await this.selectMaritalStatus(global.user.dates.civilStatus);
        await this.typeOfIncome(global.user.dates.typeOfIncome);
        await this.typeOfIncome(global.user.dates.typeOfIncome2);
        await this.selectMonth(global.user.dates.Month);
        await this.stepOne.continueButton.scrollIntoView();
        await this.stepOne.continueButton.waitForClickable({timeout: config.wait.M});
        await this.stepOne.continueButton.click();
    }

    async selectMaritalStatus(status, rootQuestion = 'stepOne'){
        await (await this[rootQuestion].radioButton.specifySelector({placeholder: '__OPTION__', value: status})
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async typeOfIncome(type, rootQuestion = 'stepOne'){
        await (await this[rootQuestion].checkOption.specifySelector({placeholder: '__OPTION__', value: type})
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async selectMonth(month, rootQuestion = 'stepOne'){
        await (await this[rootQuestion].birthMonth.waitForClickable({timeout: config.wait.M}))
            .click();
        await (await this[rootQuestion].birthMonthSelect.specifySelector({placeholder: '__MONTH__', value: month})
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async fillSecondStep(){
        await this.selectTransport(global.user.dates.Transport);
        await this.typeOfHome(global.user.dates.typeOfHome);
        await this.stepTwo.continueButtonTwo.scrollIntoView();
        await this.stepTwo.continueButtonTwo.waitForDisplayed({timeout: config.wait.M});
        await this.stepTwo.continueButtonTwo.click();
    }

    async selectTransport(transport, rootQuestion = 'stepTwo'){
        await this[rootQuestion].typeOfTransport.waitForDisplayed({timeout: config.wait.M});
        await (await this[rootQuestion].typeOfTransport.waitForClickable({timeout: config.wait.M}))
            .click();
        await (await this[rootQuestion].typeOfTransportSelect.specifySelector({placeholder: '__TRANSPORT__', value: transport})
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async typeOfHome(type, rootQuestion = 'stepTwo'){
        await (await this[rootQuestion].radioButtonHome.specifySelector({placeholder: '__HOME__', value: type})
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async submitForm(){
        await this.submitButton.waitForClickable({timeout: config.wait.M});
        await this.submitButton.click();
    }

    async fillSingleForm(typeForm){
        const rootQuestion = typeForm === 'SinglePage' ? 'formSinglePage' : '';
        await this.selectMaritalStatus(global.user.dates.civilStatus, rootQuestion);
        await this.typeOfIncome(global.user.dates.typeOfIncome, rootQuestion);
        await this.typeOfIncome(global.user.dates.typeOfIncome2, rootQuestion);
        await this.selectMonth(global.user.dates.Month, rootQuestion);
        await this.selectTransport(global.user.dates.Transport, rootQuestion);
        await this.typeOfHome(global.user.dates.typeOfHome, rootQuestion);
        await this.formSinglePage.buttonSubmit.waitForClickable({timeout: config.wait.M});
        await this.formSinglePage.buttonSubmit.click();
    }

    async closeSuccess({button} = {}){
        switch(button) {
            case 'multistep':
                await this.thankYou.exitThankYou.waitForClickable({timeout: config.wait.M});
                await this.thankYou.exitThankYou.click();
                break;
            case 'single':
                await this.notificationToast.waitForAttribute({attribute: 'show', reverse: true, timeout: config.wait.M});
                break;
            default:
                throw new Error(`The "button" assertion in page: ${button} is not implemented or not valid`);
        }
    }
    
    async openNoticePrivacy(type){
        switch(type) {
            case 'multistep':
                await this.link.waitForClickable({timeout: config.wait.M});
                await this.link.click();
                break;
            case 'single':
                await this.linkSinglePage.waitForClickable({timeout: config.wait.M});
                await this.linkSinglePage.click();
                break;
            default:
                throw new Error(`The "type" assertion in page: ${type} is not implemented or not valid`);
        }
    }

    async fillForms(type){
        switch(type) {
            case 'multistep':
                await this.fillFirstStep();
                await this.fillSecondStep();
                await this.submitForm();
                break;
            case 'single':
                await this.fillSingleForm(global.user.typeForm.singlePage);
                break;
            default:
                throw new Error(`The "type form" assertion in step_definition: ${type} is not valid`);
        }
    }
}

export default new ZeroPartyData();
