import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

//Page
import accountCreditCardPaymentPage from '../../pages/creditCardPayment/accountCreditCardPayment';
import cardCreditCardPaymentPage from '../../pages/creditCardPayment/cardCreditCardPayment';
import frequentCardCreditCardPayment from '../../pages/frequentIntelligentCreditCardPayment/ocFrequentOperationsCreditCardPayment';

//Page OBject IDs
const ACCOUNT_CREDIT_CARD_PAYMENT = accountCreditCardPaymentPage.getId();
const CARD_CREDIT_CARD_PAYMENT = cardCreditCardPaymentPage.getId();
const FREQUENT_CREDIT_CARD_PAYMENT = frequentCardCreditCardPayment.getId();

class OperationReceipt extends AbstractGlomoNavigation {
    constructor() {
        super({
            page: 'creditCardPayment/operationReceipt',
            parentNavigation: 'creditCardPayment/accountCreditCardPayment'
        });
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ACCOUNT_CREDIT_CARD_PAYMENT:
                await accountCreditCardPaymentPage.confirmSummary();
                await this.page.waitUntilSpinnerVeil({
                    timeoutToAppear: config.wait.XS,
                    timeoutToDisappear: config.wait.XXXL
                });
                break;
            case CARD_CREDIT_CARD_PAYMENT:
                await cardCreditCardPaymentPage.confirmSummary();
                break;
            case FREQUENT_CREDIT_CARD_PAYMENT:
                await frequentCardCreditCardPayment.confirmSummary();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OperationReceipt();
