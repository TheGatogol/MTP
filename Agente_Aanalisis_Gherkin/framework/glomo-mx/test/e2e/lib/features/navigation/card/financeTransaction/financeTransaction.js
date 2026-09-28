import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import * as navigation from '../../index';

// Pages
import movementDetailPage from '../../../pages/productDetails/movementsDetail';
import dashboardPage from '../../../pages/dashboard/dashboard';

// Page Objects IDs
const MOVEMENT_DETAIL = movementDetailPage.getId();
const DASHBOARD = dashboardPage.getId();

class FinanceTransaction extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'financeTransaction/financeTransaction', parentNavigation: 'card/movementsDetail'});
    }

    async go_impl({card} = {}) {
        switch (currentPage.getId()) { // NOSONAR
            case DASHBOARD:
                await navigation.card.orangeCardProductDetail.go({card});
                break;
            case MOVEMENT_DETAIL:
                await movementDetailPage.accessFinanceTransaction();
                await this.page.waitUntilSpinnerVeil({
                    timeoutToAppear: config.wait.XS,
                    timeoutToDisappear: config.wait.XXL
                });
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FinanceTransaction();
