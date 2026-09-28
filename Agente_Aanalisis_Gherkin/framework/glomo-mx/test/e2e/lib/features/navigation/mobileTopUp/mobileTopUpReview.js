import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

// Pages
import mobileTopUpPage from '../../pages/mobileTopUp/mobileTopUp';

// Page Objects IDs
const MOBILE_TOP_UP = mobileTopUpPage.getId();

class MobileTopUpReview extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'mobileTopUp/mobileTopUpReview', parentNavigation: 'mobileTopUp/mobileTopUp'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case MOBILE_TOP_UP:
                await mobileTopUpPage.confirmHiring();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new MobileTopUpReview();
