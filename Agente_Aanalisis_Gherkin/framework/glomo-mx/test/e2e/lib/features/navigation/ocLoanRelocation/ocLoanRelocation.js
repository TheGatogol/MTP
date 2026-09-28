import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import contractProductPage from '../../pages/contractProductSection/contractProductSection';

const CONTRACT_PRODUCT_SECTION = contractProductPage.getId();

class OcLoanRelocation extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'ocLoanRelocation/ocLoanRelocation', parentNavigation: 'contractProductSection'});
    }
    async go_impl() {
        switch (currentPage.getId()) {
            case CONTRACT_PRODUCT_SECTION:
                await contractProductPage.selectProduct('recolocation');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new OcLoanRelocation();
