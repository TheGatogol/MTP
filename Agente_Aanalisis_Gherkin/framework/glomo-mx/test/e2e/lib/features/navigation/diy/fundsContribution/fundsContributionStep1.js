import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import fundContractedPage from '../../../pages/fund/fundContractedDetail';

// Page Objects IDs
const FUND_CONTRACTED_SECTION = fundContractedPage.getId();

class FundsContributionStep1 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/fundsContribution/fundsContributionStep1', parentNavigation: 'fund/contractedDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case FUND_CONTRACTED_SECTION:
                await fundContractedPage.accessFundContribution();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FundsContributionStep1();
