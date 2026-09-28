import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
@page()
class CardDynamicCvv extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-cardDynamicCvv[state="active"]',
            elements: {
                header: 'bbva-widget-see-dynamic-cvv div bbva-transition-container div:nth-child(1) "+BbvaHeaderMain._baseRoot+"[accessibility-text-icon-left-primary="Icono regresar"]',
                // activate digital card
                imaginDigital: 'bbva-banner-image',
                copyButton: 'bbva-widget-see-dynamic-cvv div bbva-transition-container div:nth-child(2) [data-tag-name="card-dynamic-cvv-list"]:nth-child(2) div div.wrapper-link bbva-link',
                viewButton: 'bbva-widget-see-dynamic-cvv div bbva-transition-container div:nth-child(2) [data-tag-name="card-dynamic-cvv-list"]:nth-child(4) div div.wrapper-link bbva-link'
            },
            requiredElements: [
                'header',
            ],
        });
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'imagin card':
                await this.imaginDigital.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'copy button':
                await this.copyButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'view button':
                await this.viewButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new CardDynamicCvv();
