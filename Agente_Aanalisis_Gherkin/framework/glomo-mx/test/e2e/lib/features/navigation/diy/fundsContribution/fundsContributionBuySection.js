import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import fundContractedPage from '../../../pages/fund/fundContracted';

// Page Objects IDs
const FUND_CONTRACTED_SECTION = fundContractedPage.getId();

class FundsContributionBuySection extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/fundsContribution/fundsContributionBuySection', parentNavigation: fundContractedPage});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case FUND_CONTRACTED_SECTION:
                await fundContractedPage.goBuySection();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FundsContributionBuySection();
