import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import fundContributionStep3Page from '../../../pages/diy/fundsContribution/fundsContributionStep3';

// Page Objects IDs
const FUND_CONTRIBUTION_STEP3 = fundContributionStep3Page.getId();

class FundsContributionStep4 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/fundsContribution/fundsContributionStep4', parentNavigation: 'diy/fundsContribution/fundsContributionStep3'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case FUND_CONTRIBUTION_STEP3:
                await fundContributionStep3Page.acceptAccount();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FundsContributionStep4();
