import {Element} from '@csqe/radish';
import BbvaHeaderMain from './bbva-header-main';

export default class BbvaHeaderMainSpherica extends BbvaHeaderMain {
    constructor({additionalElements, ...args} = {}) {
        super(Object.assign({
            name: 'bbva-header-main-spherica',
            elements: {
                text: '.text',
                buttonRightPrimary: '#btn-right-primary',
                buttonRightSecondary: '#btn-right-secondary',
                back: '#btn-close'
            },
            requiredElements: [
                'text',
            ],
        }, args));

        this.additionalElements = {};
        this._buildAdditionalElements(additionalElements);
    }

    static get _baseRoot() {
        return '[data-tag-name="bbva-header-main-spherica"]';
    }

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

    async actionRight() {
        await this.buttonRightPrimary.waitForClickable({timeout: config.wait.M});
        await this.buttonRightPrimary.click();
    }
}

