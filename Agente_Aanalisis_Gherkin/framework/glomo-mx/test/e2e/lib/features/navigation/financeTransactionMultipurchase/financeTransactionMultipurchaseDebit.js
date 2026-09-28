import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import dashboard from '../../pages/dashboard/dashboard';
import orangeCardProductDetail from '../../pages/productDetails/orangeCardProductDetail';
import contractProductSection from '../../pages/contractProductSection/contractProductSection';

const DASHBORAD = dashboard.getId();
const ORANGE_CARD_PRODUCT_DETAIL = orangeCardProductDetail.getId();
const CONTRACT_PRODUCT_SECTION = contractProductSection.getId();

class FinanceTransactionMultipurchaseDebit extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'financeTransactionMultipurchase/financeTransactionMultipurchaseDebit', parentNavigation: 'dashboard'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DASHBORAD:
                await dashboard.isFutura() ?
                    await dashboard.enterOffer('COMPRAS DIFERIDAS') :
                    await dashboard.accessFinanceTransactionMultipurchaseDebit();
                break;
            case ORANGE_CARD_PRODUCT_DETAIL:
                await orangeCardProductDetail.accessFinanceTransactionMultipurchaseDebit();
                break;
            case CONTRACT_PRODUCT_SECTION:
                await contractProductSection.selectProduct('flexible-financing-debit');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new FinanceTransactionMultipurchaseDebit();
