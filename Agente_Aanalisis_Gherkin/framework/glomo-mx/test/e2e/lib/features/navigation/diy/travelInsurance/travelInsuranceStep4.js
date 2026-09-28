import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import travelInsuranceStep3Page from '../../../pages/diy/travelInsurance/travelInsuranceStep3';

const TRAVEL_INSURANCE_STEP_3 = travelInsuranceStep3Page.getId();

class TravelInsuranceStep3 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/travelInsurance/travelInsuranceStep4', parentNavigation: 'diy/travelInsurance/travelInsuranceStep3'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case TRAVEL_INSURANCE_STEP_3:
                await travelInsuranceStep3Page.selectAccount();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new TravelInsuranceStep3();
