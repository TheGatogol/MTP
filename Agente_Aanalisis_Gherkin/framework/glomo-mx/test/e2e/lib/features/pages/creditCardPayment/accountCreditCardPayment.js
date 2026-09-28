import { ScreenValidationKeyNotFound, ElementNotFoundError, page } from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import CellsOperationSummary from '../../components/cells-operation-summary';
import CellsOperationSummarySpherica from '../../components/cells-operation-summary-spherica';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import CellsStepEnterAmountCreditCardSpherica from '../../components/cells-step-enter-amount-credit-card-spherica';

@page('AccountCreditCardPayment')
class AccountCreditCardPayment extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-accountCreditCardPayment[state="active"]',
            elements: {

                header: 'cells-molecule-header.header--core div.main-container h1#titleZone',
                closeButton: 'cells-molecule-header.header--core div.right-container button#btnRight',
                btnContinue: 'cells-step-enter-amount-credit-card cells-step#stepContainer cells-st-button#singleDebtContinueButton button.continue__button',
                btnFirstAccount: 'cells-step-product-selector#accounts cells-step#stepContainer div.full cells-product-selector#selector div.product-wrapper cells-product-item[data-id="Uvn6wi1Rh6Bj7bV2TDgN-jc2JMRWGsk-d6oel9ViWPK5gjJBOwWQMQ"]',
                btnChangeAccount: 'cells-step-product-selector#accounts cells-step#stepContainer div.cells-step__header cells-st-button#changeBtn button.cells-step__header-button--text',
                btnChangeCreditCard: 'cells-step-product-selector#cards cells-step#stepContainer  div.cells-step__header cells-st-button#changeBtn button.cells-step__header-button--text',
                viewMoreCards: 'cells-step-product-selector#cards cells-step#stepContainer div.cells-step__header cells-st-button#changeViewAllBtn button.cells-step__header-button--text-all',
                listAccounts: '#accounts #selector',
                accountInformation: 'cells-step-product-selector#accounts cells-step#stepContainer div[class="filled"] cells-product-item#item',
                payCardBlock: 'cells-step-product-selector.card-credit-card-payment-account-selector cells-step#stepContainer',
                myCreditCard: 'cells-step-product-selector#cards cells-step#stepContainer div.full cells-product-selector#selector div.product-wrapper cells-product-item[data-index="0"]',
                paymentMethods: 'cells-step-enter-amount-credit-card.not-border-bottom cells-step#stepContainer div.full',
                minimumAmount: 'cells-step-enter-amount-credit-card cells-step#stepContainer div.full ul.list cells-radio-group#debtsRadioGroup cells-radio-button div.amount-debts-radio-button span[data-selector="debt-selection-step-label-MINIMUM_AMOUNT"]',
                amountInterestPayment: 'cells-step-enter-amount-credit-card cells-step#stepContainer div.full ul.list cells-radio-group#debtsRadioGroup cells-radio-button div.amount-debts-radio-button span[data-selector="debt-selection-step-label-MINIMUM_AMOUNT_TO_AVOID_INTEREST_PAYMENT"]',
                otherPayment: 'cells-step-enter-amount-credit-card #debtsRadioGroup cells-radio-button span[data-selector="debt-selection-step-label-OTHER_AMOUNT"]',
                totalDebt: 'cells-step-enter-amount-credit-card #debtsRadioGroup cells-radio-button span[data-selector="debt-selection-step-label-TOTAL_DEBT_AMOUNT"]',
                otherImportInput: 'cells-step-enter-amount-credit-card cells-step#stepContainer cells-enter-limited-amount#localOtherAmount cells-molecule-amount-input#enterAmountInput label#label input#input',
                summary: {
                    component: {
                        ComponentClass: CellsOperationSummary
                    }
                },
                paymentMethodDisable: 'cells-step-enter-amount-credit-card #debtsRadioGroup cells-radio-button span[data-selector="debt-selection-step-label-TOTAL_DEBT_AMOUNT"]',
                messageInsufficientBalance: 'cells-step-enter-amount-credit-card cells-step#stepContainer div.full cells-icon-message.over-max-limit-disclaimer span.message',
                insufficientBalanceAccountMessage: 'cells-step-product-selector cells-step#stepContainer div.filled cells-product-item div.text-info'
            },
            elementsSpherica: {
                header: CellsMoleculeHeaderSpherica,
                enterAmount: CellsStepEnterAmountCreditCardSpherica,
                btnFirstAccount: 'cells-step-product-selector-spherica#accounts cells-step-spherica#stepContainer cells-product-selector-spherica#selector cells-product-item-spherica[data-id="Uvn6wi1Rh6Bj7bV2TDgN-jc2JMRWGsk-d6oel9ViWPK5gjJBOwWQMQ"]',
                btnChangeAccount: 'cells-step-product-selector-spherica#accounts cells-step-spherica#stepContainer cells-st-button-spherica#changeBtn button.cells-step__header-button--text',
                btnChangeCreditCard: '[class="amount-debts-radio-button "]',
                viewMoreCards: 'cells-step-product-selector-spherica#cards cells-step-spherica#stepContainer cells-st-button-spherica#changeViewAllBtn button.cells-step__header-button--text-all',
                listAccounts: '#accounts #selector',
                accountInformation: 'cells-step-product-selector-spherica#accounts cells-step-spherica#stepContainer cells-product-item-spherica#item',
                payCardBlock: 'cells-step-product-selector-spherica.card-credit-card-payment-account-selector cells-step-spherica#stepContainer',
                myCreditCard: 'cells-step-product-selector-spherica#cards cells-step-spherica#stepContainer div.full cells-product-selector-spherica#selector div.product-wrapper cells-product-item-spherica[data-index="0"]',
                paymentMethods: 'cells-step-enter-amount-credit-card-spherica.not-border-bottom cells-step-spherica#stepContainer div.full',
                minimumAmount: 'cells-step-enter-amount-credit-card-spherica cells-step-spherica#stepContainer cells-radio-group-spherica#debtsRadioGroup cells-radio-button-spherica span[data-selector="debt-selection-step-label-MINIMUM_AMOUNT"]',
                amountInterestPayment: 'cells-step-enter-amount-credit-card-spherica cells-step-spherica#stepContainer div.full ul.list cells-radio-group-spherica#debtsRadioGroup cells-radio-button-spherica div.amount-debts-radio-button span[data-selector="debt-selection-step-label-MINIMUM_AMOUNT_TO_AVOID_INTEREST_PAYMENT"]',
                otherPayment: 'cells-step-enter-amount-credit-card-spherica #debtsRadioGroup cells-radio-button-spherica span[data-selector="debt-selection-step-label-OTHER_AMOUNT"]',
                totalDebt: 'cells-step-enter-amount-credit-card-spherica #debtsRadioGroup cells-radio-button-spherica span[data-selector="debt-selection-step-label-TOTAL_DEBT_AMOUNT"]',
                otherImportInput: 'cells-step-enter-amount-credit-card-spherica cells-step-spherica#stepContainer cells-enter-limited-amount-spherica#localOtherAmount cells-molecule-amount-input-spherica#enterAmountInput label#label input#input',
                summary: CellsOperationSummarySpherica,
                paymentMethodDisable: 'cells-step-enter-amount-credit-card-spherica #debtsRadioGroup cells-radio-button-spherica span[data-selector="debt-selection-step-label-TOTAL_DEBT_AMOUNT"]',
                messageInsufficientBalance: 'cells-step-enter-amount-credit-card-spherica cells-step-spherica#stepContainer div.full cells-icon-message-spherica.over-max-limit-disclaimer span.message',
                insufficientBalanceAccountMessage: 'cells-step-product-selector-spherica cells-step-spherica#stepContainer div.filled cells-product-item-spherica div.text-info'
            },
            requiredElements: [
                'header',
            ],
        });
    }

    async confirmSummary() {
        await this.summary.waitForDisplayed({timeout: config.wait.L});
        await this.summary.confirm();
    }

    async selectCreditCard() {
        await this.myCreditCard.waitForClickable({timeout: config.wait.L});
        await this.myCreditCard.click();
        await this.waitUntilSpinnerVeil({
            timeoutToAppear: config.wait.XS,
            timeoutToDisappear: config.wait.L
        });
    }

    async continuePayment() {
        await this.enterAmount.continueBtn.waitForClickable({timeout: config.wait.L});
        await this.enterAmount.continueBtn.click();
    }

    async changeCreditCard() {
        await this.btnChangeCreditCard.waitForClickable({timeout: config.wait.L});
        await this.btnChangeCreditCard.click();
    }

    async selectChangeAccount() {
        await this.btnFirstAccount.waitForClickable({timeout: config.wait.L});
        await this.btnFirstAccount.click();
        await this.btnChangeAccount.waitForAnimation({timeout: config.wait.M});
        await this.btnChangeAccount.scrollIntoView({block: 'start'});
        await this.btnChangeAccount.click();
    }

    async _screenValidation({item, value} = {}) {

        const errorMessage = `${item} is not visible`;
        const reverseWaitForVisible = value === 'not visible';

        switch (item.toLowerCase()) {
            case 'close button':
                await this.header.waitForDisplayed({isBtnRight: true, isBtnLeft: false});
                break;
            case 'header':
                await this.header.waitForDisplayed();
                break;
            case 'list accounts':
                await this.listAccounts.waitForDisplayed({timeout: config.wait.M, errorMessage, reverse: reverseWaitForVisible});
                break;
            case 'account information':
                await this.accountInformation.waitForDisplayed({timeout: config.wait.M, errorMessage, reverse: reverseWaitForVisible});
                break;
            case 'pay card block':
                await this.payCardBlock.waitForVisible({timeout: config.wait.M, errorMessage, reverse: reverseWaitForVisible});
                break;
            case 'payment methods':
                await this.paymentMethods.waitForDisplayed({timeout: config.wait.M, errorMessage, reverse: reverseWaitForVisible});
                await this._disableCards();
                break;
            case 'payment method disable':
                await this.paymentMethodDisable.waitForDisplayed({timeout: config.wait.L, errorMessage, reverse: reverseWaitForVisible});
                await this.paymentMethodDisable.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message insufficient balance':
                await this.messageInsufficientBalance.waitForDisplayed({timeout: config.wait.L, errorMessage, reverse: reverseWaitForVisible});
                break;
            case 'cards block':
                await this._disableCards();
                break;
            case 'payment methods button':
                await this.enterAmount.continueBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});

        }
    }

    async selectedPaymentMethod(paymentMethod) {
        const amount = '500';
        switch (paymentMethod.toLowerCase()) {
            case 'minimum amount':
                await this.minimumAmount.waitForClickable({timeout: config.wait.L});
                await this.minimumAmount.click();
                break;
            case 'avoid interest payment':
                await this.amountInterestPayment.waitForClickable({timeout: config.wait.L});
                await this.amountInterestPayment.click();
                break;
            case 'total debt':
                await this.totalDebt.waitForClickable({timeout: config.wait.L});
                await this.totalDebt.click();
                break;
            case 'other import':
                await this.otherPayment.waitForClickable({timeout: config.wait.L});
                await this.otherPayment.click();
                await this.otherImportInput.waitForDisplayed({timeout: config.wait.L});
                await this.otherImportInput.click();
                await this.otherImportInput.setValue({value: amount});
                break;
            default:
                throw new ElementNotFoundError({key: paymentMethod, args: arguments[0]});
        }
    }

    async _disableCards() {
        await this.payCardBlock.waitForDisplayed({timeout: config.wait.M});
    }
}

export default new AccountCreditCardPayment();
