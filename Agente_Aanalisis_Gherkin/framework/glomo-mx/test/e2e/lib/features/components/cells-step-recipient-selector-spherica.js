import CellsStepRecipientSelector from './cells-step-recipient-selector';

export default class CellsStepRecipientSelectorSpherica extends CellsStepRecipientSelector {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-step-recipient-selector-spherica',

            elements: {
                uncollapsedStep: '#stepContainer',
                firstTargetCard: '#product-selector div.product-wrapper.separators cells-product-item-spherica[data-index="0"]',
                selectorTitle: 'cells-product-item-spherica[data-selector*="_DIGITS_"i] .item__label',
                allCardsLink: '#product-selector #viewMore',

                confirmChangeCardBtn: 'div.full .buttons-wrapper cells-st-button-spherica[class*="primary"] button, div.full .buttons-wrapper cells-st-button-spherica button',
                keepSelectionBtn: 'div.full .buttons-wrapper cells-st-button-spherica[class*="link"] button, div.full .buttons-wrapper cells-st-button-spherica[class="link size-m"] button',

                //'cells-product-item-spherica'
                cardImage: 'div.filled #item div.item div.item__info div.item__title div.item__additional div.item__image cells-molecule-card-cover-ccds-wrapper-spherica',
                cardName: 'div.filled #item div.item div.item__info div.item__title div.item__name span',

                additionalInfo: 'div.filled #item div.item__additional-information',
                amountLabel: 'div.filled #item div.item div.item__quantities div.item__primary-amount span.amount-label',
                amount: 'div.filled #item div.item div.item__quantities div.item__primary-amount cells-atom-amount-spherica',
                pan4: 'div.filled #item div.item div.item__info div.item__title div.item__additional div.item__data cells-molecule-mask-spherica',
            }
        };

        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return {
            web: 'cells-step-recipient-selector-spherica',
        };
    }

}
