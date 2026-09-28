import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import contractPaymentExistingModalPage from '../../pages/contractPaymentExisting/contractPaymentExistingModal';
import contractProductSection from '../../pages/contractProductSection/contractProductSection';

// Page Objects IDs
const CONTRACT_PAYMENT = contractPaymentExistingModalPage.getId();
const CONTRACT_PRODUCT = contractProductSection.getId();

class DepositHiring extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'depositHiring/depositHiring', parentNavigation: 'contractPaymentExisting/contractPaymentExistingModal'});
    }

    async go_impl(value) {
        switch (currentPage.getId()) {
            case CONTRACT_PAYMENT:
                await contractPaymentExistingModalPage.selectDepositHiring();
                break;
            case CONTRACT_PRODUCT:
                await contractProductSection.selectProductOfferId(value);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new DepositHiring();
