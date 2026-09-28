
import CellsStepEnterAmountCreditCard from './cells-step-enter-amount-credit-card';
import {Element} from '@csqe/radish';

export default class CellsStepEnterAmountCreditCardSpherica extends CellsStepEnterAmountCreditCard {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-step-enter-amount-credit-card-spherica',
            elements: {
                //Type of payments
                minimumAmountType: '.amount-debts-radio-button .list__item--label[data-selector="debt-selection-step-label-MINIMUM_AMOUNT"]',
                minimumAmountToAvoidInterestType: '.amount-debts-radio-button .list__item--label[data-selector="debt-selection-step-radio-buttons-MINIMUM_AMOUNT_TO_AVOID_INTEREST_PAYMENT"]',
                totalDebtType: '.amount-debts-radio-button .list__item--label[data-selector="debt-selection-step-label-TOTAL_DEBT_AMOUNT"]',
                otherAmountType: '.amount-debts-radio-button .list__item--label[data-selector="debt-selection-step-label-OTHER_AMOUNT"]',

                otherAmountInput: '.limited-amount-input .content-input input',
                continueBtn: 'cells-step-spherica#stepContainer cells-st-button-spherica#singleDebtContinueButton button.continue__button',
            }
        };

        super(Object.assign(defaultArgs, args));

        this.amount = new Element({
            selector: `${this.root}[collapsed] #stepContainer .filled cells-atom-amount-spherica[data-selector="cells-credit-card-total-debts-0"]`,
            _container: this,
        });
    }

    static get _baseRoot() {
        return {
            web: 'cells-step-enter-amount-credit-card-spherica',
        };
    }
}
