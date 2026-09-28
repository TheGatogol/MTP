import GlomoButtonList from './glomo-button-list';

export default class GlomoButtonListSpherica extends GlomoButtonList {
    constructor() {
        const defaultArgs = {
            name: 'glomo-button-list-spherica',
            elements: {
                firstButton: 'cells-st-button-spherica.link',
                nButton: 'cells-st-button-spherica.link:nth-of-type(__N__)',
                selectButton: 'cells-st-button-spherica.link button.__S__',
                nIcon: 'cells-st-button-spherica.link:nth-of-type(__N__) svg',
                selectIcon: 'cells-st-button-spherica.link button.__S__ svg',
            },
            requiredElements: [
                'firstButton',
            ],
        };
        super(Object.assign(defaultArgs, arguments[0]));
    }

    static get _baseRoot() {
        return 'glomo-button-list-spherica';
    }
}

