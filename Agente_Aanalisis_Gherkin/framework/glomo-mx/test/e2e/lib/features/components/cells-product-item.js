import AbstractGlomoComponent from './abstract-glomo-component';
import CellsAtomAmount from './cells-atom-amount';

export default class CellsProductItem extends AbstractGlomoComponent {
    constructor({name, placeHolder} = {}) {
        const defaultArgs = {
            name: 'cells-product-item',
            elements: {
                aliasSpan: 'span.number',
                itemLabelSpan: 'div div div :not([hidden]) > span.item__label',
                itemImage: '.item__image iron-image#image #img',
                amountLabelSpan: 'div.item__primary-amount .amount-label',
                amountComponent: {
                    component: {
                        ComponentClass: CellsAtomAmount,
                        args: {
                            name: `${CellsAtomAmount._baseRoot} of ${name ? name : 'cells-product-item'}`,
                        }
                    }
                },
                primaryAmountComponent: {
                    component: {
                        ComponentClass: CellsAtomAmount,
                        args: {
                            root: `div.item__primary-amount ${CellsAtomAmount._baseRoot}`
                        }
                    }
                },
            },
            requiredElements: [
                'aliasSpan',
            ],
        };
        super(Object.assign(defaultArgs, arguments[0]));
        this.placeHolder = placeHolder;
    }

    static get _baseRoot() {
        return 'cells-product-item';
    }

    get item() {
        return {
            waitForEnabled: async ({timeout = config.wait.L} = {}) => {
                await this.__root.waitForEnabled({timeout});
            },

            waitForDisabled: async ({timeout = config.wait.L} = {}) => {
                await this.__root.waitForDisabled({timeout});
            },

            waitForDisplayed: async ({timeout = config.wait.L} = {}) => {
                await this.__root.waitForDisplayed({timeout});
            },

            click: async ({timeout = config.wait.L} = {}) => {
                await this.__root.waitForClickable({timeout});
                await this.__root.click();
            }
        };
    }

    get filter() {
        return {
            /**
             * This returns a new instance of this class,
             * replacing the specified placeholder on data selector for the given value.
             *
             * This requires a data-selector to function.
             * @param value
             * @returns {CellsProductItem}
             */

            byDataSelector: ({value}) => {
                const {selector} = this.__root.specifySelector({placeholder: this.placeHolder, value: value});
                return new CellsProductItem({
                    root: selector,
                    name: `${this.name} filtered by ${value}`
                });
            },
        };
    }

    get amount() {
        return {
            getText: async () => {
                return this.amountComponent.amount.getText();
            }
        };
    }

    get primaryAmount() {
        return {
            waitForDisplayed: async ({timeout = config.wait.L} = {}) => {
                return this.primaryAmountComponent.amount.waitForDisplayed({timeout});
            },
            getText: async () => {
                return this.primaryAmountComponent.amount.getText();
            },
            currency: {
                getText: async ({side = 'left'} = {}) => {
                    return this.primaryAmountComponent.currency.getText({side});
                },
                waitForText: async ({currency, side = 'left'} = {}) => {
                    await this.primaryAmountComponent.currency.waitForText({currency, side});
                },
                waitForDisplayed: async ({side = 'left'} = {}) => {
                    await this.primaryAmountComponent.currency.waitForDisplayed({side});
                }
            }
        };
    }

    get alias() {
        return {
            waitForDisplayed: async ({timeout = config.wait.L} = {}) => {
                await this.aliasSpan.waitForDisplayed({timeout});
            },
            getText: async ({timeout = config.wait.L} = {}) => {
                await this.aliasSpan.waitForDisplayed({timeout});
                return this.aliasSpan.getText();
            }
        };
    }

    get itemLabel() {
        return {
            waitForDisplayed: async ({timeout = config.wait.L} = {}) => {
                await this.itemLabelSpan.waitForDisplayed({timeout});
            },
            getText: async ({timeout = config.wait.L} = {}) => {
                await this.itemLabelSpan.waitForDisplayed({timeout});
                return this.itemLabelSpan.getText();
            }
        };
    }

    get image() {
        return {
            waitForDisplayed: async ({timeout = config.wait.L} = {}) => {
                await this.itemImage.waitForDisplayed({timeout});
            },
        };
    }

    get amountLabel() {
        return {
            waitForDisplayed: async ({timeout = config.wait.L} = {}) => {
                await this.amountLabelSpan.waitForDisplayed({timeout});
            }
        };
    }
}
