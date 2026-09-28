import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

// Pages
import fundProductPage from '../../pages/productDetails/fundProductDetail';

// Page Objects IDs
const FUND = fundProductPage.getId();

class FundMoreInfo extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'fund/fundMoreInfo', parentNavigation: 'fund/productDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case FUND:
                await fundProductPage.accessToMoreInfoPage();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FundMoreInfo();
