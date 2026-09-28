import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import parkingList from '../../pages/parkingMeters/parkingList';
import parkingEnrollmentSuccess from '../../pages/parkingMeters/parkingEnrollmentSuccess';

// Page Objects IDs
const PARKING_LIST = parkingList.getId();
const PARKING_ENROLLMENT_SUCCESS = parkingEnrollmentSuccess.getId();

class ParkingRecharge extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'parkingMeters/parkingRecharge', parentNavigation: 'parkingMeters/parkingList'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case PARKING_LIST:
                await parkingList.accessToRecharge();
                break;
            case PARKING_ENROLLMENT_SUCCESS:
                await parkingEnrollmentSuccess.accessToRecharge();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ParkingRecharge();
