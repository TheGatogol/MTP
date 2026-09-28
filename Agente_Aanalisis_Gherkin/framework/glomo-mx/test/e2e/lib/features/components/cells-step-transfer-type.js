import AbstractGlomoComponent from './abstract-glomo-component';

export default class CellsStepTransferType extends AbstractGlomoComponent {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-step-transfer-type',
            elements: {
                stepTitle: '#stepContainer span',
                stepDescription: '#stepContainer div:nth-of-type(2) div div.content-text label',
                onlineTypeBtn: '#buttonTypeOperation:nth-of-type(1) button',
                deferredTypeBtn: '#buttonTypeOperation:nth-of-type(2) button',
                iconInfo: '#stepContainer div:nth-of-type(2) div div.content-text cells-st-button iron-icon',
                onlineTypeIconInfo: '#stepContainer div:nth-child(2) div div.content-text cells-icon-message iron-icon',
                onlineTypeReasonInfo: '#stepContainer div:nth-child(2) div div.content-text cells-icon-message span.message',
                onlineCommission: '#buttonTypeOperation:nth-of-type(1) button span.subtext',
                deferredCommission: '#buttonTypeOperation:nth-of-type(2) button span.subtext',

            },
            requiredElements: [
                'stepTitle',
            ],
        };

        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return {
            web: 'cells-step-transfer-type'
        };
    }
}
