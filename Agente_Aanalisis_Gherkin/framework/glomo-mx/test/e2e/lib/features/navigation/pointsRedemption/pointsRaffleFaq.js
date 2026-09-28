import {NotPathNavigationError} from '@csqe/radish';

import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import pointsRafflePage from '../../pages/pointsRedemption/pointsRaffle';

const POINTS_RAFFLE = pointsRafflePage.getId();

class PointsRaffleFaq extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'pointsRedemption/pointsRaffleFaq', parentNavigation: 'pointsRedemption/pointsRaffle'});
    }

    async go_impl() {
        switch (currentPage.getId()) {

            case POINTS_RAFFLE:
                await pointsRafflePage.accessFaqs();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new PointsRaffleFaq();
