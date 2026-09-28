import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

// Pages
import fundProductPage from '../../pages/productDetails/fundProductDetail';

// Page Objects IDs
const FUND = fundProductPage.getId();

class FundContractedDetail extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'fund/fundContractedDetail', parentNavigation: 'fund/productDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case FUND:
                await fundProductPage.accessToFundDetail();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FundContractedDetail();
