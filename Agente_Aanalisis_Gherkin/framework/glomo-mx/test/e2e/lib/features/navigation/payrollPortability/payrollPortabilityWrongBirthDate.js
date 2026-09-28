import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';
import payrollPortabilityPage from '../../pages/payrollPortability/payrollPortability';

const PAYROLL_PORTABILITY = payrollPortabilityPage.getId();

class PayrollPortabilityWrongBirthDate extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'payrollPortability/payrollPortabilityWrongBirthDate', parentNavigation: 'payrollPortability/payrollPortability'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case PAYROLL_PORTABILITY:
                await payrollPortabilityPage.selectBirthDate(false);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new PayrollPortabilityWrongBirthDate();
