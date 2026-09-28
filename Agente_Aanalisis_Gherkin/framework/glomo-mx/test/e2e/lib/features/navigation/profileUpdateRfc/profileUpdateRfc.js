import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import profilePage from '../../pages/profile/profile';

const PROFILE = profilePage.getId();

class ProfileUpdateRfc extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'profileUpdateRfc/profileUpdateRfc', parentNavigation: 'profile'});
    }

    async go_impl() {
        switch(currentPage.getId()) {
            case PROFILE:
                await profilePage.goToUpdateRfc();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ProfileUpdateRfc();
