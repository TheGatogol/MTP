import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page()
class DomiciliationNoticeDecline extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-domiciliationNoticeDecline[state="active"]',
            elements: {
                header: '[data-tag-name="bbva-header-main"]',
                panelInfo: '[data-tag-name="bbva-panel-info"]',
                title: '[data-tag-name="bbva-text"] ',
            },
            requiredElements: [
                'header',
            ],
        });
    }

    async _screenValidation({item, value, _args} = {}) {
        switch (item.toLowerCase()) {
            case 'domiciliation notice decline header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'domiciliation notice decline info':
                await this.panelInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'domiciliation notice decline title':
                await this.title.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: {value, ..._args}});
        }
    }
}

export default new DomiciliationNoticeDecline();
