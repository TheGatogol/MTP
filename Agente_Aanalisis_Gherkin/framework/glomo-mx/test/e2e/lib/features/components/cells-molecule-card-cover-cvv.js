import AbstractGlomoComponent from './abstract-glomo-component';

export default class CellsMoleculeCardCoverCvv extends AbstractGlomoComponent {

    constructor(args) {
        super(Object.assign({
            name: 'cells-molecule-card-cover-cvv',
            elements: {
                image: 'cells-molecule-card-cover #image',
                number: 'span.card--front__number',
                date: 'span.card--front__date',
                holderName: 'span.card--front__name',
            },
            requiredElements: [
                'image',
            ],
        }, args));
    }

    static get _baseRoot() {
        return {
            web: 'cells-molecule-card-cover-cvv',
        };
    }

}
