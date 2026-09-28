import AbstractGlomoComponent from './abstract-glomo-component';

import CellsProductItem from '../components/cells-product-item';
import CellsIconMessage from '../components/cells-icon-message';

export default class CellsStepPointsRaffle extends AbstractGlomoComponent {
    constructor(args) {
        const defaultArgs = {
            name: 'cells-step-points-raffle',
            elements: {
                //step uncollapsed
                title: '.step-title',
                textDescription: 'cells-text-description:nth-of-type(1) [data-selector="mainDescription-0"]',
                maximumTicketsTitle: '.dl-reversed.center .key [data-selector="cells-key-values-key"]',
                maximumTicketsQuantity: '.dl-reversed.center .value [data-selector="cells-key-values-atom-amount-0"]',
                maximumTicketsSubTitle: '.dl.center .key [data-selector="cells-key-values-key"]',
                prizesAndRulesLink: {
                    component: {
                        ComponentClass: CellsIconMessage,
                        args: {
                            root: 'cells-icon-message.terms-and-conditions.inline'
                        }
                    }
                },

                //step collapsed
                stepCollapsedTitle: '.cells-step__header .cells-step__header-main .cells-step__header-title',
                changeBtn: '.cells-step__header cells-st-button#changeBtn',

                productItemCollapsed: {
                    component: {
                        ComponentClass: CellsProductItem,
                        args: {
                            root: `div.collapsed ${CellsProductItem._baseRoot}`
                        }

                    }
                },

            },
            requiredElements: [
                'title',
            ],
        };

        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return {
            web: 'cells-step-points-raffle'
        };
    }

    async validateUnCollapedStep() {
        await this.title.waitForText({timeout: config.wait.L});
        await this.textDescription.waitForText({timeout: config.wait.L});
        await this.maximumTicketsTitle.waitForText({timeout: config.wait.L});
        await this.maximumTicketsQuantity.waitForText({timeout: config.wait.L});
        await this.maximumTicketsSubTitle.waitForText({timeout: config.wait.L});
        await this.prizesAndRulesLink.message.waitForDisplayed();
    }

    async validateCollapsedStep() {
        await this.stepCollapsedTitle.waitForText({timeout: config.wait.L});
        await this.changeBtn.waitForClickable({timeout: config.wait.L});
        await this.waitForProductItem();
    }

    async waitForProductItem() {
        await this.productItemCollapsed.itemLabel.waitForDisplayed();
        await this.productItemCollapsed.image.waitForDisplayed();
        await this.productItemCollapsed.alias.waitForDisplayed();
        await this.productItemCollapsed.primaryAmount.currency.waitForDisplayed();
        await this.productItemCollapsed.amountLabel.waitForDisplayed();
    }

}
