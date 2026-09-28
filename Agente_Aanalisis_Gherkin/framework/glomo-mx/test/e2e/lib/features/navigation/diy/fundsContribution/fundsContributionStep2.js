import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import fundContributionStep1Page from '../../../pages/diy/fundsContribution/fundsContributionStep1';

// Page Objects IDs
const FUND_CONTRIBUTION_STEP1 = fundContributionStep1Page.getId();

class FundsContributionStep2 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/fundsContribution/fundsContributionStep2', parentNavigation: 'diy/fundsContribution/fundsContributionStep1'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case FUND_CONTRIBUTION_STEP1:
                await fundContributionStep1Page.startOffer();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FundsContributionStep2();
