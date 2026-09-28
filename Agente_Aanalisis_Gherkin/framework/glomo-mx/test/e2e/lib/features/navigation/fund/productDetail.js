import {NotPathNavigationError} from '@csqe/radish';

import AbstractGlomoNavigation from '../abstract-glomo-navigation';

// Pages
import dashboardPage from '../../pages/dashboard/dashboard';
import investmentsFollowUpPage from '../../pages/investmentsFollowUp/investmentsFollowUp';

// Page Objects IDs
const DASHBOARD = dashboardPage.getId();
const INVESTMENTS_FOLLOW_UP = investmentsFollowUpPage.getId();

class ProductDetail extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'productDetails/fundProductDetail', parentNavigation: 'dashboard'});
    }

    async go_impl({fund} = {}, last = false) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboardPage.waitUntilProductsLoaded(config.wait.XXXL);
                if (!fund) {
                    fund = this.getFund();
                }

                if (last) {
                    await dashboardPage.selectByLastDigits(fund);
                } if (typeof fund === 'object' && fund.contractId) {
                    await dashboardPage.selectInvestmentByContractId(fund.contractId);
                    break;
                } else {
                    await dashboardPage.selectByDataId(fund);
                }
                break;
            case INVESTMENTS_FOLLOW_UP:
                fund = this.getFund();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

    getFund() {
        const investmentFund = global.user.products.investmentFunds[0];
        storage['selectedProduct'] = investmentFund;
        return investmentFund.id;
    }
}

export default new ProductDetail();
