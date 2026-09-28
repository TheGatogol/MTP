import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import rewardsLanding from '../../pages/reward/rewardsLanding';
import rewardOriginCard from '../../pages/reward/rewardOriginCard';

const REWARDS_LANDING = rewardsLanding.getId();
const REWARDS_ORIGIN_CARD = rewardOriginCard.getId();

class PointsRaffle extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'pointsRedemption/pointsRaffle', parentNavigation: 'reward/rewardsLanding'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case REWARDS_LANDING:
                await rewardsLanding.accessToPointsRaffle();
                break;
            case REWARDS_ORIGIN_CARD:
                await rewardOriginCard.selectCard();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new PointsRaffle();
