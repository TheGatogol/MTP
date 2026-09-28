import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import deviceAccessPage from '../../pages/deviceAccess/deviceAccessPage';

// Page Objects IDs
const DEVICE_ACCESS_PAGE = deviceAccessPage.getId();

class DeviceAccessCall extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'deviceAccess/deviceAccessCall', parentNavigation: 'deviceAccess/deviceAccessPage'});
    }
    async go_impl() {
        switch (currentPage.getId()) {
            case DEVICE_ACCESS_PAGE:
                await deviceAccessPage.continue();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new DeviceAccessCall();

