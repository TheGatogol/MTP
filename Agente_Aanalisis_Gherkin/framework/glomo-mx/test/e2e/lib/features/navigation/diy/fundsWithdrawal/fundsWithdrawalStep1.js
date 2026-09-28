import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import fundContractedPage from '../../../pages/fund/fundContractedDetail';

// Page Objects IDs
const FUND_CONTRACTED_SECTION = fundContractedPage.getId();

class FundsWithdrawalStep1 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/fundsWithdrawal/fundsWithdrawalStep1', parentNavigation: 'fund/contractedDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case FUND_CONTRACTED_SECTION:
                await fundContractedPage.accessOperative('withdrawal');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FundsWithdrawalStep1();
