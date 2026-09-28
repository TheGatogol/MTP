import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import notificationsCenter from '../../pages/notificationsCenter/notificationsCenter';
const NOTIFICATIONS_CENTER = notificationsCenter.getId();

class PointsRedeemPurchasesByCampaigns extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'pointsRedeemPurchasesByCampaigns/pointsRedeemPurchasesByCampaigns', parentNavigation: 'notificationsCenter/notificationsCenter'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case NOTIFICATIONS_CENTER:
                await notificationsCenter.accessPointsRedeemPurchasesByCampaigns();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new PointsRedeemPurchasesByCampaigns();
