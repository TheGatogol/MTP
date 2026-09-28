import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page()
class InAppChatWelcome extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-chatWelcome',
            elements: {
                header: '[data-tag-name="bbva-header-main"]',
                closeBtn: '#btn-right-primary',
                messageIcon: '.image span',
                welcomeTitle: '[data-tag-name="bbva-text"][class="title  "] h2',
                welcomeInfo: '[data-tag-name="bbva-text"].description p',
                listInfo: 'bbva-aggregation-bullet-list',
                continueBtn: '#button'
            },
            requiredElements: [
                'header',
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'image message':
                await this.messageIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.welcomeTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info':
                await this.welcomeInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'list info':
                await this.listInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                await this.continueBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async continueChat() {
        await this.continueBtn.waitForDisplayed({timeout: config.wait.M});
        await this.continueBtn.click({useActions: true});
    }

}

export default new InAppChatWelcome();
