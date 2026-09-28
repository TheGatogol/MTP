import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';
import CellsInputSlider from '../../components/cells-input-slider';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import CellsSignOperationModal from '../../components/cells-sign-operation-modal';
import FeedbackClientVoiceConnect from '../../components/feedback-client-voice-connect-gl';
import BbvaHelpModalSpherica from '../../components/bbva-help-modal-spherica';

@page()
class OcloanOffer extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'OcloanOffer',
            root: '#cells-template-ocLoanOfferPage[state="active"]',
            elements: {
                header: CellsMoleculeHeaderSpherica,
                stepDetailOffer: 'glomo-step-loan-offer-spherica',
                headerImage: 'glomo-step-loan-offer-spherica #loanOffer .header-image',
                amountInput: 'glomo-step-loan-offer-spherica #loanOffer .amount-input',
                benefits: 'glomo-step-loan-offer-spherica #loanOffer .dinamic-list-content',
                btnAcceptAmount: 'glomo-step-loan-offer-spherica #loanOffer .btn-clicked',
                checkboxCreditBureau: 'cells-step-card-checklist-contract cells-checkbox-button:nth-of-type(1)',
                checkboxTermsConditions: 'cells-step-card-checklist-contract cells-checkbox-button:nth-of-type(2)',
                btnAcceptConditions: 'cells-step-card-checklist-contract .secondary',
                btnAcceptSummary: 'cells-summary-view cells-st-button',
                btnHelpInformation: 'glomo-step-loan-offer #loanOffer .list-info-keys #annual cells-atom-icon',
                catInformation: 'glomo-step-loan-offer #loanOffer .list-info-keys #cat-rate cells-atom-icon',
                comissionInformation: 'glomo-step-loan-offer #loanOffer .list-info-keys #cost1 cells-atom-icon',
                callMeBackHeaderButton: 'cells-molecule-header-spherica #btnRightSecondary',
                callMeBackLinkButton: 'glomo-step-loan-offer-spherica #loanOffer .link',
                sustainableButton: 'glomo-step-loan-offer-spherica #loanOffer #glomo-loan-offer-content cells-radio-tabs-spherica  #uso\\ sostenible',
                cellsStepSpherica: 'glomo-step-loan-offer-spherica #stepContainer',
                dialogOperations: [
                    GlomoAlertManagerSpherica,
                    {
                        paragraphElements:{
                            information: 'p',
                        },
                        additionalElements:{
                            contentTitle: 'cells-bottom-modal#modal .content-container div',
                            iconHelp: 'cells-bottom-modal#modal .icon-container cells-atom-icon',
                        }
                    }
                ],
                quitFlow: [
                    BbvaHelpModalSpherica,
                ],
                slider: CellsInputSlider,
                signConnector: CellsSignOperationModal,
                sticky: 'glomo-step-loan-offer #loanOffer #section-sticky .currency-style .amount-wrapper .integer',
                feesAndCosts: 'glomo-step-loan-offer #loanOffer .list-info-keys',
                comparativeTable: 'glomo-step-loan-offer #loanOffer #glomo-loan-offer-content div.container-show glomo-panel-comparative',
                termsAndConditionsButton: 'cells-step-card-checklist-contract .full .file-list-section div[data-id="02"]',
                revireTooltip: 'glomo-step-loan-offer-spherica #loanOffer #glomo-loan-offer-content cells-atom-subheader-spherica cells-atom-icon-spherica iron-icon',
                headerRevireHelp : 'cells-modal-help-spherica cells-alert-box-spherica #modal #header',
                imageRevireHelp: 'cells-modal-help-spherica #promotion-help-icon-spherica iron-icon img',
                descriptionRevireHelp: 'cells-modal-help-spherica cells-alert-box-spherica cells-text-description-spherica',
                comparativeTableRevireHelp: 'cells-modal-help-spherica cells-alert-box-spherica glomo-panel-comparative-spherica',
                exitButtonRevireHelp: 'cells-modal-help-spherica cells-alert-box-spherica #modal #closeButton',
                catalogProdcut: 'glomo-step-loan-offer-spherica #glomo-loan-offer-content  .dinamic-list-content .iron-selected cells-oc-banner-spherica',
                sustainableSimulatorButton: 'glomo-step-loan-offer-spherica #glomo-loan-offer-content  .dinamic-list-content .iron-selected cells-icon-message-spherica cells-st-button-spherica#primaryBtn',
                customizedLoanHeader: '#glomo-loan-offer-content div.container-show cells-atom-subheader-spherica',
                inputAmountToRequest: '#label div.content-input span.text-field__label',
                textTerm: 'article div div.slider-label p.slider-label__title',
                benefitsText: '#glomo-loan-offer-content div.container-show cells-atom-subheader-spherica',
                textConventionalUse: '[id="uso convencional"]',
                textSustainableUse: '[id="uso sostenible"]',
                feedbackClient: FeedbackClientVoiceConnect,
            },
            requiredElements: [
                'header', 'stepDetailOffer'
            ]
        });

    }

    async _screenValidation({item, value} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.cellsStepSpherica.scrollIntoView({block:'start'});
                await this.header.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'detail offer step':
                await this.stepDetailOffer.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'header image':
                await this.headerImage.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'amount input':
                await this.amountInput.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'benefits':
                await this.benefits.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'continue button':
                await this.btnAcceptAmount.waitForClickable({timeout: config.wait.XL});
                break;
            case 'sticky':
                await this.sticky.waitForText({text: value});
                break;
            case 'fees and costs':
                await this.feesAndCosts.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'comparative table':
                await this.comparativeTable.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'header revire help':
                await this.headerRevireHelp.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'image revire help':
                await this.imageRevireHelp.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'description revire help':
                await this.descriptionRevireHelp.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'comparative table revire help':
                await this.comparativeTableRevireHelp.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'exit button revire help':
                await this.exitButtonRevireHelp.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'customized loan header':
                await this.customizedLoanHeader.waitForText({text: 'Elige el monto y el plazo'});
                break;
            case 'input amount to request':
                await this.inputAmountToRequest.waitForText({text: global.user.text.amountToRequest});
                break;
            case 'text term':
                await this.textTerm.waitForText({text: global.user.text.plazo});
                break;
            case 'benefits text':
                await this.benefitsText.waitForText({text: global.user.text.benefits});
                break;
            case 'text conventional use':
                await this.textConventionalUse.scrollIntoView({block: global.user.text.start});
                await this.textConventionalUse.waitForText({text: global.user.text.conventionalUse});
                break;
            case 'text sustainable use':
                await this.textSustainableUse.scrollIntoView({block: global.user.text.start});
                await this.textSustainableUse.waitForText({text: global.user.text.sustainableUse});
                break;
            case 'header feedback':
                await this.feedbackClient.welcome.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button feedback':
                await this.feedbackClient.welcome.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'rating feedback button':
                await this.feedbackClient.selectRating(5, false);
                break;
            case 'header thankyou feedback':
                await this.feedbackClient.thankYou.headerThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit thankyou feedback':
                await this.feedbackClient.thankYou.exitThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'micro thankyou feedback':
                await this.feedbackClient.thankYou.microillustrationThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title thankyou feedback':
                await this.feedbackClient.thankYou.titleThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description thankyou feedback':
                await this.feedbackClient.thankYou.descriptionThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async _modalElementValidation({item, value, ...args} = {}) {
        switch (item.toLowerCase()) {
            case 'title':
                await this.dialogOperations.additionalElements.contentTitle.waitForDisplayed();
                break;
            case 'icon help':
                await this.dialogOperations.additionalElements.iconHelp.waitForDisplayed();
                break;
            case 'information':
                await this.dialogOperations.paragraphElements.information.waitForDisplayed();
                break;
            case 'accept button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.ACCEPT_BUTTON}, {forceScroll: true});
                break;
            default:
                await super._modalElementValidation({item, value, ...args});
        }
    }

    async answerFeedbackForm(feedback) {
        await this.feedbackClient.answerFeedbackForm(feedback);
    }

    async acceptAmount() {
        await this.btnAcceptAmount.waitForDisplayed({timeout: config.wait.XL});
        await this.btnAcceptAmount.waitForClickable({timeout: config.wait.XL});
        await this.btnAcceptAmount.click();
    }

    async acceptConditions() {
        await this.checkboxCreditBureau.waitForClickable({timeout: config.wait.XL});
        await this.checkboxTermsConditions.waitForClickable({timeout: config.wait.XL});
        await this.btnAcceptConditions.waitForClickable({timeout: config.wait.XL});
        await this.checkboxCreditBureau.click();
        await this.checkboxTermsConditions.click();
        await this.btnAcceptConditions.click();
    }

    async acceptSummary() {
        await this.btnAcceptSummary.waitForDisplayed({timeout: config.wait.XL});
        await this.btnAcceptSummary.waitForClickable({timeout: config.wait.XL});
        await this.btnAcceptSummary.click();
    }

    async otpSms() {
        await this.signConnector.isLoaded();
        await this.signConnector.setPassword(12345678);
        await this.signConnector.confirmPassword();
    }

    async acceptAllConditions() {
        await this.acceptAmount();
        await this.acceptConditions();
        await this.acceptSummary();
    }

    async acceptTermsAndConditions() {
        await this.acceptAmount();
        await this.acceptConditions();
    }

    async helpInformation() {
        await this.btnHelpInformation.waitForClickable({timeout: config.wait.XL});
        await this.btnHelpInformation.click();
    }

    async catHelpInformation() {
        await this.catInformation.waitForClickable({timeout: config.wait.XL});
        await this.catInformation.click();
    }

    async comissionHelpInformation() {
        await this.comissionInformation.waitForClickable({timeout: config.wait.XL});
        await this.comissionInformation.click();
    }

    async changeValueSlider() {
        await this.slider.waitForDisplayed({timeout: config.wait.XL});
        await this.slider._selectValue(1);
    }

    async focusInputAmount() {
        await this.amountInput.waitForDisplayed({timeout: config.wait.L});
        await this.amountInput.click();
    }

    async termsAndConditionsPdf() {
        await this.acceptAmount();
        await this.termsAndConditionsButton.waitForDisplayed({timeout: config.wait.XL});
        await this.termsAndConditionsButton.waitForClickable({timeout: config.wait.XL});
        await this.termsAndConditionsButton.click();
    }

    async revireHelpData() {
        await this.revireTooltip.waitForClickable({timeout: config.wait.M});
        await this.revireTooltip.click();
    }

    async accessToCallMeBackAssistanceManager(accessFrom) {
        switch (accessFrom) {
            case 'link':
                await this.callMeBackLinkButton.waitForDisplayed({timeout: config.wait.M});
                await this.callMeBackLinkButton.click();
                break;
            case 'header':
                await this.callMeBackHeaderButton.waitForDisplayed({timeout: config.wait.M});
                await this.callMeBackHeaderButton.click();
                break;
            default:
                throw new Error(`The access '${accessFrom}' not found.`);
        }
    }

    async changeSustainableOffer() {
        await this.sustainableButton.waitForDisplayed({timeout: config.wait.M});
        await this.sustainableButton.click();
    }

    async accessToCatalogProduct() {
        await this.catalogProdcut.waitForDisplayed({timeout: config.wait.M});
        await this.catalogProdcut.click();
    }

    async accessToSustainableSimulator(){
        await this.sustainableSimulatorButton.waitForDisplayed({timeout: config.wait.M});
        await this.sustainableSimulatorButton.click();
    }

    async abandonProcess() {
        await this.header.actionRight();
        await this.quitFlow.acceptBtn.waitForDisplayed({timeout: config.wait.M});
        await this.quitFlow.acceptBtn.click();
    }
}

export default new OcloanOffer();
