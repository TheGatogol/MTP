import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import contractProductPage from '../../../pages/contractProductSection/contractProductSection';

// Page Objects IDs
const CONTRACT_PRODUCT_SECTION = contractProductPage.getId();

class FundsHiringStep1 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/fundsHiring/fundsHiringStep1', parentNavigation: 'contractProductSection'});
    }

    async go_impl(value) {
        switch (currentPage.getId()) {
            case CONTRACT_PRODUCT_SECTION:
                if (value) {
                    await contractProductPage.selectProductOfferId(value);
                } else {
                    await contractProductPage.selectProduct('OC-FUND');
                }
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FundsHiringStep1();
