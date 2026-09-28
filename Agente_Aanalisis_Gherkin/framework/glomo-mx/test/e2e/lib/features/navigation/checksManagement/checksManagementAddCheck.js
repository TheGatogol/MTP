import {NotPathNavigationError} from '@csqe/radish';

import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import checksManagement from '../../pages/checksManagement/checksManagement';

const CHECKS_MANAGEMENT = checksManagement.getId();

class ChecksManagementAddCheck extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'checksManagement/checksManagementAddCheck', parentNavigation: 'checksManagement/checksManagement'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CHECKS_MANAGEMENT:
                await checksManagement.openAddCheck();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ChecksManagementAddCheck();
