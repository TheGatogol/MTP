import AbstractGlomoPage from '../abstract-glomo-page';
import { page } from '@csqe/radish';

@page('userTransactionAmountDetailNotification')
class UserTransactionAmountDetailNotification extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-userTransactionAmountDetailNotification[state="active"]',
            elements: {
                header: '[data-tag-name="bbva-header-main"]',
                confirmButton: '#div_buttons #buttonConfirm',
                rejectButton: '#div_buttons #buttonReject',
                description: '#div_page #panel_origin',
                closeButton: '[data-tag-name="bbva-header-main"] .header-main .right-group',
            },
            requiredElements: [
                'confirmButton'
            ]
        });
    }

    async selectedConfirmRejectButton(option) {
        switch (option.toLowerCase()) {
            case 'confirm':
                await (await this.confirmButton.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'reject':
                await (await this.rejectButton.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'confirm error':
                await (await this.confirmButton.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`The option "${option}" does not exist`);
        }
    }

}

export default new UserTransactionAmountDetailNotification();
