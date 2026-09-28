import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import parkingInfoList from '../../pages/parkingMeters/parkingInfoList';

// Page Objects IDs
const PARKING_INFO_LIST = parkingInfoList.getId();

class ParkingDetailList extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'parkingMeters/parkingDetailList', parentNavigation: 'parkingMeters/parkingInfoList'});
    }

    async go_impl({question} = {}) {
        switch (currentPage.getId()) {
            case PARKING_INFO_LIST:
                await parkingInfoList.goToParkQuestion(question);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ParkingDetailList();
