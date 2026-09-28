import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import buyNowPayLaterTerm from '../../pages/buyNowPayLater/buyNowPayLaterTerm';

// Page Objects IDs
const BUY_NOW_PAY_LATER_TERM = buyNowPayLaterTerm.getId();

class ButNowPayLaterMonthlyStatement extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'flexibleFinancing/monthlyStatementEnquiry', parentNavigation: 'buyNowPayLater/buyNowPayLaterTerm'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case BUY_NOW_PAY_LATER_TERM:
                await buyNowPayLaterTerm.goStatement();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new ButNowPayLaterMonthlyStatement();
