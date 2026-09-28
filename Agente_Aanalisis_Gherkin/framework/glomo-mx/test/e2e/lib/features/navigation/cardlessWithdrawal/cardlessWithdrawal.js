import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

//Page
import operationals from '../../pages/operationals/operationals';
import digitalButler from '../../pages/digitalButler/digitalButler';
import accountProductDetail from '../../pages/productDetails/accountProductDetail';
import dashboard from '../../pages/dashboard/dashboard';

//Page Object IDs
const OPERATIONALS = operationals.getId();
const DIGITAL_BUTLER = digitalButler.getId();
const ACCOUNT_PRODUCT_DETAIL = accountProductDetail.getId();
const DASHBOARD = dashboard.getId();

class CardlessWithdrawal extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'cardlessWithdrawal/cardlessWithdrawal', parentNavigation: 'dashboard'});
    }

    async go_impl(options) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboard.accessToOperative({ operative: 'cardlessWithdrawal' });
                break;
            case ACCOUNT_PRODUCT_DETAIL:
                await accountProductDetail.viewMoreOperatives();
                await accountProductDetail.operations('cardless withdrawal');
                break;
            case OPERATIONALS:
                await operationals.accessToOperative({ operative: 'cardlessWithdrawal' });
                break;
            case DIGITAL_BUTLER:
                await digitalButler.selectNavigation(options);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CardlessWithdrawal();
