import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import dashboardPage from '../../pages/dashboard/dashboard';
import editAliasPage from '../../pages/operatives/editAlias';
import accountTransactionsPage from '../../pages/productDetails/accountTransactions';
import piggyBanks from '../../pages/piggyBanks/piggyBanks';
import billPaymentsDashboard from '../../pages/billPaymentsDashboard/billPaymentsDashboard';

// Page Objects IDs
const DASHBOARD = dashboardPage.getId();
const EDIT_ALIAS = editAliasPage.getId();
const ACCOUNT_TRANSACTIONS = accountTransactionsPage.getId();
const PIGGY_BANKS = piggyBanks.getId();
const BILL_PAYMENTS_DASHBOARD = billPaymentsDashboard.getId();

class ProductDetail extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'productDetails/accountProductDetail', parentNavigation: 'dashboard'});
    }

    async go_impl({account, exitType} = {}) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                if (typeof account === 'object' && account.contractId) {
                    await dashboardPage.selectByContractId(account.contractId);
                } else {
                    await dashboardPage.selectByLastDigits(account);
                }
                break;
            case EDIT_ALIAS:
                await editAliasPage.saveNewAlias();
                break;
            case ACCOUNT_TRANSACTIONS:
                await accountTransactionsPage.goBack();
                break;
            case PIGGY_BANKS:
                await piggyBanks.backToProductDetail();
                break;
            case BILL_PAYMENTS_DASHBOARD:
                await billPaymentsDashboard.returnToAccount(exitType);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ProductDetail();
