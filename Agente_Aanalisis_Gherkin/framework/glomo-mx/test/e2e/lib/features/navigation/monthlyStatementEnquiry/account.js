import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import operatonials from '../../pages/operationals/operationals';
import accountProductDetail from '../../pages/productDetails/accountProductDetail';
import digitalButler from '../../pages/digitalButler/digitalButler';

const OPERATIONALS = operatonials.getId();
const ACCOUNT_PRODUCT_DETAIL = accountProductDetail.getId();
const DIGITAL_BUTLER = digitalButler.getId();

class Account extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'monthlyStatementEnquiry/monthlyStatementEnquiryAccount', parentNavigation: 'account/productDetail'});
    }

    async go_impl(options = {}) {
        switch (currentPage.getId()) {
            case DIGITAL_BUTLER:
                await digitalButler.selectNavigation(options);
                break;
            case OPERATIONALS:
                await operatonials.accessToOperative('accountStatus');
                break;
            case ACCOUNT_PRODUCT_DETAIL:
                await accountProductDetail.viewMoreOperatives();
                await accountProductDetail.operations('statement account');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new Account();
