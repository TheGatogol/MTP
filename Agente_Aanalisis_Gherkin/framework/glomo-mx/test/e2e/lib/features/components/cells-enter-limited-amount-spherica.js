import CellsEnterLimitedAmount from './cells-enter-limited-amount';

export default class CellsEnterLimitedAmountSpherica extends CellsEnterLimitedAmount {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-enter-limited-amount-spherica'
        };
        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return {
            web: 'cells-enter-limited-amount-spherica',
        };
    }

}
