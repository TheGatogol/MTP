import {Element} from '@csqe/radish';
import AbstractGlomoComponent from './abstract-glomo-component';
import ContinueButton from './multistep-continue-actions';
import CellsIconMessage from './cells-icon-message';

export default class CellsStepProductSelector extends AbstractGlomoComponent {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-step-product-selector',

            elements: {

                titleStep: '.cells-step__header-title',
                list: {
                    title: 'div.cells-step__header',
                    firstProduct: '.separators:nth-of-type(2)',
                    seeAllLink: '#viewMore',
                },
                selectorTitle: 'cells-product-item[data-selector*="_DIGITS_"]',
                skeleton: 'div.skeleton-container',

                //flow
                collapsed: {
                    properties: {
                        root: 'cells-step[collapsed]'
                    },
                    item: '.filled cells-product-item'
                },
                continueButton: {
                    component: {
                        ComponentClass: ContinueButton,
                    }
                },
                errorMessage: {
                    component: {
                        ComponentClass: CellsIconMessage
                    }
                }
            },
            requiredElements: [
                'titleStep',
                'list.title'
            ]
        };
        super(Object.assign(defaultArgs, args));

        this.titleStepCollapsed = new Element({
            selector: `${this.root}[collapsed] #stepContainer .cells-step__header .cells-step__header-title`,
            _container: this,
        });
        this.changeBtn = new Element({
            selector: `${this.root}[collapsed] #stepContainer #changeBtn`,
            _container: this,
        });
        this.accountInfoAccName = new Element({
            selector: `${this.root}[collapsed] #item div.item div.item__info div.item__title div.item__name span.item__label`,
            _container: this,
        });
        this.cardInfoAccName = new Element({
            selector: `${this.root}[collapsed] #item .item .item__info .item__title .item__name .item__label`,
            _container: this,
        });
        this.accountInfoAccNumber = new Element({
            selector: `${this.root}[collapsed] #item div.item div.item__info div.item__title .item__additional .item__data`,
            _container: this,
        });
        this.cardInfoAccNumber = new Element({
            selector: `${this.root}[collapsed] #item div.item div.item__info div.item__title .item__additional .item__data .wrapper`,
            _container: this,
        });
        this.amount = new Element({
            selector: `${this.root}[collapsed] #item div.item div.item__quantities .item__primary-amount cells-atom-amount.amount-large`,
            _container: this,
        });
        this.amountLabel = new Element({
            selector: `${this.root}[collapsed] #item div.item div.item__quantities .item__primary-amount .amount-label`,
            _container: this,
        });

    }

    static get _baseRoot() {
        return 'cells-step-product-selector';
    }

    async waitUntilSkeletonDisappears(timeOut = config.wait.XXL) {
        await this.skeleton.waitForDisplayed({timeout: timeOut, errorMessage: `Skeleton is still visible after ${timeOut}s`, reverse: true});
    }

    async selectAccount(lastDigits) {
        await this.waitUntilSkeletonDisappears();
        await this.list.firstProduct.waitForDisplayed({timeout: config.wait.XL});
        const accountId = this.selectorTitle.specifySelector({placeholder: '_DIGITS_', value: lastDigits});
        await accountId.waitForClickable({timeout: config.wait.XL});
        await accountId.click();
    }

    async validateAccountCollapsed() {
        await this.titleStepCollapsed.waitForText({timeout: config.wait.L});
        await this.changeBtn.waitForDisplayed({timeout: config.wait.L});
        await this.accountInfoAccName.waitForText();
        await this.accountInfoAccNumber.waitForDisplayed({timeout: config.wait.L});
        await this.accountInfoAccNumber.waitForText();
        await this.amount.waitForDisplayed({timeout: config.wait.L});
        await this.amount.waitForText();
        await this.amountLabel.waitForDisplayed({timeout: config.wait.L});
        await this.amountLabel.waitForText();
    }

    async validateStepCollapsed() {
        await this.titleStepCollapsed.waitForText({timeout: config.wait.L});
        await this.cardInfoAccName.waitForText({timeout: config.wait.L});
        await this.cardInfoAccNumber.waitForText({timeout: config.wait.L});
        await this.cardInfoAccNumber.waitForText({timeout: config.wait.L});
        await this.amount.waitForDisplayed({timeout: config.wait.L});
        await this.amount.waitForText({timeout: config.wait.L});
        await this.amountLabel.waitForDisplayed({timeout: config.wait.L});
        await this.amountLabel.waitForText({timeout: config.wait.L});
    }
}
