import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class ComingSoon extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-comingSoon[state="active"]',
            elements: {
                // Header
                title: '.header__title',
                back: 'cells-molecule-header #btnLeft',
                message: 'cells-icon-message span.message'
            },
            requiredElements: [
                'message'
            ],
        });
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'title':
                await this.title.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'back button':
                await this.back.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'message':
                await this.message.waitForDisplayed({timeout: config.wait.S});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new ComingSoon();
