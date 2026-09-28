import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import parkingList from '../../pages/parkingMeters/parkingList';

// Page Objects IDs
const PARKING_LIST = parkingList.getId();

class ParkingInfoList extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'parkingMeters/parkingInfoList', parentNavigation: 'parkingMeters/parkingList'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case PARKING_LIST:
                await parkingList.accessParkingFaqs();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ParkingInfoList();
