import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import accountProductDetail from '../../pages/productDetails/accountProductDetail';

// Page Objects IDs
const ACCOUNT_PRODUCT_DETAIL = accountProductDetail.getId();

class UpgradeAccountRestrictionsModular extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'payrollPortabilityN2/upgradeAccountRestrictionsModular', parentNavigation: 'account/productDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ACCOUNT_PRODUCT_DETAIL:
                await accountProductDetail.upgradeAccountLinkModal();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new UpgradeAccountRestrictionsModular();
