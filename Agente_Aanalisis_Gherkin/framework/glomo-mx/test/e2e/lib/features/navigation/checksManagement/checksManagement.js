import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import checksManagementAddCheck from '../../pages/checksManagement/checksManagementAddCheck';
import checksManagementList from '../../pages/checksManagement/checksManagementList';

const CHECKS_MANAGEMENT_ADD_CHECK = checksManagementAddCheck.getId();
const CHECKS_MANAGEMENT_LIST =  checksManagementList.getId();

class ChecksManagement extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'checksManagement/checksManagement', parentNavigation: 'checksManagement/checksManagementList'});
    }

    async go_impl({saveCheckData = true} = {}) {
        switch (currentPage.getId()) {
            case CHECKS_MANAGEMENT_LIST:
                await checksManagementList.addElement();
                break;
            case CHECKS_MANAGEMENT_ADD_CHECK:
                if(saveCheckData){
                    await currentPage.saveCheck();
                } else {
                    await currentPage.closeOperative();
                }
                break;
            default:
                throw new NotPathNavigationError();
        }
        this.page.resetCurrentStep();
    }
}

export default new ChecksManagement();
