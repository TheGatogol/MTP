import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import applianceSimulator from '../../pages/applianceSimulator/applianceSimulator';
// Page Objects IDs
const APPLIANCE_SIMULATOR = applianceSimulator.getId();

class IncreaseCardLimit extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'operatives/increaseCardLimit', parentNavigation: 'applianceSimulator/applianceSimulator'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case APPLIANCE_SIMULATOR:
                await applianceSimulator.goToProductAccess();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new IncreaseCardLimit();
