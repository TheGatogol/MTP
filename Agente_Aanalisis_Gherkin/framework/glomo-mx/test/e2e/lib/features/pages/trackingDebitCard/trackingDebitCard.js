import AbstractGlomoPage from '../abstract-glomo-page';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import {
    ScreenValidationKeyNotFound,
    page
} from '@csqe/radish';

@page()
class TrackingDebitCard extends AbstractGlomoPage {
    constructor() {
        const stepsContent = 'bbva-progress-vertical-step';
        const stepsList = `${stepsContent} ol`;

        super({
            name: 'tracking debit card',
            root: '#cells-template-debitCardTracking[state="active"]',
            elements: {
                header: 'cells-molecule-header',
                text: '> bbva-text',
                cardRequestStep: `${stepsList} > li:nth-child(1)`,
                manufacturingStep: `${stepsList} > li:nth-child(2)`,
                shippingStep: `${stepsList} > li:nth-child(3)`,
                errorNotification: `${stepsList} > li.content.error > div > [data-tag-name=bbva-notification-help]`,
                errorLink: `${stepsList} > li.content.error > div > div > [data-tag-name="bbva-link"]`,
                deliveryStep: `${stepsList} > li:nth-child(4)`,
                deliveryDetailLink: `${stepsList} > li:nth-child(4) > div > div > [data-tag-name="bbva-link"]`,
                message: 'cells-icon-message',
                confirmReceiptLink: 'cells-icon-message cells-st-link',

                // Modal detalle de error en la entrega de Tdd
                modalError: [
                    GlomoAlertManager,
                    {
                        paragraphElements: {
                            information: 'div.paragraph-template > div:nth-child(19) > p',
                        },
                        additionalElements: {
                            linkPhoneCall: 'cells-molecule-link-icon',
                            buttonAccept: 'button#acceptButton',
                            buttonClose: 'button#cancelButton'
                        }
                    }
                ],
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text':
                await this.text.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'card request step':
                await this.cardRequestStep.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'manufacturing step':
                await this.manufacturingStep.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'shipping step':
                await this.shippingStep.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error notification':
                await this.errorNotificationValidation(value);
                break;
            case 'error link':
                await this.errorLinkValidation(value);
                break;
            case 'delivery step':
                await this.deliveryStep.scrollIntoView({block: 'start'});
                await this.deliveryStep.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'delivery detail link':
                await this.deliveryDetailLinkValidation(value);
                break;
            case 'message':
                await this.message.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm receipt link':
                await this.confirmReceiptLink.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({
                    key: item,
                    args: arguments[0]
                });
        }
    }

    async _modalElementValidation({item, value, ...args} = {}) {
        switch (item.toLowerCase()) {
            case 'information':
                await this.modalError.paragraphElements.information.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link phone call':
                await this.modalError.additionalElements.linkPhoneCall.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button accept':
                await this.modalError.additionalElements.buttonAccept.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button close':
                await this.modalError.additionalElements.buttonClose.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                await super._modalElementValidation({item, value, ...args});
        }
    }

    async errorNotificationValidation(value) {
        switch (value.toLowerCase()) {
            case 'hidden':
                await this.errorNotification.waitForDisplayed({timeout: config.wait.M, reverse: true});
                break;
            case 'visible':
                await this.errorNotification.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new Error(`The Status must be "hidden" or "visible", received: ${value}`);
        }
    }

    async errorLinkValidation(value) {
        switch (value.toLowerCase()) {
            case 'hidden':
                await this.errorLink.waitForDisplayed({timeout: config.wait.M, reverse: true});
                break;
            case 'visible':
                await this.errorLink.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new Error(`The Status must be "hidden" or "visible", received: ${value}`);
        }
    }

    async deliveryDetailLinkValidation(value) {
        switch (value.toLowerCase()) {
            case 'hidden':
                await this.deliveryDetailLink.waitForDisplayed({timeout: config.wait.M, reverse: true});
                break;
            case 'visible':
                await this.deliveryDetailLink.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new Error(`The Status must be "hidden" or "visible", received: ${value}`);
        }
    }

    async accessErrorLink() {
        await this.errorLink.waitForDisplayed({timeout: config.wait.M});
        await this.errorLink.click();
    }

    async accessDeliveryDetailLink() {
        await this.deliveryDetailLink.waitForDisplayed({timeout: config.wait.L});
        await this.deliveryDetailLink.click();
    }

    async accessConfirmReceiptLink() {
        await this.confirmReceiptLink.waitForDisplayed({timeout: config.wait.M});
        await this.confirmReceiptLink.click();
    }
}

export default new TrackingDebitCard();
