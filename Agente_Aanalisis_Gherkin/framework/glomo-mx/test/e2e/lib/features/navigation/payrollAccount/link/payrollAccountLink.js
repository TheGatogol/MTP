import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import payrollAccount from '../../../pages/payrollAccount/payrollAccount';

// Page Objects IDs
const PAYROLL_ACCOUNT = payrollAccount.getId();

class PayrollAccountLink extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'payrollAccount/link/payrollAccountLink', parentNavigation: 'payrollAccount/payrollAccount'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case PAYROLL_ACCOUNT:
                await payrollAccount.accessPayrollOnboarding();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new PayrollAccountLink();
