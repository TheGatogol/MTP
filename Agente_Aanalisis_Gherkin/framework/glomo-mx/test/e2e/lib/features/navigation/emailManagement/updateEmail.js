import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import profilePage from '../../pages/profile/profile';

// Page Objects IDs
const PROFILE = profilePage.getId();

class UpdateEmail extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'emailManagement/updateEmail', parentNavigation: 'profile'});
    }

    async go_impl({ add }) {
        switch (currentPage.getId()) {
            case PROFILE:
                if (add) {
                    await profilePage.access({ functionality: 'add mail'});
                } else {
                    await profilePage.access({ functionality: 'edit mail'});
                }
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new UpdateEmail();
