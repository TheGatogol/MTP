import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import scheduledBillPayments from '../../pages/billPaymentsHome/billPaymentsHome';
import carbonFootprintPage from '../../pages/sustainability/carbonFootprintSection';
import billPaymentsDashboard from '../../pages/billPaymentsDashboard/billPaymentsDashboard';

// Page Objects IDs
const SCHEDULED_BILL_PAYMENTS_PAGE = scheduledBillPayments.getId();
const CAR_SIMULATOR = carbonFootprintPage.getId();
const BILL_PAYMENTS_DASHBOARD = billPaymentsDashboard.getId();

class ScheduledBillPayments extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'scheduledBillPayments/scheduledBillPayments', parentNavigation: 'billPaymentsHome/billPaymentsHome'});
    }

    async go_impl({statusId} = {}) {
        switch (currentPage.getId()) {
            case SCHEDULED_BILL_PAYMENTS_PAGE:
                if (statusId === 'editScheduled') {
                    await scheduledBillPayments.selectEditService();
                }
                else {
                    await scheduledBillPayments.accessToScheduledPaymentsDashboard();
                }
                break;
            case CAR_SIMULATOR:
                await carbonFootprintPage.goToSchedulePayReceipts();
                break;
            case BILL_PAYMENTS_DASHBOARD:
                await billPaymentsDashboard.makeSchedulePayment();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ScheduledBillPayments();
