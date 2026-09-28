import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import buyNowPayLater from '../../pages/buyNowPayLater/buyNowPayLater';

// Page Objects IDs
const BUY_NOW_PAY_LATER = buyNowPayLater.getId();

class BuyNowPayLaterTerm extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'buyNowPayLater/buyNowPayLaterTerm', parentNavigation: 'buyNowPayLater/buyNowPayLater'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case BUY_NOW_PAY_LATER:
                await buyNowPayLater.selectRelatedContract();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new BuyNowPayLaterTerm();
