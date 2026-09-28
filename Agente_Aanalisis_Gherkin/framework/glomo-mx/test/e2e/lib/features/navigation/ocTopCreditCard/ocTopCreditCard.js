import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import contractProductPage from '../../pages/contractProductSection/contractProductSection';

const CONTRACT_PRODUCT_SECTION = contractProductPage.getId();

class OcTopCreditCard extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'ocTopCreditCard/ocTopCreditCard', parentNavigation: 'contractProductSection'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CONTRACT_PRODUCT_SECTION:
                await contractProductPage.selectProduct('top-credit-card');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OcTopCreditCard();
