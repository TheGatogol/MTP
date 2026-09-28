import BbvaHelpModal from './bbva-help-modal';
import {Element} from '@csqe/radish';

export default class BbvaHelpModalSpherica extends BbvaHelpModal {
    constructor({additionalElements, ...args} = {}) {
        super(Object.assign({
            name: 'bbva-help-modal-spherica',
            elements: {
                header: '#helpModalHeader',
                image: '[data-tag-name="bbva-panel-info-spherica"] div.image',
                title: '[data-tag-name="bbva-panel-info-spherica"] .title',
                description: '[data-tag-name="bbva-panel-info-spherica"] .description',
                content: '.col-content',
                icon: '[data-tag-name="bbva-clip-microillustration"]',

                closeBtn: '#helpModalHeader #btn-right-primary',
                acceptBtn: '[data-tag-name="bbva-button-default"]',
                cancelBtn: '[data-tag-name="bbva-link"]',
                secondaryBtn: '#helpModalHeader #btn-right-secondary'
            },
            requiredElements: [
                'header'
            ],
        }, args));

        this.additionalElements = {};
        this._buildAdditionalElements(additionalElements);
    }

    static get _baseRoot() {
        return '[data-tag-name="bbva-help-modal-spherica"]';
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

    async scrollIntoModal() {
        await this.header.scrollIntoView({block: 'center'});
    }
}
