import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import travelInsuranceStep5Page from '../../../pages/diy/travelInsurance/travelInsuranceStep5';
// Page Objects IDs
const TRAVEL_INSURANCE_STEP_5 = travelInsuranceStep5Page.getId();

class TravelInsuranceStep5 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/travelInsurance/travelInsuranceStep6', parentNavigation: 'diy/travelInsurance/travelInsuranceStep5'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case TRAVEL_INSURANCE_STEP_5:
                await travelInsuranceStep5Page.confirmInsuranceContract();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new TravelInsuranceStep5();
