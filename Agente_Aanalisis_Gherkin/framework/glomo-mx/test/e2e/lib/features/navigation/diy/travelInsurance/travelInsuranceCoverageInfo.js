import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import travelInsuranceStep1Page from '../../../pages/diy/travelInsurance/travelInsuranceStep1';
// Page Objects IDs
const TRAVEL_INSURANCE_STEP_1 = travelInsuranceStep1Page.getId();

class TravelInsuranceCoverageInfo extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/travelInsurance/travelInsuranceCoverageInfo', parentNavigation: 'diy/travelInsurance/travelInsuranceStep1'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case TRAVEL_INSURANCE_STEP_1:
                await travelInsuranceStep1Page.showCoverageReport();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new TravelInsuranceCoverageInfo();
