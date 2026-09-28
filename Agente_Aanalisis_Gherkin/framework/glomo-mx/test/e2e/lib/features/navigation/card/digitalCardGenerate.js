import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import * as navigation from '../../navigation';

import orangeCardProductDetailPage from '../../pages/productDetails/orangeCardProductDetail';
import dashboardPage from '../../pages/dashboard/dashboard';
import cardlessWithdrawal from '../../pages/cardlessWithdrawal/cardlessWithdrawal';

const DASHBOARD = dashboardPage.getId();
const ORANGE_CARD_PRODUCT_DETAIL = orangeCardProductDetailPage.getId();
const CARDLESS_WITH_DRAWAL = cardlessWithdrawal.getId();

class DigitalCardGenerate extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'card/digitalCardGenerate', parentNavigation: 'dashboard'});
    }

    async go_impl({card} = {}) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                if (card) {
                    await navigation.card.orangeCardProductDetail.go({card});
                } else {
                    await dashboardPage.accessToOperative({ operative: 'cardlessWithdrawal' });
                }
                break;
            case ORANGE_CARD_PRODUCT_DETAIL:
                await orangeCardProductDetailPage.accessDigitalCard();
                break;
            case CARDLESS_WITH_DRAWAL:
                await cardlessWithdrawal.selectAccount();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new DigitalCardGenerate();
