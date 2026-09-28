import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

// Pages
import scheduledBillPayments from '../../pages/scheduledBillPayments/scheduledBillPayments';

// Page Objects IDs
const SCHEDULED_BILL_PAYMENTS_PAGE = scheduledBillPayments.getId();

class ScheduledBillPaymentsBack extends AbstractGlomoNavigation {
    constructor() {
        super({ page: 'billPaymentsHome/billPaymentsHome', parentNavigation: 'scheduledBillPayments/scheduledBillPayments' });
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case SCHEDULED_BILL_PAYMENTS_PAGE:
                await scheduledBillPayments.confirmExit();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ScheduledBillPaymentsBack();
