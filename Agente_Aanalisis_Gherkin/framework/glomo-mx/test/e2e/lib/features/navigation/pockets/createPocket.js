import {Commands, NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

// Pages
import pockets from '../../pages/productDetails/pockets/pockets';
import pocketWelcome from '../../pages/productDetails/pockets/pocketWelcome';

// Page Objects IDs
const POCKET_LIST_SCREEN = pockets.getId();
const POCKET_WELCOME_SCREEN = pocketWelcome.getId();

class CreatePocket extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'productDetails/pockets/createPocket', parentNavigation: 'pockets/pockets'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case POCKET_LIST_SCREEN:
                await pockets.continueToCreatePocket();
                break;
            case POCKET_WELCOME_SCREEN:
                await pocketWelcome.continueToCreatePocket();
                await Commands.pause({time: config.wait.S});
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CreatePocket();
