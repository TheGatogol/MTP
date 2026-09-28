import {NotPathNavigationError} from '@csqe/radish';

import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import pointsTransferPage from '../../pages/reward/pointsTransfer';

const POINTS_TRANSFER = pointsTransferPage.getId();

class MyBbvaCards extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'reward/myBbvaCards', parentNavigation: 'reward/pointsTransfer'});
    }

    async go_impl() {
        switch (currentPage.getId()) {

            case POINTS_TRANSFER:
                await pointsTransferPage.goToMyBbvaCards();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new MyBbvaCards();
