import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import travelInsuranceStep4Page from '../../../pages/diy/travelInsurance/travelInsuranceStep4';
// Page Objects IDs
const TRAVEL_INSURANCE_STEP_4 = travelInsuranceStep4Page.getId();

class TravelInsuranceStep4 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/travelInsurance/travelInsuranceStep5', parentNavigation: 'diy/travelInsurance/travelInsuranceStep4'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case TRAVEL_INSURANCE_STEP_4:
                await travelInsuranceStep4Page.acceptTermsAndConditions();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new TravelInsuranceStep4();
