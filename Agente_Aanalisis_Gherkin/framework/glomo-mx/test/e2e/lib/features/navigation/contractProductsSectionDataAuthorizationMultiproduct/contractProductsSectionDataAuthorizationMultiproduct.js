import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';
import dashboard from '../../pages/dashboard/dashboard';
import contractProductPage from '../../pages/contractProductSection/contractProductSection';

const DASHBOARD = dashboard.getId();
const CONTRACT_PRODUCT_SECTION = contractProductPage.getId();

class ContractPaymentExisting extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'contractProductsSectionDataAuthorizationMultiproduct/contractProductsSectionDataAuthorizationMultiproduct', parentNavigation: 'dashboard'});
    }

    async go_impl({access}= {}) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboard.opportunitiesCarouselAccess(access);
                break;
            case CONTRACT_PRODUCT_SECTION:
                await contractProductPage.auxEntry('contract-products-section-authorization-multiproduct');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ContractPaymentExisting();
