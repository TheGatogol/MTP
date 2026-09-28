import AbstractGlomoComponent from './abstract-glomo-component';

export default class CellsAtomSubheader extends AbstractGlomoComponent {

    constructor(args) {
        const defaultArgs = {
            name: 'cells-atom-subheader',
            elements: {
                titleSpan: 'span[slot="heading"]',
            },
            requiredElements: [
                'titleSpan',
            ],
        };

        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return 'cells-atom-subheader';
    }
}
