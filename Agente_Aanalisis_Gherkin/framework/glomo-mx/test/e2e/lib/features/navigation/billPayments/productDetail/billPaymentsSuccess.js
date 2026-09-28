import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import billPaymentsSummary from '../../../pages/billPayments/productDetail/billPaymentsSummary';
import reuseOperation from '../../../pages/reuseOperation/reuseOperationsBillPayments';

// Page Objects IDs
const BILL_PAYMENTS_SUMMARY = billPaymentsSummary.getId();
const REUSE_OPERATION = reuseOperation.getId();

class BillPaymentsSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'billPayments/productDetail/billPaymentsSuccess', parentNavigation: 'billPayments/productDetail/billPaymentsSummary'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case BILL_PAYMENTS_SUMMARY:
                await billPaymentsSummary.confirmPayment();
                break;
            case REUSE_OPERATION:
                await reuseOperation.finishProcess();
                await reuseOperation.fillOtp('23452623');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new BillPaymentsSuccess();
