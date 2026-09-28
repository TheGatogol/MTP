import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import rewardsLanding from '../../pages/reward/rewardsLanding';

const REWARDS_LANDING = rewardsLanding.getId();

class InvitationEnrollmentPromotions extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'reward/invitationEnrollmentPromotions', parentNavigation: 'reward/rewardsLanding'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case REWARDS_LANDING:
                await rewardsLanding.accessPromotionDetail();
                await rewardsLanding.accessToInviteEnrollmentPromotion();
                await this.page.waitUntilSpinnerVeil({
                    timeoutToAppear: config.wait.XS,
                    timeoutToDisappear: config.wait.XL,
                });
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new InvitationEnrollmentPromotions();
