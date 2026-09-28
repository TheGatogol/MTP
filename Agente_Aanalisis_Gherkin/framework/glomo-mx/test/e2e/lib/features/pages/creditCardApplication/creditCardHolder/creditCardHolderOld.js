import { page, ScreenValidationKeyNotFound } from '@csqe/radish';
import AbstractGlomoPage from '../../abstract-glomo-page';

@page('CreditCardHolderOld')
class CreditCardHolderOld extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-creditCardHolder[state="active"]',
            elements: {
                creditCardHeader: 'span.header__title',
                greenContinueOffer: 'cells-st-button-spherica.button-sticky',
                paymentTypeTitle: 'cells-step-payment-selector-spherica h2',
                btnContinuePayment:'button.continue-button_content',
                btnContinueAddress:'button#continueButton',
                btnContinueTermsAndConditions:'button[data-selector="cells-step-card-checklist-contract-continue"]',
                addressTitle: 'cells-step-radio-buttons-spherica h2',
                termsConditionTitle: 'cells-step-card-checklist-contract-spherica h2',
                requestCardBtn:'cells-summary-view-spherica cells-st-button-spherica.full',
                paymentSelectModal: 'cells-step-payment-selector-spherica .full .payment-content cells-select-modal-spherica',
                offerDetailSection: 'glomo-step-loan-offer-spherica #loanOffer #glomo-loan-offer-content',
            },
            requiredElements: [
                'creditCardHeader',
            ]
        });
    }

    async _screenValidation({item, value, _args} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.creditCardHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail offer step':
                await this.offerDetailSection.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: {value, ..._args}});
        }
    }

    async _interactPaymentStep() {
        await this.paymentTypeTitle.waitForDisplayed({timeout: config.wait.M});
        await this.btnContinuePayment.waitForAnimation({timeout: config.wait.M});
        await (await this.btnContinuePayment.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async _interactAddressStep() {
        await this.addressTitle.waitForDisplayed({timeout: config.wait.M});
        await (await (await this.btnContinueAddress.waitForAnimation({timeout: config.wait.M})).waitForDisplayed({timeout:config.wait.M})).click();
    }

    async _interactTermsConditionStep() {
        await this.termsConditionTitle.waitForDisplayed({timeout: config.wait.M});
        await this.btnContinueTermsAndConditions.waitForAnimation({timeout: config.wait.M});
        await (await this.btnContinueTermsAndConditions.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async doRequestCard() {
        await this.creditCardHeader.waitForDisplayed({timeout: config.wait.M});
        await (await this.greenContinueOffer.waitForDisplayed({timeout: config.wait.M})).click();
        await this._interactPaymentStep();
        await this._interactAddressStep();
        await this._interactTermsConditionStep();
    }

    async accessToSuccessHiring() {
        await this.requestCardBtn.click();
        await this.fillOtp('12345678');
    }

    async openPaymentDateSelector() {
        await (await this.greenContinueOffer.waitForClickable({timeout: config.wait.M})).click();
        await this.paymentSelectModal.waitForDisplayed({timeout: config.wait.M});
        await this.paymentSelectModal.click();
    }
}

export default new CreditCardHolderOld();
