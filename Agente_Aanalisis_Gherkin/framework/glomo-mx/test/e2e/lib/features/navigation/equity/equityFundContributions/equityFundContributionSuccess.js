import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import equityFundContributions from '../../../pages/equity/equityFundContributions/equityFundContributions';

// Page Objects IDs
const EQUITY_FUND_CONTRIBUTIONS_PAGE = equityFundContributions.getId();

class EquityFundContributionsSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'equity/equityFundContributions/equityFundContributionsSuccess'});
    }

    async go_impl({otp} = {})  {
        switch (currentPage.getId()) {
            case EQUITY_FUND_CONTRIBUTIONS_PAGE:
                await equityFundContributions.confirmToken(otp);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new EquityFundContributionsSuccess();
