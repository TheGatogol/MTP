import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import CellsSignOperationModalSpherica from '../../components/cells-sign-operation-modal-spherica';
import CardOriginationStopLossMx from '../../components/card-origination-stop-loss-mx.js';
@page()
class OcloanOfferSpherica extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'ocLoanOfferPageSpherica',
            root: '#cells-template-ocLoanOfferPageSpherica[state="active"]',
            elements: {
                offerPage: {
                    properties: {
                        root: '#modal-benefits'
                    },
                    exit: '#helpModalHeader #btn-close',
                    header: '[data-tag-name="bbva-header-main"][variant="modal-initial"] header',
                    panelContainer: '.microillustration-container',
                    benefits: '.benefits',
                    btnContinue: '.footer-simulation [data-tag-name="bbva-button-default"]'
                },
                multistep: {
                    properties: {
                        root: '#multistep-modal'
                    },
                    header: '#helpModalHeader',
                    close: '#helpModalHeader #btn-close',
                    multistepAllCompleted: '[data-tag-name="bbva-expandable-multistep"][all-completed]',
                    sustainability: {
                        tabs: '#simulation-step [data-tag-name="loan-and-mortgage-origination-simulation"] [data-tag-name="loan-and-mortgage-origination-sustainability"] #tab-default .group #tabs #tab-1',
                        catalog: '#simulation-step [data-tag-name="loan-and-mortgage-origination-simulation"] [data-tag-name="loan-and-mortgage-origination-sustainability"] .content-microilustration',
                        simulator: '#simulation-step [data-tag-name="loan-and-mortgage-origination-simulation"] [data-tag-name="loan-and-mortgage-origination-sustainability"] [data-tag-name="bbva-notification-message"] .wrapper-button [data-tag-name="bbva-button-default"]',
                        slider: '#cells-template-loanSustainableRateSimulator [data-tag-name="bbva-widget-loan-sustainable-rate-simulator"] .container .interactive .slide .slide__main [data-tag-name="bbva-form-range"]',
                    },
                    step1: {
                        headerStep: '#simulation-step #heading',
                        editButton: '#editButton',
                        inputAmount: '#simulation-step [data-tag-name="loan-and-mortgage-origination-simulation"] [data-tag-name="bbva-form-input"] input',
                        amountMaxAndMin: '#simulation-step [data-tag-name="loan-and-mortgage-origination-simulation"] [data-tag-name="bbva-form-input"] [data-tag-name="bbva-form-amount"] [data-tag-name="bbva-notification-help"]',
                        notificacionMessage: '.content [data-tag-name="bbva-notification-contextual"]',
                        rangeSimulation: '#simulation-step [data-tag-name="bbva-form-range"]',
                        tooltipInterestRate: '#simulation-step [data-tag-name="loan-and-mortgage-origination-simulation"] .accordion-list [data-tag-name="bbva-expandable-accordion"] #annualRateTooltip .icon-container #rate-icon-button',
                        tooltipLifeInsuranceRate: '#simulation-step [data-tag-name="loan-and-mortgage-origination-simulation"] .accordion-list [data-tag-name="bbva-expandable-accordion"] [data-tag-name="loan-and-mortgage-origination-rate-item"][event-detail="life-and-unemployment-insurance"] .icon-container #rate-icon-button',
                        tooltipCommission: '#simulation-step [data-tag-name="loan-and-mortgage-origination-simulation"] .accordion-list [data-tag-name="bbva-expandable-accordion"] [data-tag-name="loan-and-mortgage-origination-rate-item"] #unique-comission-payment .icon-container #rate-icon-button',
                        tooltiplifeUnemploymentTooltip: '#simulation-step [data-tag-name="loan-and-mortgage-origination-simulation"] .accordion-list [data-tag-name="bbva-expandable-accordion"] #life-and-unemployment-insurance .icon-container #rate-icon-button',
                        tooltiplifeInsuranceTooltip: '#simulation-step [data-tag-name="loan-and-mortgage-origination-simulation"] .accordion-list [data-tag-name="bbva-expandable-accordion"] #life-insurance .icon-container #rate-icon-button',
                        tooltipCat: '#simulation-step [data-tag-name="loan-and-mortgage-origination-simulation"] .accordion-list [data-tag-name="bbva-expandable-accordion"] #catTooltip #rate-icon-button',
                        messageContent: '#simulation-step [data-tag-name="loan-and-mortgage-origination-simulation"] [data-tag-name="bbva-notification-message"]',
                        messageMonthlyPaymentIncluding: '#simulation-step [data-tag-name="loan-and-mortgage-origination-simulation"] #sticky [data-tag-name="bbva-type-text"]',
                        continueButton: '#simulation-step [data-tag-name="loan-and-mortgage-origination-simulation"] .footer-button [data-tag-name="bbva-button-default"]',
                        callAdvisorLink: '#simulation-step [data-tag-name="loan-and-mortgage-origination-simulation"] .footer-button [data-tag-name="bbva-type-link"]',
                        promotionApplied: '#simulation-step .summary [data-tag-name="bbva-badge-icon"]',
                    },
                    step2: {
                        headerStep2: '#documents-step #heading',
                        editButton: '#editButton',
                        linkAuthorizeCreditBureau: '#documents-step [data-tag-name="terms-documents-step"] [data-tag-name="bbva-expandable-accordion"] .expandable-content [data-tag-name="loan-and-mortgage-origination-file-list"] #docCreditHistorySearch',
                        linkTermsAndConditions: '#documents-step [data-tag-name="terms-documents-step"] [data-tag-name="bbva-expandable-accordion"] .expandable-content [data-tag-name="loan-and-mortgage-origination-file-list"] #CONTRATO PRESTAMOS PERSONAL SIN SEGURO',
                        labelAcceptTermsAndConditions: '#documents-step [data-tag-name="terms-documents-step"] [data-tag-name="bbva-form-checkbox"][label="Leí, comprendo y acepto los Términos y Condiciones del contrato de préstamo inmediato."] .container #input',
                        descriptionStep: '#documents-step [data-tag-name="terms-documents-step"] .margin-bottom-default #termsAndConditionsReviewYourDocuments',
                        listbullet1: '#documents-step [data-tag-name="terms-documents-step"] .margin-bottom-default #termsAndConditionsKeyPoint-0',
                        listbullet2: '#documents-step [data-tag-name="terms-documents-step"] .margin-bottom-default #termsAndConditionsKeyPoint-1',
                        expandableAccordion: '#documents-step [data-tag-name="terms-documents-step"] .expandable',
                        documentList: '#documents-step [data-tag-name="terms-documents-step"] [data-tag-name="bbva-expandable-accordion"] [data-tag-name="loan-and-mortgage-origination-file-list"]',
                        superCheckBox: '#documents-step [data-tag-name="terms-documents-step"] .margin-bottom-default .container #input',
                        checkBox: '#documents-step [data-tag-name="terms-documents-step"] #termsAndConditionsCheckBoxCreditHistoryAuthorization #input',
                        continueButtonTerms: '#documents-step [data-tag-name="terms-documents-step"] .continue-button [data-tag-name="bbva-button-default"]',
                        textAccept: '#documents-step [data-tag-name="terms-documents-step"] #termsAndConditionsCheckBoxTermsAndConditionsAccepted #input [data-tag-name="bbva-type-text"]'
                    },
                    step3: {
                        continueTermsAndConditions: '[data-tag-name="terms-documents-step"] .continue-button [data-tag-name="bbva-button-default"]',
                    },
                    step4: {
                        continueSummary: '#confirm-button'
                    }
                },
                genericModal: {
                    header: '#helpModalHeader',
                    close: '[data-tag-name="loan-and-mortgage-origination-oc-loan-modal-manager"] [data-tag-name="bbva-help-modal"] #helpModalHeader #btn-close',
                    icon: '[data-tag-name="loan-and-mortgage-origination-oc-loan-modal-manager"] [data-tag-name="bbva-help-modal"] #helpModalTitle [data-tag-name="bbva-type-icon"]',
                    title: '[data-tag-name="loan-and-mortgage-origination-oc-loan-modal-manager"] [data-tag-name="bbva-help-modal"] #title-text',
                    contentDescription: '[data-tag-name="loan-and-mortgage-origination-oc-loan-modal-manager"] [data-tag-name="bbva-help-modal"] #paragraph-0',
                    paragraphCreditBureau: '[data-tag-name="loan-and-mortgage-origination-oc-loan-modal-manager"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-type-text"]',
                    paragraphTwo: '[data-tag-name="loan-and-mortgage-origination-oc-loan-modal-manager"] [data-tag-name="bbva-help-modal"] #paragraph-1',
                    buttons: '.content .transition-container .modal-main .modal-footer .link',
                    link: '[data-tag-name="loan-and-mortgage-origination-oc-loan-modal-manager"] [data-tag-name="bbva-help-modal"] .modal-footer [data-tag-name="bbva-button-default"].link',
                    acceptedBtn: '[data-tag-name="loan-and-mortgage-origination-oc-loan-modal-manager"] [data-tag-name="bbva-help-modal"] .content .transition-container .modal-main .modal-footer [data-tag-name="bbva-button-default"]'
                },
                successModal: {
                    properties: {
                        root: '[data-tag-name="loan-and-mortgage-origination-review"] #modal-review'
                    },
                    header: '#helpModalHeader',
                    close: '#helpModalHeader #btn-close',
                    titleSuccess: '.panel-success [data-tag-name="loan-and-mortgage-origination-illustration"] [data-tag-name="bbva-type-text"]',
                    amountToRequest: '.panel-success [data-tag-name="bbva-type-amount"]',
                    date: '.list-success #loanAndMortgageOriginationRateItem-0',
                    term: '.list-success #loanAndMortgageOriginationRateItem-1',
                    monthlyTerm: '.list-success #loanAndMortgageOriginationRateItem-2'
                },
                dialogOperations: CardOriginationStopLossMx,
                signConnector: CellsSignOperationModalSpherica
            },
            requiredElements: ['genericModal']
        });
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'header offer page':
                await this.offerPage.header.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'panel container':
                await this.offerPage.panelContainer.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'benefits':
                await this.offerPage.benefits.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'btn continue offer page':
                await this.offerPage.btnContinue.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'header multistep':
                await this.multistep.header.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'input amount':
                await this.multistep.step1.inputAmount.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'amount max and min':
                await this.multistep.step1.amountMaxAndMin.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'notificacion message':
                await this.multistep.step1.notificacionMessage.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'term months':
                await this.multistep.step1.rangeSimulation.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'tooltip interest rate':
                await this.multistep.step1.tooltipInterestRate.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'tooltip commission':
                await this.multistep.step1.tooltipCommission.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'tooltip cat':
                await this.multistep.step1.tooltipCat.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'message content':
                await this.multistep.step1.messageContent.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'message monthly payment including':
                await this.multistep.step1.messageMonthlyPaymentIncluding.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'continue button step 1':
                await this.multistep.step1.continueButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'call advisor link':
                await this.multistep.step1.callAdvisorLink.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'multistep all completed':
                await this.multistep.multistepAllCompleted.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit button step 1':
                await this.multistep.step1.editButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text promotion applied':
                await this.multistep.step1.promotionApplied.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'link authorize the credit bureau':
                await this.multistep.step2.linkAuthorizeCreditBureau.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'link terms and conditions':
                await this.multistep.step2.linkTermsAndConditions.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'label accept terms and conditions':
                await this.multistep.step2.labelAcceptTermsAndConditions.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'btn continue terms and conditions':
                await this.multistep.step2.continueButtonTerms.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'header step 2':
                await this.multistep.step2.headerStep2.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'edit button step 2':
                await this.multistep.step2.editButtonStep2.waitForDisplayed({timeout: config.wait.M });
                break;
            case 'text accept':
                await this.multistep.step2.textAccept.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'btn continue summary':
                await this.multistep.step3.continueTermsAndConditions.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'btn otp':
                await this.signConnector.smsContinueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'generic modal':
                await this.genericModal.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'modal close':
                await this.genericModal.close.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'modal title':
                await this.genericModal.title.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'modal icon':
                await this.genericModal.icon.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'btn accept generic modal':
                await this.genericModal.buttons.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'btn link generic modal':
                await this.genericModal.link.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'generic description modal':
                await this.genericModal.contentDescription.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'paragraph credit bureau generic modal':
                await this.genericModal.paragraphCreditBureau.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'title success modal':
                await this.successModal.titleSuccess.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'amount to request success modal':
                await this.successModal.amountToRequest.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'date success modal':
                await this.successModal.date.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'term success modal':
                await this.successModal.term.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'monthly term success modal':
                await this.successModal.monthlyTerm.waitForDisplayed({ timeout: config.wait.M });
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async _modalElementValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'stop loss benefits header':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_BENEFITS_HEADER});
                break;
            case 'stop loss benefits close button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_BENEFITS_CLOSE_BUTTON});
                break;
            case 'stop loss benefit image':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_BENEFIT_IMAGE});
                break;
            case 'stop loss benefit title':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_BENEFIT_TITLE});
                break;
            case 'stop loss benefit description':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_BENEFIT_DESCRIPTION});
                break;
            case 'stop loss offer return button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_OFFER_RETURN_BUTTON});
                break;
            case 'stop loss offer exit button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_OFFER_EXIT_BUTTON});
                break;
            case 'stop loss error information header':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_ERROR_INFORMATION_HEADER});
                break;
            case 'stop loss error information close button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_ERROR_INFORMATION_CLOSE_BUTTON});
                break;
            case 'stop loss error information title':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_ERROR_INFORMATION_TITLE});
                break;
            case 'stop loss error information description':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_ERROR_INFORMATION_DESCRIPTION});
                break;
            case 'stop loss error information exit button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_ERROR_INFORMATION_EXIT_BUTTON});
                break;
            case 'stop loss error service header':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_ERROR_SERVICE_HEADER});
                break;
            case 'stop loss error service close button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_ERROR_SERVICE_CLOSE_BUTTON});
                break;
            case 'stop loss error service title':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_ERROR_SERVICE_TITLE});
                break;
            case 'stop loss error service description':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_ERROR_SERVICE_DESCRIPTION});
                break;
            case 'stop loss error service exit button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.STOP_LOSS_ERROR_SERVICE_EXIT_BUTTON});
                break;
            default:
                await super._modalElementValidation(arguments[0]);
        }
    }

    async exitStep(flow) {
        switch (flow) {
            case 'exit interest rate':
                await this.genericModal.close.waitForDisplayed({timeout: config.wait.M});
                await this.genericModal.close.click();
                break;
            case 'exit flow':
                await this.multistep.close.waitForDisplayed({timeout: config.wait.M});
                await this.multistep.close.click();
                break;
            case 'exit btn accepted':
                await this.genericModal.acceptedBtn.waitForDisplayed({timeout: config.wait.M});
                await this.genericModal.acceptedBtn.click();
                break;
            default:
                throw new Error(`Unknown flow name: ${flow}`);
        }
    }

    async nextStep(selector) {
        switch (selector.toLowerCase()) {
            case 'lo quiero':
                await this.confirmBenefits();
                break;
            case 'sustainable catalog':
                await this.confirmBenefits();
                await this.changeSustainableTab();
                await this.accessToCatalogProduct();
                break;
            case 'sustainable simulator':
                await this.confirmBenefits();
                await this.changeSustainableTab();
                await this.accessToSustainableSimulator();
                break;
            case 'catalog tab':
                await this.confirmBenefits();
                await this.changeSustainableTab();
                break;
            case 'open tooltip interest rate':
                await this.confirmBenefits();
                await this.multistep.step1.tooltipInterestRate.waitForDisplayed({ timeout: config.wait.M });
                await this.multistep.step1.tooltipInterestRate.click();
                break;
            case 'open tooltip life insurance rate':
                await this.confirmBenefits();
                await this.multistep.step1.tooltipLifeInsuranceRate.waitForDisplayed({ timeout: config.wait.M });
                await this.multistep.step1.tooltipLifeInsuranceRate.click();
                break;
            case 'open tooltip commission':
                await this.confirmBenefits();
                await this.multistep.step1.tooltipCommission.waitForDisplayed({ timeout: config.wait.M });
                await this.multistep.step1.tooltipCommission.click();
                break;
            case 'open tooltip life insurance':
                await this.confirmBenefits();
                await this.multistep.step1.tooltiplifeInsuranceTooltip.waitForDisplayed({ timeout: config.wait.M });
                await this.multistep.step1.tooltiplifeInsuranceTooltip.click();
                break;
            case 'open tooltip cat':
                await this.confirmBenefits();
                await this.multistep.step1.tooltipCat.waitForDisplayed({ timeout: config.wait.M });
                await this.multistep.step1.tooltipCat.click();
                break;
            case 'open tooltip life and unemployment insurance':
                await this.confirmBenefits();
                await this.multistep.step1.tooltiplifeUnemploymentTooltip.waitForDisplayed({ timeout: config.wait.M });
                await this.multistep.step1.tooltiplifeUnemploymentTooltip.click();
                break;
            case 'terms and conditions':
                await this.confirmBenefits();
                await this.termsAndConditions();
                break;
            case 'open authorization my credit history':
                await this.confirmBenefits();
                await this.termsAndConditions();
                await this.multistep.step2.expandableAccordion.waitForDisplayed({ timeout: config.wait.M });
                await this.multistep.step2.expandableAccordion.click();
                await this.multistep.step2.linkAuthorizeCreditBureau.waitForDisplayed({ timeout: config.wait.M });
                await this.multistep.step2.linkAuthorizeCreditBureau.click();
                break;
            case 'summary':
                await this.confirmBenefits();
                await this.termsAndConditions();
                await this.summaryStep();
                break;
            case 'otp':
                await this.confirmBenefits();
                await this.termsAndConditions();
                await this.summaryStep();
                await this.continueSummary();
                break;
            default:
                throw new Error(`The selector ${selector} is not implemented`);
        }
    }

    async confirmBenefits() {
        await this.offerPage.btnContinue.waitForDisplayed({ timeout: config.wait.M });
        await this.offerPage.btnContinue.click();
    }

    async termsAndConditions() {
        await this.multistep.step1.continueButton.waitForDisplayed({ timeout: config.wait.M });
        await this.multistep.step1.continueButton.click();
    }

    async summaryStep() {
        await this.confirmOptionTerms();
        await this.continueTermsAndConditions();
    }

    async handleActions(action) {
        switch (action) {
            case 'edit amount':
                await this.setAmount('200000');
                break;
            case 'edit amount value empty':
                await this.setAmount('');
                break;
            case 'edit amount minimum value':
                await this.setAmount('1000');
                break;
            case 'edit amount maximum value':
                await this.setAmount('5000000');
                break;
            case 'edit payment term':
                await this.swipeRangeValue(this.multistep.step1.rangeSimulation, '80');
                break;
            case 'edit step 1':
                await (await this.multistep.multistepAllCompleted.waitForDisplayed({timeout: config.wait.M}))
                    .waitForAnimation({timeout: config.wait.M});
                await (await this.multistep.step1.editButton
                    .waitForAnimation({timeout: config.wait.M}))
                    .click();
                break;
            case 'edit step 2':
                await (await this.multistep.multistepAllCompleted.waitForDisplayed({timeout: config.wait.M}))
                    .waitForAnimation({timeout: config.wait.M});
                await (await this.multistep.step2.editButton
                    .waitForAnimation({timeout: config.wait.M}))
                    .click();
                break;
            case 'confirms the return':
                await this.dialogOperations.stopLossActions(this.dialogOperations.CONFIRM_RETURN);
                break;
            case 'confirms the exit':
                await this.dialogOperations.stopLossActions(this.dialogOperations.CONFIRM_EXIT);
                break;
            case 'retry three times the error information':
                await this.dialogOperations.stopLossActions(this.dialogOperations.RETRY_ERROR_INFORMATION);
                break;
            default:
                throw new Error(`Unknown action name: ${action}`);
        }
    }

    async setAmount(value) {
        await this.multistep.step1.inputAmount.waitForDisplayed({timeout: config.wait.M});
        await this.multistep.step1.inputAmount.setValue({value: value});
        await this.multistep.step1.headerStep.waitForDisplayed({timeout: config.wait.M});
        await this.multistep.step1.headerStep.click();
    }

    async changeSustainableTab() {
        await this.multistep.sustainability.tabs.waitForDisplayed({ timeout: config.wait.M });
        await this.multistep.sustainability.tabs.click();
    }

    async confirmOptionTerms() {
        await this.multistep.step2.superCheckBox.waitForDisplayed({ timeout: config.wait.M });
        await this.multistep.step2.superCheckBox.click();
    }

    async continueTermsAndConditions() {
        await this.multistep.step3.continueTermsAndConditions.waitForDisplayed({timeout: config.wait.M});
        await this.multistep.step3.continueTermsAndConditions.click();
    }

    async continueSummary() {
        await this.multistep.step4.continueSummary.waitForDisplayed({timeout: config.wait.M});
        await this.multistep.step4.continueSummary.click();
    }

    async accessToSustainableSimulator() {
        await this.multistep.sustainability.simulator.waitForDisplayed({ timeout: config.wait.M });
        await this.multistep.sustainability.simulator.click();
    }

    async accessToCatalogProduct() {
        await this.multistep.sustainability.catalog.waitForDisplayed({ timeout: config.wait.M });
        await this.multistep.sustainability.catalog.click();
    }

    async exitStopLoss(section) {
        switch (section.toLowerCase()) {
            case 'summary':
                await this.nextStep('summary');
                await this.exitStep('exit flow');
                break;
            case 'offer page':
                await this.offerPage.exit.waitForDisplayed({ timeout: config.wait.M });
                await this.offerPage.exit.click();
                break;
            case 'simulation':
                await this.nextStep('lo quiero');
                await this.handleActions('edit amount');
                await this.multistep.step1.continueButton.waitForAnimation({ timeout: config.wait.M });
                await this.multistep.step1.rangeSimulation.waitForAnimation({ timeout: config.wait.M });
                await this.multistep.step1.inputAmount.waitForAnimation({timeout: config.wait.M});
                await this.exitStep('exit flow');
                break;
            case 'terms and conditions':
                await this.nextStep('terms and conditions');
                await this.exitStep('exit flow');
                break;
            default:
                throw new Error(`Unknown section name: ${section}`);
        }
    }
}

export default new OcloanOfferSpherica();
