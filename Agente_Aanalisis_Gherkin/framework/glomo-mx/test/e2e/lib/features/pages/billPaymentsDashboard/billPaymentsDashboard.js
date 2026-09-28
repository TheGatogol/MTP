import AbstractGlomoPage from '../abstract-glomo-page';
import { Commands, ScreenValidationKeyNotFound, page } from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page('billPaymentsDashboard')
class BillPaymentsDashboard extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-billPaymentsDashboard[state="active"]',
            elements: {

                inputAmount: 'bbva-feature-bill-payments-amount bbva-form-input input',
                summaryAllSteps: {
                    properties: { root: 'bbva-expandable-multistep div.panel-summary '},
                    buttonContinueSummary: 'div.button-continue [data-tag-name=bbva-button-default]',
                },
                modalErrorTaxes: {
                    properties: { root: '[data-tag-name=bbva-help-modal]#captureLineError '},
                },
                idServiceSuccess: '#agreementTicket',
                referenceServiceSuccess: '#referenceTicket',
                operationTypeSuccess: '#operationTypeTicket',
                originServiceSuccess: '#originTicket',
                conceptServiceSuccess: '#conceptTicket',
                cieServiceSuccess: '#cieTicket',
                folioServiceSuccess: '#numFolioTicket',
                numberOperationsSuccess: '#operationNumberTicket',
                buttonSaveServiceSuccess: '[data-tag-name="bbva-button-default"]#modalHelp',
                paymentsToastTicket: '[data-tag-name="bbva-notification-toast"]',

                modalErrorEmail: [
                    BbvaHelpModal,
                    {
                        modifiers: '#noEmailSipareError',
                        additionalElements:
                        {
                            titleModal:'div.modal-title [data-tag-name="bbva-type-text"]',
                            descriptionModal: 'div#helpModalContent',
                        }
                    }
                ],

                modalErrorCaptureLine: [
                    BbvaHelpModal,
                    {
                        modifiers: '#captureLineSipareError',
                        additionalElements:
                        {
                            titleModal: 'div.modal-title [data-tag-name="bbva-type-text"]',
                            descriptionModal: 'div#helpModalContent',
                        }
                    }
                ],

                modalErrorDeadLine: [
                    BbvaHelpModal,
                    {
                        modifiers: '#dateExpiredSipareError',
                        additionalElements:
                        {
                            titleModal: 'div.modal-title [data-tag-name="bbva-type-text"]',
                            descriptionModal: 'div#helpModalContent',
                        }
                    }
                ],

                modalErrorPeriodInvalid: [
                    BbvaHelpModal,
                    {
                        modifiers: '#dateExpiredSipareSecondError',
                        additionalElements:
                        {
                            titleModal: 'div.modal-title [data-tag-name="bbva-type-text"]',
                            descriptionModal: 'div#helpModalContent',
                        }
                    }
                ],

                modalErrorOutOfTime: [
                    BbvaHelpModal,
                    {
                        modifiers: '#outOfTimeSipareError',
                        additionalElements:
                        {
                            titleModal: 'div.modal-title [data-tag-name="bbva-type-text"]',
                            descriptionModal: 'div#helpModalContent',
                        }
                    }
                ],

                modalErrorIsPay: [
                    BbvaHelpModal,
                    {
                        modifiers: '#dashboardErrorSipare',
                        additionalElements:
                        {
                            titleModal: 'div.modal-title [data-tag-name="bbva-type-text"]',
                            descriptionModal: 'div#helpModalContent',
                        }
                    }
                ],

                captureLineModal: {
                    properties: {root: '[data-tag-name="bbva-help-modal"]#modalServiceDetail '},
                    textAddCaptureLine: '[data-tag-name="bbva-form-input"] div.label-out [data-tag-name="bbva-type-text"]',
                    buttonMoreInformation: '[data-tag-name="bbva-form-input"] div.label-out [data-tag-name="bbva-button-default"]',
                    textInfoValidCharacters: '[data-tag-name="bbva-form-input"] [data-tag-name="bbva-notification-help"] [data-tag-name="bbva-type-text"]'
                },

                stepsSummaryAmountStep: {
                    properties: {root: 'bbva-expandable-step#selectAmountStep '},
                    labelStepTwo: 'div.header',
                    textDetailImportTwo: '#headingLabel',
                    labelDetailAmountTwo: 'div.import-title [data-tag-name="bbva-type-amount"]',
                    buttonDetailAmountTwo: 'bbva-feature-bill-payments-amount bbva-button-default#bntDefault',
                },

                stepsSummaryOriginStep: {
                    properties: {root: 'bbva-expandable-step#selectOriginStep '},
                    labelStepThree: 'div.header',
                    textDetailPaymentMethod: 'div.content bbva-feature-bill-payments-origin [data-tag-name="bbva-text"]:nth-child(1):not(.text-account):not(.text):not(.content-account-title):not(.text-wrapper)'
                },
                acceptButtonOnboarding: '[data-tag-name="bbva-help-onboarding"] div.footer [data-tag-name="bbva-button-default"]',

                headerMain: {
                    properties: { root: '[data-tag-name="bbva-bill-payments-multi-step"]#multistepBillPayments '},
                    header: '[data-tag-name="bbva-header-main"]#headerMultistep',
                    titleHeader: '[data-tag-name="bbva-header-main"]#headerMultistep div#heading',
                    exitButtonHeader: '[data-tag-name="bbva-header-main"]#headerMultistep div.right-group button#btn-close'
                },
                selectServiceStep: {
                    properties: { root: 'bbva-feature-bill-payments-select-service '},
                    buttonPayNewService: 'bbva-type-link#btnPayNew',
                    titleSavedServices: 'div.content-link bbva-type-text.bbva-text-stored-title',
                    titleLinkViewAll : 'div.content-link bbva-type-link#linkAllSaved',
                    selectServicesSaved: '.content-result .content-clip-list',
                },
                containerMultistep: 'bbva-expandable-multistep#billPaymentsMultistep',
                expandableStepSelectService: {
                    properties: { root: 'bbva-expandable-step#selectServiceStep '},
                    titleStepOne: 'div.header.header-ellipsis',
                    titleStepOneSummary: 'div.header.header-ellipsis bbva-core-heading#heading',
                    editLinkStepOneSummary: 'div.header [data-tag-name="bbva-type-link"]'
                },
                changeBtnSelectedService: '#selectServiceStep .content bbva-feature-bill-payments-select-service #linkDetail',
                continueBtnSelectedService: '#selectServiceStep .content bbva-feature-bill-payments-select-service #buttonDetail',

                modalSearchNewService: {
                    properties: { root: 'bbva-help-modal#modalServiceSearch '},
                    inputSearchService: 'bbva-form-input bbva-form-text input',
                    resultSearchServiceNotFound: 'div.panel-info',
                    alertCharacterInvalid: 'bbva-form-input.input-search [data-tag-name="bbva-notification-help"].message-error',
                    serviceNotFoundTexts: 'div.content-result-search div.panel-info [data-tag-name="bbva-type-text"]',
                    resultSearchService : 'div.content-clip-list',
                },
                modalServiceDetail: {
                    properties: { root: 'bbva-help-modal#modalServiceDetail '},
                    buttonExitServiceDetail: 'div.modal-header button#btn-close',
                    inputReference: 'bbva-form-input#referenceService input',
                    buttonContinueServiceDetail: 'div.button-continue-modal-detail bbva-button-default',
                    titleLinkChooseAnotherService: 'div.main div.button-continue-modal-detail [data-tag-name="bbva-type-link"]',
                },
                cameraButtonIcon: 'bbva-form-input#referenceService div.wrapper bbva-button-default.action [data-tag-name="bbva-type-icon"]',
                cameraButton: 'bbva-form-input#referenceService div.wrapper bbva-button-default.action',
                serviceDetailInformationIcon: 'bbva-form-input#referenceService [data-tag-name="bbva-form-attach"] div.label-out [data-tag-name="bbva-type-icon"]',
                modalInformationReference: {
                    properties: { root: 'bbva-help-modal#modalServiceMoreInformation '},
                    btnAcceptModalReference: 'div.modal-footer bbva-button-default',
                    btnHeaderCloseModalMoreInformation: 'div.right-group button#btn-close',
                },

                selectAmountStep: {
                    properties: { root: 'bbva-expandable-step#selectAmountStep '},
                    continueButtonStepTwo: 'bbva-feature-bill-payments-amount bbva-button-default#bntDefault',
                    titleStepTwoSummary: 'div.header.header-ellipsis bbva-core-heading#heading',
                    editLinkStepTwoSummary: 'div.header [data-tag-name="bbva-type-link"]',
                },
                expandableStepSelectOrigin: {
                    properties: { root: 'bbva-expandable-step#selectOriginStep '},
                    titleStepThree: 'div.header',
                    titleStepThreeSummary: 'div.header.header-ellipsis bbva-core-heading#heading',
                    editLinkStepThreeSummary: 'div.header [data-tag-name="bbva-type-link"]',
                },

                selectOriginStep: {
                    properties: { root: 'bbva-feature-bill-payments-origin '},
                    resultAccountsOriginSipare: 'bill-payments-origin-accounts#listAccountsPrimary #listAccount0',
                    resultAccountsOrigin: 'bill-payments-origin-accounts#listAccountsPrimary #listAccount1',
                    resultAccountsOriginTaxe: 'bill-payments-origin-accounts#listAccountsAll #listAccount1',
                    btnModalAllAccount: 'div.content-link-account [data-tag-name="bbva-type-link"]#finalAccounts',
                    resultTdcOrigin: '#listCardsTab #listCards0 .card-main-container .header-card [data-tag-name="bbva-type-text"]',
                },

                expandableStepPaymentOption: {
                    properties: { root: 'bbva-expandable-step#selectMethodStep' },
                    titleStepFive: 'div.header',
                    editLinkStepFiveSummary: 'div.header [data-tag-name="bbva-type-link"]',
                },

                selectPaymentOptionStep: {
                    properties: { root: '#selectMethodStep .content bbva-feature-bill-payments-method ' },
                    singlePaymentOption: '#radioButtonSinglePayment',
                    msiPaymentOption: '#radioButtonMsi',
                    pointsPaymentOption: '#radioButtonPoints',
                    chooseMonthsSelect: '#birthPlaceSelect',
                    chooseMonthsSelection: '#birthPlaceSelect bbva-form-option[value="__ID__"]',
                    continueButton: '#bntDefault'
                },

                modalAllAccount: {
                    properties: { root: '#modalAllAccount '},
                    titleModalAllAccount: '#helpModalHeader #text',
                    closeButtonModalAllAccount: 'button#btn-close',
                    listAccounts: {
                        properties: { root: '#listAccount0 '},
                        amountLabelModalAllAccount: '[data-tag-name="bbva-type-amount"]',
                        nameAccountModalAllAccount: '[data-tag-name="bbva-type-text"]',
                        numberAccountModalAllAccount: '.num-account',
                    },
                },
                expandableStepConcept: {
                    properties: { root: 'bbva-expandable-step#selectConcepStep' },
                    titleStepSix: 'div.header',
                    editLinkStepSixSummary: 'div.header [data-tag-name="bbva-type-link"]',
                },
                selectConceptStep: {
                    properties: { root: 'bbva-feature-bill-payments-concept '},
                    inputConcept: 'div.content bbva-form-input bbva-form-text input',
                    continueButtonStepFour: 'div.button-continue [data-tag-name="bbva-button-default"]',
                },
                modalClose: 'bbva-help-modal#exitProcess',
                modalSaveButton: 'bbva-help-modal#modalSaveServiceOnSuccessfull #modalHelp',
                inputModalSaveService: 'bbva-help-modal#modalSaveServiceOnSuccessfull #aliasServices bbva-form-text input',
                modalErrorDuplicateAlias: '[data-tag-name="bbva-modal-error-bill-payments"] bbva-help-modal#duplicateAliasError',
                continueButtonModalExit: 'bbva-help-modal#exitProcess .modal-footer [variant="link"]',
                exitButtonModal: 'bbva-help-modal#exitProcess .modal-footer bbva-button-default:not([variant="link"])',
                modalSaveService: {
                    properties: {root: 'bbva-help-modal#modalSaveServiceOnSuccessfull'},
                    inputAliasService: '#aliasService [data-tag-name="bbva-form-text"] input',
                    buttonSaveAlias: '.button-save-favourite [data-tag-name="bbva-button-default"]',
                },
                paymentsTicket:{
                    properties: { root: '[data-tag-name="bbva-feature-bill-payments-ticket"] '},
                    headerSuccess: '[data-tag-name="bbva-header-main"]#headerMultistep',
                    titleHeaderSuccess: '[data-tag-name="bbva-header-main"]#headerMultistep div#heading',
                    dateSuccess: 'div.detail-ticket-container div.fields-ticket div#operationDateTicket bbva-type-text',
                    amountSuccess: '.distance-operation [data-tag-name="bbva-type-amount"]',
                    buttonShareSuccess: '[data-tag-name="bbva-button-row"] span.list-item:first-of-type bbva-button-action',
                    buttonSaveSuccess: '[data-tag-name="bbva-button-row"] span.list-item:last-of-type bbva-button-action',
                    successfulOperationHeader : '[data-tag-name="bbva-header-main"]#headerMultistep ',
                    successfulOperationTitleHeader: '[data-tag-name="bbva-header-main"] div#heading bbva-type-text',
                    successfulExitButtonHeader: '[data-tag-name="bbva-header-main"]#headerMultistep button#btn-close',
                    operationSuccess: 'div.distance-operation div.icon-panel-process',
                    commissionFree: 'div.distance-operation [data-tag-name="bbva-type-text"].comission'
                },
                titleServiceSuccess: 'div.fields-ticket div#serviceTicket [data-tag-name="bbva-type-text"]',
                editAliasServiceSuccess: {
                    properties: { root: 'bbva-help-modal#modalSaveServiceOnSuccessfull'},
                    inputAliasServiceSuccess: '#aliasServices [data-tag-name="bbva-form-text"] input',
                    buttonSaveService: '.modal-footer bbva-button-default:not([variant="link"])'
                },
                paymentInProcessModal: {
                    properties: { root: '[data-tag-name="bbva-feature-bill-payments-ticket"] '},
                    headerPaymentInProcess: '#headerMultistep #btn-close',
                    schedulePaymentPaymentInProcess: '[data-tag-name="bbva-button-row"] #buttons span.text',
                },
                modalReferenceExpired: {
                    properties: { root: '[data-tag-name="bbva-help-modal"]#expiringReferenceModal' },
                    headerExit: '.modal-header [data-tag-name="bbva-header-main"]#helpModalHeader .button-1 #btn-close',
                    buttonExit: '.modal-main .modal-footer [data-tag-name="bbva-button-default"]',
                }
            },
            requiredElements: ['root']
        });
    }

    async exitFromModalPaymentInProcess() {
        await this.paymentInProcessModal.headerPaymentInProcess.waitForDisplayed({ timeout: config.wait.M });
        await this.paymentInProcessModal.headerPaymentInProcess.click();
    }

    async returnToAccount(exitType) {
        if(exitType === 'expFtr') {
            await this.modalReferenceExpired.buttonExit.waitForDisplayed({timeout: config.wait.M});
            await this.modalReferenceExpired.buttonExit.click();
        } else if (exitType === 'expHdr'){
            await this.modalReferenceExpired.headerExit.waitForDisplayed({timeout: config.wait.M});
            await this.modalReferenceExpired.headerExit.click();
        } else if (exitType === 'btnClose') {
            await this.exitFromModalPaymentInProcess();
        }
    }

    async makePaymentsFromServicesSaved(referenceParam) {
        await this.selectServicesSave();
        await this.fillReference(referenceParam);
        await this.acceptServiceDetailModal();
        await this.setAmount('338');
        await this.setOrigin();
        await this.aceptConcept();
    }

    async selectServicesSave() {
        await (await (await this.selectServiceStep.selectServicesSaved.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async aceptConcept() {
        await (await this.containerMultistep.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M});
        await (await (await this.selectConceptStep.continueButtonStepFour.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
        await this.fillOtp('11111111');
    }

    async exitReferenceExpired() {
        await this.summaryAllSteps.buttonContinueSummary.waitForAnimation({timeout: config.wait.M});
        await (await (await this.summaryAllSteps.buttonContinueSummary.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
    }

    async makeSchedulePayment() {
        await this.paymentInProcessModal.headerPaymentInProcess.waitForDisplayed({ timeout: config.wait.M });
        await this.waitForElementsExist(this.paymentInProcessModal.schedulePaymentPaymentInProcess);
        await (await (await this.paymentInProcessModal.schedulePaymentPaymentInProcess.elements()).value[1]
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async selectAcceptOnboarding() {
        await (await (await this.acceptButtonOnboarding.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
    }

    async selectNewService() {
        await this.selectServiceStep.buttonPayNewService.waitForExist({timeout: config.wait.L});
        await (await (await this.selectServiceStep.buttonPayNewService.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
    }

    async selectViewAll() {
        await this.selectServiceStep.titleLinkViewAll.waitForExist({timeout: config.wait.M});
        await (await (await this.selectServiceStep.titleLinkViewAll.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
    }

    async searchAndSelectService(service) {
        await (await (await this.modalSearchNewService.inputSearchService.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M, interval: 300}))
            .setValue({value: service});
        await (await this.modalSearchNewService.resultSearchService.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async fillReference(reference) {
        await this.modalServiceDetail.__root.waitForAnimation({timeout: config.wait.M});
        await this.modalServiceDetail.inputReference.waitForDisplayed({timeout: config.wait.M});
        await this.modalServiceDetail.inputReference.setValue({value: reference});
    }

    async acceptServiceDetailModal() {
        await (await (await this.modalServiceDetail.buttonContinueServiceDetail.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async setAmount(amount) {
        await this.containerMultistep.waitForAnimation({timeout: config.wait.M});
        await (await (await this.inputAmount.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .setValue({value: amount});
        await (await (await this.selectAmountStep.continueButtonStepTwo.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async setOrigin(isTdc = false) {
        if (isTdc) {
            await this.selectOriginStep.resultTdcOrigin.waitForAnimation({timeout: config.wait.M});
            await this.selectOriginStep.resultTdcOrigin.waitForDisplayed({timeout: config.wait.M});
            await this.selectOriginStep.resultTdcOrigin.click();
        } else {
            await (await (await this.selectOriginStep.resultAccountsOrigin.waitForAnimation({timeout: config.wait.M}))
                .waitForDisplayed({timeout: config.wait.M}))
                .click();
        }
    }

    async setConcept(concept) {
        await this.containerMultistep.waitForAnimation({timeout: config.wait.M});
        await (await (await this.selectConceptStep.inputConcept.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .setValue({value: concept});
        await (await (await this.selectConceptStep.continueButtonStepFour.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
        await this.fillOtp('11111111');
    }

    async selectServiceWithReference({serviceParam, referenceParam}) {
        await this.waitUntilSpinnerVeil();
        await this.selectServiceSearch(serviceParam);
        await this.fillReference(referenceParam);
    }

    async continueConcept() {
        await this.containerMultistep.waitForAnimation({timeout: config.wait.M});
        await (await (await this.selectConceptStep.continueButtonStepFour.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
        await this.fillOtp('11111111');
    }

    async makePayment({serviceParam, referenceParam, conceptParam}) {
        await this.summaryAllStep({serviceParam, referenceParam, conceptParam});
        await this.confirmSummaryPayment(true);
    }

    async cancelServiceDetail() {
        await (await (await this.modalServiceDetail.buttonExitServiceDetail.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async selectServiceUpToConcept({serviceParam, referenceParam}) {
        await this.makePaymentTax({
            serviceParam,
            referenceParam,
            amountParam: '338'
        });
        await this.setOrigin();
    }

    async exitFlowOperation() {
        await this.cancelPayment();
        await this.continueModalExit(true);
    }

    async doNotAbandonOperation() {
        await this.cancelPayment();
        await this.continueModalExit();
    }

    async editStep(step, {serviceParam, referenceParam}) {
        switch (step.toLowerCase()) {
            case 'first':
                await this.changeSelectedService(false);
                await this.selectNewService();
                await this.searchAndSelectService(serviceParam);
                await this.fillReference(referenceParam);
                await this.acceptServiceDetailModal();
                await this.containerMultistep.waitForAnimation({timeout: config.wait.M});
                break;
            case 'second':
                await this.changeAmount(false);
                break;
            case 'third':
                await this.changeOrigin();
                break;
            case 'fourth':
                await this.setOnlyConcept('myConcept');
                break;
            case 'only service':
                await this.changeSelectedService(false);
                break;
            default:
                throw new Error(`Step: ${step} not found`);
        }
    }

    async changePaymentOption() {
        await this.expandableStepPaymentOption.editLinkStepFiveSummary.waitForAnimation({timeout: config.wait.M});
        await this.waitForElementsExist(this.expandableStepPaymentOption.editLinkStepFiveSummary);
        const elements = await this.expandableStepPaymentOption.editLinkStepFiveSummary.elements();
        const editLink = elements.value[0];
        await editLink.waitForDisplayed({timeout: config.wait.M});
        await editLink.click();
    }

    async changeSelectedService() {
        await this.expandableStepSelectService.editLinkStepOneSummary.waitForAnimation({timeout: config.wait.M});
        await this.waitForElementsExist(this.expandableStepSelectService.editLinkStepOneSummary);
        const elements = await this.expandableStepSelectService.editLinkStepOneSummary.elements();
        const editLink = elements.value[0];
        await editLink.waitForDisplayed({timeout: config.wait.M});
        await editLink.click();
    }

    async selectContinueService(selectOtherService) {
        if (selectOtherService) {
            await (await (await this.changeBtnSelectedService.waitForAnimation({timeout: config.wait.M}))
                .waitForDisplayed({timeout: config.wait.M}))
                .click();
        } else {
            await (await (await this.continueBtnSelectedService.waitForAnimation({timeout: config.wait.M}))
                .waitForDisplayed({timeout: config.wait.M}))
                .click();
        }
    }

    async changeOptionFromOrigin(serviceParam, referenceParam, step) {
        await this.makePaymentTax({
            serviceParam,
            referenceParam,
            amountParam: '338'
        });
        switch(step.toLowerCase()) {
            case 'only service':
            case 'second':
                await this.editStep(step, { serviceParam: '', referenceParam: '' });
                break;
            default:
                throw new Error(`Payment option: ${step} not found`);
        }
    }

    async changeSelectedServiceFromSummary({serviceParam, referenceParam}) {
        await this.selectServiceUpToConcept({serviceParam, referenceParam});
        await this.changeSelectedService(true);
    }

    async selectAllAccounts({serviceParam, referenceParam}) {
        await this.makePaymentTax({
            serviceParam,
            referenceParam,
            amountParam: '338'
        });
        await this.viewAllAccounts();
    }

    async informationScreen(close) {
        await (await (await this.serviceDetailInformationIcon.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();

        await this.modalInformationReference.__root.waitForAnimation({timeout: config.wait.M});
        if (close) {
            await (await this.modalInformationReference.btnHeaderCloseModalMoreInformation.waitForDisplayed({timeout: config.wait.M}))
                .click();
        } else {
            await (await this.modalInformationReference.btnAcceptModalReference.waitForDisplayed({timeout: config.wait.M}))
                .click();
        }
    }

    async summaryAllStep({serviceParam, referenceParam, conceptParam}) {
        const isOriginTdc = serviceParam.toLowerCase() === 'cdmx';
        await this.makePaymentTax({
            serviceParam,
            referenceParam,
            amountParam: '338'
        });
        await this.setOrigin(isOriginTdc);
        if (isOriginTdc) {
            await this.selectPaymentOption('single payment', true);
            await this.continueConcept();
        } else {
            await this.setConcept(conceptParam);
        }
    }

    async showDetailModal() {
        await this.selectServiceSearch('cdmx');
        await (await this.captureLineModal.buttonMoreInformation.waitForDisplayed({timeout: config.wait.M}))
            .click();

    }

    async selectServiceSearch(service) {
        await this.selectNewService();
        await this.searchAndSelectService(service);
    }

    async showNativeQrReader(service) {
        await this.selectServiceSearch(service);
        await (await this.cameraButton.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async saveNewService() {
        await this.summaryAllStep({serviceParam: 'qualitas', referenceParam: '123456', conceptParam: 'myConcept'});
        await this.confirmSummaryPayment(true);
        await this.saveService();
    }

    async sharedService() {
        await (await (await this.paymentsTicket.buttonShareSuccess.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async butonRowSaveService() {
        await (await (await this.paymentsTicket.buttonSaveSuccess.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async saveServiceModal(click = false, input = null, showModalError = false) {
        await this.inputModalSaveService.waitForExist({ timeout: config.wait.M });
        if (input) {
            await this.inputModalSaveService.scrollIntoView();
            await this.inputModalSaveService.waitForDisplayed({ timeout: config.wait.M });
            await this.inputModalSaveService.setValue({value: 'Hogar', forceFocus: false, slow: true});
        }
        if (click) {
            await (await (await this.modalSaveButton.waitForAnimation({timeout: config.wait.M}))
                .waitForDisplayed({timeout: config.wait.M}))
                .click();
            if(showModalError) await this.modalErrorDuplicateAlias.waitForExist({timeout: config.wait.M});
        }
    }

    async retrySaveService(alias) {
        await this.modalSaveService.__root.waitForAnimation({timeout: config.wait.M});
        await this.modalSaveService.inputAliasService.waitForDisplayed({timeout: config.wait.M});
        await this.modalSaveService.inputAliasService.setValue({value: alias});

        await (await (await this.modalSaveService.buttonSaveAlias.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async saveService() {
        await (await (await this.paymentsTicket.buttonSaveSuccess.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
        await (await (await this.editAliasServiceSuccess.inputAliasServiceSuccess.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M, interval: 300}))
            .click();
        await Commands.keys('newService');
        await (await (await this.buttonSaveServiceSuccess.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async searchService(service) {
        await (await (await this.modalSearchNewService.inputSearchService.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .setValue({value: service});
    }

    async changeAmount(continueBtn = true ) {
        await this.waitForElementsExist(this.selectAmountStep.editLinkStepTwoSummary);
        const elements = await this.selectAmountStep.editLinkStepTwoSummary.elements();
        const editLink = elements.value[0];
        await editLink.waitForDisplayed({timeout: config.wait.M});
        await editLink.click();
        if (continueBtn) {
            await (await this.selectAmountStep.continueButtonStepTwo.waitForDisplayed({timeout: config.wait.M}))
                .click();
        }
    }

    async changeOrigin() {
        await this.expandableStepSelectOrigin.editLinkStepThreeSummary.waitForAnimation({timeout: config.wait.M});
        await this.waitForElementsExist(this.expandableStepSelectOrigin.editLinkStepThreeSummary);
        const elements = await this.expandableStepSelectOrigin.editLinkStepThreeSummary.elements();
        const editLink = elements.value[0];
        await editLink.waitForDisplayed({timeout: config.wait.M});
        await editLink.click();
        await this.setOrigin();
    }

    async informationScreenModal({serviceParam, referenceParam}) {
        await this.selectServiceWithReference({serviceParam, referenceParam});
        await (await (await this.serviceDetailInformationIcon.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async viewAllAccounts() {
        await (await (await this.selectOriginStep.btnModalAllAccount.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async setOnlyConcept(concept) {
        await (await this.containerMultistep.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M});
        await (await this.selectConceptStep.inputConcept.waitForDisplayed({timeout: config.wait.M}))
            .setValue({value: concept});
    }

    async confirmSummaryPayment() {
        await (await (await this.summaryAllSteps.buttonContinueSummary.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M, interval: 300}))
            .click();
        await this.fillOtp('11111111');
    }

    async schedulePaymentsOption() {
        await (await (await this.paymentsTicket.buttonSaveSuccess.waitForAnimation({timeout: config.wait.L}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async cancelPayment() {
        await (await (await this.headerMain.exitButtonHeader.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async continueModalExit(exitFlow = false) {
        await this.modalClose.waitForAnimation({ timeout: config.wait.M });
        await this.modalClose.waitForDisplayed({ timeout: config.wait.M });

        const button = exitFlow
            ? this.exitButtonModal
            : this.continueButtonModalExit;

        await (await button.waitForDisplayed({ timeout: config.wait.M }))
            .click();
    }

    async selectOtpFromNewPayment({serviceParam, referenceParam, conceptParam}) {
        await this.summaryAllStep({serviceParam, referenceParam, conceptParam});
        await this.confirmSummaryPayment(false);
    }

    async makePaymentTax({serviceParam, referenceParam, amountParam}) {
        await this.selectServiceSearch(serviceParam);
        await this.fillReference(referenceParam);
        await this.acceptServiceDetailModal();
        await this.setAmount(amountParam);
    }

    async completedPayTax() {
        await this.setOriginTax();
        await this.continueConcept();
        await this.confirmSummaryPayment(true);
    }

    async setOriginTax() {
        await (await (await this.selectOriginStep.resultAccountsOriginTaxe.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async searchServicesList(service) {
        await (await (await this.selectServiceStep.buttonPayNewService.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
        await this.modalSearchNewService.__root.waitForDisplayed({timeout: config.wait.M});
        await this.modalSearchNewService.__root.waitForAnimation({timeout: config.wait.M});
        await (await (await this.modalSearchNewService.inputSearchService.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M, interval: 300}))
            .setValue({value: service});
        await (await (await this.modalSearchNewService.resultSearchService.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click({useActions: true});
    }

    async searchWrongServicesList(service) {
        await (await (await this.selectServiceStep.buttonPayNewService.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
        await this.modalSearchNewService.__root.waitForDisplayed({timeout: config.wait.M});
        await this.modalSearchNewService.__root.waitForAnimation({timeout: config.wait.M});
        await (await (await this.modalSearchNewService.inputSearchService.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M, interval: 300}))
            .setValue({value: service});
        await (await (await this.modalSearchNewService.resultSearchServiceNotFound.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}));
    }

    async confirmDetailStep() {
        await this.modalServiceDetail.__root.waitForAnimation({timeout: config.wait.M});
        await (await this.modalServiceDetail.buttonContinueServiceDetail.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async addCaptureLine(service, reference){
        await this.searchServicesList(service);
        await (await (await this.modalServiceDetail.inputReference.waitForDisplayed({timeout: config.wait.L}))
            .waitForAnimation({timeout: config.wait.L}))
            .setValue({value: reference});
    }

    async makePaymentSipare(){
        await this.confirmDetailStep();
        await this.fillOtp('11111111');
    }

    async makePaymentSipareComplete(){
        await this.confirmDetailStep();
        await this.fillOtp('11111111');
        await this.paymentSummaryAllStep();
    }

    async paymentSummaryAllStep() {
        await this.confirmAmount();
        await (await (await this.selectOriginStep.resultAccountsOriginSipare.waitForDisplayed({timeout: config.wait.L}))
            .waitForAnimation({timeout: config.wait.L}))
            .click();
        await this.setConcept('');
        await this.confirmSummaryPayment(true);
    }

    async confirmAmount() {
        await (await (await this.selectAmountStep.continueButtonStepTwo.waitForDisplayed({timeout: config.wait.L}))
            .waitForAnimation({timeout: config.wait.L}))
            .click();
    }

    async selectPaymentOption(option, continues) {
        switch(option.toLowerCase()) {
            case 'single payment':
                await this.selectPaymentOptionStep.singlePaymentOption.waitForDisplayed({timeout: config.wait.M});
                await this.selectPaymentOptionStep.singlePaymentOption.click();
                break;
            case 'msi': {
                await this.selectPaymentOptionStep.msiPaymentOption.waitForDisplayed({timeout: config.wait.M});
                await this.selectPaymentOptionStep.msiPaymentOption.click();
                await this.selectPaymentOptionStep.chooseMonthsSelect.waitForDisplayed({timeout: config.wait.M});
                await this.selectPaymentOptionStep.chooseMonthsSelect.click();
                const monthsOption = await this.selectPaymentOptionStep.chooseMonthsSelection.specifySelector({placeholder: '__ID__', value: '03'});
                await monthsOption.waitForDisplayed({timeout: config.wait.M});
                await monthsOption.click();
                break;
            }
            case 'with points':
                await this.selectPaymentOptionStep.pointsPaymentOption.waitForDisplayed({timeout: config.wait.M});
                await this.selectPaymentOptionStep.pointsPaymentOption.click();
                break;
            default:
                throw new Error(`Payment option: ${option} not found`);
        }
        if (continues) {
            await this.selectPaymentOptionStep.continueButton.waitForDisplayed({timeout: config.wait.M});
            await this.selectPaymentOptionStep.continueButton.click();
        }
    }

    async makeCdmxPayment(reference, amount, paymentOption, continues = false) {
        await this.makePaymentTax({
            serviceParam: 'cdmx',
            referenceParam: reference,
            amountParam: amount
        });
        await this.setOrigin(true);
        await this.selectPaymentOption(paymentOption, true);
        await this.continueConcept();
        if (continues) {
            await this.confirmSummaryPayment();
        }
    }

    async goToPaymentOption(option, reference) {
        await this.makePaymentTax({
            serviceParam: 'cdmx',
            referenceParam: reference,
            amountParam: '760'
        });
        await this.setOrigin(true);
        await this.selectPaymentOption(option, false);
    }

    async deployEditStep(step) {
        switch(step.toLowerCase()) {
            case 'origin': {
                await this.expandableStepSelectOrigin.editLinkStepThreeSummary.waitForAnimation({timeout: config.wait.M});
                await this.waitForElementsExist(this.expandableStepSelectOrigin.editLinkStepThreeSummary);
                const elementsThreeSummary = await this.expandableStepSelectOrigin.editLinkStepThreeSummary.elements();
                const editLinkThreeSummary = elementsThreeSummary.value[0];
                await editLinkThreeSummary.waitForDisplayed({timeout: config.wait.M});
                await editLinkThreeSummary.click();
                break;
            }
            case 'payment option': {
                await this.expandableStepPaymentOption.editLinkStepFiveSummary.waitForAnimation({timeout: config.wait.M});
                await this.waitForElementsExist(this.expandableStepPaymentOption.editLinkStepFiveSummary);
                const elementsFiveSummary = await this.expandableStepPaymentOption.editLinkStepFiveSummary.elements();
                const editLinkFiveSummary = elementsFiveSummary.value[0];
                await editLinkFiveSummary.waitForDisplayed({timeout: config.wait.M});
                await editLinkFiveSummary.click();
                break;
            }
            case 'amount': {
                await this.changeAmount(false);
                break;
            }
            case 'concept': {
                await this.waitForElementsExist(this.expandableStepConcept.editLinkStepSixSummary);
                const elements = await this.expandableStepConcept.editLinkStepSixSummary.elements();
                const editLink = elements.value[0];
                await editLink.waitForDisplayed({timeout: config.wait.M});
                await editLink.click();
                break;
            }
            default:
                throw new Error(`Step: ${step} not found`);
        }
    }

    async continueSummaryAllStep({serviceParam, referenceParam, conceptParam}) {
        await this.makePaymentTax({
            serviceParam,
            referenceParam,
            amountParam: '338'
        });
        await this.setOrigin();
        await this.setConcept(conceptParam);
        await this.exitReferenceExpired();
    }

    async _screenValidation({item, visibility} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.headerMain.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title header':
                await this.headerMain.titleHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button header':
                await this.headerMain.exitButtonHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title step one':
                await this.expandableStepSelectService.titleStepOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button to pay new services':
                await this.selectServiceStep.buttonPayNewService.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title saved services':
                await this.selectServiceStep.titleSavedServices.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title link view all':
                await this.selectServiceStep.titleLinkViewAll.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text box reference':
                await this.modalServiceDetail.inputReference.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'camera button icon':
                await this.cameraButtonIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button continue service detail':
                await this.modalServiceDetail.buttonContinueServiceDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title link choose another service':
                await this.modalServiceDetail.titleLinkChooseAnotherService.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title step one summary':
                await this.waitForElementsExist(this.expandableStepSelectService.titleStepOneSummary);
                await (await this.expandableStepSelectService.titleStepOneSummary.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit link step one summary':
                await this.expandableStepSelectService.editLinkStepOneSummary.waitForAnimation({timeout: config.wait.M});
                await this.waitForElementsExist(this.expandableStepSelectService.editLinkStepOneSummary);
                await (await this.expandableStepSelectService.editLinkStepOneSummary.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title step two summary':
                await this.waitForElementsExist(this.selectAmountStep.titleStepTwoSummary);
                await (await this.selectAmountStep.titleStepTwoSummary.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit link step two summary':
                if (visibility === 'not visible') {
                    await this.selectAmountStep.editLinkStepTwoSummary.waitForDisplayed({timeout: config.wait.M, reverse: true});
                } else {
                    await this.waitForElementsExist(this.selectAmountStep.editLinkStepTwoSummary);
                    await (await this.selectAmountStep.editLinkStepTwoSummary.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'title step three summary':
                await this.waitForElementsExist(this.expandableStepSelectOrigin.titleStepThreeSummary);
                await (await this.expandableStepSelectOrigin.titleStepThreeSummary.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit link step three summary':
                if (visibility === 'not visible') {
                    await this.expandableStepSelectOrigin.editLinkStepThreeSummary.waitForDisplayed({timeout: config.wait.M, reverse: true});
                } else {
                    await this.expandableStepSelectOrigin.editLinkStepThreeSummary.waitForAnimation({timeout: config.wait.M});
                    await this.waitForElementsExist(this.expandableStepSelectOrigin.editLinkStepThreeSummary);
                    await (await this.expandableStepSelectOrigin.editLinkStepThreeSummary.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'title all accounts modal':
                await this.modalAllAccount.titleModalAllAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'label all accounts modal':
                await this.modalAllAccount.listAccounts.amountLabelModalAllAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'name account all accounts modal':
                await this.modalAllAccount.listAccounts.nameAccountModalAllAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'number account all accounts modal':
                await this.modalAllAccount.listAccounts.numberAccountModalAllAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button all accounts modal':
                await this.modalAllAccount.closeButtonModalAllAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'service detail information icon':
                await this.serviceDetailInformationIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header success':
                await this.paymentsTicket.headerSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title header success':
                await this.paymentsTicket.titleHeaderSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date success':
                await this.paymentsTicket.dateSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount success':
                await this.paymentsTicket.amountSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'name service success':
                await this.titleServiceSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'id service success':
                await this.idServiceSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'reference service success':
                await this.referenceServiceSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'type operation':
                await this.operationTypeSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'origin success':
                await this.originServiceSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'concept service success':
                await this.conceptServiceSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cie':
                await this.cieServiceSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation folio':
                await this.folioServiceSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation number':
                await this.numberOperationsSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'share':
                await this.paymentsTicket.buttonShareSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'save':
                await this.paymentsTicket.buttonSaveSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'toast saved service':
                await this.paymentsToastTicket.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation success':
                await this.paymentsTicket.operationSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'commission free':
                await this.paymentsTicket.commissionFree.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful operation header':
                await this.paymentsTicket.successfulOperationHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful operation title header':
                await this.waitForElementsExist(this.paymentsTicket.successfulOperationTitleHeader);
                await (await this.paymentsTicket.successfulOperationTitleHeader.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful exit button header':
                await this.paymentsTicket.successfulExitButtonHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal no email header':
                await this.modalErrorEmail.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal no email title':
                await this.modalErrorEmail.additionalElements.titleModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal no email description':
                await this.modalErrorEmail.additionalElements.descriptionModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal no email exit':
                await this.modalErrorEmail.iconCloseBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal no email profile':
                await this.modalErrorEmail.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal capture line error header':
                await this.modalErrorCaptureLine.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal capture line error title':
                await this.modalErrorCaptureLine.additionalElements.titleModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal capture line error description':
                await this.modalErrorCaptureLine.additionalElements.descriptionModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal deadline error header':
                await this.modalErrorDeadLine.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal deadline error title':
                await this.modalErrorDeadLine.additionalElements.titleModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal deadline error description':
                await this.modalErrorDeadLine.additionalElements.descriptionModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal period invalid error header':
                await this.modalErrorPeriodInvalid.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal period invalid title':
                await this.modalErrorPeriodInvalid.additionalElements.titleModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal period invalid description':
                await this.modalErrorPeriodInvalid.additionalElements.descriptionModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal out of time error header':
                await this.modalErrorOutOfTime.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal out of time error title':
                await this.modalErrorOutOfTime.additionalElements.titleModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal out of time error description':
                await this.modalErrorOutOfTime.additionalElements.descriptionModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal is pay error header':
                await this.modalErrorIsPay.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal is pay error title':
                await this.modalErrorIsPay.additionalElements.titleModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal is pay error description':
                await this.modalErrorIsPay.additionalElements.descriptionModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text add capture line':
                await this.captureLineModal.textAddCaptureLine.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text info valid characters':
                await this.captureLineModal.textInfoValidCharacters.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'label step two':
                await this.stepsSummaryAmountStep.labelStepTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text detail import two':
                await this.stepsSummaryAmountStep.textDetailImportTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'label detail amount two':
                await this.stepsSummaryAmountStep.labelDetailAmountTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button detail amount two':
                await this.stepsSummaryAmountStep.buttonDetailAmountTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'label step three':
                await this.stepsSummaryOriginStep.labelStepThree.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text detail payment method':
                await this.stepsSummaryOriginStep.textDetailPaymentMethod.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input search':
                await this.modalSearchNewService.inputSearchService.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'alert character invalid':
                await this.modalSearchNewService.alertCharacterInvalid.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'service not found title':
                await this.modalSearchNewService.serviceNotFoundTexts.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title header payment option step':
                await this.expandableStepPaymentOption.titleStepFive.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'single payment radio button':
                await this.selectPaymentOptionStep.singlePaymentOption.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'points payment radio button':
                await this.selectPaymentOptionStep.pointsPaymentOption.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'msi payment radio button':
                await this.selectPaymentOptionStep.msiPaymentOption.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'months without interest select':
                await this.selectPaymentOptionStep.chooseMonthsSelect.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button payment option step':
                await this.selectPaymentOptionStep.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit link step five summary':
                if (visibility === 'not visible') {
                    await this.expandableStepPaymentOption.editLinkStepFiveSummary.waitForDisplayed({timeout: config.wait.M, reverse: true});
                } else {
                    await this.expandableStepPaymentOption.editLinkStepFiveSummary.waitForAnimation({timeout: config.wait.M});
                    await this.waitForElementsExist(this.expandableStepPaymentOption.editLinkStepFiveSummary);
                    await (await this.expandableStepPaymentOption.editLinkStepFiveSummary.elements()).value[0].waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                }
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new BillPaymentsDashboard();
