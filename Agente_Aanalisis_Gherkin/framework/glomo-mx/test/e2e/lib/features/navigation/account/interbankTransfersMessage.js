import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import accountProductDetail from '../../pages/productDetails/accountProductDetail';

// Page Objects IDs
const ACCOUNT_PRODUCT_DETAIL = accountProductDetail.getId();

class InterbankTransfersMessage extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'productDetails/accountProductDetail', parentNavigation: 'dashboard'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ACCOUNT_PRODUCT_DETAIL:
                await accountProductDetail.accessBoostInterbankTransfersMessageAccountDetail();
                await this.page.waitUntilSpinnerVeil({
                    timeoutToAppear: config.wait.XS,
                    timeoutToDisappear: config.wait.L
                });
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new InterbankTransfersMessage();
