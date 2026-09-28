import AbstractGlomoPage from '../../abstract-glomo-page.js';
import {Commands, Element, page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page('TravelInsuranceStep4')
class TravelInsuranceStep4 extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-travelInsurance[state="active"]',
            elements: {
                header: 'cells-molecule-header',
                checkboxListContainer:'cells-step-card-checklist-contract #checklistStepContainer div div.full main section.checkbox-list-section cells-checkbox-button',
                checkListAcceptButton:'cells-step-card-checklist-contract #checklistStepContainer div div.full main cells-st-button button',
                travelSummaryButton:'#cells-travel-insurance-summary-view'
            },
            requiredElements: [
                'header',
                'checkboxListContainer'
            ]
        });

    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'checklist contract':
                await this.checkboxListContainer.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async acceptTermsAndConditions() {
        await this.checkboxListContainer.waitForDisplayed({timeout: config.wait.M});
        await this.checkboxListContainer.scrollIntoView({block: 'start'});
        await Commands.pause({time: config.wait.S});
        const checkList = await (new Element({
            selector: this.checkboxListContainer,
            _container: this,
        })).elements();
        for (const itemSelector of checkList.value) {
            const checkbox = new Element({
                selector: itemSelector,
                _container: this,
            });
            await checkbox.click();
        }
        await this.travelSummaryButton.execute({script: () => this.setAttribute('hidden', '')});
        await this.checkListAcceptButton.scrollIntoView({block: 'start'});
        await this.checkListAcceptButton.waitForAnimation({timeout: config.wait.M});
        await this.checkListAcceptButton.waitForDisplayed({timeout: config.wait.M});
        await this.checkListAcceptButton.click();
    }
}

export default new TravelInsuranceStep4();
