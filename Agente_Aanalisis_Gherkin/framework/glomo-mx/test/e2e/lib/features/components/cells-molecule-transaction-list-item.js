import CellsAtomAmount from './cells-atom-amount';
import AbstractGlomoComponent from './abstract-glomo-component';

export default class CellsMoleculeTransactionsListItem extends AbstractGlomoComponent {

    /**
     * Cells-Molecule-Transactions-List-Item
     * This component is usually found inside transaction lists, and hold the preview of a transaction.
     *
     * By default, this component tend to have 2 fields:
     * Transaction Concept, a text field
     * Transaction Amount, an instance of Cells-Atom-Amount
     *
     * Additionally, this component could include additional information, such as an account number.
     *
     * If using this component with its base root, you will usually find more than one element, as this is a list item.
     * You should try and provide some kind of data-selector when instantiating this component, be it before of after the baseRoot.
     * You could either specify a completed data-selector, so this component can only find 1 element,
     * or you could specify a data-selector with a placeholder text, such as:
     *  -   [data-selector="__SELECTOR__"]
     * to allow you to dynamically find different elements using the filter function.
     *
     * You can provide objects inside additionalInfo to create personalized functions.
     * This properties will execute the function additionalInfo with the specified index.
     * @param name: name of this instance
     * @param dataSelector: the placeholder text used to be able to filter by the data-selector.
     * @param additionalInfo: an object of objects that define how many properties you want for additionalInfo
     */
    constructor({name, dataSelector, additionalInfo} = {}) {
        const defaultArgs = {
            name: 'cells-molecule-transaction-list-item',
            elements: {
                transactionConcept: 'div.transaction-info p.transaction-name',
                transactionAmount: {
                    component: {
                        ComponentClass: CellsAtomAmount,
                        args: {
                            root: `div.balance ${CellsAtomAmount._baseRoot}`,
                            name: `${CellsAtomAmount._baseRoot} of ${name ? name : 'cells-molecule-transactions-list-item'}`,
                        },
                    },
                },
                transactionAdditionalInfo: 'li.additional-info__item span.text',
                transactionFulfillmentStatus: 'div.transaction-status.fulfillment-status.__STATUS__',
            },
            requiredElements: [
                'transactionConcept',
            ],
        };
        super(Object.assign(defaultArgs, arguments[0]));
        this.dataSelector = dataSelector;

        /**
         * This allows for personalization of your transaction-item additional info.
         * If you provide the constructor with a set of additionalInfo data,
         * it will create a property for each additional info, allowing you
         * to interact with them naturally.
         *
         * For Instance, if you provided:
         * {
         *     additionalInfo: {
         *         accountName: {
         *             index: 1
         *         },
         *         accountNumber: {
         *             index: 2
         *         }
         *     }
         * }
         *
         * This would mean that your transaction-item has at least 2 additional info,
         * the first being an account name, the second being an account number,
         * and so, your transaction-item will have 2 properties with those names,
         * so you will be able to execute the next code on your testable:
         * myTransactionItemInstance.accountName.waitForExactText({text:"My Account"});
         */
        if (additionalInfo) {
            for (const info in additionalInfo) {
                if (Object.prototype.hasOwnProperty.call(additionalInfo, info)) {
                    const actions = this.additionalInfo({index: additionalInfo[info].index});
                    Object.defineProperty(this, info, {
                        get: function () {
                            return actions;
                        },
                    });
                }
            }
        }
        this._additionalInfoList = additionalInfo;
    }

    static get _baseRoot() {
        return 'cells-molecule-transaction-list-item';
    }

    /**
     * Interacts with this transaction-item concept.
     *
     * This should only be used on a filtered transaction.
     * If this transaction-item could return more than one element, these operations won't be reliable.
     * @returns {{visibility: (function({timeout?: *}): *), is: {not: {visible: is.not.visible}, visible: is.visible}, verifyText: (function({text: *}=): *|void)}}
     */
    get concept() {
        return {
            waitForDisplayed: async ({timeout}) => {
                await this.transactionConcept.waitForDisplayed({timeout});
            },
            waitForNotDisplayed: async ({timeout}) => {
                await this.transactionConcept.waitForNotDisplayed({timeout});
            },
            waitForText: async ({text} = {}) => {
                return this.transactionConcept.waitForText({text});
            },
        };
    }

    /**
     * Interacts with this transaction-item amount.
     *
     * This should only be used on a filtered transaction.
     * If this transaction-item could return more than one element, these operations won't be reliable.
     * @returns {{visibility: visibility, verify: verify, waitForNotDisplayed: waitForNotDisplayed, waitForDisplayed: waitForDisplayed}}}
     */
    get amount() {
        return {
            waitForDisplayed: async (args) => {
                await this.transactionAmount.amount.waitForDisplayed({args});
            },
            waitForNotDisplayed: async (args) => {
                await this.transactionAmount.amount.waitForNotDisplayed({args});
            },
            waitForText: async ({amount}) => {
                return this.transactionAmount.amount.waitForText({text: amount});
            },
        };
    }

    /**
     * Interacts with this transaction-item currency simbol.
     *
     * This should only be used on a filtered transaction.
     * If this transaction-item could return more than one element, these operations won't be reliable.
     * @returns {{visibility: visibility, verify: verify, waitForNotDisplayed: waitForNotDisplayed, waitForDisplayed: waitForDisplayed}}}
     */
    get currency() {
        return {
            waitForNotDisplayed: async args => {
                await this.transactionAmount.currency.waitForNotDisplayed({args});
            },
            waitForDisplayed: async args => {
                await this.transactionAmount.currency.waitForDisplayed({args});
            },
            waitForText: async ({currency, side}) => {
                await this.transactionAmount.currency.waitForText({currency, side});
            },
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
             * @returns {CellsMoleculeTransactionsListItem}
             */
            byDataSelector: ({value}) => {
                const {selector} = this['__root'].specifySelector({placeholder: this.dataSelector, value: value});
                return new CellsMoleculeTransactionsListItem({
                    root: selector,
                    name: `${this.name} filtered by ${value}`,
                    additionalInfo: this._additionalInfoList,
                });
            },
        };
    }
}
