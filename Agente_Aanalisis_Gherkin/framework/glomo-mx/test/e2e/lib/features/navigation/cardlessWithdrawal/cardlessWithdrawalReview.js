import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import cardlessWithdrawal from '../../pages/cardlessWithdrawal/cardlessWithdrawal';

const CARDLESSWITHDRAWAL = cardlessWithdrawal.getId();

class CardlessWithdrawalReview extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'cardlessWithdrawal/cardlessWithdrawalReview', parentNavigation: 'cardlessWithdrawal/cardlessWithdrawal'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CARDLESSWITHDRAWAL:
                await cardlessWithdrawal.analyticsContinueWithOTP();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CardlessWithdrawalReview();
