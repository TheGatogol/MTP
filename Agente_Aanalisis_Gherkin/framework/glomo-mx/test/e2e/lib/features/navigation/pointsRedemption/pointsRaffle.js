import {NotPathNavigationError} from '@csqe/radish';

import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import pointsRaffle from '../../pages/pointsRedemption/pointsRaffle';

const POINTS_RAFFLE = pointsRaffle.getId();

class PointsRaffle extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'pointsRedemption/pointsRaffle'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case POINTS_RAFFLE:
                await pointsRaffle.closeOperative();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new PointsRaffle();
