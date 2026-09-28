import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

// Pages
import pockets from '../../pages/productDetails/pockets/pockets';

// Page Objects IDs
const POCKETS_SCREEN = pockets.getId();

class SortPocket extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'productDetails/pockets/sortPocket', parentNavigation: 'pockets/pockets'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case POCKETS_SCREEN:
                await pockets.goToSortPocket();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new SortPocket();
