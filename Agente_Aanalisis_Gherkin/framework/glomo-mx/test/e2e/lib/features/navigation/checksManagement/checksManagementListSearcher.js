import {NotPathNavigationError} from '@csqe/radish';

import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import checksManagementList from '../../pages/checksManagement/checksManagementList';

const CHECKS_MANAGEMENT_LIST =  checksManagementList.getId();

class ChecksManagementAddCheck extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'checksManagement/checksManagementListSearcher', parentNavigation: 'checksManagement/checksManagementList'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CHECKS_MANAGEMENT_LIST:
                await checksManagementList.addElement();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ChecksManagementAddCheck();
