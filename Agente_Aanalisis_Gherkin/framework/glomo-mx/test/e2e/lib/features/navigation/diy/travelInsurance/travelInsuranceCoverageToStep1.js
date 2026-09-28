import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import travelInsuranceCoverageInfoPage from '../../../pages/diy/travelInsurance/travelInsuranceCoverageInfo';
// Page Objects IDs
const TRAVEL_INSURANCE_COVERAGE_INFO = travelInsuranceCoverageInfoPage.getId();

class TravelInsuranceCoverageInfoToStep1 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/travelInsurance/travelInsuranceStep1', parentNavigation: 'diy/travelInsurance/travelInsuranceCoverageInfo'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case TRAVEL_INSURANCE_COVERAGE_INFO:
                await travelInsuranceCoverageInfoPage.confirmOffer();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new TravelInsuranceCoverageInfoToStep1();
