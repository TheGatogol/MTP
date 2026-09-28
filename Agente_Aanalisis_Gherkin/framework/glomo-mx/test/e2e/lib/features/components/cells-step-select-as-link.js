import AbstractGlomoComponent from './abstract-glomo-component';
import ContinueButton from './multistep-continue-actions';
import CellsKeyValues from './cells-key-values';

/**
 * Converts a list of CellsKeyValues component props into a tree of elements
 *
 * Example:
 *
 * list = [
 *   { name: 'element1', keyText: ... },
 *   { name: 'element2', keyText: ... },
 *   ...
 * ]
 * properties = { root: 'selector' }
 *
 * result = {
 *   properties: {
 *     root: 'selector' //shared root for every element
 *   },
 *   element1: [CellsKeyValues, { name, keyText, root }],
 *   element2: [CellsKeyValues, { name, keyText, root }],
 *   ...
 * }
 *
 * @param {Array} list CellsKeyValues component props
 * @param {Object} properties shared properties
 * @return {Object} element tree object
 */
const getElementsFromList = (list, properties) => {
    return list.reduce((items, ob) => {
        items[ob.name] = [CellsKeyValues, {
            name: ob.name,
            keyText: ob.keyText,
            root: `${CellsKeyValues._baseRoot}`
        }];
        return items;
    }, {
        properties,
    });
};

export default class CellsStepSelectAsLink extends AbstractGlomoComponent {
    constructor({listData = [], ...args} = {}) {
        const defaultArgs = {
            name: 'cells-step-select-as-link',
            elements: {
                titleStep: '.cells-step__header-title',
                description: '.full .description',

                addCheckButton: '.full cells-st-button.link-button.link',
                infoMessage: '.full cells-icon-message[type="info"]',

                listData: {
                    properties: {
                        root: '.full .section-list-data',
                        isWithoutRoot: false,
                    },
                    header: 'p',
                    editButton: 'cells-st-button#edit button',
                    deleteButton: 'cells-st-button#delete button',
                    items: getElementsFromList(listData),
                },
                collapsed: {
                    properties: {
                        root: 'cells-step[collapsed]'
                    },
                    listData: {
                        properties: {
                            root: '.filled .section-list-data',
                            isWithoutRoot: false,
                        },
                        header: 'p',
                        items: getElementsFromList(listData),
                    },
                },
                changeBtn: '.cells-step__header cells-st-button#changeBtn',
                continueButton: {
                    component: {
                        ComponentClass: ContinueButton,
                        args: {attributes: '.secondary'}
                    }
                }
            },
            requiredElements: [
                'titleStep'
            ]
        };
        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return {
            web: 'cells-step-select-as-link'
        };
    }
}
