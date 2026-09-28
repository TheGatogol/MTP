import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import contractProductPage from '../../pages/contractProductSection/contractProductSection';

// Page Objects IDs
const CONTRACT_PRODUCT_SECTION = contractProductPage.getId();

class NpaConsumerLoanBureau extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'nonPreApprovedConsumerLoan/nonPreApprovedConsumerLoanBureau', parentNavigation: 'contractProductSection'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CONTRACT_PRODUCT_SECTION:
                await contractProductPage.selectProduct('non-preapproved-consumer-loan');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new NpaConsumerLoanBureau();
