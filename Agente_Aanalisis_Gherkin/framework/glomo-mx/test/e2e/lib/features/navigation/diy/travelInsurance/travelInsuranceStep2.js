import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import travelInsuranceStep1Page from '../../../pages/diy/travelInsurance/travelInsuranceStep1';
// Page Objects IDs
const TRAVEL_INSURANCE_STEP_1 = travelInsuranceStep1Page.getId();

class TravelInsuranceStep2 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/travelInsurance/travelInsuranceStep2', parentNavigation: 'diy/travelInsurance/travelInsuranceStep1'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case TRAVEL_INSURANCE_STEP_1:
                await travelInsuranceStep1Page.enableInsuranceQuotation();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new TravelInsuranceStep2();
