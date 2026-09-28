import AbstractGlomoNavigation from './abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import profilePage from '../pages/profile/profile';
const PROFILE = profilePage.getId();

class Unsubscribe extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'profile/unsubscribe', parentNavigation: 'profile'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case PROFILE:
                await profilePage.accessToUnsubscribe();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new Unsubscribe();
