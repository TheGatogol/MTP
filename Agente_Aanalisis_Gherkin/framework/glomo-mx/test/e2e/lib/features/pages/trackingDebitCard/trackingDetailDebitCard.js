import AbstractGlomoPage from '../abstract-glomo-page';
import ScreenValidationKeyNotFound, {page} from '@csqe/radish';

@page('TrackingDetailDebitCard')
class TrackingDetailDebitCard extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'tracking detail debit card',
            root: '#cells-template-debitCardTrackingDetail[state="active"]',
            elements: {
                header: 'cells-molecule-header',
                image: 'bbva-banner-image',
                title: 'bbva-text  p',
                deliveryData: '#place',
                deliveryDataLink: '#place div > [data-tag-name="bbva-link"] > span.link-text',
                deliveryDataText: '#place > bbva-text span',
                detailsReceived: '#received',
                detailsReceivedText: '#received > bbva-text span',
                message: 'cells-icon-message',
                button: 'bbva-panel-button'
            },
            requiredElements: [
                'header',
            ],
        });
    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'image':
                await this.image.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'delivery data':
                await this.deliveryData.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'delivery data link':
                await this.deliveryDataLinkValidation(value);
                break;
            case 'delivery data text':
                await this.deliveryDataText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details received':
                await this.detailsReceived.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details received text':
                await this.detailsReceivedText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message':
                await this.message.scrollIntoView({block: 'start'});
                await this.message.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button':
                await this.button.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async deliveryDataLinkValidation(value) {
        switch (value.toLowerCase()) {
            case 'hidden':
                await this.deliveryDataLink.waitForDisplayed({timeout: config.wait.M, reverse: true});
                break;
            case 'visible':
                await this.deliveryDataLink.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new Error(`The Status must be "hidden" or "visible", received: ${value}`);
        }
    }
}

export default new TrackingDetailDebitCard();
