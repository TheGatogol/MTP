import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import payrollAccountLinkBenefits from '../../../pages/payrollAccount/link/payrollAccountLinkBenefits';

// Page Objects IDs
const PAYROLL_ACCOUNT_BENEFITS = payrollAccountLinkBenefits.getId();

class PayrollAccountLinkBenefits extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'payrollAccount/link/payrollAccountLinkSuccess', parentNavigation: 'payrollAccount/link/payrollAccountLinkBenefits'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case PAYROLL_ACCOUNT_BENEFITS:
                await payrollAccountLinkBenefits.completeRequestPayrollLink({code: 1});
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new PayrollAccountLinkBenefits();
