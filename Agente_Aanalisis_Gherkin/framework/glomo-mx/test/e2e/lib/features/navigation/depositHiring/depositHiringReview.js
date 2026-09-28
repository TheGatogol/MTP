import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import depositHiringPage from '../../pages/depositHiring/depositHiring';

// Page Objects IDs
const DEPOSIT_HIRING = depositHiringPage.getId();

class DepositHiringReview extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'depositHiring/depositHiringReview', parentNavigation: 'depositHiring/depositHiring'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DEPOSIT_HIRING:
                await depositHiringPage.fillOtp();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new DepositHiringReview();
