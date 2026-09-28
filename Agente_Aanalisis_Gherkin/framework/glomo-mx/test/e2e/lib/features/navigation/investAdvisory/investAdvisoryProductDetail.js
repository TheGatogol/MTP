import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import  {NotPathNavigationError} from '@csqe/radish';

// Pages
import productDetail from '../../pages/investAdvisory/investAdvisoryProductDetail';
import withdrawalContribution from '../../pages/investAdvisory/investAdvisoryWithdrawalAndContribution';
import dashboardPage from '../../pages/dashboard/dashboard';

// Page Objects IDs
const DASHBOARD = dashboardPage.getId();
const PRODUCT_DETAIL = productDetail.getId();
const WITHDRAWAL_CONTRIBUTION = withdrawalContribution.getId();

class InvestAdvisoryProductDetail extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'investAdvisory/investAdvisoryProductDetail', parentNavigation: 'dashboard'});
    }

    async go_impl(page) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboardPage.accessInvestAdvisoryProductDetail();
                break;
            case PRODUCT_DETAIL:
                await productDetail.access({functionality: 'productDetail'});
                break;
            case WITHDRAWAL_CONTRIBUTION:
                if (page) {
                    await withdrawalContribution.leavePage(page);
                } else {
                    await withdrawalContribution.closeReceipt();
                }
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new InvestAdvisoryProductDetail();
