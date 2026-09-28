import AbstractGlomoComponent from './abstract-glomo-component';

export default class CellsMoleculeActions extends AbstractGlomoComponent {

    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-molecule-actions',
            elements: {
                confirmBtn: 'cells-st-button.primary #primaryButton',
            },
            requiredElements: [
                'confirmBtn',
            ],
        };

        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return {
            web: 'cells-molecule-actions',
        };
    }
}
