import CellsMoleculeActions from './cells-molecule-actions';

export default class CellsMoleculeActionsSpherica extends CellsMoleculeActions {

    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-molecule-actions-spherica',
            elements: {
                confirmBtn: 'cells-st-button-spherica.primary #primaryButton',
            }
        };

        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return {
            web: 'cells-molecule-actions-spherica',
        };
    }
}
