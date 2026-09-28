import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import orangeCardProductDetail from '../../pages/productDetails/orangeCardProductDetail';
import debitLineCancel from '../../pages/flexibleFinancing/financeDebitLineCancel';
import financeTransactionMultipurchaseDebitPostHiring from '../../pages/financeTransactionMultipurchase/financeTransactionMultipurchaseDebitPostHiring';

const ORANGE_CARD_PRODUCT_DETAIL = orangeCardProductDetail.getId();
const DEBIT_LINE_CANCEL = debitLineCancel.getId();
const FINANCE_TRANSACTION_MULTIPURCHASE_DEBIT_POSTHIRING = financeTransactionMultipurchaseDebitPostHiring.getId();

class PaymentDashboard extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'flexibleFinancing/paymentDashboard', parentNavigation: 'card/orangeCardProductDetail'});
    }

    async go_impl() {
        switch(currentPage.getId()) {
            case ORANGE_CARD_PRODUCT_DETAIL:
                await orangeCardProductDetail.accessFlexibleFinancingDashboard();
                break;
            case DEBIT_LINE_CANCEL:
                await debitLineCancel.confirmHalfHelpModal({action: 'confirmLeave'});
                break;
            case FINANCE_TRANSACTION_MULTIPURCHASE_DEBIT_POSTHIRING:
                await financeTransactionMultipurchaseDebitPostHiring.exitScreen();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new PaymentDashboard();
