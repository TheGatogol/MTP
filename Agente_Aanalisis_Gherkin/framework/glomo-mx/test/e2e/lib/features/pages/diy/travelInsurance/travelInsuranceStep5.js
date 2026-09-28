import AbstractGlomoPage from '../../abstract-glomo-page.js';
import ScreenValidationKeyNotFound, {page} from '@csqe/radish';

@page('TravelInsuranceStep5')
class TravelInsuranceStep5 extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-travelInsurance[state="active"]',
            elements: {
                header: '#travel-header',
                travelSummaryButton:'#cells-travel-insurance-summary-view',
                cellsStButton: '#cells-travel-insurance-summary-view #collapser cells-st-button.primary',
                buttonSummary: '#cells-travel-insurance-summary-view #collapser cells-st-button.primary button'
            },
            requiredElements: [
                'header'
            ]
        });

    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'summary button confirm':
                await this.buttonSummary.waitForDisplayed({timeout: config.wait.S});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async confirmInsuranceContract() {
        await this.travelSummaryButton.execute({script: () => this.removeAttribute('hidden')});
        await this.travelSummaryButton.waitForDisplayed({timeout: config.wait.M});
        await this.travelSummaryButton.scrollIntoView({block: 'end'});
        await this.cellsStButton.execute({script: () => this.setAttribute('style', '')});
        await this.buttonSummary.execute({script: () => this.removeAttribute('hidden')});
        await this.buttonSummary.waitForAnimation({timeout: config.wait.M});
        await this.buttonSummary.waitForDisplayed({timeout: config.wait.M});
        await this.buttonSummary.click();
    }
}

export default new TravelInsuranceStep5();
