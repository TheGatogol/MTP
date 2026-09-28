import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page()
class OnBoardingAccountSignaturePadModal extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-openDigitalAccountSignaturePadModal[state="active"]',
            elements: {
                headerTitle: '#helpModalHeader #text',
                padSign: '#signaturePadModal bbva-widget-signature-pad #drawerContainer',
                btnContinue: '#signaturePadModal bbva-button-default.button-primary-margin',
                btnDelete: '#signaturePadModal bbva-button-default.button-secondary-margin'
            },
            elementsSpherica: {
                padSign: '#signaturePadModal bbva-widget-signature-pad-spherica #drawerContainer',
            },
            requiredElements: [
                'headerTitle'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'continue button':
                await this.btnContinue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sign button':
                await this.padSign.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'disabled delete button':
                await this.btnDelete.waitForDisabled();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item});
        }
    }

    async signatureEntry() {
        await this.padSign.waitForClickable({timeout: config.wait.M});
        await this.padSign.click({timeout: config.wait.M});
    }

    async continueSignature() {
        await this.btnContinue.waitForClickable({timeout: config.wait.M});
        await this.btnContinue.click({timeout: config.wait.M});
    }
}

export default new OnBoardingAccountSignaturePadModal();
