import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class ScheduledBillPayments extends AbstractGlomoPage {
    constructor() {
        const account = 'account-transaction-servicing-scheduled-bill-payments';
        super({
            root: '#cells-template-scheduledBillPayments[state="active"]',
            elements: {
                header: `${account}-mx [data-tag-name="account-transaction-servicing-scheduled-bill-payments-multistep"] bbva-header-main`,
                selectOriginCard: '#multiStep [opened] .product-item:nth-of-type(__ID__)',
                searchNewService: `${account}-mx #serviceSearchInput [aria-label="Buscar servicio"]`,
                serveServiceElement: '#servicesModal [data-tag-name="button-item"][id="0"]',
                anotherAccount: '[data-tag-name="button-item"][id="0"]',
                continueOperationButton: '#modalExitOperative .content .modal-main .slot-footer [data-tag-name="bbva-button-default"][variant="link"]',
                continueHelpPaymentOption: '#originInfoModal div div.content section div div.modal-main div.modal-footer slot div.slot-footer [data-tag-name="bbva-button-default"][variant="link"]',
                serviceDetail: {
                    properties: {root: '#multiStep #serviceDetailStep'},
                    referenceStep2: '#reference input[aria-label="account-transaction-servicing-scheduled-bill-payments-step-service-detail-input-label-one"]',
                    continueStep2Button: '#serviceDetailContinueButton',
                    tipsHelpSectionStep2: '[data-tag-name="bbva-notification-message"] div bbva-type-text',
                    continueButtonHelpSectionStep2: '#serviceDetailContinueButton',
                },
                ownerName: '#serviceOwner input[aria-label="account-transaction-servicing-scheduled-bill-payments-step-service-detail-input-label-two"]',
                selectOriginAccount: '#multiStep #selectOriginMultiStep #selectOriginStep [opened] .product-item:nth-of-type(__ID__)',
                servicesModal: {
                    properties: {root: '#servicesModal[data-tag-name="dynamic-content-modal"]'},
                    fastAccess: '[data-tag-name="bbva-header-category"][text="account-transaction-servicing-scheduled-bill-payments-modal-quick-access"]',
                    serviceList: '[data-tag-name="button-item"]',
                    wrongSearch: '#withoutStoredServices',
                    saveServiceList: '[data-tag-name="button-item"] [data-tag-name="bbva-type-text"] .text',
                    elementNewServiceList: '[data-tag-name="button-item"][id="0"]',
                    searchService: '#serviceSearchInput [aria-label="Buscar servicio"]',
                },
                newServiceElement: '[data-tag-name="button-item"][id="0"]',
                selectOriginMulti: {
                    properties: {root: '#selectOriginMultiStep'},
                    accountsStep2: '[data-tag-name="bbva-expandable-accordion"]:nth-of-type(1)',
                    cardsStep3: '[data-tag-name="bbva-expandable-accordion"]',
                    seeAllButtonCards: '[data-tag-name="bbva-expandable-accordion"]:nth-of-type(2) .options-right [data-tag-name="bbva-type-link"]',
                    seeAllButtonAccounts: '[data-tag-name="bbva-expandable-accordion"]:nth-of-type(1) .options-right [data-tag-name="bbva-type-link"]',
                    accountsAndCardsStep3: '[data-tag-name="bbva-expandable-accordion"]',
                },
                selectOrigin: {
                    properties: {root: '[data-tag-name="bbva-expandable-multistep"]'},
                    sufficientBalance: '#selectOriginStep [data-tag-name="bbva-type-amount"] div .amount-block .integer',
                    originTable: '#selectOriginStep',
                    helpPaymentButton: '#selectOriginStep #modalInfoButtonSelectOrigin',
                },

                periodicity: {
                    properties: {root: '#selectPeriodicityMultiStep #periodicityStep'},
                    periodicity: '#periodicitySelect',
                    periodicitySelect:'#Monthly',
                    periodicBimonthly:'#Bimonthly',
                    continueButtonPeriodicity:'#periodicityContinueButton',
                },
                multi: {
                    properties: {root: '#expandableMultistep'},
                    continueStep6: '#termsAndConditionsStep #termsAndConditionsButton',
                    summaryDeleteService: '#selectServiceStep #changeService',
                    summaryChangeService: '#selectServiceMultiStep div:nth-last-of-type(3) #editButton',
                    modifyOriginAccount: '#selectOriginMultiStep div:nth-last-of-type(3) #editButton',
                    completePay: '#buttonContinue',
                    summaryLookTermsAndConditions: '#termsAndConditionsMultiStep div:nth-last-of-type(3) #editButton',
                    summaryContinueOperationButton:'#buttonContinue',
                    changePeriodicity: '#selectPeriodicityMultiStep div:nth-last-of-type(3) #editButton',
                    changeMaxAmount: '#maximumAmountMultiStep[header="Importe máximo"] div:nth-last-of-type(3) #editButton',
                },

                serviceDetailMulti: {
                    properties: {root: '#multiStep #serviceDetailMultiStep'},
                    titleHelpSectionStep2:'#headingLabel',
                    modifyServiceDetail:'div #editButton',
                },

                maximumAmount: {
                    properties: {root: '#multiStep #maximumAmountStep'},
                    maxAmountStep3:'#amountInput [data-tag-name="bbva-form-amount"] input[aria-label*="Importe"]',
                    continueButtonStep3:'#amountContinueButton[role="button"]',
                },

                selectService: {
                    properties: {root: '#multiStep #selectServiceStep'},
                    savesServices:'#saveService',
                    newServices:'#newService',
                },

                referenceInfoModal: {
                    properties: {root: '#referenceInfoModal'},
                    closeHelpSectionReferenceStep2: ' #helpModalHeader #btn-close [data-tag-name="bbva-type-icon"]',
                    continueButtonHelpSectionReferenceStep2:'div.modal-footer div.slot-footer .footer-button',
                },

                successTicket: {
                    properties: {root: '#successTicket div'},
                    referenceSuccessful: '#referenceLabel',
                    serviceSuccessful: '#serviceLabel',
                    folioSuccessful: '#folioLabel',
                    amountSuccessful: '#maximunAmount',
                },

                modalChangeService: {
                    properties: {root: '#modalChangeService div.content div.modal-main div.modal-footer'},
                    cancelDeleteServiceSpherica: '[data-tag-name="bbva-button-default"][variant="link"]',
                    cancelDeleteService: '[data-tag-name="bbva-type-link"]',
                    confirmDeleteService:'[data-tag-name="bbva-button-default"].footer-button',
                },

                termsAndConditionsStep: {
                    properties: {root: '#termsAndConditionsStep'},
                    agreementStep6: '#agreementCheckbox',
                    authorizationStep6: '#authorizationCheckbox',
                },

                account: {
                    properties: {root: '[data-tag-name*="account-transaction-servicing-scheduled-bill-payments"] #multiStep'},
                    deleteSearch: '#selectServiceStep #serviceSearchModal #serviceSearchInput bbva-button-default-40765',
                    closeButton: '#btn-close',
                    serviceDetailContinueButton: '#serviceDetailStep #serviceDetailContinueButton',
                    numberOfCharactersReference: '#serviceDetailStep #reference [data-tag-name="bbva-notification-help"]',
                    letterSubstitution: '#serviceDetailStep #serviceOwner [data-tag-name="bbva-form-text"] [data-tag-name="bbva-notification-help"]',
                },

                summary: '#multiStep',
                helpPaymentButton:'#modalInfoButtonSelectCard',
                closeHelpPaymentButton:'#originInfoModal #helpModalHeader #btn-close [data-tag-name="bbva-type-icon"]',
                originSeeAll: '#cardsAccountsModal div div.content div.modal-main div.modal-container',
                deleteSearchButton: '#serviceSearchInput .clear',
                closeSeeAllSection: '#cardsAccountsModal #helpModalHeader header div.header-icons.right-group',
                elementNewServiceList: '#servicesModal .new-service-container',
                infoSaveService: '#selectServiceStep #serviceSearchModal #withoutStoredServices',
                summaryPeriodicity: '#selectPeriodicityMultiStep div #editButton',
                confirmExitOperation: '#modalExitOperative [data-tag-name="bbva-button-default"][text="Salir"]',
                barCodeHelpSection: '#serviceDetailStep #reference div.label-out [data-tag-name="bbva-type-icon"]',
                ownerNameHelpSection: '#serviceDetailStep #serviceOwner div.label-out [data-tag-name="bbva-type-icon"]',
                titleHelpPaymentSection: '#originInfoModal #title-text h2',
                adviceHelpOriginPayment: '[data-tag-name="bbva-help-modal"] div.main',
                closeHelpSectionOriginStep2: '#originModalInfo #helpModalHeader #btn-close [data-tag-name="bbva-type-icon"]',
                shareButton: '#shareButton #buttons span [data-tag-name="bbva-button-action"] div.icon-container [data-tag-name="bbva-type-icon"]',
            },
            requiredElements: ['header'],
        });
    }

    async continueOperation(){
        await this.continueOperationButton.waitForDisplayed({timeout: config.wait.M});
        await this.continueOperationButton.click();
    }

    async confirmExit(){
        await this.confirmExitOperation.waitForDisplayed({timeout: config.wait.M});
        await this.confirmExitOperation.click();
    }

    async cancelsDeleteServices() {
        await this.modalChangeService.cancelDeleteServiceSpherica.waitForDisplayed({timeout: config.wait.M});
        await this.modalChangeService.cancelDeleteServiceSpherica.waitForAnimation({timeout: config.wait.M});
        await this.modalChangeService.cancelDeleteServiceSpherica.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }
    async goSummaryTermsAndConditions(){
        await this.multi.summaryLookTermsAndConditions.waitForDisplayed({timeout: config.wait.M});
        await this.multi.summaryLookTermsAndConditions.waitForAnimation({timeout: config.wait.M});
        await this.multi.summaryLookTermsAndConditions.click({useActions: false, scrollOptions: {block: 'center'}});
        await this.completeOperation();
    }

    async tryDeleteService(){
        await this.multi.summaryChangeService.waitForDisplayed({timeout: config.wait.M});
        await this.multi.summaryChangeService.click({useActions: false, scrollOptions: {block: 'nearest'}});
        await this.goDeleteServiceSaved();
    }

    async goDeleteServiceSaved(){
        await this.multi.summaryDeleteService.waitForDisplayed({timeout: config.wait.M});
        await this.multi.summaryDeleteService.waitForAnimation({timeout: config.wait.M});
        await this.multi.summaryDeleteService.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async confirmDeleteServiceSaved(){
        await this.modalChangeService.confirmDeleteService.waitForDisplayed({timeout: config.wait.M});
        await this.modalChangeService.confirmDeleteService.waitForAnimation({timeout: config.wait.M});
        await this.modalChangeService.confirmDeleteService.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async goSummaryPeriodicity(){
        await this.multi.summaryLookTermsAndConditions.waitForExist({timeout: config.wait.M});
        await this.multi.summaryLookTermsAndConditions.scrollIntoView({block: 'start'});
        await this.waitForElementsExist(this.summaryPeriodicity, config.wait.M);
        await (await this.summaryPeriodicity.elements()).value[0].scrollIntoView({block: 'nearest'});
        await (await this.summaryPeriodicity.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
        await (await this.summaryPeriodicity.elements()).value[0].waitForAnimation({timeout: config.wait.M});
        await (await this.summaryPeriodicity.elements()).value[0].click({useJS: true});
        await this.periodicity.periodicity.waitForAnimation({timeout: config.wait.M});
        await this.periodicity.periodicity.waitForDisplayed({timeout: config.wait.M});
        await this.periodicity.periodicity.click();
        await this.periodicity.periodicBimonthly.waitForAnimation({timeout: config.wait.M});
        await this.periodicity.periodicBimonthly.waitForDisplayed({timeout: config.wait.M});
        await this.periodicity.periodicBimonthly.click();
        await this.continuePeriodicitySection();
    }

    async editSummaryPeriodicity(){
        await this.waitForElementsExist(this.summaryPeriodicity, config.wait.M);
        await (await this.summaryPeriodicity.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
        await (await this.summaryPeriodicity.elements()).value[0].click();
    }

    async tryModifyServiceDetail(){
        await this.waitForElementsExist(this.serviceDetailMulti.modifyServiceDetail, config.wait.M);
        await (await this.serviceDetailMulti.modifyServiceDetail.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
        await (await this.serviceDetailMulti.modifyServiceDetail.elements()).value[0].click();
        await this.ownersName();
        await this.continueStep2();
    }

    async continuePeriodicitySection(){
        await this.periodicity.continueButtonPeriodicity.waitForAnimation({timeout: config.wait.M});
        await this.periodicity.continueButtonPeriodicity.waitForDisplayed({timeout: config.wait.M});
        await this.periodicity.continueButtonPeriodicity.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async selectOriginAccounts(){
        await (await (await this.selectOriginAccount.specifySelector({placeholder: '__ID__', value: 1})
            .waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async selectOriginCards(){
        await (await (await this.selectOriginCard.specifySelector({placeholder: '__ID__', value: 1})
            .waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async selectOriginOption(option){
        switch(option.toLowerCase()){
            case 'account':
                await this.selectOriginAccounts();
                break;
            case 'card':
                await this.selectOriginCards();
                break;
            default:
                throw new Error(`${option} option select is not available`);
        }
    }

    async continuesButtonStep3(){
        await this.maximumAmount.continueButtonStep3.waitForAnimation({timeout: config.wait.M});
        await this.maximumAmount.continueButtonStep3.waitForDisplayed({timeout: config.wait.M});
        await this.maximumAmount.continueButtonStep3.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async maxAmounts(){
        await this.maximumAmount.maxAmountStep3.waitForDisplayed({timeout: config.wait.M});
        await this.maximumAmount.maxAmountStep3.waitForAnimation({timeout: config.wait.M});
        await this.maximumAmount.maxAmountStep3.setValue({value: global.user.amount, slow:true});
    }

    async savedService(){
        await this.selectService.savesServices.waitForDisplayed({timeout: config.wait.M});
        await this.selectService.savesServices.waitForAnimation({timeout: config.wait.M});
        await this.selectService.savesServices.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async newService(){
        await this.selectService.newServices.waitForDisplayed({timeout: config.wait.M});
        await this.selectService.newServices.waitForAnimation({timeout: config.wait.M});
        await this.selectService.newServices.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async elementsNewServiceList(){
        await this.servicesModal.elementNewServiceList.waitForDisplayed({timeout: config.wait.M});
        await this.servicesModal.elementNewServiceList.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async newServiceFound(){
        await this.newServiceElement.waitForDisplayed({timeout: config.wait.M});
        await this.newServiceElement.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async searchServicesThree(){
        await this.servicesModal.searchService.waitForDisplayed({timeout: config.wait.M});
        await this.servicesModal.searchService.setValue({value: global.user.threeLetters});
    }

    async searchServices(option) {
        switch(option.toLowerCase()){
            case 'three letters':
                await this.searchServicesThree();
                break;
            case 'four letters':
                await this.servicesModal.searchService.waitForDisplayed({timeout: config.wait.M});
                await this.servicesModal.searchService.setValue({value: global.user.fourLetters, slow:true});
                break;
            case 'wrong':
                await this.servicesModal.searchService.waitForDisplayed({timeout: config.wait.M});
                await this.servicesModal.searchService.setValue({value: global.user.wrong, slow:true});
                break;
            default:
                throw new Error(`${option} origin select is not available`);
        }
    }

    async searchNewServices(){
        await this.searchNewService.waitForDisplayed({timeout: config.wait.M});
        await this.searchNewService.setValue({value: global.user.service, slow:true});
    }

    async deleteServiceSearch(){
        await this.deleteSearchButton.waitForDisplayed({timeout: config.wait.M});
        await this.deleteSearchButton.click();
    }

    async completeStep(){
        await this.savedService();
        await this.elementSaveServiceList();
        await this.referencesService();
        await this.ownersName();
        await this.continueStep2();
    }

    async continueStepAnotherAccount(){
        await this.savedService();
        await this.elementSaveServiceListAnother();
        await this.referencesService();
        await this.ownersName();
    }

    async completeStepAnotherAccount(){
        await this.savedService();
        await this.elementSaveServiceListAnother();
        await this.referencesService();
        await this.ownersName();
        await this.continueStep2();
    }

    async continueStepNewService(){
        await this.newService();
        await this.searchNewServices();
        await this.newServiceFound();
    }

    async completeStepNewService(){
        await this.newService();
        await this.searchNewServices();
        await this.newServiceFound();
        await this.referencesService();
        await this.ownersName();
        await this.continueStep2();
    }

    async serviceType(option) {
        switch(option.toLowerCase()){
            case 'new':
                await this.completeStepNewService();
                break;
            case 'new and not complete':
                await this.continueStepNewService();
                break;
            case 'saved':
                await this.completeStepAnotherAccount();
                break;
            case 'saved and not complete':
                await this.continueStepAnotherAccount();
                break;
            default:
                throw new Error(`${option} origin select is not available`);
        }
    }

    async completeStepOption(option) {
        switch(option.toLowerCase()){
            case 'account':
                await this.completeStepAccountOrigin();
                break;
            case 'card':
                await this.completeStepTdcOrigin();
                break;
            default:
                throw new Error(`${option} origin select is not available`);
        }
    }

    async otherOrigin(option) {
        switch(option.toLowerCase()){
            case 'account':
                await this.selectModifyAccount();
                break;
            case 'card':
                await this.selectModifyCard();
                break;
            default:
                throw new Error(`${option} origin select is not available`);
        }
    }

    async closeOperative(option) {
        switch(option.toLowerCase()){
            case 'service payment':
                await this.closeOperation();
                break;
            case 'operation':
                await this.closeOperation();
                await this.confirmExit();
                break;
            case 'view all':
                await this.closeAllOrigin();
                break;
            default:
                throw new Error(`${option} section is not available`);
        }
    }

    async helpOption(option) {
        switch(option.toLowerCase()){
            case 'owner name':
                await this.ownerNameHelp();
                break;
            case 'barcode':
                await this.barCodeHelp();
                break;
            default:
                throw new Error(`${option} option select is not available`);
        }
    }

    async barcodeOption(option) {
        switch(option.toLowerCase()){
            case 'closes':
                await this.closeHelpSectionStep2(option);
                break;
            case 'accepts':
                await this.closeHelpSectionStep2(option);
                break;
            case 'closes barcode':
                await this.closeHelpSectionStep2(option);
                break;
            case 'accepts barcode':
                await this.closeHelpSectionStep2(option);
                break;
            default:
                throw new Error(`${option} option select is not available`);
        }
    }

    async viewAllOptions(option) {
        switch(option.toLowerCase()){
            case 'account':
                await this.seeAllSectionAccount();
                break;
            case 'cards':
                await this.goCardOption();
                await this.seeAllSectionCard();
                break;
            default:
                throw new Error(`${option} origin select is not available`);
        }
    }

    async completeStepTdcOrigin(){
        await this.savedService();
        await this.elementSaveServiceList();
        await this.referencesService();
        await this.ownersName();
        await this.continueStep2();
        await this.goCardOption();
        await this.selectOriginCards();
        await this.maxAmounts();
        await this.continuesButtonStep3();
        await this.periodicityMonth();
        await this.continuePeriodicitySection();
        await this.termsAndConditions();
        await this.completeOperation();
    }

    async completeStepAccountOrigin(){
        await this.savedService();
        await this.elementSaveServiceList();
        await this.referencesService();
        await this.ownersName();
        await this.continueStep2();
        await this.selectOriginAccounts();
        await this.maxAmounts();
        await this.continuesButtonStep3();
        await this.periodicityMonth();
        await this.continuePeriodicitySection();
        await this.termsAndConditions();
        await this.completeOperation();
    }

    async continueStep2(){
        await this.serviceDetail.continueStep2Button.waitForAnimation({timeout: config.wait.M});
        await this.serviceDetail.continueStep2Button.waitForDisplayed({timeout: config.wait.M});
        await this.serviceDetail.continueStep2Button.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async ownersName(){
        await this.ownerName.waitForDisplayed({timeout: config.wait.M});
        await this.ownerName.waitForAnimation({timeout: config.wait.M});
        await this.ownerName.click({useActions: false, scrollOptions: {block: 'nearest'}});
        await this.ownerName.setValue({value: global.user.name, slow: true});
    }

    async referencesService(){
        await this.serviceDetail.referenceStep2.waitForDisplayed({timeout: config.wait.M});
        await this.serviceDetail.referenceStep2.waitForAnimation({timeout: config.wait.M});
        await this.serviceDetail.referenceStep2.click({useActions: false, scrollOptions: {block: 'nearest'}});
        await this.serviceDetail.referenceStep2.setValue({value: global.user.reference, slow: true});
    }

    async periodicityMonth(){
        await this.periodicity.periodicity.waitForDisplayed({timeout: config.wait.M});
        await this.periodicity.periodicity.waitForAnimation({timeout: config.wait.M});
        await this.periodicity.periodicity.click({useActions: false, scrollOptions: {block: 'nearest'}});
        await this.periodicity.periodicitySelect.waitForExist({timeout: config.wait.M});
        await this.periodicity.periodicitySelect.waitForDisplayed({timeout: config.wait.M});
        await this.periodicity.periodicitySelect.waitForAnimation({timeout: config.wait.M});
        await this.periodicity.periodicitySelect.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async elementSaveServiceList(){
        await this.serveServiceElement.waitForDisplayed({timeout: config.wait.M});
        await this.serveServiceElement.waitForAnimation({timeout: config.wait.M});
        await this.serveServiceElement.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async elementSaveServiceListAnother(){
        await this.anotherAccount.waitForDisplayed({timeout: config.wait.M});
        await this.anotherAccount.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async termsAndConditions(){
        await this.termsAndConditionsStep.agreementStep6.waitForDisplayed({timeout: config.wait.M});
        await this.termsAndConditionsStep.agreementStep6.waitForAnimation({timeout: config.wait.M});
        await this.termsAndConditionsStep.agreementStep6.click();
        await this.termsAndConditionsStep.authorizationStep6.waitForAnimation({timeout: config.wait.M});
        await this.termsAndConditionsStep.authorizationStep6.waitForDisplayed({timeout: config.wait.M});
        await this.termsAndConditionsStep.authorizationStep6.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async completeOperation(){
        await this.multi.continueStep6.waitForDisplayed({timeout: config.wait.M});
        await this.multi.continueStep6.waitForAnimation({timeout: config.wait.M});
        await this.multi.continueStep6.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async goCardOption(){
        await this.waitForElementsExist(this.selectOriginMulti.cardsStep3, config.wait.M);
        await (await this.selectOriginMulti.cardsStep3.elements()).value[1].waitForDisplayed({timeout: config.wait.M});
        await (await this.selectOriginMulti.cardsStep3.elements()).value[1].waitForAnimation({timeout: config.wait.M});
        await (await this.selectOriginMulti.cardsStep3.elements()).value[1].click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async seeAllSectionCard(){
        await this.selectOriginMulti.seeAllButtonCards.waitForAnimation({timeout: config.wait.M});
        await this.selectOriginMulti.seeAllButtonCards.waitForDisplayed({timeout: config.wait.M});
        await this.selectOriginMulti.seeAllButtonCards.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async seeAllSectionAccount(){
        await this.selectOriginMulti.seeAllButtonAccounts.waitForDisplayed({timeout: config.wait.M});
        await this.selectOriginMulti.seeAllButtonAccounts.waitForAnimation({timeout: config.wait.M});
        await this.selectOriginMulti.seeAllButtonAccounts.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async closeAllOrigin(){
        await this.closeSeeAllSection.waitForDisplayed({timeout: config.wait.M});
        await this.closeSeeAllSection.click({userActions: false, scrollOptions: {block: 'nearest'}});
    }

    async recurringChargeFormat(){
        await this.selectOriginAccounts();
        await this.maxAmounts();
        await this.continuesButtonStep3();
        await this.periodicityMonth();
        await this.continuePeriodicitySection();
        await this.termsAndConditionsStep.authorizationStep6.waitForDisplayed({timeout: config.wait.M});
        await this.termsAndConditionsStep.authorizationStep6.waitForAnimation({timeout: config.wait.M});
        await this.termsAndConditionsStep.authorizationStep6.click({userActions: false, scrollOptions: {block: 'nearest'}});
        await this.termsAndConditionsStep.agreementStep6.waitForDisplayed({timeout: config.wait.M});
        await this.termsAndConditionsStep.agreementStep6.waitForAnimation({timeout: config.wait.M});
        await this.termsAndConditionsStep.agreementStep6.click({userActions: false, scrollOptions: {block: 'nearest'}});
    }

    async closeOperation(){
        await this.account.closeButton.waitForDisplayed({timeout: config.wait.M});
        await this.account.closeButton.waitForAnimation({timeout: config.wait.M});
        await this.account.closeButton.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async barCodeHelp(){
        await this.barCodeHelpSection.waitForDisplayed({timeout: config.wait.M});
        await this.barCodeHelpSection.waitForAnimation({timeout: config.wait.M});
        await this.barCodeHelpSection.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async ownerNameHelp(){
        await this.ownerNameHelpSection.waitForDisplayed({timeout: config.wait.M});
        await this.ownerNameHelpSection.waitForAnimation({timeout: config.wait.M});
        await this.ownerNameHelpSection.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async closeHelpSectionStep2(action){
        switch(action.toLowerCase()){
            case 'closes':
                await this.closeHelpSectionOriginStep2.waitForDisplayed({timeout: config.wait.M});
                await this.closeHelpSectionOriginStep2.waitForAnimation({timeout: config.wait.M});
                await this.closeHelpSectionOriginStep2.click();
                break;
            case 'accepts':
                await this.serviceDetail.continueButtonHelpSectionStep2.waitForDisplayed({timeout: config.wait.M});
                await this.serviceDetail.continueButtonHelpSectionStep2.waitForAnimation({timeout: config.wait.M});
                await this.serviceDetail.continueButtonHelpSectionStep2.click();
                break;
            case 'closes barcode':
                await this.referenceInfoModal.closeHelpSectionReferenceStep2.waitForDisplayed({timeout: config.wait.M});
                await this.referenceInfoModal.closeHelpSectionReferenceStep2.waitForAnimation({timeout: config.wait.M});
                await this.referenceInfoModal.closeHelpSectionReferenceStep2.click();
                break;
            case 'accepts barcode':
                await this.referenceInfoModal.continueButtonHelpSectionReferenceStep2.waitForDisplayed({timeout: config.wait.M});
                await this.referenceInfoModal.continueButtonHelpSectionReferenceStep2.waitForAnimation({timeout: config.wait.M});
                await this.referenceInfoModal.continueButtonHelpSectionReferenceStep2.click();
                break;
            default:
                throw new Error(`${action} option select is not available`);
        }
    }

    async helpPaymentSection(){
        await this.savedService();
        await this.elementSaveServiceList();
        await this.referencesService();
        await this.ownersName();
        await this.continueStep2();
        await this.helpPaymentButton.waitForDisplayed({timeout: config.wait.M});
        await this.helpPaymentButton.waitForAnimation({timeout: config.wait.M});
        await this.helpPaymentButton.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async helpPaymentOption(){
        await this.referencesService();
        await this.ownersName();
        await this.continueStep2();
        await this.helpPaymentButton.waitForDisplayed({timeout: config.wait.M});
        await this.helpPaymentButton.waitForAnimation({timeout: config.wait.M});
        await this.helpPaymentButton.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async continueHelpOption(){
        await this.referencesService();
        await this.ownersName();
        await this.continueStep2();
        await this.helpPaymentButton.waitForDisplayed({timeout: config.wait.M});
        await this.helpPaymentButton.waitForAnimation({timeout: config.wait.M});
        await this.helpPaymentButton.click({useActions: false, scrollOptions: {block: 'nearest'}});
        await this.closeHelpPaymentButton.waitForDisplayed({timeout: config.wait.M});
        await this.closeHelpPaymentButton.waitForAnimation({timeout: config.wait.M, interval: 400});
        await this.closeHelpPaymentButton.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async modifyAccount(){
        await this.multi.modifyOriginAccount.waitForDisplayed({timeout: config.wait.M});
        await this.multi.modifyOriginAccount.waitForAnimation({timeout: config.wait.M});
        await this.multi.modifyOriginAccount.click({useActions: false, scrollOptions: {block: 'start'}});
    }

    async selectModifyAccount(){
        await (await (await this.selectOriginAccount.specifySelector({placeholder: '__ID__', value: 1})
            .waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click({useActions: false, scrollOptions: {block: 'start'}});
    }

    async selectModifyCard(){
        await (await (await this.selectOriginCard.specifySelector({placeholder: '__ID__', value: 1})
            .waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click({useActions: false, scrollOptions: {block: 'start'}});
    }

    async completePayment(confirmWithOTP) {
        await (await (await this.multi.completePay.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
        if (confirmWithOTP) {
            await this.fillOtp('11111111');
        }
    }

    async changeAmount(){
        await this.multi.changeMaxAmount.waitForExist({timeout: config.wait.M});
        await this.multi.changeMaxAmount.scrollIntoView({block: 'nearest'});
        await this.multi.changeMaxAmount.waitForDisplayed({timeout: config.wait.M});
        await this.multi.changeMaxAmount.waitForAnimation({timeout: config.wait.M});
        await this.multi.changeMaxAmount.click({useJS: true});
    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'reference':
                await this.serviceDetail.referenceStep2.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fast access':
                await this.servicesModal.fastAccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'search list':
                await this.servicesModal.searchService.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'number of characters':
                await this.account.numberOfCharactersReference.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'owner full name':
                await this.ownerName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                await this.account.serviceDetailContinueButton.waitForEnabled({reverse: (value === 'disabled')});
                break;
            case 'close button':
                await this.account.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'letter substitution':
                await this.account.letterSubstitution.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'services list':
                await this.servicesModal.serviceList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'wrong search':
                await this.servicesModal.wrongSearch.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info':
                await this.infoSaveService.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'save service list':
                await this.servicesModal.saveServiceList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'list of services':
                await this.servicesModal.serviceList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'origin table':
                await this.selectOrigin.originTable.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accounts and cards':
                await this.selectOriginMulti.accountsAndCardsStep3.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sufficient balance':
                await this.selectOrigin.sufficientBalance.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button step 3':
                await this.maximumAmount.continueButtonStep3.waitForEnabled({reverse: (value === 'disabled')});
                break;
            case 'max amount':
                await this.maximumAmount.maxAmountStep3.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'all origins':
                await this.originSeeAll.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button periodicity':
                await this.periodicity.continueButtonPeriodicity.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'periodicity':
                await this.periodicity.periodicity.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'free cancellation':
                await this.termsAndConditionsStep.agreementStep6.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'authorization of charges':
                await this.termsAndConditionsStep.authorizationStep6.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button terms and conditions':
                await this.multi.continueStep6.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'delete service button':
                await this.modalChangeService.confirmDeleteService.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cancel button':
                await this.modalChangeService.cancelDeleteServiceSpherica.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary section':
                await this.summary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit operation button':
                await this.confirmExitOperation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue operation button':
                await this.continueOperationButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm button':
                await this.multi.summaryContinueOperationButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title section':
                await this.serviceDetailMulti.titleHelpSectionStep2.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help information':
                await this.serviceDetail.tipsHelpSectionStep2.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'understood button':
                await this.serviceDetail.continueButtonHelpSectionStep2.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'saved services':
                await this.selectService.savesServices.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'new service':
                await this.selectService.newServices.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tip':
                await this.adviceHelpOriginPayment.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help payment section title':
                await this.titleHelpPaymentSection.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'understood help payment':
                await this.continueHelpPaymentOption.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'reference successful':
                await this.successTicket.referenceSuccessful.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'service':
                await this.successTicket.serviceSuccessful.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'folio':
                await this.successTicket.folioSuccessful.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount':
                await this.successTicket.amountSuccessful.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'share button':
                await this.shareButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new ScheduledBillPayments();
