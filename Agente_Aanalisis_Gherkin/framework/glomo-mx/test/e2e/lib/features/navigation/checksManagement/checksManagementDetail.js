import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
const checksManagementList = require('../../pages/checksManagement/checksManagementList').default;

// Page Objects IDs
const CHECKS_MANAGEMENT_LIST= checksManagementList.getId();

class ChecksManagementDetail extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'checksManagement/checksManagementDetail', parentNavigation: 'checksManagement/checksManagementList'});
    }

    async go_impl({status}) {
        switch (currentPage.getId()) {
            case CHECKS_MANAGEMENT_LIST:
                await checksManagementList.goToChecksManagementList(status);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ChecksManagementDetail();
