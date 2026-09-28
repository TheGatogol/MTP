import AbstractGlomoPage from '../abstract-glomo-page';
import { page, ScreenValidationKeyNotFound } from '@csqe/radish';

@page('userTransactionAmountPendingConfirmation')
class UserTransactionAmountPendingConfirmation extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-userTransactionAmountPendingConfirmation[state="active"]',
            elements: {
                header: '[data-tag-name="bbva-header-main"]',
                textInfo: '#div_page',
                buttonConfirm: '#confirm_button',
                linkNotification: '#go_to_notifications_button',
            },
            requiredElements: [
                'textInfo'
            ]
        });
    }

    async _screenValidation({ item } = {}) {
        switch (item) {
            case 'text info notifications':
                await this.textInfo.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'button understood':
                await this.buttonConfirm.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'link go notifications':
                await this.linkNotification.waitForDisplayed({ timeout: config.wait.M });
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async goToConfirmLimit() {
        await this.buttonConfirm.waitForDisplayed({timeout: config.wait.M});
        await this.buttonConfirm.click();
    }
}

export default new UserTransactionAmountPendingConfirmation();
