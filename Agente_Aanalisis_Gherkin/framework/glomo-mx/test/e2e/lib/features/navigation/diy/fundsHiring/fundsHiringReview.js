import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import fundsHiringStep9Page from '../../../pages/diy/fundsHiring/fundsHiringStep9';

// Page Objects IDs
const FUNDS_HIRING_STEP9 = fundsHiringStep9Page.getId();

class FundsHiringReview extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/fundsHiring/fundsHiringReview', parentNavigation: 'diy/fundsHiring/fundsHiringStep9'});
    }

    async go_impl({otp} = {}) {
        switch (currentPage.getId()) {
            case FUNDS_HIRING_STEP9:
                await fundsHiringStep9Page.confirmHiring(otp);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FundsHiringReview();
