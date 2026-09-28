import AbstractGlomoComponent from './abstract-glomo-component';
import {Commands} from '@csqe/radish';

export default class CellsExpensesCategoryList extends AbstractGlomoComponent {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-expenses-category-list',
            elements: {
                taxonomiesListTitle: '.list-header h3',
                taxonomiesListMoreToggleButton: '.list-header cells-st-button',
                taxonomiesListItems: '.list .list-items .list-item',
                categoriesList: 'div.list-items',
                noMovementsMessage: 'cells-icon-message[type=info]'
            },
            requiredElements: [
                'taxonomiesListTitle'
            ]
        };

        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return 'cells-expenses-category-list';

    }

    async _chooseTaxonomy() {
        await Commands.pause({time: config.wait.S});
        await this.taxonomiesListItems.waitForDisplayed({timeout: config.wait.L});
        await this.taxonomiesListItems.click();
    }
}
