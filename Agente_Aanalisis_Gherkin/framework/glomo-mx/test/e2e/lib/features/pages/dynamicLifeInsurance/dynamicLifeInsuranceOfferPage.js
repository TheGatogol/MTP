import AbstractGlomoPage from '../abstract-glomo-page';
import ScreenValidationKeyNotFound, {page} from '@csqe/radish';

@page('DynamicLifeInsuranceOfferPage')
class DynamicLifeInsuranceOfferPage extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-dynamicLifeInsuranceOfferPage[state="active"]',
            elements: {
                header: 'cells-molecule-header',
                cardAnnually: 'cells-step-dynamic-life-insurance-offer #stepContainer div.full div.container-frequency-payment div.container-frequency-payment__cards cells-aggregation-card-select #\\31 #card cells-radio-button #radio',
                cardMonthly: 'cells-step-dynamic-life-insurance-offer #stepContainer div.full div.container-frequency-payment div.container-frequency-payment__cards cells-aggregation-card-select #\\30  #card cells-radio-button #radio',
                paymentAmount: 'cells-step-dynamic-life-insurance-offer #stepContainer div.full cells-sticky-container cells-summary-view #operationTotal',
                addCouponBtn: 'cells-step-dynamic-life-insurance-offer #stepContainer div.full div.container-promo-code div.container-promo-code__btn cells-st-button button',
                inputCoupon: '#slots cells-molecule-input #input',
                continueWantBtn: 'cells-step-dynamic-life-insurance-offer #stepContainer div.full div.container-continue-button-custom cells-st-button.composed button.container-continue-button-custom__btn',
                useCouponBtn: 'cells-modal-card-advice #confirmButton #primaryBtn',
                addBeneficiariesBtn: 'glomo-life-insurance-beneficiaries-step cells-step div:nth-child(1) div.action-beneficiary',
                continueBeneficiaryBtn: 'glomo-life-insurance-beneficiaries-step cells-step div:nth-child(1) div.continue-btn cells-st-button.secondary button',
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'card annually':
                await this.cardAnnually.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'card monthly':
                await this.cardAnnually.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment amount':
                await this.paymentAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async selectFrequencyOfPayments(paymentF) {
        if (paymentF === 'Anual') {
            await this.cardAnnually.scrollIntoView({block: 'start'});
            await this.cardAnnually.waitForDisplayed({timeout: config.wait.M});
            await this.cardAnnually.click();
            await this.cardMonthly.waitForAttribute({attribute: 'checked', reverse: true});
        } else if (paymentF === 'Mensual') {
            await this.cardMonthly.scrollIntoView({block: 'start'});
            await this.cardAnnually.waitForAttribute({attribute: 'checked', reverse: true});
        } else {
            await this.continueWantBtn.waitForDisplayed({timeout: config.wait.M});
        }
    }

    async addCoupon() {
        await this.addCouponBtn.waitForDisplayed({timeout: config.wait.M});
        await this.addCouponBtn.click();
        await this.inputCoupon.waitForDisplayed({timeout: config.wait.M});
        await this.inputCoupon.setValue({value: global.user.insuredata.coupon});
        await this.useCouponBtn.waitForDisplayed({timeout: config.wait.M});
        await this.useCouponBtn.click();
    }

    async wantInsurance() {
        await this.continueWantBtn.waitForClickable({timeout: config.wait.M});
        await this.continueWantBtn.click();
        await this.addBeneficiaries();
    }

    async addBeneficiaries() {
        await this.addBeneficiariesBtn.waitForClickable({timeout: config.wait.M});
        await this.addBeneficiariesBtn.click();
    }
}

export default new DynamicLifeInsuranceOfferPage();
