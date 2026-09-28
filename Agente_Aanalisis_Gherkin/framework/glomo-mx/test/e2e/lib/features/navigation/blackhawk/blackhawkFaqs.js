import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import blackhawkCardList from '../../pages/blackhawk/blackhawkCardList';

// Page Objects IDs
const BLACKHAWK_CARD_LIST = blackhawkCardList.getId();

class BlackhawkFaqs extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'blackhawk/blackhawkFaqs', parentNavigation: 'blackhawk/blackhawkCardList'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case BLACKHAWK_CARD_LIST:
                await currentPage.accessToFaqs();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new BlackhawkFaqs();
