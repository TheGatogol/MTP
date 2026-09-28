import {NotPathNavigationError} from '@csqe/radish';

import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import pointsRafflePage from '../../pages/pointsRedemption/pointsRaffle';

const POINTS_RAFFLE = pointsRafflePage.getId();

class PointsRaffleReview extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'pointsRedemption/pointsRaffleReview', parentNavigation: 'pointsRedemption/pointsRaffle'});
    }

    async go_impl() {
        switch (currentPage.getId()) {

            case POINTS_RAFFLE:
                await pointsRafflePage.confirmPointsRedemption();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new PointsRaffleReview();
