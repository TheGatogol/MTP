import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import blackhawkWelcome from '../../pages/blackhawk/blackhawkWelcome';

// Page Objects IDs
const BLACKHAWK_WELCOME = blackhawkWelcome.getId();

class BlackhawkCardList extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'blackhawk/blackhawkCardList', parentNavigation: 'blackhawk/blackhawkWelcome'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case BLACKHAWK_WELCOME:
                await currentPage.accessToListCards();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new BlackhawkCardList();
