import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import flexibleFinancingDashboard from '../../pages/flexibleFinancing/paymentDashboard';
import debitLineCancel from '../../pages/flexibleFinancing/financeDebitLineCancel';

const FLEXIBLE_FINANCING_DASHBOARD = flexibleFinancingDashboard.getId();
const DEBIT_LINE_CANCEL = debitLineCancel.getId();

class AdvancePayments extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'flexibleFinancing/advancePayments', parentNavigation: 'flexibleFinancing/paymentDashboard'});
    }

    async go_impl({option}) {
        switch(currentPage.getId()) {
            case FLEXIBLE_FINANCING_DASHBOARD:
                switch(option) {
                    case 'pay overdue balance':
                        await flexibleFinancingDashboard.accessOperative('PayOverdueBalance');
                        break;
                    case 'no deferrals':
                    case 'anticipate payments':
                        await flexibleFinancingDashboard.accessOperative('AnticipatePayments');
                        break;
                    case 'monthly payment':
                        await flexibleFinancingDashboard.accessOperative('monthlyPayment');
                        break;
                    default:
                        throw new Error(`${option} button is not available to option to...`);
                }
                break;
            case DEBIT_LINE_CANCEL:
                await debitLineCancel.confirmHalfHelpModal(option);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new AdvancePayments();
