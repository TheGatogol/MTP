import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import deviceAccessPage from '../../pages/deviceAccess/deviceAccessPage';

// Page Objects IDs
const DEVICE_ACCESS_PAGE = deviceAccessPage.getId();

class DeviceAccessVerification extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'deviceAccess/deviceAccessVerification', parentNavigation: 'deviceAccess/deviceAccessPage'});
    }
    async go_impl() {
        switch (currentPage.getId()) {
            case DEVICE_ACCESS_PAGE:
                await deviceAccessPage.accessContinue();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new DeviceAccessVerification();

