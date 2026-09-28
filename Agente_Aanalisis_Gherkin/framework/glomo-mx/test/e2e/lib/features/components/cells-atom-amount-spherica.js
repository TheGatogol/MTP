import CellsAtomAmount from './cells-atom-amount';

export default class CellsAtomAmountSpherica extends CellsAtomAmount {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-atom-amount-spherica'
        };

        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return {
            web: 'cells-atom-amount-spherica',
            isWithoutRoot: true,
        };
    }
}
