import AbstractGlomoComponent from './abstract-glomo-component';
import {Commands, Element} from '@csqe/radish';

/**
 * Class that represents the component {@link https://globaldevtools.bbva.com/bitbucket/projects/CELLSCOMPONENTSCATALOGLEGACY/repos/cells-key-values/browse|cells-key-values}.
 * All cells-key-values are composed of 2 elements: a key, and its value.
 * The key element should be unique, and identifies the cells-key-values by its content. This should also be constant.
 * The value is the field to be filled with dynamic data, and is usually the valuable date found in the component.

 * This component cannot build elements normally as it will always need to filter through its key's value, stopping the possibility
 * of using a regular CSS selector, and instead having to filter through the page to find the correct component on every interaction.
 *
 * Because of this, all elements will be instantiated through a special function, which creates a set of getters similar to
 * a regular Testable class would for its elements, but providing a limited set of Element-like functions to interact with them.
 */
export default class CellsKeyValues extends AbstractGlomoComponent {
    /**
     * @param {Object} options - Options
     * @param {string} options. to be used by default during filtering while using this instance of this component
     * @param {Object} [args] rest of arguments to use on this components' construction.
     */
    constructor({keyText, placeholderText, needsFiltering = true,  ...args} = {}) {
        const defaultArgs = {
            name: 'cells-key-values',
            /** cells-key-values needs to be filtered, and therefore cannot be built as a regular element, so it's 'elements' are empty*/
            elements: {},
            /** Through a specific building process, both 'key' and 'value' will be constructed and will be used as requiredElements*/
            requiredElements: [
                'key',
                'value',
            ],
        };
        super(Object.assign(defaultArgs, {...args}));
        /** This variable is used to filter this component through the value of the key text. */
        this.keyText = keyText;
        if (!args.name && this.keyText) {
            this.name = `cells-key-value:${this.keyText}`;
        }
        this.knownElements = {};
        /** This function builds both the basic elements 'key' and 'value' */
        this._buildCellsKeyValueElements({
            key: 'div.key span',
            value: 'div.value div.value-item',
        });
        this.placeholderText = placeholderText;
        this.needsFiltering = needsFiltering;
    }

    static get _baseRoot() {
        return 'cells-key-values';
    }

    get filter() {
        return {
            /**
             * This function will, first, wait for all cells-key-values to be visible.
             * Then, it will look for one of them to have a 'key' which value matches the keyText variable.
             * If found, it will return the first cells-key-values component to have a children with the given text.
             * @param {string} keyText used to filter and find the wanted cells-key-values
             * @param {number} [timeout=config.wait.M] for waitForDisplayed
             * @param [object] [options] additional arguments for waitForDisplayed function
             * @return {Promise<Object.<{ELEMENT: string}>|Element>} webElementID of this specific cells-key-values, or an Element instance, as per asElement argument
             */
            byKey: async (
                {keyText = this.keyText, timeout = config.wait.M, wait = true, ...options} = {},
            ) => {
                if (wait) {
                    await this.__root.waitForDisplayed({timeout, ...options});
                }

                if (!keyText) {
                    throw new Error(`[${this}] Filtering Error: No key has been provided.`);
                }
                const parentElement = await this.__root.filter.childWithText({
                    text: keyText,
                    childSelector: this.knownElements.key,
                });
                return parentElement[0];
            }
        };
    }

    /**
     * Executes a regular "is" set of actions on both key and value of this component.
     * If is.not.visible or is.not.existing is executed, it will instead expect the filter.byKey action to return no element.
     */
    get is() {
        const basicFunctions = super.is;
        const _this = this;
        const notVisibleAction = this.needsFiltering ? async () => {
            await expect(
                _this.filter.byKey({keyText: _this.keyText, wait: false}),
                `[${_this}] Expected component to not be visible. Selector: ${_this.root}`,
            ).to.eventually.be.undefined;
        } : async () => {
            await (await _this.key()).is.not.visible();
            await ((await (_this.value()))).is.not.visible();
        };
        basicFunctions.not.visible = notVisibleAction;
        basicFunctions.not.existing = notVisibleAction;
        return basicFunctions;
    }

    /**
     * This function will build all elements for this component.
     * First, they will add the element's selector to the list of 'knownElements',
     * Then, it will create a getter identified with the name of the element, which can be interacted as with any other element.
     * @param {Object} elements an object with a list of elements to instantiate and their selectors
     * @private
     */
    _buildCellsKeyValueElements(elements = {}) {
        for (const [name, selector] of Object.entries(elements)) {
            if (selector instanceof AbstractGlomoComponent) {
                throw new Error(`[${this}] Error building additional elements: Using components as additional element isn't supported.`);
            } else {
                this.knownElements[name] = selector;
                const _this = this;
                this[name] = async () => await _this._element({elementName: name});
            }
        }
    }

    /**
     * This function is executed on every single element interaction.
     * This will, first, find the "parent" element (the cells-key-values that correspond with this instance of this component).
     * Then, looking inside this "parent" element, it will find the desired element using the element's selector.
     * Having found this element, it will create a new instance of {@link Element} using the element's webElementID, instead of its selector.
     * All this is done to avoid finding elements from other cells-key-values.
     *
     * @param {string|Element|Object.<{ELEMENT: string}>} [parent] if a specific parent is to be used, otherwise it will filter using {@link filter.byKey}
     * @param {string} [keyText] key to filter by, otherwise it will use the one provided during instantiation
     * @param {string} elementName name given to the element to be found, as it was built during this component's construction
     * @return {Promise<Element>} An Element instance of the specific element, using its webElementID as its selector.
     * @private
     */
    async _element({parent, keyText, elementName} = {}) {
        if(!this.needsFiltering){
            return new Element({
                selector:`${this.__root.selector} ${this.knownElements[elementName]}`,
                name: elementName,
                _container: this,
            });
        }
        const foundElement = new Element({
            selector: this.knownElements[elementName],
            name: elementName,
            parent: parent ? parent : await this.filter.byKey({
                keyText,
            }),
            _container: this,
        });
        return new Element({
            selector: (await foundElement.element()).value,
            name: elementName,
            _container: this,
        });
    }

    /**
     * Executes a regular "waitForVisible" action on both key and value of this component.
     * If reverse is true, it will instead wait until the filter.byKey returns no element.
     */
    async waitForVisible(timeout = config.wait.S, errorMessage, reverse) {
        if (reverse && this.needsFiltering) {
            if (!errorMessage) {
                errorMessage = `[${this}] Expected component to not be visible after ${timeout}ms. Selector: ${this.root}`;
            }
            const _this = this;
            await Commands.waitUntil({
                condition: async () => {
                    const element = await _this.filter.byKey({keyText: _this.keyText, wait: false});

                    return element != null;
                },
                timeout,
                errorMessage,
            });
        } else {
            const keyElement = await this.key();
            await keyElement.waitForDisplayed({timeout, errorMessage, reverse});

            const valueElement = await this.value();
            await valueElement.waitForDisplayed({timeout, errorMessage, reverse});
        }
    }

    /**
     * @override
     */
    toString() {
        return this.name;
    }
}
