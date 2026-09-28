import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import movementsDetail from '../../pages/productDetails/movementsDetail';

const MOVEMENTS_DETAIL = movementsDetail.getId();

class PointsPurchase extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'reward/pointsPurchase', parentNavigation: 'card/movementsDetail'});
    }

    async go_impl( {isPobPromotion, pageName} = {}) {
        switch (currentPage.getId()) {

            case MOVEMENTS_DETAIL:
                if (pageName === 'cardTransactionDetail' ) {
                    await movementsDetail.selectUseMyPoins();
                    break;
                }
                else{
                    await movementsDetail.accessPayWithPoints(isPobPromotion);
                    break;
                }     
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new PointsPurchase();
