import {NotPathNavigationError} from '@csqe/radish';

import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import pointsRafflePage from '../../pages/pointsRedemption/pointsRaffle';

const POINTS_RAFFLE_BACK = pointsRafflePage.getId();

class ClosePointsRaffle extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'reward/rewardOriginCard', parentNavigation: 'pointsRedemption/pointsRaffle'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case POINTS_RAFFLE_BACK:
                await pointsRafflePage.closeOperative();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new ClosePointsRaffle();
