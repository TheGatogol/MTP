import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import liteOnboardingForeignersWelcome from '../../pages/liteOnboardingForeigners/liteOnboardingWelcome';

const LITE_ONBOARDING_FOREIGNERS_WELCOME = liteOnboardingForeignersWelcome.getId();

class OnBoardingN2 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'onBoardingN2/onBoardingDigitalAccount', parentNavigation: 'liteOnboardingForeigners/liteOnboardingWelcome'});
    }

    async go_impl() {
        switch(currentPage.getId()) {
            case LITE_ONBOARDING_FOREIGNERS_WELCOME:
                await liteOnboardingForeignersWelcome.accessMexican();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OnBoardingN2();
