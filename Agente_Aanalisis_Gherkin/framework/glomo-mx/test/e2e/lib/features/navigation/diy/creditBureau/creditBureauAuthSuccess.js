import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

// Pages
import creditBureauAuthScreen from '../../../pages/diy/creditBureau/creditBureauAuthScreen';

// Page Objects IDs
const CREDIT_BUREAU_SCREEN = creditBureauAuthScreen.getId();

class CreditBureauAuthSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/creditBureau/creditBureauAuthSuccess', parentNavigation: 'diy/creditBureau/creditBureauAuthScreen'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CREDIT_BUREAU_SCREEN:
                await creditBureauAuthScreen.confirmCreditBureauOtp();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CreditBureauAuthSuccess();
