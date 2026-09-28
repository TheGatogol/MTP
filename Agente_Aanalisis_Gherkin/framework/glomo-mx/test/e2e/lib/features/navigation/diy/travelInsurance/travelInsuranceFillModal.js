import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import travelInsuranceTravelInfoModal from '../../../pages/diy/travelInsurance/travelInsuranceTravelInfoModal';
// Page Objects IDs
const TRAVEL_INSURANCE_INFO_MODAL = travelInsuranceTravelInfoModal.getId();

class TravelInsuranceFillModal extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/travelInsurance/travelInsuranceStep3', parentNavigation: 'diy/travelInsurance/travelInsuranceTravelInfoModal'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case TRAVEL_INSURANCE_INFO_MODAL:
                await travelInsuranceTravelInfoModal.fillFormTravelUser();
                await currentPage.waitUntilSpinnerVeil();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new TravelInsuranceFillModal();
