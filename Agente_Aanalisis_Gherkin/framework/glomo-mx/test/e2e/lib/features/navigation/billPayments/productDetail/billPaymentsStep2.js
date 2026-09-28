import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import billPaymentsStep1 from '../../../pages/billPayments/productDetail/billPaymentsStep1';
import billPaymentsSummary from '../../../pages/billPayments/productDetail/billPaymentsSummary';

// Page Objects IDs
const BILL_PAYMENTS_STEP1 = billPaymentsStep1.getId();
const BILL_PAYMENTS_SUMMARY = billPaymentsSummary.getId();

class BillPaymentsStep2 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'billPayments/productDetail/billPaymentsStep2', parentNavigation: 'billPayments/productDetail/billPaymentsStep1'});
    }

    async go_impl({storedService = false, serviceInfo = {}} = {}) {
        const {id, search, billNumber} = serviceInfo;
        switch (currentPage.getId()) {
            case BILL_PAYMENTS_STEP1:
                if(storedService) {
                    await billPaymentsStep1.accessToPayStoredService();
                    await billPaymentsStep1.continueStepOne();
                } else {
                    await billPaymentsStep1.accessToPayNewService();
                    await billPaymentsStep1.findServiceOnList(search, id);
                    await billPaymentsStep1.acceptBillNumber(billNumber);
                }
                break;
            case BILL_PAYMENTS_SUMMARY:
                await billPaymentsSummary.changeAmountExceedsLimit();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new BillPaymentsStep2();
