import {NotPathNavigationError} from '@csqe/radish';

import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import pointsPurchase from '../../pages/reward/pointsPurchase';

const POINTS_PURCHASE = pointsPurchase.getId();

class PointsPurchaseReceipt extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'reward/pointsPurchaseReceipt', parentNavigation: 'reward/pointsPurchase'});
    }

    async go_impl() {
        switch (currentPage.getId()) {

            case POINTS_PURCHASE:
                await pointsPurchase.continueProcess();
                await pointsPurchase.payProcess();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new PointsPurchaseReceipt();
