import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page()
class CodiQrRequestSuccessfulScreen extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-codiQrRequestSuccessfulScreen[state="active"]',
            elements: {
                closeButton: 'bbva-header-main #btn-right-primary',
                mainTitle: 'bbva-panel-info div.content bbva-text',
                bannerImage: 'bbva-banner-image',
                textDate: 'bbva-date bbva-text',
                depositAccount: 'bbva-list-simple:nth-child(7) div.wrapper dl dd bbva-text',
                accountNumber: 'bbva-list-simple:nth-child(8) div.wrapper dl dd div span.number',
                amountRequested: 'bbva-list-simple:nth-child(9) div.wrapper dl dd bbva-amount',
                reference: 'bbva-list-simple:nth-child(10) div.wrapper dl dd bbva-text',
                concept: 'bbva-list-simple:nth-child(11) div.wrapper dl dd bbva-text',
                validityQr: 'bbva-list-simple:nth-child(12) div.wrapper dl dd bbva-text',
                shareButton: 'bbva-button-row #buttons span bbva-button-action-85632'
            },
            requiredElements: ['closeButton'],
        });
    }

    async _screenValidation({item}) {
        switch(item.toLowerCase()) {
            case 'close button':
                await this.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'main title':
                await this.mainTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'banner image':
                await this.bannerImage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text date':
                await this.textDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'deposit account':
                await this.depositAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account number':
                await this.accountNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'reference':
                await this.reference.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'validity qr':
                await this.validityQr.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'share button':
                await this.shareButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async shareQr(){
        await this.shareButton.waitForDisplayed({timeout: config.wait.M});
        await this.shareButton.click();
    }
}

export default new CodiQrRequestSuccessfulScreen();
