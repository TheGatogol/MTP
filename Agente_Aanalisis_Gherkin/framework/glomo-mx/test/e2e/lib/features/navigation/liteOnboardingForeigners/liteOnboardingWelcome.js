import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import welcomePage from '../../pages/welcome/welcome';

const WELCOME = welcomePage.getId();

class LiteOnboardingWelcome extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'liteOnboardingForeigners/liteOnboardingWelcome', parentNavigation: 'welcome/welcome'});
    }

    async go_impl() {
        switch(currentPage.getId()) {
            case WELCOME:
                await welcomePage.accessOnBoardingN2();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new LiteOnboardingWelcome();
