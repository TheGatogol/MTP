import AbstractGlomoComponent from './abstract-glomo-component';
import {Element} from '@csqe/radish';

export default class BbvaHeaderMain extends AbstractGlomoComponent {
    constructor({additionalElements, ...args} = {}) {
        super(Object.assign({
            name: 'bbva-header-main',
            elements: {
                buttonLeftPrimary: '#btn-left-primary',
                buttonRightPrimary: '#btn-right-primary',
                buttonLeftSecondary: '#btn-left-secondary',
                buttonRightSecondary: '#btn-right-secondary',
                text: '.text',
                btnBack: '#btn-back',
                back: '#btn-right-primary',
                btnHelp: '#btn-help',
                faqsButton: '#btn-info',
                btnClose: '#btn-close'
            },
            requiredElements: [
                'text',
            ],
        }, args));

        this.additionalElements = {};
        this._buildAdditionalElements(additionalElements);
    }

    static get _baseRoot() {
        return '[data-tag-name=bbva-header-main]';
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

