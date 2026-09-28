import AbstractGlomoNavigation from './abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import profilePage from '../pages/profile/profile';

// Page Objects IDs
const PROFILE = profilePage.getId();

class ProfileAvatar extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'profile/profileAvatar', parentNavigation: 'profile'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case PROFILE:
                await profilePage.access({functionality: 'Change Avatar'});
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}
export default new ProfileAvatar();
