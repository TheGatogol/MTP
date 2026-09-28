import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class Refunds extends AbstractGlomoPage {
    constructor() {
        super({
            root: 'glomo-alert-manager .refunds',
            elements: {
                header: '#header',
                closeButton: '#header button',
                iconInformation: '.icon-container',
                description: '.templates-wrapper div.paragraph-template',
                refundMoneyButton: '#acceptButton',
                cancelLink: '#cancelButton',
                dmRefunds: '#cells-template-refunds glomo-refund-transfer-manager',
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'close button':
                await this.closeButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'information icon':
                await this.iconInformation.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'descriptions':
                await this.description.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'refund money button':
                await this.refundMoneyButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'cancel link':
                await this.cancelLink.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async cancelButton() {
        await this.cancelLink.waitForEnabled({timeout: config.wait.L});
        await this.cancelLink.click();
    }
}

export default new Refunds();
