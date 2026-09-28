import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page()
class CrmAuthorizationCoords extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-crmAuthorizationCoords[state="active"]',
            elements: {
                helpModal: 'bbva-help-modal[visible]',
                authorizeButton: 'div .container bbva-button-default[active]',
                closeButton: 'bbva-help-modal[visible] div .content #helpModalHeader .button-1 #btn-close',
                closeButtonSuccess: 'bbva-widget-inapp-crm-successful-location-data-autorization bbva-help-modal[visible] div #helpModalHeader .button-1 #btn-close',
                message: 'div .container bbva-type-text',
                microIllustration: 'div .container bbva-clip-microillustration',
                header: 'bbva-help-modal[visible] div .content #helpModalHeader',
                headerSuccess: 'bbva-help-modal[visible] div #helpModalHeader',
                check: 'div .panel-info bbva-clip-box',
                successText: 'div .panel-info .title-text bbva-type-text',
                date: 'div .panel-info bbva-type-text',
            },
            requiredElements: [
                'helpModal'
            ],
        });
    }

    async closeModalInAppGeolocation() {
        await this.closeButton.waitForDisplayed({timeout: config.wait.L});
        await this.closeButton.click();
    }

    async closeInAppGeolocationSuccess() {
        await this.closeButtonSuccess.waitForDisplayed({timeout: config.wait.L});
        await this.closeButtonSuccess.click();
    }

    async authorizeInAppGeolocation() {
        await (await (await this.authorizeButton.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
        await this.fillOtp('12345678');
    }

    async fillOtp( confirmPasswordDisable = false) {
        await this.signModal.waitForDisplayed({timeout: config.wait.L});

        if(!confirmPasswordDisable) {
            await this.signModal.confirmPassword();
        }
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header success':
                await this.headerSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal':
                await this.helpModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button success':
                await this.closeButtonSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message':
                await this.message.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'authorize button':
                await this.authorizeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'micro illustration':
                await this.microIllustration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check':
                await this.check.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success text':
                await this.successText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date':
                await this.date.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new CrmAuthorizationCoords();
