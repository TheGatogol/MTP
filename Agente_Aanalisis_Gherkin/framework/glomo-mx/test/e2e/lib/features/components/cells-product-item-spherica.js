import CellsProductItem from './cells-product-item';

export default class CellsProductItemSpherica extends CellsProductItem {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-product-item-spherica'
        };
        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return 'cells-product-item-spherica';
    }

}
