import AbstractGlomoComponent from './abstract-glomo-component';
import {Commands, Element} from '@csqe/radish';

const PAYMENT_TYPES = {
    'total debt': 'totalDebt',
    'another amount': 'anotherAmount',
    'minimum amount': 'minimumAmount',
    'minimum amount to avoid interest': 'minimumAmountToAvoidInterest'
};

export default class CellsStepEnterAmountCreditCard extends AbstractGlomoComponent {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-step-enter-amount-credit-card',
            elements: {
                skeleton: '#skeletonContainer cells-skeleton-custom div.skeleton-content.unbox',

                titleStep: '#stepContainer div.cells-step__header',
                radioBtnGroup: '.debts-radio-buttons[data-selector="debt-selection-step-radio-buttons"]',

                //Type of payments
                minimumAmountType: '.amount-debts-radio-button .list__item--label[data-selector="debt-selection-step-label-MINIMUM_AMOUNT"]',
                minimumAmountToAvoidInterestType: '.amount-debts-radio-button .list__item--label[data-selector="debt-selection-step-radio-buttons-MINIMUM_AMOUNT_TO_AVOID_INTEREST_PAYMENT"]',
                totalDebtType: '.amount-debts-radio-button .list__item--label[data-selector="debt-selection-step-label-TOTAL_DEBT_AMOUNT"]',
                otherAmountType: '.amount-debts-radio-button .list__item--label[data-selector="debt-selection-step-label-OTHER_AMOUNT"]',

                otherAmountInput: '.limited-amount-input .content-input input',

                //buttons
                continueBtn: '#singleDebtContinueButton',
                changeAmountButton: 'cells-st-button#changeBtn',
                changeButton: 'cells-st-button button#changeRecipientButton',
            },
            requiredElements: [
                'radioBtnGroup'
            ],
        };
        super(Object.assign(defaultArgs, args));

        //step amount collapsed
        this.titleStepCollapsed = new Element({
            selector: `${this.root}[collapsed] #stepContainer .cells-step__header .cells-step__header-title`,
            _container: this,
        });
        this.changeBtn = new Element({
            selector: `${this.root}[collapsed] #stepContainer #changeBtn`,
            _container: this,
        });
        this.paymentMethodSelected = new Element({
            selector: `${this.root}[collapsed] #stepContainer .filled span.item__label`,
            _container: this,
        });
        this.amount = new Element({
            selector: `${this.root}[collapsed] #stepContainer .filled cells-atom-amount[data-selector="cells-credit-card-total-debts-0"]`,
            _container: this,
        });
    }

    static get _baseRoot() {
        return {
            web: 'cells-step-enter-amount-credit-card'
        };
    }

    getDebtAmountPaymentTypeElement(paymentTypeButton) {
        let element;
        switch (paymentTypeButton) {
            case 'totalDebt':
                element = this.totalDebtType;
                break;
            case 'anotherAmount':
                element = this.otherAmountType;
                break;
            case 'minimumAmount':
                element = this.minimumAmountType;
                break;
            case 'minimumAmountToAvoidInterest':
                element = this.minimumAmountToAvoidInterestType;
                break;
            case null:
            default:
                throw new Error(`Not recognized option "${paymentTypeButton}"`);
        }
        return element;
    }

    async selectTypeOfPayment(paymentTypeButton, amount) {
        await Commands.pause({time: config.wait.S});
        const paymentButton = this.getDebtAmountPaymentTypeElement(PAYMENT_TYPES[paymentTypeButton.toLowerCase()]);
        await paymentButton.waitForClickable({timeout: config.wait.L});
        if (PAYMENT_TYPES[paymentTypeButton.toLowerCase()] === 'anotherAmount') {
            await paymentButton.click();
            await this.otherAmountInput.setValue({value: amount});
        } else {
            await paymentButton.click();
        }
        await this.confirm();
    }

    async confirm() {
        await this.continueBtn.waitForClickable({timeout: config.wait.XL});
        await this.continueBtn.click();
    }

    async validateAmountCollapsed() {
        await this.titleStepCollapsed.waitForText({timeout: config.wait.L});
        await this.changeBtn.waitForDisplayed({timeout: config.wait.L});
        await this.paymentMethodSelected.waitForText({timeout: config.wait.L});
        await this.amount.waitForText({timeout: config.wait.L});
    }

    async changeAmount() {
        await this.changeAmountButton.waitForClickable({timeout: config.wait.L});
        await this.changeAmountButton.click();
        await this.changeAmountButton.waitForDisplayed({timeout: config.wait.L, reverse: true});
        await this.changeButton.waitForClickable({timeout: config.wait.L});
        await this.changeButton.click();
    }
}
