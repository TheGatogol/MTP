import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import parkingEnrollment from '../../pages/parkingMeters/parkingEnrollment';

// Page Objects IDs
const PARKING_ENROLLMENT = parkingEnrollment.getId();

class ParkingEnrollmentSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'parkingMeters/parkingEnrollmentSuccess', parentNavigation: 'parkingMeters/parkingEnrollment'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case PARKING_ENROLLMENT:
                await parkingEnrollment.finishEnrollment();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ParkingEnrollmentSuccess();
