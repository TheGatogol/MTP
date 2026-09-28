import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import productDetail from '../../pages/investAdvisory/investAdvisoryProductDetail';

// Page Objects IDs
const PRODUCT_DETAIL = productDetail.getId();

class InvestAdvisoryProductDetailEditAlias extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'operatives/editAlias', parentNavigation: 'investAdvisory/investAdvisoryProductDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case PRODUCT_DETAIL:
                await productDetail.editAlias();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new InvestAdvisoryProductDetailEditAlias();
