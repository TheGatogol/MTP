import CellsNavigationBar from './cells-navigation-bar';

export default class CellsNavigationBarSpherica extends CellsNavigationBar {
    constructor({itemList} = {}) {
        const defaultArgs = {
            name: 'cells-navigation-bar-spherica',
        };
        super(Object.assign(defaultArgs, arguments[0]));
        this.itemList = {};
        this._buildItems(itemList);
    }

    static get _baseRoot() {
        return 'cells-navigation-bar-spherica';
    }
}
