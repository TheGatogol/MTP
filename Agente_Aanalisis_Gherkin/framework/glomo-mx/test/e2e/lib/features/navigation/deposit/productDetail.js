import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import dashboardPage from '../../pages/dashboard/dashboard';
const DASHBOARD = dashboardPage.getId();

class ProductDetail extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'productDetails/depositProductDetail', parentNavigation: 'dashboard'});
    }

    async go_impl({deposit} = {}, last = false) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboardPage.waitUntilProductsLoaded(config.wait.XXXL);
                if (!deposit) {
                    deposit = global.user.products.deposits[0];
                }
                storage.selectedProduct = deposit;

                if (last) {
                    await dashboardPage.selectByLastDigits(deposit);
                } else if (typeof deposit === 'object' && deposit.contractId) {
                    await dashboardPage.selectInvestmentByContractId(deposit.contractId);
                } else {
                    await dashboardPage.selectByDataId(deposit);
                }
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ProductDetail();
