import {NotPathNavigationError} from '@csqe/radish';

import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import pointsTransferPage from '../../pages/reward/pointsTransfer';

const POINTS_TRANSFER = pointsTransferPage.getId();

class PointsTransferReview extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'reward/pointsTransferReview', parentNavigation: 'reward/pointsTransfer'});
    }

    async go_impl() {
        switch (currentPage.getId()) {

            case POINTS_TRANSFER:
                await pointsTransferPage.confirmPointsTransfer();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new PointsTransferReview();
