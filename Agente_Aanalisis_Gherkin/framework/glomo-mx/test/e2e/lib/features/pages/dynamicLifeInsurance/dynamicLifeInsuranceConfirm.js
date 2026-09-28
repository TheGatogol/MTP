import AbstractGlomoPage from '../abstract-glomo-page';
import ScreenValidationKeyNotFound, {page} from '@csqe/radish';

@page('DynamicLifeInsuranceConfirm')
class DynamicLifeInsuranceConfirm extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-dynamicLifeInsuranceOfferPage[state="active"]',
            elements: {
                healthStatusInfo: '#dynamic-life-insurance-icon-message cells-icon-message',
                paymentAmount: '#dynamic-life-insurance-summary-view #operationTotal',
                hireBtn: '#dynamic-life-insurance-summary-view #collapser cells-st-button.primary.tertiary.size-m.cells-summary-view--submit-button button'
            },
            requiredElements: [
                'healthStatusInfo'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'health status info':
                await this.healthStatusInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment amount':
                await this.paymentAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case'hire button':
                await this.hireBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async goOtp() {
        await this.hireBtn.scrollIntoView({block: 'end'});
        await this.hireBtn.waitForDisplayed({timeout: config.wait.M});
        await this.hireBtn.click();
    }

}

export default new DynamicLifeInsuranceConfirm();
