import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import contractProductPage from '../../pages/contractProductSection/contractProductSection';

const CONTRACT_PRODUCT_SECTION = contractProductPage.getId();

class NpaConsumerLoanSpherica extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'npaConsumerLoan/npaConsumerLoan', parentNavigation: 'contractProductSection'});
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

export default new NpaConsumerLoanSpherica();
