import AbstractGlomoPage from '../abstract-glomo-page';
import {page} from '@csqe/radish';

@page('upgradeAccountPrevQuestionsPage')
class AccountUpgradePrevQuestions extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-upgradeAccountPrevQuestionsPage[state="active"]',
            elements: {
                cta: '#primaryBtn',
                linkPepModal: '[data-tag-name="bbva-link"]',
                radioBtns: 'bbva-form-radio-group[name="firstAcceptedForm"] bbva-form-radio-button:nth-child(1)'
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

    async selectPepModal() {
        await this.linkPepModal.waitForClickable({timeout: config.wait.XL});
        await this.linkPepModal.click();
    }

    async selectBtnPrequest() {
        await this.radioBtns.waitForClickable({timeout: config.wait.XL});
        await this.radioBtns.click();
        await this.cta.waitForClickable({timeout: config.wait.XL});
        await this.cta.click();
    }
}

export default new AccountUpgradePrevQuestions();
