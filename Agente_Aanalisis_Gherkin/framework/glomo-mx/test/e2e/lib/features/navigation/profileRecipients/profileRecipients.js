import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import dashboard from '../../pages/dashboard/dashboard';
import profilePage from '../../pages/profile/profile';

// Page Objects IDs
const DASHBOARD = dashboard.getId();
const PROFILE = profilePage.getId();

class ProfileRecipients extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'profileRecipients/profileRecipients', parentNavigation: 'profile'});
    }

    async go_impl({access}= {}) {
        switch (currentPage.getId()) {
            case PROFILE:
                await profilePage.access({functionality: 'edit recipients'});
                break;
            case DASHBOARD:
                await dashboard.accessContractProductsSectionProfileRecipients(access);
                break;
            default:
                throw new NotPathNavigationError();

        }
    }
}
export default new ProfileRecipients();
