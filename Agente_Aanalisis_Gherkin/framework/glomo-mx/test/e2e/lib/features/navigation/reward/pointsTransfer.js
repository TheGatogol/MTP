import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

//Pages
import pointsTransfer from '../../pages/reward/pointsTransfer';
import myBbvaCardsPage from '../../pages/reward/myBbvaCards';
import rewardOriginCardPage from '../../pages/reward/rewardOriginCard';

const POINTS_TRANSFER = pointsTransfer.getId();
const MY_BBVA_CARDS = myBbvaCardsPage.getId();
const ORIGIN_CARD_PAGE = rewardOriginCardPage.getId();

class PointsTransfer extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'reward/pointsTransfer', parentNavigation: 'reward/rewardOriginCard'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case MY_BBVA_CARDS:
                await myBbvaCardsPage.selectFirstTargetCard();
                break;
            case ORIGIN_CARD_PAGE:
                await rewardOriginCardPage.selectCard();
                break;
            case POINTS_TRANSFER:
                await pointsTransfer.closeOperative();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new PointsTransfer();
