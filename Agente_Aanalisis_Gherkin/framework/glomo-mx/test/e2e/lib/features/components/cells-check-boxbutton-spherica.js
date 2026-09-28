import CellsCheckboxButton from './cells-checkbox-button';

export default class CellsCheckboxButtonSpherica extends CellsCheckboxButton {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-checkbox-button-spherica',

        };

        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return {
            web: 'cells-checkbox-button-spherica'
        };
    }
}
