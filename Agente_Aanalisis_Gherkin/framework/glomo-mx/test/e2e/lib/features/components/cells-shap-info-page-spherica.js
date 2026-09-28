import CellsShapInfoPage from './cells-shap-info-page';

export default class CellsShapInfoPageSpherica extends CellsShapInfoPage {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-shap-info-page-spherica',

            elements: {
                image: '#ironImage',
                title: '#heading.title',
                message: '#message'
            },

        };

        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return {
            web: 'cells-shap-info-page-spherica'
        };
    }
}
