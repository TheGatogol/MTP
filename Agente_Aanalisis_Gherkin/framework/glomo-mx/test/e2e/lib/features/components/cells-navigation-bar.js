import AbstractGlomoComponent from './abstract-glomo-component';

/**
 * Class that represents the component {@link https://globaldevtools.bbva.com/bitbucket/projects/CELLSCOMPONENTSCATALOGLEGACY/repos/cells-navigation-bar/browse|cells-navigation-bar}.
 * All cells-navigation-bar are composed of an array of items.
 * This is located in the footer and the items are links to different pages or operatives.

 * The items and the number of it is dinamicaly defined by items variable, which is an array of jsons where each json is an item
 * Each json contains the information of each link on the bar, such as icon, link, ...
 */
export default class CellsNavigationBar extends AbstractGlomoComponent {

    constructor({itemList} = {}) {
        const defaultArgs = {
            name: 'cells-navigation-bar',
            elements: {
                list: '.list',
                links: 'div.list div.list__item button.list__link',
                firstLink: 'div.list div.list__item:nth-of-type(1) button.list__link',
                posLink: 'div.list div.list__item:nth-of-type(__POS__) button.list__link',
                nameLink: 'div.list div.list__item button[data-page="__NAME__"]',
            },

            requiredElements: [
                '__root',
            ],
        };
        super(Object.assign(defaultArgs, arguments[0]));
        this.itemList = {};
        this._buildItems(itemList);
    }

    static get _baseRoot() {
        return 'cells-navigation-bar';
    }

    /**
     * Builds elements to be found by key. Used only during component instantiation.
     * @param {Object} itemList
     * @private
     */
    _buildItems(itemList = {}) {
        for (const [element, selector] of Object.entries(itemList)) {
            if (_.isEmpty(selector) && isNaN(selector))
                throw new Error(`The CellsNavigationBar element "${element}" selector must not be empty.`);
            if (typeof selector === 'number') {
                this.itemList[element] = this.posLink.specifySelector({
                    placeholder: '__POS__',
                    value: selector,
                    __logLevel: 'silly'
                });
            } else if (typeof selector === 'string') {
                this.itemList[element] = this.nameLink.specifySelector({
                    placeholder: '__NAME__',
                    value: selector,
                    __logLevel: 'silly'
                });
            } else {
                throw new Error(`[CellsNavigationBar] Element "${element}" selector isn't valid. Use only numbers or strings.`);
            }
        }
    }

    async waitForAnimation(...args) {
        await this.performOnRequired('waitForAnimation', ...args);
    }

    _isTabKnown({tab}) {
        if (this.itemList[tab] == null) {
            throw new Error(`[CellsNavigationBar] Tab ${tab} from ${this._container.name} isn't defined.`);
        }
    }

    async accessKnownTab({tab}) {
        await this.waitForDisplayed();
        this._isTabKnown({tab});
        await (await this.itemList[tab].waitForClickable({timeout: config.wait.M}))
            .click({useActions: true, scrollOptions: {block: 'nearest'}});
    }

    async isTabPresent({tab, timeout = config.wait.M, reverse = false}) {
        await this.waitForDisplayed();
        this._isTabKnown({tab});
        await this.itemList[tab].waitForDisplayed({timeout, reverse});
    }

    async isTabEnabled({tab, reverse = false, failOnError = false, timeout = config.wait.M}) {
        await this.waitForDisplayed();
        this._isTabKnown({tab});
        return (await this.itemList[tab].waitForDisplayed({timeout}))
            .waitForEnabled({
                timeout,
                failOnError,
                reverse,
            });
    }
}
