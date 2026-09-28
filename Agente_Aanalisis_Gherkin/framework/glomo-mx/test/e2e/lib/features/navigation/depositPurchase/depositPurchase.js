import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import depositPage from '../../pages/depositPurchase/deposit';
import contractPaymentExisitingPage from '../../pages/contractPaymentExisting/contractPaymentExisting';

// Page Objects IDs
const DEPOSIT = depositPage.getId();
const CONTRACT_PAYMENT = contractPaymentExisitingPage.getId();

class DepositPurchase extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'depositPurchase/depositPurchase', parentNavigation: 'depositPurchase/deposit'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DEPOSIT:
                await depositPage.selectDeposit();
                break;
            case CONTRACT_PAYMENT:
                await contractPaymentExisitingPage.selectDepositList();
                await contractPaymentExisitingPage.selectDepositPurchase();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new DepositPurchase();

