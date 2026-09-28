import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import dashboard from '../../pages/dashboard/dashboard';

const DASHBOARD = dashboard.getId();

class SmartServicingInternationalTransfer extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'internationalTransfer/InternationalTransferContactsBook', parentNavigation: 'dashboard'});
    }

    async go_impl({typeInterest} = {}) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboard.accessSmartServicingOption(typeInterest, false);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new SmartServicingInternationalTransfer();
