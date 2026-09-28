import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import fundContributionStep4Page from '../../../pages/diy/fundsContribution/fundsContributionStep4';

// Page Objects IDs
const FUND_CONTRIBUTION_STEP4 = fundContributionStep4Page.getId();

class FundsContributionStep5 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/fundsContribution/fundsContributionStep5', parentNavigation: 'diy/fundsContribution/fundsContributionStep4'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case FUND_CONTRIBUTION_STEP4:
                await fundContributionStep4Page.acceptSummary();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FundsContributionStep5();
