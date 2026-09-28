import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import accountOtherOperatives from '../../pages/operatives/accountsOtherOperativesPage';
import productDetailPage from '../../pages/productDetails/accountProductDetail';

const OPERATIVES = accountOtherOperatives.getId();
const PRODUCT_DETAIL = productDetailPage.getId();

class UpgradeCustomer extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'upgradeCustomer/upgradeCustomer'});
    }

    async go_impl({ entryPoint, level }) {
        switch (currentPage.getId()) {
            case OPERATIVES:
                await accountOtherOperatives.accessUpgradeAccountHybrid();
                break;
            case PRODUCT_DETAIL:
                if (entryPoint === 'operatives') {
                    await productDetailPage.accessUpgradeAccount();
                }
                else if (entryPoint === 'rcp message') {
                    await productDetailPage.viewRcpUpgradeAccount(level);
                }
                else if(entryPoint === 'rcp account detail') {
                    await productDetailPage.viewRcpAccountDetailUpgradeAccount();
                } else {
                    await productDetailPage.accessRestrictedAccountLink();
                }
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new UpgradeCustomer();
