import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import profilePage from '../../pages/profile/profile';
import inAppCrmAdvancedPage from '../../pages/inAppCrmAdvancedPage/inAppCrmAdvancedPage';

// Page Objects IDs
const PROFILE = profilePage.getId();
const IN_APP = inAppCrmAdvancedPage.getId();

class ProfileRecipients extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'profileRecipients/recipientsHelpModal', parentNavigation: 'profile'});
    }
    async go_impl() {
        switch (currentPage.getId()) {
            case PROFILE:
                await profilePage.access({functionality: 'edit recipients'});
                break;
            case IN_APP:
                await inAppCrmAdvancedPage.continueModal();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new ProfileRecipients();
