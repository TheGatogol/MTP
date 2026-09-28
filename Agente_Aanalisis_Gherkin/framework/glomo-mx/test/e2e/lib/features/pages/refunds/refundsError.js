import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class RefundsError extends AbstractGlomoPage {
    constructor() {
        super({
            root: 'glomo-alert-manager .refund-error',
            elements: {
                header: '#header',
                closeButton: '#header button',
                iconInformation: '.icon-container',
                insufficientBalanceTitle: 'cells-bottom-modal#modal div.content-container',
                insufficientBalanceLabel: 'div.templates-wrapper .paragraph-template-text',
                understandButton: 'div.buttons-container #acceptButton'

            },
            requiredElements: [
                'header',
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
            case 'insufficient balance title':
                await this.insufficientBalanceTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'insufficient balance label':
                await this.insufficientBalanceLabel.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'understand button':
                await this.understandButton.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new RefundsError();
