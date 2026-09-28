import {NotPathNavigationError} from '@csqe/radish';

import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import orangeCardProductDetail from '../../pages/productDetails/orangeCardProductDetail';
import rewardsLanding from '../../pages/reward/rewardsLanding';

const ORANGE_CARD_PRODUCT_DETAIL = orangeCardProductDetail.getId();
const REWARDS_LANDING = rewardsLanding.getId();

class RewardsLandingFilteredPoints extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'reward/rewardsLandingFilteredPoints', parentNavigation: 'card/orangeCardProductDetail'});
    }

    async go_impl(idProduct) {
        switch (currentPage.getId()) {
            case REWARDS_LANDING:
                (idProduct) ? await rewardsLanding.accessDetailPointsTDC(idProduct) : await rewardsLanding.accessRewardsLandingDetail();
                break;
            case ORANGE_CARD_PRODUCT_DETAIL:
                await currentPage.accessRewardsLandingDetail();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new RewardsLandingFilteredPoints();
