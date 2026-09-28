import AbstractGlomoPage from '../abstract-glomo-page';
import {page} from '@csqe/radish';

@page('DynamicLifeInsuranceTermsAndConditions')
class DynamicLifeInsuranceTermsAndConditions extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-dynamicLifeInsuranceOfferPage[state="active"]',
            elements: {
                readAndAccept: 'cells-step-card-checklist-contract #\\30 #checkbox',
                dataConsentCheck: 'cells-step-card-checklist-contract #\\31 #checkbox',
                receiveDocumentsCheck: 'cells-step-card-checklist-contract #\\32 #checkbox',
                authorizeCheck: 'cells-step-card-checklist-contract #\\33 #checkbox',
                termsAndConditionsContinueBtn: 'cells-step-card-checklist-contract #checklistStepContainer div:nth-child(2) div main cells-st-button button'
            },
            requiredElements: [
                'termsAndConditionsContinueBtn'
            ]
        });
    }

    async acceptTermsAndConditions() {
        await this.readAndAccept.waitForDisplayed({timeout: config.wait.M});
        await this.readAndAccept.click();
        await this.dataConsentCheck.waitForDisplayed({timeout: config.wait.M});
        await this.dataConsentCheck.click();
        await this.receiveDocumentsCheck.waitForDisplayed({timeout: config.wait.M});
        await this.receiveDocumentsCheck.click();
        await this.authorizeCheck.waitForDisplayed({timeout: config.wait.M});
        await this.authorizeCheck.click();
        await this.termsAndConditionsContinueBtn.waitForDisplayed({timeout: config.wait.M});
        await this.termsAndConditionsContinueBtn.click();
    }

}

export default new DynamicLifeInsuranceTermsAndConditions();
