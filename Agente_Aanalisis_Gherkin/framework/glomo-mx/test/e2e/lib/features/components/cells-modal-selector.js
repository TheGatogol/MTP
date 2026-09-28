import AbstractGlomoComponent from './abstract-glomo-component';

export default class CellsModalSelector extends AbstractGlomoComponent {

    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-modal-selector',
            elements: {
                // List of html elements for list.
                listItems: 'li.cells-modal-selector-content',
                item: 'cells-middle-modal#modal li[id="__ITEM__"]',
            },
            requiredElements: [
                'listItems',
            ],
        };

        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return {
            web: 'cells-modal-selector'
        };
    }

    async selectItem(currency) {
        await this.verifyItemIsClickable(currency);
        await this.item.specifySelector({placeholder: '__ITEM__', value: currency}).click();
    }

    async verifyItemIsClickable(currency) {
        await this.item.specifySelector({placeholder: '__ITEM__', value: currency}).waitForClickable({timeout: config.wait.L});
    }
}
