import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import fundContributionStep5Page from '../../../pages/diy/fundsContribution/fundsContributionStep5';

// Page Objects IDs
const FUND_CONTRIBUTION_STEP5 = fundContributionStep5Page.getId();

class FundsContributionReview extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/fundsContribution/fundsContributionReview', parentNavigation: 'diy/fundsContribution/fundsContributionStep5'});
    }

    async go_impl({otp} = {}) {
        switch (currentPage.getId()) {
            case FUND_CONTRIBUTION_STEP5:
                await fundContributionStep5Page.confirmContribution(otp);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FundsContributionReview();
