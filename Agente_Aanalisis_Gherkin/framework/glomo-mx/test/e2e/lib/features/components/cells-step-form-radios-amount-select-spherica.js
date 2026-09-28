import CellsMoleculeAmountInputSpherica from '../components/cells-molecule-amount-input-spherica';
import CellsStepFormRadiosAmountSelect from '../components/cells-step-form-radios-amount-select';

export default class CellsStepFormRadiosAmountSelectSpherica extends CellsStepFormRadiosAmountSelect {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-step-form-radios-amount-select-spherica',
            elements: {
                amount: '#points-transfer-configuration-id div.filled cells-atom-amount-spherica .amount-wrapper',

                //radioButtons area
                radioBtn: 'cells-radio-button-spherica[data-selector="radio-button-_INDEX_"]',
                radioBtnOtherPoints:'cells-radio-button-spherica[data-selector="radio-button-1"]',

                //input
                amountInput: {
                    component: {
                        ComponentClass: CellsMoleculeAmountInputSpherica
                    }
                },

                messageErrorArea: '#amountInput cells-icon-message-spherica[type="error"]',
                //Buttons
                acceptBtn: 'cells-st-button-spherica.full button',
            },
            requiredElements: [
                'title',
                'areaRadioBtn'
            ],
        };
        super(Object.assign(defaultArgs, args));

    }

    static get _baseRoot() {
        return {
            web: 'cells-step-form-radios-amount-select-spherica'
        };
    }
}
