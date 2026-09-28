import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import * as navigation from '../../navigation';

// Pages
import productDetail from '../../pages/productDetails/accountProductDetail';
import pocketSuccess from '../../pages/productDetails/pockets/pocketSuccess';
import dashboard from '../../pages/dashboard/dashboard';
import pocketDetail from '../../pages/productDetails/pockets/pocketDetail';

// Page Objects IDs
const DASHBOARD = dashboard.getId();
const ACCOUNT_PRODUCT_DETAIL = productDetail.getId();
const POCKET_SUCCESS_SCREEN = pocketSuccess.getId();
const POCKET_DETAIL = pocketDetail.getId();

class Pockets extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'productDetails/pockets/pockets', parentNavigation: 'account/productDetail'});
    }

    async go_impl({account, element} = {}) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await navigation.account.productDetail.go({account});
                await this.go_impl();
                break;
            case ACCOUNT_PRODUCT_DETAIL:
                await productDetail.goToPockets();
                await this.page.waitUntilSpinnerVeil({
                    timeoutToAppear: config.wait.XS,
                    timeoutToDisappear: config.wait.XXL
                });
                break;
            case POCKET_SUCCESS_SCREEN:
                await pocketSuccess.closeScreen({element});
                break;
            case POCKET_DETAIL:
                await pocketDetail.cancelDeletePocket();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new Pockets();
