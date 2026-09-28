import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

//Page
import accountProductDetailPage from '../../pages/productDetails/accountProductDetail';
import operationals from '../../pages/operationals/operationals';

//Page Object IDs
const ACCOUNT_PRODUCT_DETAIL = accountProductDetailPage.getId();
const OPERATIONALS = operationals.getId();

class AccountCreditCardPayment extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'creditCardPayment/accountCreditCardPayment', parentNavigation: 'account/productDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ACCOUNT_PRODUCT_DETAIL:
                await accountProductDetailPage.goToPayCard();
                break;
            case OPERATIONALS:
                await operationals.accessToOperative({operative: 'creditCardPayment'});
                break;

            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new AccountCreditCardPayment();
