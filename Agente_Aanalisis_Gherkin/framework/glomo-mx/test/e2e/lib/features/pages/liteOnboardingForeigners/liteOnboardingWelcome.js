import AbstractGlomoPage from '../abstract-glomo-page';
import {page} from '@csqe/radish';

@page()
class LiteOnboardingWelcome extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-onboardingNationalitySelection[state="active"]',
            elements: {
                header: '#helpModalHeader',
                mexican: 'bbva-type-link [text="bbva-widget-lite-onboarding-foreigners-text-mexicana"]',
                foreign: 'bbva-type-link [text="bbva-widget-lite-onboarding-foreigners-text-foreigner"]',
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async accessMexican() {
        await this.mexican.waitForDisplayed({timeout: config.wait.M});
        await this.mexican.click();
    }

    async accessForeign() {
        await this.foreign.waitForDisplayed({timeout: config.wait.M});
        await this.foreign.click();
    }
}

export default new LiteOnboardingWelcome();
