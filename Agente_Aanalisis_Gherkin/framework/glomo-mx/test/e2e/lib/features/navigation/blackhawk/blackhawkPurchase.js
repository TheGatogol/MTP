import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import blackhawkCardList from '../../pages/blackhawk/blackhawkCardList';

// Page Objects IDs
const BLACKHAWK_CARD_LIST = blackhawkCardList.getId();

class BlackhawkPurchase extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'blackhawk/blackhawkPurchase', parentNavigation: 'blackhawk/blackhawkCardList'});
    }

    async go_impl({brand} = {}) {
        switch (currentPage.getId()) {
            case BLACKHAWK_CARD_LIST:
                await currentPage.accessToCardPurchase(brand);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new BlackhawkPurchase();
