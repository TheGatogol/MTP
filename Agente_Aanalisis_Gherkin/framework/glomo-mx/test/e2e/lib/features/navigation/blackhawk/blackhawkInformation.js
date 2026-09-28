import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import blackhawkWelcome from '../../pages/blackhawk/blackhawkWelcome';

// Page Objects IDs
const BLACKHAWK_WELCOME = blackhawkWelcome.getId();

class BlackhawkInformation extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'blackhawk/blackhawkInformation', parentNavigation: 'blackhawk/blackhawkWelcome'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case BLACKHAWK_WELCOME:
                await currentPage.accessToInformation();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new BlackhawkInformation();
