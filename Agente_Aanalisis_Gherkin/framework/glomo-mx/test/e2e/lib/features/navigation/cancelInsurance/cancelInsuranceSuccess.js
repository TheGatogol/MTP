import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import cancelInsurance from '../../pages/cancelInsurance/cancelInsurance';

// Page Objects IDs
const CANCEL_INSURANCE = cancelInsurance.getId();

class CancelInsuranceSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'cancelInsurance/cancelInsuranceSuccess', parentNavigation: 'cancelInsurance/cancelInsurance'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CANCEL_INSURANCE:
                await currentPage.finishProcess();
                await currentPage.fillOtp('11111111');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CancelInsuranceSuccess();
