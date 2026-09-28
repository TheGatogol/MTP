import AbstractGlomoPage from '../abstract-glomo-page';
import {page} from '@csqe/radish';

@page()
class TopUpTagsPage extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-topUp[state="active"]',
            elements: {
                title: 'h1',
                rechargeTagsBtn: 'glomo-button-list-spherica button.top-up-register-btn-register-title',
            },
            requiredElements: [
                'title'
            ],
        });
    }

    async goToTags() {
        await (await this.rechargeTagsBtn.waitForDisplayed({timeout: config.wait.L})).click();
    }

}

export default new TopUpTagsPage();
