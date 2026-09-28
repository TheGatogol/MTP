import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import accountProductDetail from '../../pages/productDetails/accountProductDetail';

const ACCOUNT_PRODUCT_DETAIL = accountProductDetail.getId();

class PayrollAccount extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'payrollAccount/payrollAccount', parentNavigation: 'dashboard'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ACCOUNT_PRODUCT_DETAIL:
                await accountProductDetail.viewMoreOperatives();
                await accountProductDetail.operations('payroll portability');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new PayrollAccount();
