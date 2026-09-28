import {Element, utils} from '@csqe/radish';

import AbstractGlomoComponent from './abstract-glomo-component';

export default class CellsProductMoreInfo extends AbstractGlomoComponent {
    constructor() {
        const defaultArgs = {
            name: 'cells-product-more-info',
            elements: {
                listElement: '',
                parent: '.info-list div.item',
                label: '.descriptive-term span.item-key',
                value: '.descriptive-detail span'
            },
            requiredElements: [
                'listElement',
            ],
        };

        super(Object.assign(defaultArgs, arguments[0]));

        this.moreInfoItem = '.item-title-and-description';
        this.moreInfoItemTitle = 'div.item-title-and-description dt';
        this.moreInfoItemValue = 'div.item-title-and-description dd > span';
    }

    static get _baseRoot() {
        return 'cells-product-more-info';
    }

    get is() {
        return {
            visible: ({keyText} = {}) => {
                logger.debug(`Verifying that the component ${this.name} is visible.`);
                this._performOnKeyValues({operation: 'is.visible', keyText});
            },
            existing: ({keyText} = {}) => {
                logger.debug(`Verifying that the component ${this.name} is existing.`);
                this._performOnKeyValues({operation: 'is.existing', keyText});
            },
            enabled: ({keyText} = {}) => {
                logger.debug(`Verifying that the component ${this.name} is enabled.`);
                this._performOnKeyValues({operation: 'is.enabled', keyText});
            },
            disabled: ({keyText} = {}) => {
                logger.debug(`Verifying that the component ${this.name} is disabled.`);
                this._performOnKeyValues({operation: 'is.disabled', keyText});
            },
            not: {
                visible: ({keyText} = {}) => {
                    logger.debug(`Verifying that the component ${this.name} is not visible.`);
                    this._performOnKeyValues({operation: 'is.not.visible', keyText});
                },
                existing: ({keyText} = {}) => {
                    logger.debug(`Verifying that the component ${this.name} is not existing.`);
                    this._performOnKeyValues({operation: 'is.not.visible', keyText});
                },
                enabled: ({keyText} = {}) => {
                    logger.debug(`Verifying that the component ${this.name} is not enabled.`);
                    this._performOnKeyValues({operation: 'is.not.visible', keyText});
                },
            },
        };
    }

    async assertContentValue({value, keyText} = {}) {
        const filteredElements = await this.parent.filter.childWithText({
            text: keyText,
            childSelector: this.moreInfoItemTitle,
        });
        await utils.verifyValueOrWaitForVisible({
            element: new Element({
                selector: ((await ((await filteredElements[0].selectedBy(this.moreInfoItemValue)).elements()))).value,
                _container: this,
            }),
            value: value,
        });
    }
}
