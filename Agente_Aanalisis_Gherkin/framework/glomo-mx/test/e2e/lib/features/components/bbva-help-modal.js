import AbstractGlomoComponent from './abstract-glomo-component';
import {Element, ElementValidationKeyNotFound} from '@csqe/radish';

export default class BbvaHelpModal extends AbstractGlomoComponent {
    constructor({additionalElements, ...args} = {}) {
        super(Object.assign({
            name: 'bbva-help-modal',
            elements: {
                // Texts
                header: '#helpModalHeader',
                image: '[data-tag-name="bbva-panel-info"] div.image',
                title: '[data-tag-name="bbva-panel-info"] div.content [data-tag-name="bbva-text"].title',
                description: '[data-tag-name="bbva-panel-info"] div.content [data-tag-name="bbva-text"].description',
                content: '.col-content',
                icon: '[data-tag-name="bbva-clip-microillustration"]',
                titleText:'#title-text',

                // Buttons
                closeBtn: '#helpModalHeader #btn-right-primary',
                acceptBtn: '[data-tag-name="bbva-button-default"]',
                cancelBtn: '[data-tag-name="bbva-link"]',
                secondaryBtn: '#helpModalHeader #btn-right-secondary',
                iconCloseBtn:'#btn-close'
            },
            requiredElements: [
                'header'
            ],
        }, args));

        this.CANCEL_BUTTON = 'cancel button';
        this.CLOSE_BUTTON = 'cancel button';
        this.CONTAINER_ICON = 'container icon';
        this.HEADER = 'header';

        this.additionalElements = {};
        this._buildAdditionalElements(additionalElements);
    }

    static get _baseRoot() {
        return '[data-tag-name="bbva-help-modal"]';
    }

    /**
     * Builds additional elements to be found outside the templateParagraph element. Used only during component instantiation.
     * @param {Object} additionalElements
     * @private
     */
    _buildAdditionalElements(additionalElements = {}) {
        for (const [element, selector] of Object.entries(additionalElements)) {
            if (!selector)
                throw new Error(`The BbvaHelpModal custom element "${element}" selector must not be empty.`);
            this.additionalElements[element] = new Element({
                selector: `${this.root} ${selector}`,
                name: element,
                _container: this,
            });
        }
    }

    /**
     * Validation of modal through standard validateModalElements function
     * @param {string} item - Key used to identify element or group of elements to be validated
     */
    async elementValidation({item, ...args} = {}) {
        switch (item.toLowerCase()) {
            case this.CLOSE_BUTTON:
                await this.iconCloseBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.HEADER:
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.CANCEL_BUTTON:
                await this.cancelBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.CONTAINER_ICON:
                await this.titleText.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ElementValidationKeyNotFound({key: item, args: {item, ...args}});
        }
    }

    /**
     * Alias for waitForDisplayed
     * @see {@link waitForDisplayed}
     */
    async waitForVisible(...options) {
        await this.waitForDisplayed(...options);
    }

    async scrollIntoModal() {
        await this.header.scrollIntoView({block: 'center'});
    }
}
