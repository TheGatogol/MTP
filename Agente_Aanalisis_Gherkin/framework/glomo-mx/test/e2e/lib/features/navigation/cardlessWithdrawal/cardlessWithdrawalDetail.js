import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import cardlessWithdrawalHistoric from '../../pages/cardlessWithdrawal/cardlessWithdrawalHistoric';

// Page Objects IDs
const CWHISTORIC = cardlessWithdrawalHistoric.getId();

class CardlessWithdrawalDetail extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'cardlessWithdrawal/cardlessWithdrawalDetail', parentNavigation: 'cardlessWithdrawal/cardlessWithdrawalHistoric'});
    }

    async go_impl(withdrawalStatus) {
        switch (currentPage.getId()) {
            case CWHISTORIC:
                await cardlessWithdrawalHistoric.accessToWithdrawal(withdrawalStatus);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new CardlessWithdrawalDetail();
