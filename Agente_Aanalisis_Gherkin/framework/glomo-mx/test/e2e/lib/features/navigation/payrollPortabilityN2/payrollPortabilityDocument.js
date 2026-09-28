import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

//Page
import payrollAccount from '../../pages/payrollAccount/payrollAccount';
import ocAccount from '../../pages/ocAccount/ocAccount';

//Page Object IDs
const PAYROLL_ACCOUNT = payrollAccount.getId();
const OC_ACCOUNT = ocAccount.getId();

class PayrollPortabilityDocument extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'payrollPortabilityN2/payrollPortabilityN2', parentNavigation: 'payrollAccount/payrollAccount'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case PAYROLL_ACCOUNT:
                await payrollAccount.accessChangePayroll();
                break;
            case OC_ACCOUNT:
                await ocAccount.accessToN2ToN4UpgradeAccount();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new PayrollPortabilityDocument()
;
