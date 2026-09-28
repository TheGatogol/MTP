import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import cardlessWithdrawalDetail from '../../pages/cardlessWithdrawal/cardlessWithdrawalDetail';

// Page Objects IDs
const CW_DETAIL = cardlessWithdrawalDetail.getId();

class CardlessWithdrawalCommerce extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'cardlessWithdrawal/cardlessWithdrawalCommerce', parentNavigation: 'cardlessWithdrawal/cardlessWithdrawalDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CW_DETAIL:
                await cardlessWithdrawalDetail.goCommerce();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new CardlessWithdrawalCommerce();
