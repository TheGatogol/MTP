import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class BillPaymentsStep3 extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-billPayments[state="active"]',
            elements: {
                conceptStep3: 'cells-step-concept-spherica',
                inputConcept: 'cells-molecule-input-spherica #input[aria-label="Concepto"]',
                continueStep3: 'cells-step-concept-spherica #continueBtn button',
            },
            requiredElements: ['conceptStep3']
        });
    }

    async acceptConcept(concept = 'Pago 1') {
        await this.inputConcept.waitForDisplayed({timeout: config.wait.L});
        await this.inputConcept.setValue({value: concept, slow: true});
        await this.continueStep3.waitForClickable({timeout: config.wait.L});
        await this.continueStep3.click();
    }
    
    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'conceptstep':
                await this.conceptStep3.scrollIntoView();
                await this.conceptStep3.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new BillPaymentsStep3();
