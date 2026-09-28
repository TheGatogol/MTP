import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import OrangeCardProductDetail from '../../pages/productDetails/orangeCardProductDetail';
import branchLocator from '../../pages/branchLocator/branchLocator';

// Page Objects IDs
const ORANGE = OrangeCardProductDetail.getId();
const BRANCH_LOCATOR = branchLocator.getId();

class NewAdditionalCard extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'productDetails/newAdditionalCard', parentNavigation: 'card/orangeCardProductDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ORANGE:
                await OrangeCardProductDetail.requestAdditionalCard();
                break;
            case BRANCH_LOCATOR:
                await branchLocator.chooseBranch();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new NewAdditionalCard();
