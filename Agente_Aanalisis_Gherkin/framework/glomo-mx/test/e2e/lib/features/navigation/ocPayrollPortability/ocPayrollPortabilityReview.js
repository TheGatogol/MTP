import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';
import ocPayrollPortabilityPage from '../../pages/ocPayrollPortability/ocPayrollPortability';

const OC_PAYROLL_PORTABILITY = ocPayrollPortabilityPage.getId();

class OcPayrollPortabilityReview extends AbstractGlomoNavigation {
    constructor() {
        super({ page: 'ocPayrollPortability/ocPayrollPortabilityReview', parentNavigation: 'ocPayrollPortability/ocPayrollPortability' });
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case OC_PAYROLL_PORTABILITY:
                await ocPayrollPortabilityPage.signOperation();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OcPayrollPortabilityReview();
