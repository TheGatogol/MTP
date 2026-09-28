import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import * as navigation from '../../navigation';

import startPage from '../../pages/start';
import orangeCardProductDetailPage from '../../pages/productDetails/orangeCardProductDetail';
import dashboardPage from '../../pages/dashboard/dashboard';
import cardPaymentPage from '../../pages/creditCardPayment/cardCreditCardPayment';

const START = startPage.getId();
const DASHBOARD = dashboardPage.getId();
const ORANGE_CARD_PRODUCT_DETAIL = orangeCardProductDetailPage.getId();
const CARD_PAYMENT = cardPaymentPage.getId();

class EditAlias extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'operatives/editAlias'});
    }

    async go_impl({card, pageName} = {}) {
        switch (currentPage.getId()) {
            case START:
            case DASHBOARD:
                await navigation.card.orangeCardProductDetail.go({card});
                await this.go_impl();
                break;
            case CARD_PAYMENT:
            case ORANGE_CARD_PRODUCT_DETAIL:
                if (pageName === 'operatives'){
                    await currentPage.viewMoreOperatives();
                    await currentPage.accessEditAlias();
                } else {
                    await orangeCardProductDetailPage.viewMoreOperatives();
                    await this.go_impl();
                }
                
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new EditAlias();
