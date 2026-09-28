import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import orangeCardProductDetail from '../../pages/productDetails/orangeCardProductDetail';

// Page Objects IDs
const ORANGE_CARD_PRODUCT_DETAIL =  orangeCardProductDetail.getId();

class BlockAndReplacementOperatives extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'blockAndReplacement/blockAndReplacement', parentNavigation: 'card/orangeCardProductDetail'});
    }

    async go_impl() { 
        switch (currentPage.getId()) {
            case ORANGE_CARD_PRODUCT_DETAIL:
                await orangeCardProductDetail.accessBlockAndReplacement();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new BlockAndReplacementOperatives();
