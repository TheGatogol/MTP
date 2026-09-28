import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import contractProductPage from '../../pages/contractProductSection/contractProductSection';
import dashboard from '../../pages/dashboard/dashboard';

const CONTRACT_PRODUCT_SECTION = contractProductPage.getId();
const DAHSBOARD = dashboard.getId();

class OcSupportFixedPayments extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'cardPaymentsPlans/ocSupportFixedPayments', parentNavigation: 'contractProductSection'});
    }
    async go_impl({offerId} = {}) {
        switch (currentPage.getId()) {
            case CONTRACT_PRODUCT_SECTION:
                await contractProductPage.selectProductOfferId(offerId);
                break;
            case DAHSBOARD:
                await dashboard.enterOffer('APOYO PAGOS FIJOS');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new OcSupportFixedPayments();
