import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import contractProductPage from '../../pages/contractProductSection/contractProductSection';

// Page Objects IDs
const CONTRACT_PRODUCT_SECTION = contractProductPage.getId();

class ContractPaymentExistingModal extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'contractPaymentExisting/contractPaymentExistingModal', parentNavigation: 'contractProductSection'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CONTRACT_PRODUCT_SECTION:
                await contractProductPage.selectProduct('deposit-hiring');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ContractPaymentExistingModal();
