import AbstractGlomoPage from '../../abstract-glomo-page';
import GlomoAlertManagerSpherica from '../../../components/glomo-alert-manager-spherica.js';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class FundsContributionStep5 extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'FundsContributionStep5',
            root: '#cells-template-fundsContribution[state="active"]',
            elements: {
                header: 'cells-molecule-header-spherica',
                dialogOperations: [
                    GlomoAlertManagerSpherica
                ]
            },
            requiredElements: [
                'signModal'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.S});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async _modalElementValidation({item, value, ...args} = {}) {
        switch (item.toLowerCase()) {
            case 'title':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.TITLE});
                break;
            case 'description':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.DESCRIPTION});
                break;
            case 'error modal accept button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.ACCEPT_BUTTON}, {forceScroll: true});
                break;
            case 'error modal cancel button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.CANCEL_BUTTON}, {forceScroll: true});
                break;
            default:
                /**
                 * By default we execute the basic modalElementValidation to also use the basic glomo-alert-manager validation process
                 */
                await super._modalElementValidation({item, value, ...args});
        }
    }

    async confirmContribution(otp = '11111111') {
        await this.fillOtp(otp);
    }
}

export default new FundsContributionStep5();
