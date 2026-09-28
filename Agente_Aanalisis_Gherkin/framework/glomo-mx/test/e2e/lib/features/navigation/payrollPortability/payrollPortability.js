import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

//Page
import payrollAccount from '../../pages/payrollAccount/payrollAccount';
import proceedingsPage from '../../pages/proceedings/proceedings';

//Page Object IDs
const PAYROLL_ACCOUNT = payrollAccount.getId();
const PROCEEDINGS_PAGE = proceedingsPage.getId();

class PayrollPortability extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'payrollPortability/payrollPortability', parentNavigation: 'payrollAccount/payrollAccount'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case PAYROLL_ACCOUNT:
                await payrollAccount.accessChangePayroll();
                break;
            case PROCEEDINGS_PAGE:
                await proceedingsPage.continueProcess();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new PayrollPortability();
