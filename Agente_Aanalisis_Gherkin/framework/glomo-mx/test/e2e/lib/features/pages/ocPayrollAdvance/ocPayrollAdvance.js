import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';
import CellsMoleculeAmountInput from '../../components/cells-molecule-amount-input';
import CellsMoleculeAmountInputSpherica from '../../components/cells-molecule-amount-input-spherica';
import CellsSignOperationModal from '../../components/cells-sign-operation-modal';
import CellsSignOperationModalSpherica from '../../components/cells-sign-operation-modal-spherica';
@page()
class OcPayrollAdvance extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'ocPayrollAdvance',
            root: '#cells-template-ocPayrollAdvancePage[state="active"]',
            elements: {
                header: 'cells-molecule-header',
                stepDetailOffer: 'glomo-step-loan-offer',
                headerImage: 'glomo-step-loan-offer #loanOffer .header-image',
                amountInput: {
                    component: {
                        ComponentClass: CellsMoleculeAmountInput,
                    },
                },
                benefits: 'glomo-step-loan-offer #loanOffer .dinamic-list-content',
                btnAcceptAmount: 'glomo-step-loan-offer #loanOffer .btn-clicked',
                checkboxCreditBureau: 'cells-step-card-checklist-contract cells-checkbox-button:nth-of-type(1)',
                checkboxTermsConditions: 'cells-step-card-checklist-contract cells-checkbox-button:nth-of-type(2)',
                checkboxAutomaticPayment: 'cells-step-card-checklist-contract cells-checkbox-button:nth-of-type(3)',
                btnAcceptConditions: 'cells-step-card-checklist-contract .secondary',
                btnAcceptSummary: 'cells-summary-view #collapser',
                btnTooltipCommission: 'glomo-step-loan-offer #loanOffer .list-info-keys #tax2 cells-atom-icon',
                btnTooltipCat: 'glomo-step-loan-offer #loanOffer .list-info-keys #tax3 cells-atom-icon',
                btnCloseCallMeBack: 'cells-molecule-header #tooltipContent button',
                btnCallMeBack: 'glomo-step-loan-offer #loanOffer #section-fixed cells-st-button.link',
                textTerms: 'glomo-step-loan-offer #loanOffer .amount-input .key-value-term',
                historyCredit: 'cells-list-file div.list-file-container div.body [data-id="01"]',
                tagTerms: 'cells-step-card-checklist-contract #checklistStepContainer .cells-step__header-title',
                contractAdvance: 'cells-list-file div.list-file-container div.body [data-id="02"]',
                dialogOperations: [
                    GlomoAlertManager,
                    {
                        additionalElements: {
                            contentTitle: 'cells-bottom-modal#modal .content-container div',
                            iconHelp: 'cells-bottom-modal#modal .icon-container cells-atom-icon',
                            information: '#modal div.templates-wrapper .paragraph-template'
                        }
                    }
                ],
                sticky: 'glomo-step-loan-offer #loanOffer #section-sticky .currency-style .amount-wrapper .integer',
                comparativeTable: 'glomo-step-loan-offer #loanOffer .list-info-keys .comparison-panel',
                bureauButton: 'cells-step-card-checklist-contract .full .file-list-section div[data-id="01"]',
                signConnector: CellsSignOperationModal
            },
            elementsSpherica: {
                header: 'cells-molecule-header-spherica',
                stepDetailOffer: 'glomo-step-loan-offer-spherica',
                headerImage: 'glomo-step-loan-offer-spherica #loanOffer .header-image',
                amountInput: {
                    component: {
                        ComponentClass: CellsMoleculeAmountInputSpherica,
                        args: {
                            root: `glomo-step-loan-offer-spherica #loanOffer .amount-input ${CellsMoleculeAmountInputSpherica._baseRoot}`,
                            elements: {
                                inputField: 'input#input.text-field__input',
                            }
                        }
                    }
                },
                benefits: 'glomo-step-loan-offer-spherica #loanOffer .dinamic-list-content',
                btnAcceptAmount: 'glomo-step-loan-offer-spherica #loanOffer .btn-clicked',
                checkboxCreditBureau: 'cells-step-card-checklist-contract-spherica cells-checkbox-button-spherica:nth-of-type(1)',
                checkboxTermsConditions: 'cells-step-card-checklist-contract-spherica cells-checkbox-button-spherica:nth-of-type(2)',
                checkboxAutomaticPayment: 'cells-step-card-checklist-contract-spherica cells-checkbox-button-spherica:nth-of-type(3)',
                btnAcceptConditions: 'cells-step-card-checklist-contract-spherica .primary',
                btnAcceptSummary: 'cells-summary-view-spherica #collapser',
                btnTooltipCommission: 'glomo-step-loan-offer-spherica #loanOffer .list-info-keys #tax2 cells-atom-icon-spherica',
                btnTooltipCat: 'glomo-step-loan-offer-spherica #loanOffer .list-info-keys #tax3 cells-atom-icon-spherica',
                btnCloseCallMeBack: 'cells-molecule-header-spherica #tooltipContent button',
                btnCallMeBack: 'glomo-step-loan-offer-spherica #loanOffer #section-fixed cells-st-button.link',
                textTerms: 'glomo-step-loan-offer-spherica #loanOffer .amount-input .key-value-term',
                historyCredit: 'cells-list-file-spherica div.list-file-container div.body div.header-container div.title-box [data-id="01"]',
                tagTerms: 'cells-step-card-checklist-contract-spherica #checklistStepContainer .cells-step__header-title',
                contractAdvance: 'cells-list-file-spherica div.list-file-container div.body [data-id="02"]',
                dialogOperations: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements: {
                            contentTitle: 'cells-bottom-modal-spherica#modal .content-container div',
                            iconHelp: 'cells-bottom-modal-spherica#modal .icon-container cells-atom-icon-spherica',
                            information: '#modal div.templates-wrapper .paragraph-template'
                        }
                    }
                ],
                sticky: 'glomo-step-loan-offer-spherica #loanOffer #section-sticky .currency-style .amount-wrapper .integer',
                comparativeTable: 'glomo-step-loan-offer-spherica #loanOffer .list-info-keys glomo-panel-comparative-spherica div.division-comparative-white',
                bureauButton: 'cells-step-card-checklist-contract-spherica .full .file-list-section div[data-id="01"]',
                signConnector: CellsSignOperationModalSpherica
            },
            requiredElements: [
                'header', 'stepDetailOffer'
            ]
        });

    }

    async _screenValidation({item, value} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
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
                await this.sticky.waitForDisplayed({timeout: config.wait.XXL});
                await this.sticky.waitForText({text: value});
                break;
            case 'comparative table':
                await this.comparativeTable.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'tag terms':
                await this.tagTerms.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'history credit':
                await this.historyCredit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract advance':
                await this.contractAdvance.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'checkbox credit':
                await this.checkboxCreditBureau.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'checkbox terms':
                await this.checkboxTermsConditions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'checkbox payment':
                await this.checkboxAutomaticPayment.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header modal':
                await this.dialogOperations.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.dialogOperations.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.dialogOperations.titles.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description':
                await this.dialogOperations.descriptions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'understood button':
                await this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async _modalElementValidation({item, value, ...args} = {}) {
        switch (item.toLowerCase()) {
            case 'cat header':
                if (!this.isSpherica()) {
                    await this.dialogOperations.elementValidation({item: this.dialogOperations.HEADER}, {forceScroll: true});
                }
                break;
            case 'icon help':
                await this.dialogOperations.additionalElements.iconHelp.waitForDisplayed();
                break;
            case 'information':
                await this.dialogOperations.additionalElements.information.waitForDisplayed();
                break;
            case 'accept button':
                if (!this.isSpherica()) {
                    await this.dialogOperations.elementValidation({item: this.dialogOperations.ACCEPT_BUTTON}, {forceScroll: true});
                }
                break;
            default:
                await super._modalElementValidation({item, value, ...args});
        }
    }

    async changeValueAmount(amount) {
        await this.amountInput.setValue({value: amount});
        await this.textTerms.waitForClickable({timeout: config.wait.XXL});
        await this.textTerms.click();
    }

    async acceptAmount() {
        await this.btnAcceptAmount.waitForDisplayed({timeout: config.wait.XL});
        await this.btnAcceptAmount.waitForClickable({timeout: config.wait.XXL});
        await this.btnAcceptAmount.click();
    }

    async acceptConditions() {
        await this.checkboxCreditBureau.waitForClickable({timeout: config.wait.XL});
        await this.checkboxTermsConditions.waitForClickable({timeout: config.wait.XL});
        await this. checkboxAutomaticPayment.waitForClickable({timeout: config.wait.XL});
        await this.btnAcceptConditions.waitForClickable({timeout: config.wait.XL});
        await this.checkboxCreditBureau.click();
        await this.checkboxTermsConditions.click();
        await this.checkboxAutomaticPayment.click();
        await this.btnAcceptConditions.click();
    }

    async acceptSummary() {
        await this.btnAcceptSummary.waitForDisplayed({timeout: config.wait.XL});
        await this.btnAcceptSummary.waitForClickable({timeout: config.wait.XL});
        await this.btnAcceptSummary.click();
    }

    async tooltipCommissionInformation() {
        await this.btnTooltipCommission.waitForClickable({timeout: config.wait.XL});
        await this.btnTooltipCommission.click();
    }

    async tooltipCatInformation() {
        await this.btnTooltipCat.waitForClickable({timeout: config.wait.XL});
        await this.btnTooltipCat.click();
    }

    async acceptAllConditions() {
        await this.acceptAmount();
        await this.acceptConditions();
        await this.acceptSummary();
    }

    async otpSms() {
        await this.signConnector.isLoaded();
        await this.signConnector.setPassword(12345678);
        await this.signConnector.confirmPassword();
    }

    async showModalBureau() {
        await this.bureauButton.waitForDisplayed({timeout: config.wait.XL});
        await this.bureauButton.waitForClickable({timeout: config.wait.XL});
        await this.bureauButton.click();
    }

    async closeCallMeBack() {
        await this.btnCloseCallMeBack.waitForClickable({timeout: config.wait.XL});
        await this.btnCloseCallMeBack.click();
    }

    async acceptTermsAndConditions() {
        await this.acceptAmount();
        await this.acceptConditions();
    }

    async reviewCreditHistory() {
        await this.historyCredit.waitForClickable({timeout: config.wait.L});
        await this.historyCredit.click();
    }

    async acceptButtonHistory(){
        await this.dialogOperations.acceptBtn.waitForClickable({timeout: config.wait.L});
        await this.dialogOperations.acceptBtn.click();
    }

}

export default new OcPayrollAdvance();
