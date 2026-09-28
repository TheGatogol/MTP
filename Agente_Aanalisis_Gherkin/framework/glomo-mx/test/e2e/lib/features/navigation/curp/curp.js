import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import profilePage from '../../pages/profile/profile';

// Page Objects IDs
const PROFILE = profilePage.getId();

class Curp extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'curp/curp', parentNavigation: 'profile'});
    }

    async go_impl({add} = {}) {
        switch (currentPage.getId()) {
            case PROFILE:
                await profilePage.access({functionality: add ? 'edit curp' : 'add curp'});
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new Curp();
