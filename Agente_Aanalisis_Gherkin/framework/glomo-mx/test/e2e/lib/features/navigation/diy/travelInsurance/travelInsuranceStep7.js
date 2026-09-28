import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import travelInsuranceStep6Page from '../../../pages/diy/travelInsurance/travelInsuranceStep6';
// Page Objects IDs
const TRAVEL_INSURANCE_STEP_6 = travelInsuranceStep6Page.getId();

class TravelInsuranceStep6 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/travelInsurance/travelInsuranceStep7', parentNavigation: 'diy/travelInsurance/travelInsuranceStep6'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case TRAVEL_INSURANCE_STEP_6:
                await travelInsuranceStep6Page.confirmInsuranceHiring();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new TravelInsuranceStep6();
