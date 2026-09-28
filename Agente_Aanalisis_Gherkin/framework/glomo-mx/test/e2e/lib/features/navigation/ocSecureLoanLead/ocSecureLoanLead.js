import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import contractProductPage from '../../pages/contractProductSection/contractProductSection';

// Page Objects IDs
const CONTRACT_PRODUCT_SECTION = contractProductPage.getId();

class OcMortgageNonPreapproved extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'ocSecureLoanLead/ocSecureLoanLead', parentNavigation: 'contractProductSection'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CONTRACT_PRODUCT_SECTION:
                await contractProductPage.selectProduct('oc-secure-loan');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OcMortgageNonPreapproved();
