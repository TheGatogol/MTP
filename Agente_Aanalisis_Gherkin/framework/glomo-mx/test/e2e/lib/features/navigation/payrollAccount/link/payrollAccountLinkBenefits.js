import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import payrollAccountLink from '../../../pages/payrollAccount/link/payrollAccountLink';

// Page Objects IDs
const PAYROLL_ACCOUNT_LINK = payrollAccountLink.getId();

class PayrollAccountLinkBenefits extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'payrollAccount/link/payrollAccountLinkBenefits', parentNavigation: 'payrollAccount/link/payrollAccountLink'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case PAYROLL_ACCOUNT_LINK:
                await payrollAccountLink.showPayrollAccountLinkBenefits();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new PayrollAccountLinkBenefits();
