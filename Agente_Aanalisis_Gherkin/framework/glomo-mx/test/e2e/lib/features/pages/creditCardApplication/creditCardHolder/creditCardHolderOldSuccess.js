import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import AbstractGlomoPage from '../../abstract-glomo-page';

@page('CreditCardHolderOldSuccess')
class CreditCardHolderOldSuccess extends AbstractGlomoPage {
    constructor(){
        super({
            root: '#cells-template-creditCardHolderReview[state="active"]',

            elements:{
                header: 'cells-molecule-header-spherica',
                infoCard: '#header-section',
                iconDoc: '[data-selector="cells-successful-response-operations"]',
                cardNumber: '#body-section ul li:nth-child(6)',
                paymentType: '#body-section ul li:nth-child(9)',
                savingsAccount: '#body-section ul li:nth-child(12)',
                addressShipment: '#body-section ul li:nth-child(15)',
                blueBlockCC: 'cells-icon-message-spherica.top-icon-message',
                blueBlockMail: 'cells-successful-response-spherica div.message-container cells-icon-message-spherica',
                exitBtn: '#primaryBtn',
            },

            requiredElements: [
                'header',
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'head success':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'information card':
                await this.infoCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'document icon':
                await this.iconDoc.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'card number':
                await this.cardNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment type':
                await this.paymentType.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'savings account':
                await this.savingsAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address shipment':
                await this.addressShipment.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'information cc':
                await this.blueBlockCC.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'infrmation email':
                await this.blueBlockMail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.exitBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new CreditCardHolderOldSuccess();
