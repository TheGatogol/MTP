import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import withdrawalAndContribution from '../../pages/investAdvisory/investAdvisoryWithdrawalAndContribution';
import productDetail from '../../pages/investAdvisory/investAdvisoryProductDetail';

// Page Objects IDs
const EXIT_WITHDRAWAL_AND_CONTRIBUTION = withdrawalAndContribution.getId();
const PRODUCT_DETAIL = productDetail.getId();

class InvestAdvisoryWithdrawalAndContribution extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'investAdvisory/investAdvisoryWithdrawalAndContribution', parentNavigation: 'investAdvisory/investAdvisoryProductDetail'});
    }

    async go_impl(params) {
        switch (currentPage.getId()) {
            case EXIT_WITHDRAWAL_AND_CONTRIBUTION:
                await withdrawalAndContribution.access({functionality: 'withdrawalAndContribution'});
                break;
            case PRODUCT_DETAIL:
                if(params === 'withdrawal') {
                    await productDetail.buyFundsWithdrawal();
                } else {
                    await productDetail.buyFunds();
                }
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new InvestAdvisoryWithdrawalAndContribution();
