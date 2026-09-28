import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import travelInsuranceStep2Page from '../../../pages/diy/travelInsurance/travelInsuranceStep2';

const TRAVEL_INSURANCE_STEP_2 = travelInsuranceStep2Page.getId();

class TravelInsuranceStep2 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/travelInsurance/travelInsuranceStep3', parentNavigation: 'diy/travelInsurance/travelInsuranceStep2'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case TRAVEL_INSURANCE_STEP_2:
                await travelInsuranceStep2Page.customerIsTravelerPressed();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new TravelInsuranceStep2();
