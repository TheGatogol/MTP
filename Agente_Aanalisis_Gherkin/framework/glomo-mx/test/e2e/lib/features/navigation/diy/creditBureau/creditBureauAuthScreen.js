import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

// Pages
import contractProductPage from '../../../pages/contractProductSection/contractProductSection';

// Page Objects IDs
const CONTRACT_PRODUCT_SECTION = contractProductPage.getId();

class CreditBureauAuthScreen extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/creditBureau/creditBureauAuthScreen', parentNavigation: 'contractProductSection'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CONTRACT_PRODUCT_SECTION:
                await contractProductPage.selectProduct('credit-bureau');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CreditBureauAuthScreen();
