import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import parkingRecharge from '../../pages/parkingMeters/parkingRecharge';

// Page Objects IDs
const PARKING_RECHARGE = parkingRecharge.getId();

class ParkingRechargeSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'parkingMeters/parkingRechargeSuccess', parentNavigation: 'parkingMeters/parkingRecharge'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case PARKING_RECHARGE:
                await parkingRecharge.finishParkingRecharge();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ParkingRechargeSuccess();
