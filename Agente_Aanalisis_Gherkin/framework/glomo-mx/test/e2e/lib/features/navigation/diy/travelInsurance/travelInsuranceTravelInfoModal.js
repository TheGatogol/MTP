import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import travelInsuranceStep2 from '../../../pages/diy/travelInsurance/travelInsuranceStep2';
// Page Objects IDs
const TRAVEL_INSURANCE_STEP_2 = travelInsuranceStep2.getId();

class TravelInsuranceTravelInfoModal extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/travelInsurance/travelInsuranceTravelInfoModal', parentNavigation: 'diy/travelInsurance/travelInsuranceStep2'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case TRAVEL_INSURANCE_STEP_2:
                await travelInsuranceStep2.customerIsTravelerPressed();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new TravelInsuranceTravelInfoModal();
