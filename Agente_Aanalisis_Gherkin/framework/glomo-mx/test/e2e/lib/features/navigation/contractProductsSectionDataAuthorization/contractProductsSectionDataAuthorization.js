import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import dashboard from '../../pages/dashboard/dashboard';
import contractProductPage from '../../pages/contractProductSection/contractProductSection';

// Page Objects IDs
const DASHBOARD = dashboard.getId();
const CONTRACT_PRODUCT_SECTION = contractProductPage.getId();

class ContractPaymentExisting extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'contractProductsSectionDataAuthorization/contractProductsSectionDataAuthorization', parentNavigation: 'dashboard'});
    }

    async go_impl({access}= {}) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboard.accessContractProductsSectionDataAuthorization(access);
                break;
            case CONTRACT_PRODUCT_SECTION:
                await contractProductPage.auxEntry('contract-products-section-authorization');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ContractPaymentExisting();
