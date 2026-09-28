import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import CellsMoleculeHeader from '../../components/cells-molecule-header';

@page('multipurchaseReceipt')
class MultipurchaseReceipt extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-financeTransactionMultipurchaseReview[state="active"]',
            elements: {
                // Header
                header: CellsMoleculeHeader,

                operationStatus: '[data-selector="cells-successful-response-title-text"]',
                operationDate: '[data-selector="cells-successful-response-date"]',
                monthlyPayment: '[data-selector="cells-successful-response-charge-amount"]',
                deferredAmount: '[data-selector="finance-transaction-multipurchase-review-deferred-amount"]',
                deferredFee3Months: '[data-selector="finance-transaction-multipurchase-review-deferral-commission-3-months"]',
                deferredFee6Months: '[data-selector="finance-transaction-multipurchase-review-deferral-commission-6-months"]',
                deferredFee9Months: '[data-selector="finance-transaction-multipurchase-review-deferral-commission-9-months"]',
                deferredFee12Months: '[data-selector="finance-transaction-multipurchase-review-deferral-commission-12-months"]',
                deferredFee18Months: '[data-selector="finance-transaction-multipurchase-review-deferral-commission-18-months"]',
                totalDebt: '[data-selector="finance-transaction-multipurchase-review-total-pay"]',
                cardImage: '[data-selector="cells-successful-response-origin-avatar"]',
                cardInfo: 'li[data-selector="cells-successful-response-top-info-"]',
                infoBox1: '[data-selector="cells-successful-response-additional-info-message"][type="info-dark-blue"]',
                infoBox2: '[data-selector="cells-successful-response-additional-info"] [type="info"]',
                shareReceipt: '[data-selector="cells-successful-response-operations"]',
                exitButton: 'cells-confirm-buttons #primaryBtn',
            },
            requiredElements: ['header']
        });
    }

    async _screenValidation({item, value} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.operativeTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'operation status':
                await this.operationStatus.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'operation date':
                await this.operationDate.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'monthly payment':
                await this.monthlyPayment.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'deferred amount':
                await this.deferredAmount.waitForDisplayed({timeout: config.wait.L});
                break;
            case '3 months fee amount':
                await this.deferredFee3Months.waitForDisplayed({timeout: config.wait.L});
                break;
            case '6 months fee amount':
                await this.deferredFee6Months.waitForDisplayed({timeout: config.wait.L});
                break;
            case '9 months fee amount':
                await this.deferredFee9Months.waitForDisplayed({timeout: config.wait.L, reverse: value === 'invisible'});
                break;
            case '12 months fee amount':
                await this.deferredFee12Months.waitForDisplayed({timeout: config.wait.L, reverse: value === 'invisible'});
                break;
            case '18 months fee amount':
                await this.deferredFee18Months.waitForDisplayed({timeout: config.wait.L, reverse: value === 'invisible'});
                break;
            case 'total amount due':
                await this.totalDebt.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'card image':
                await this.cardImage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'card alias':
            case 'card pan4':
                await (await this.cardInfo.elements()).value[0].waitForDisplayed({timeout: config.wait.L});
                break;
            case 'number of months':
                await (await this.cardInfo.elements()).value[1].waitForDisplayed({timeout: config.wait.L});
                break;
            case 'start payment date':
                await (await this.cardInfo.elements()).value[2].waitForDisplayed({timeout: config.wait.L});
                break;
            case 'operation type':
                await (await this.cardInfo.elements()).value[3].waitForDisplayed({timeout: config.wait.L});
                break;
            case 'folio':
                await (await this.cardInfo.elements()).value[4].waitForDisplayed({timeout: config.wait.L});
                break;
            case 'infobox message 1':
                await this.infoBox1.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'infobox message 2':
                await this.infoBox2.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'share receipt':
                await this.shareReceipt.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'exit':
                await this.header.secondaryBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    /**
     * Press retry button for <times>
     * @param times
     */
    async retryModal(times) {
        let n = 1;
        while (n <= times) {
            n++;
            await this.confirmDialog();
        }
    }

    async confirmSimulation() {
        await this.acceptInstallment.waitForDisplayed({timeout: config.wait.L});
        await this.acceptInstallment.waitForClickable({timeout: config.wait.L});
        await this.acceptInstallment.click();
    }

    async leaveTheProcess() {
        await (await this.header.secondaryBtn.elements()).value[0].waitForDisplayed({timeout: config.wait.L});
        await (await this.header.secondaryBtn.elements()).value[0].waitForClickable({timeout: config.wait.L});
        await (await this.header.secondaryBtn.elements()).value[0].click();
    }

    async _modalElementValidation({item, ...args} = {}) {
        switch (item.toLowerCase()) {
            case 'retry button':
            case 'call bbva button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.ACCEPT_BUTTON}, {forceScroll: true});
                break;
            case 'exit button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.CANCEL_BUTTON}, {forceScroll: true});
                break;
            case 'description':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.MAIN_TEXT}, {forceScroll: true});
                break;
            default:
                await super._modalElementValidation({item, ...args});
        }
    }
}

export default new MultipurchaseReceipt();
