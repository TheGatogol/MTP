import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';
import ocPayrollPortabilityPage from '../../pages/ocPayrollPortability/ocPayrollPortability';

const OC_PAYROLL_PORTABILITY = ocPayrollPortabilityPage.getId();

class OcPayrollPortabilityWrongBirthDate extends AbstractGlomoNavigation {
    constructor() {
        super({ page: 'ocPayrollPortability/ocPayrollPortabilityWrongBirthDate', parentNavigation: 'ocPayrollPortability/ocPayrollPortability' });
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case OC_PAYROLL_PORTABILITY:
                await ocPayrollPortabilityPage.selectBirthDate(false);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OcPayrollPortabilityWrongBirthDate();
