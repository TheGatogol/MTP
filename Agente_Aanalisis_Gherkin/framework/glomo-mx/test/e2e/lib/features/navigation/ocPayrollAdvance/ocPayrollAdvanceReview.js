import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import ocPayrollAdvance from '../../pages/ocPayrollAdvance/ocPayrollAdvance';

const OCPAYROLLADVANCE = ocPayrollAdvance.getId();

class OcPayrollAdvanceReview extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'ocPayrollAdvance/ocPayrollAdvanceReview', parentNavigation: 'ocPayrollAdvance/ocPayrollAdvance'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case OCPAYROLLADVANCE:
                await ocPayrollAdvance.otpSms();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OcPayrollAdvanceReview();
