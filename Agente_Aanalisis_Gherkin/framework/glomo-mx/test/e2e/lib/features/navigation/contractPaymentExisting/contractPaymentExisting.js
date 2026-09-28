import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import contractPaymentExistingModalPage from '../../pages/contractPaymentExisting/contractPaymentExistingModal';

// Page Objects IDs
const CONTRACT_PAYMENT = contractPaymentExistingModalPage.getId();

class ContractPaymentExisting extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'contractPaymentExisting/contractPaymentExisting', parentNavigation: 'contractPaymentExisting/contractPaymentExistingModal'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CONTRACT_PAYMENT:
                await contractPaymentExistingModalPage.selectDepositList();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ContractPaymentExisting();
