import AbstractGlomoComponent from './abstract-glomo-component';

export default class CellsCardAdvice extends AbstractGlomoComponent {

    constructor(args) {
        super(Object.assign({
            name: 'cells-card-advice',
            elements: {
                image: '#image',
                text: 'p#text.card-advice__text',
                link: '#link.card-advice__link',
                title: '.card-advice__title',
            },
            requiredElements: [
                'image',
            ],
        }, args));
    }

    static get _baseRoot() {
        return {
            web: 'cells-card-advice',
        };
    }

}
