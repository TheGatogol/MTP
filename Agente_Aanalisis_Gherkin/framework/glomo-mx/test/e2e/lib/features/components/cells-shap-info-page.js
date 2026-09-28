import AbstractGlomoComponent from './abstract-glomo-component';

export default class CellsShapInfoPage extends AbstractGlomoComponent {

    constructor(args) {
        super(Object.assign({
            name: 'cells-shap-info-page',
            elements: {
                image: '#ironImage',
                title: '#heading.title',
            },
            requiredElements: [
                'title',
            ],
        }, args));
    }

    static get _baseRoot() {
        return {
            web: 'cells-shap-info-page',
        };
    }

}
