import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class StEnrollmentSuccess extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-stEnrollmentSuccess[state="active"]',
            elements: {
                header: 'cells-molecule-header',
                xButton: '#btnRight',
                okButton: '#primaryBtn',
                paragraphIcon: 'div[class="image"]',
                description: '[class="info-text"]',
                textTitle: 'glomo-notification-message',
            },
            requiredElements: [
                'header',
            ]
        });
    }

    async _modalElementValidation({item, value, ...args} = {}) {
        switch (item.toLowerCase()) {
            case 'title':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.HEADER});
                break;
            case 'error icon':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.HERO_IMAGE});
                break;
            case 'error description':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.DESCRIPTION});
                break;
            case 'error cross button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.CLOSE});
                break;
            case 'error accept button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.ACCEPT_BUTTON});
                break;
            default:
                await super._modalElementValidation({item, value, ...args});
        }
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success icon':
                await this.paragraphIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success description':
                await this.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success accept button':
                await this.okButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success cross button':
                await this.xButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new StEnrollmentSuccess();
