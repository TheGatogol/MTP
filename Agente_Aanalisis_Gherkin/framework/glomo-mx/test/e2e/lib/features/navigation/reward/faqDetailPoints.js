import {NotPathNavigationError} from '@csqe/radish';

import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import pointsPurchase from '../../pages/reward/pointsPurchase';
import movementsDetail from '../../pages/productDetails/movementsDetail';

const POINTS_PURCHASE = pointsPurchase.getId();
const MOVEMENTS_DETAIL = movementsDetail.getId();

class FaqDetailPoints extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'reward/faqDetailPoints', parentNavigation: 'reward/pointsPurchase'});
    }

    async go_impl({pageName} = {}) {
        switch (currentPage.getId()) {
            case POINTS_PURCHASE:
                await pointsPurchase.accessFaqInfo();
                break;
            case MOVEMENTS_DETAIL:
                if (pageName === 'cardTransactionDetail' ) {
                    await movementsDetail.selectHelp();
                    break;
                }
                else {
                    await movementsDetail.accessFaqs();
                    break;
                }
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new FaqDetailPoints();
