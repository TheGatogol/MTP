import BbvaPanelInfo from './bbva-panel-info';

export default class BbvaPanelInfoSpherica extends BbvaPanelInfo {

    constructor(args) {
        super(Object.assign({
            name: 'bbva-panel-info-spherica',
            elements: {
                image: '.image',
                title: 'div.content > [data-tag-name=bbva-type-text].title h3',
                link: '[data-tag-name="bbva-type-link"]',
                content: 'div.content',

            },
            requiredElements: [
                'description',
            ],
        }, args));
    }

    static get _baseRoot() {
        return 'bbva-panel-info-spherica';
    }
}
