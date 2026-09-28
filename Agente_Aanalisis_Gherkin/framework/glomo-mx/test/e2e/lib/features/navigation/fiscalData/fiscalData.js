import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

//Page
import profilePage from '../../pages/profile/profile';

//Page object ID
const PROFILE = profilePage.getId();

class FiscalData extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'fiscalData/fiscalData', parentNavigation: 'profile'});
    }

    async go_impl() {
        switch(currentPage.getId()) {
            case PROFILE:
                await profilePage.enterFiscalData();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FiscalData();
