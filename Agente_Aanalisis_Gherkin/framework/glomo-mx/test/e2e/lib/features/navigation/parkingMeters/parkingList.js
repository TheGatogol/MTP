import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import topUp from '../../pages/operationals/topUp';

// Page Objects IDs
const TOP_UP = topUp.getId();

class ParkingList extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'parkingMeters/parkingList', parentNavigation: 'selectOperations/topUp'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case TOP_UP:
                await topUp.accessToOperativeParkingMeters();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ParkingList();
