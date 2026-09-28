import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import contractProductPage from '../../pages/contractProductSection/contractProductSection';

const CONTRACT_PRODUCT_SECTION = contractProductPage.getId();

class OcLoanRelocationFinancialHealth extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'ocLoanRelocationFinancialHealth/ocLoanRelocationFinancialHealth', parentNavigation: 'contractProductSection'});
    }
    async go_impl() {
        switch (currentPage.getId()) {
            case CONTRACT_PRODUCT_SECTION:
                await contractProductPage.selectOfferProduct('RESF');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new OcLoanRelocationFinancialHealth();
