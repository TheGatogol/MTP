import AbstractGlomoComponent from './abstract-glomo-component';

export default class BbvaHeaderCategory extends AbstractGlomoComponent {

    constructor(args) {
        super(Object.assign({
            name: 'bbva-header-category',
            elements: {
                icon: '[data-tag-name="bbva-icon"]',
            },
            requiredElements: [
                '__root',
            ],
        }, args));
    }

    static get _baseRoot() {
        return 'bbva-header-category';
    }
}

