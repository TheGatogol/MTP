import AbstractGlomoComponent from './abstract-glomo-component';
import {Element} from '@csqe/radish';

export default class CellsStepRecipientSelector extends AbstractGlomoComponent {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-step-recipient-selector',
            elements: {
                uncollapsedStep: '',
                firstTargetCard: '#product-selector div.product-wrapper.separators cells-product-item:nth-of-type(1) .item__info',

                selectorTitle: 'cells-product-item[data-selector*="_DIGITS_"i] .item__label',
                allCardsLink: '#product-selector #viewMore',

                confirmChangeCardBtn: 'div.full .buttons-wrapper cells-st-button[class="primary size-m"] button',
                keepSelectionBtn: 'div.full .buttons-wrapper cells-st-button[class="link size-m"] button',

                //info step collapsed
                cardImage: 'div.filled #item div.item div.item__info div.item__title div.item__additional div.item__image',
                cardName: 'div.filled #item div.item div.item__info div.item__title div.item__additional div.item__data cells-heading span.item__label',
                pan4: 'div.filled #item div.item div.item__info div.item__title div.item__additional div.item__data cells-molecule-mask',
                amount: 'div.filled #item div.item div.item__quantities div.item__primary-amount cells-atom-amount',
                amountLabel: 'div.filled #item div.item div.item__quantities div.item__primary-amount span.amount-label',
                additionalInfo: 'div.filled #item div.item__additional-information'

            },
            requiredElements: [
                'payCardBlock',
            ],

        };

        super(Object.assign(defaultArgs, args));
        this.stepCardCollapsed = new Element({
            selector: `${this.root}[collapsed]`,
            _container: this,
        });
        this.changeCardCollapsed = new Element({
            selector: `${this.root}[collapsed] #stepContainer .cells-step__header #changeBtn`,
            _container: this,
        });

    }

    static get _baseRoot() {
        return {
            web: 'cells-step-recipient-selector'
        };
    }

    async validatePayCardCollapsed(reverseInfo = false) {
        await this.cardImage.waitForDisplayed({timeout: config.wait.L});
        await this.cardName.waitForText({timeout: config.wait.L});
        await this.pan4.waitForText({timeout: config.wait.M});
        await this.amount.waitForText({timeout: config.wait.M});
        await this.amountLabel.waitForText({timeout: config.wait.M});
        if (reverseInfo) {
            await this.additionalInfo.waitForText();
        }

    }

    async selectCard(lastDigits) {
        const selectorId = this.selectorTitle.specifySelector({placeholder: '_DIGITS_', value: lastDigits});
        await selectorId.waitForClickable();
        await selectorId.click();
    }

    async allCardsLinkVisibility(reverse = false) {
        await this.allCardsLink.waitForDisplayed({timeout: config.wait.L, reverse: reverse});
    }

    async showAllMyBbvaCards() {
        await this.allCardsLink.waitForClickable({timeout: config.wait.L});
        await this.allCardsLink.click();
    }

    async changeBtnVisibility(reverse = false) {
        await this.stepCardCollapsed.scrollIntoView({block: 'start'});
        await this.changeCardCollapsed.waitForAttribute({attribute: 'hidden', reverse: !reverse});
    }

    async showChangeCard() {
        await this.uncollapsedStep.scrollIntoView({block: 'start'});
        await this.changeCardCollapsed.waitForClickable({timeout: config.wait.M});
        await this.changeCardCollapsed.click();
    }

    async sectionTargetCardChange() {
        await this.uncollapsedStep.waitForAnimation({timeout: config.wait.M});
        await this.confirmChangeCardBtn.waitForClickable({timeout: config.wait.L});
        await this.keepSelectionBtn.waitForClickable({timeout: config.wait.L});
    }

    async confirmChangeCard() {
        await this.uncollapsedStep.waitForAnimation({timeout: config.wait.M});
        await this.confirmChangeCardBtn.waitForClickable({timeout: config.wait.L});
        await this.confirmChangeCardBtn.click();
    }

    async keepChangeCard() {
        await this.keepSelectionBtn.waitForClickable({timeout: config.wait.L});
        await this.keepSelectionBtn.click();
    }

    async selectFirstTargetCard() {
        await this.uncollapsedStep.waitForAnimation({timeout: config.wait.M});
        await this.firstTargetCard.waitForClickable({timeout: config.wait.L});
        await this.firstTargetCard.click();
    }
}
