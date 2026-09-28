import AbstractGlomoPage from '../abstract-glomo-page';
import ScreenValidationKeyNotFound, {page} from '@csqe/radish';

@page('DynamicLifeInsurancePaymentMethod')
class DynamicLifeInsurancePaymentMethod extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-dynamicLifeInsuranceOfferPage[state="active"]',
            elements: {
                paymentOption:'cells-step-product-selector #selector div:nth-of-type(2) cells-product-item',
                paymentBtn: 'glomo-life-insurance-beneficiaries-step cells-step div:nth-child(1) div.continue-btn cells-st-button.secondary button',
                continueBeneficiaryBtn: 'glomo-life-insurance-beneficiaries-step cells-step div:nth-child(1) div.continue-btn cells-st-button.secondary button',
            },
            requiredElements: [
                'paymentBtn'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'paymentBtn':
                await this.paymentBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async goPayments() {
        await this.continueBeneficiaryBtn.waitForClickable({timeout: config.wait.M});
        await this.continueBeneficiaryBtn.click();
    }

    async payment() {
        await this.goPayments();
        await this.paymentOption.waitForDisplayed({timeout: config.wait.L});
        await this.paymentOption.waitForClickable({timeout: config.wait.L});
        await this.paymentOption.click();
    }

}

export default new DynamicLifeInsurancePaymentMethod();
