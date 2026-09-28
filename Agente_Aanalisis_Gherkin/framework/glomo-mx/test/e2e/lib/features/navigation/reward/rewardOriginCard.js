import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

// Pages
import rewardsLandingPage from '../../pages/reward/rewardsLanding';
import pointsTransfer from '../../pages/reward/pointsTransfer';

// Page Objects IDs
const REWARDS_LANDING_PAGE = rewardsLandingPage.getId();
const POINTS_TRANSFER = pointsTransfer.getId();

class RewardOriginCard extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'reward/rewardOriginCard', parentNavigation: 'reward/rewardsLanding'});
    }

    async go_impl({access}={}) {
        switch (currentPage.getId()) {
            case REWARDS_LANDING_PAGE:
                switch (access) {
                    case 'transfer':
                        await rewardsLandingPage.accessToPointsTrasfers();
                        break;
                    case 'raffle':
                        await rewardsLandingPage.accessToPointsRaffle();
                        break;
                    default:
                        throw new Error(`The access ${access} no definide`);
                }
                break;
            case POINTS_TRANSFER:
                await currentPage.closeOperative();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new RewardOriginCard();
