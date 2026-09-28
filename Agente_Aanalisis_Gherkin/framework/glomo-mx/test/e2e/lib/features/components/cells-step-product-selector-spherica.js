import CellsStepProductSelector from './cells-step-product-selector';
import {Element} from '@csqe/radish';

export default class CellsStepProductSelectorSpherica extends CellsStepProductSelector {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-step-product-selector-spherica',
            elements: {
                list: {
                    firstProduct: 'cells-step-spherica div.separators cells-product-item-spherica[data-index="0"]'
                },
                skeleton: 'div.skeleton-container',
                selectorTitle: 'cells-product-item-spherica[data-selector*="_DIGITS_"]',
            }
        };

        super(Object.assign(defaultArgs, args));

        this.amount = new Element({
            selector: `${this.root}[collapsed] #item div.item div.item__quantities .item__primary-amount cells-atom-amount-spherica.amount-large`,
            _container: this,
        });
    }

    static get _baseRoot() {
        return {
            web: 'cells-step-product-selector-spherica',
        };
    }
}
