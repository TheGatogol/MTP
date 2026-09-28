import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

// Pages
import account from '../../pages/productDetails/accountProductDetail';
const ACCOUNT = account.getId();

class ParentalControlAccountLimits extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'parentalControl/parentalControlAccountLimits', parentNavigation: 'account/productDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ACCOUNT:
                await account.goToParentalControl();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ParentalControlAccountLimits();
