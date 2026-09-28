import AbstractGlomoPage from '../abstract-glomo-page';
import {page} from '@csqe/radish';

@page('upgradeAccountInitPage')
class AccountUpgrade extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-upgradeAccountInitPage[state="active"]',
            elements: {
                privacyNotice: '[data-tag-name="bbva-aggregation-paragraph"] [data-tag-name="bbva-link"]',
                cta: '#primaryBtn',
                privacyModal: '[data-tag-name="bbva-link"]'
            },
            requiredElements: [
                'cta'
            ],
        });
    }

    async continue() {
        await this.cta.waitForClickable({timeout: config.wait.L});
        await this.cta.click();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.M});
    }

    async selectPrivacyModal() {
        await this.privacyModal.waitForClickable({timeout: config.wait.XL});
        await this.privacyModal.click();
    }
}

export default new AccountUpgrade();
