import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import fundContributionStep2Page from '../../../pages/diy/fundsContribution/fundsContributionStep2';

// Page Objects IDs
const FUND_CONTRIBUTION_STEP2 = fundContributionStep2Page.getId();

class FundsContributionStep3 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/fundsContribution/fundsContributionStep3', parentNavigation: 'diy/fundsContribution/fundsContributionStep2'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case FUND_CONTRIBUTION_STEP2:
                await fundContributionStep2Page.completeSimulation();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FundsContributionStep3();
