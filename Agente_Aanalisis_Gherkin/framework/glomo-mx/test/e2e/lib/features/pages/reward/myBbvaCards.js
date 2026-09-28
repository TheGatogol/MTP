import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class MyBbvaCards extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'MyAccountsBbva',
            root: '#cells-template-pointsTransfer cells-product-selector-modal-spherica',
            elements: {

                //Header
                header: '#modal header',
                closeBtn: '#header button.btn--transparent.btn-close',
                //body screen
                ownCardsSeparatorCards: '#selector div.product-wrapper.separators',
                firstTargetCard: '#selector cells-product-item-spherica[data-index="0"]',
                cardId: 'cells-product-item-spherica[data-selector*="_PAN_"i]',
                cardTitle: '#selector cells-product-item-spherica div.item div.item__info div.item__title div.item__name span',
                cardNumber: '#selector cells-product-item-spherica cells-molecule-mask-spherica span.number',
                cardAmount: '#selector cells-product-item-spherica .item__quantities cells-atom-amount-spherica, #selector cells-product-item-spherica .item__quantities span.amount-wrapper',
                cardAmountLabel: '#selector cells-product-item-spherica .item__quantities span.amount-label',
                exitBtn: '#closeButton',
                offCard: 'cells-product-item-spherica.product-inactive',
                infoBox: '#selector cells-product-item-spherica.product-inactive .info-message, #selector cells-product-item-spherica.product-inactive cells-icon-message-spherica'
            },

            requiredElements: [
                'header',
            ],
        });
    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            case 'header title':
                await this.header.waitForText({timeout: config.wait.M});
                break;
            case 'close button':
                await this.closeBtn.waitForClickable({timeout: config.wait.M, errorMessage: 'The \'Closed Button\' header is not visible.'});
                break;
            case 'card title':
                await this.cardTitle.waitForText({timeout: config.wait.M, errorMessage: 'The \'card title\' is not visible.'});
                break;
            case 'card number':
                await this.cardNumber.waitForText({timeout: config.wait.M, errorMessage: 'The \'card number\' header is not visible.'});
                break;
            case 'card amount':
                await this.cardAmount.waitForText({timeout: config.wait.M, errorMessage: 'The \'card amount\' header is not visible.'});
                break;
            case 'card amount label':
                await this.cardAmountLabel.waitForText({timeout:config.wait.M, errorMessage: 'The \'card amount label\' header is not visible.'});
                break;
            case 'exit button':
                await this.exitBtn.waitForClickable({timeout: config.wait.M, errorMessage: 'The \'Exit Button\' is not visible.'});
                break;
            case 'off card':
                if (value === 'disabled'){
                    await this.offCard.specifySelector({placeholder: '.product-inactive', value: '.product-inactive.disabled'}).waitForDisplayed({timeout: config.wait.L});
                } else {
                    await this.offCard.waitForEnabled({timeout: config.wait.M});
                }
                break;
            case 'info box':
                await this.infoBox.waitForEnabled({timeout: config.wait.M, reverse: value.toLowerCase() === 'disabled'});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async selectCard(card) {
        const cardPan = this.cardId.specifySelector({placeholder: '_PAN_', value: card});
        await cardPan.click();
    }

    async selectFirstTargetCard() {
        await this.firstTargetCard.waitForClickable({timeout: config.wait.L});
        await this.firstTargetCard.click();
    }

}

export default new MyBbvaCards();
