import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
//Components
import CellsAtomAmountSpherica from '../../../components/cells-atom-amount-spherica';
import CellsIconMessage from '../../../components/cells-icon-message';
import CellsMoleculeHeaderSpherica from '../../../components/cells-molecule-header-spherica';
import CellsProductItemSpherica from '../../../components/cells-product-item-spherica';
import CellsStepProductSelectorSpherica from '../../../components/cells-step-product-selector-spherica';
import GlomoAlertManagerSpherica from '../../../components/glomo-alert-manager-spherica';
@page()
class BillPaymentsSummary extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-billPayments[state="active"]',
            elements: {
                header: CellsMoleculeHeaderSpherica,
                serviceLabel: CellsStepProductSelectorSpherica,
                amountLabel: CellsAtomAmountSpherica,
                accountLabel: CellsProductItemSpherica,
                infoMessage: CellsIconMessage,
                summaryView: 'cells-summary-view-spherica',
                showConfirmBtn: 'cells-summary-view-spherica #collapser div.cells-st-button-spherica-container cells-st-button-spherica[variant="primary"]',
                sidebarButton: '[slot=app__header] #btnRight',

                //Summary section
                commissionLabel: '#operationTotal p.cells-summary-view--commission',
                conceptLabel: 'cells-step-concept-spherica div h2',
                confirmButton: 'cells-step-concept-spherica #continueBtn button',
                continueStep2: '#stepContainer div.full div.element-list-button__full cells-st-button-spherica button',
                continueStep3: 'cells-step-concept-spherica #continueBtn button',
                crossButton: 'cells-molecule-header-spherica #btnRight cells-atom-icon',
                editAmount: 'cells-step-enter-amount-bill-payments-spherica #stepContainer #changeBtn button',
                editConcept: 'cells-step-concept-spherica #stepContainer #changeBtn button',
                inputAmount: 'cells-step-enter-amount-bill-payments-spherica #cellsEnterLimitedAmount #input',
                serviceStep: 'cells-step-bill-payment-service-selector-spherica-mx #stepContainer #changeBtn button',
                inputConcept: '#conceptInput #input',

                //Success screen
                exitButton: 'cells-successful-response-spherica #primaryBtn',

                exitModal: GlomoAlertManagerSpherica
            },
            requiredElements: ['summaryView', 'header']
        });
    }

    async retryModal() {
        await this.exitModal.acceptBtn.waitForClickable();
        await this.exitModal.acceptBtn.click();
    }

    async addAmount(amount = '299') {
        await this.inputAmount.waitForDisplayed({timeout: config.wait.L});
        await this.inputAmount.setValue({value: amount, slow: true});
        await this.continueStep2.waitForClickable({timeout: config.wait.L});
        await this.continueStep2.click();
    }

    async confirmPayment(otp = '11111111') {
        await this.showConfirmBtn.waitForDisplayed({timeout: config.wait.L});
        await this.showConfirmBtn.waitForClickable({timeout: config.wait.L});
        await this.showConfirmBtn.click();
        await this.fillOtp(otp);
    }

    async changeAmount() {
        await this.editAmount.waitForDisplayed({timeout: config.wait.L});
        await this.editAmount.waitForClickable({timeout: config.wait.L});
        await this.editAmount.click();
        await this.addAmount();
    }

    async cancelPayment() {
        await this.crossButton.waitForClickable({timeout: config.wait.L});
        await this.crossButton.click();
        await this.dialogOperations.confirmDialog();
    }

    async changeConcept(concept = 'Cambio') {
        await this.serviceStep.waitForDisplayed({timeout: config.wait.L});
        await this.serviceStep.waitForClickable({timeout: config.wait.L});
        await this.serviceStep.click();
        await this.editConcept.waitForAnimation({timeout: config.wait.L});
        await this.editConcept.waitForClickable({timeout: config.wait.L});
        await this.editConcept.click();
        await this.inputConcept.waitForDisplayed({timeout: config.wait.L});
        await this.inputConcept.waitForClickable({timeout: config.wait.L});
        await this.inputConcept.setValue({value: concept, slow: true});
        await this.confirmButton.click();
    }

    async exitSuccessScreen() {
        await this.exitButton.waitForClickable({timeout: config.wait.L});
        await this.exitButton.click();
    }

    async withoutConcept() {
        await this.continueStep3.waitForClickable({timeout: config.wait.L});
        await this.continueStep3.click();
        await this.showConfirmBtn.waitForClickable({timeout: config.wait.L});
        await this.showConfirmBtn.click();
    }

    async changeAmountExceedsLimit(amount = '111111111') {
        await this.editAmount.waitForClickable({timeout: config.wait.S});
        await this.editAmount.click();
        await this.inputAmount.waitForDisplayed({timeout: config.wait.S});
        await this.inputAmount.setValue({value: amount, slow: true});
    }

    async _modalElementValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'title':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.MAIN_TEXT});
                break;
            case 'accept button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.ICON_MESSAGE});
                break;
            default:
                await super._modalElementValidation({item});
        }
    }

    async openModalToExitFlow() {
        await this.sidebarButton.waitForDisplayed({timeout: config.wait.M});
        await this.sidebarButton.click();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary':
                await this.summaryView.scrollIntoView();
                await this.summaryView.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'alert message':
                await this.infoMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount label':
                await this.amountLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'concept label':
                await this.conceptLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm button':
                await this.confirmButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'commission label':
                await this.commissionLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'origin account label':
                await this.accountLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'service label':
                await this.serviceLabel.titleStepCollapsed.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit dashboard':
            case 'call bbva line button':
                await this.exitModal.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue in the flow':
            case 'exit modal button':
                await this.exitModal.cancelBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new BillPaymentsSummary();
