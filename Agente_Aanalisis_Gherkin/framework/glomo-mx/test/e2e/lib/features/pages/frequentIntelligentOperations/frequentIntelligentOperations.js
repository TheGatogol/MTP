import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class FrequentIntelligenOperations extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-ocFrequentOperationsTransfer[state="active"]',
            elements: {
                header: 'cells-molecule-header.header--core',
                concept: '#transfer-concept #stepContainer div div div.concept-in-line p.filled-subtitle.concept-label',
                conceptInput: '#transfer-concept #conceptInput #input',
                editConceptButton: '#transfer-concept #changeBtn',
                conceptContinueButton: '#transfer-concept #continueBtn',
                continueButton: '#budgetSubmitCreate #summary #collapser cells-st-button.primary.size-m.cells-summary-view--submit-button',
            },
            elementsSpherica: {
                header: 'cells-molecule-header-spherica.header--white',
                continueButton: '#budgetSubmitCreate #summary #collapser cells-st-button-spherica.positive.full',
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'concept':
                await this.concept.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async continueProcess() {
        await this.continueButton.waitForDisplayed({timeout: config.wait.L});
        await this.continueButton.waitForClickable({timeout: config.wait.L});
        await this.continueButton.click();
    }

    async continueActionByType(transferType) {
        switch (transferType) {
            case 'internal transfer':
            case 'interbank transfer':
            case 'transferencia a terceros':
            case 'transferencia otros bancos':
                await this.finishProcess();
                await this.fillOtp('11111111');
                break;
            case 'transferencia cuentas propias':
            case 'own transfer':
                await this.continueProcess();
                break;
            default:
                throw new Error(`${transferType} option is not available...`);
        }
    }

    async changeActiveConceptStep() {
        await this.editConceptButton.waitForDisplayed({timeout: config.wait.L});
        await this.editConceptButton.waitForClickable({timeout: config.wait.L});
        await this.editConceptButton.click();
        await this.fillTransferConcept();
    }

    async fillTransferConcept() {
        await this.conceptInput.waitForDisplayed({timeout: config.wait.L});
        await this.conceptInput.setValue({value:'interbank'});
        await this.conceptContinueButton.waitForDisplayed({timeout: config.wait.L});
        await this.conceptContinueButton.waitForClickable({timeout: config.wait.L});
        await this.conceptContinueButton.click();
    }

    async finishProcess() {
        await this.waitUntilSpinnerVeil({
            timeoutToAppear: config.wait.XS,
            timeoutToDisappear: config.wait.L
        });
        await (await this.continueButton.waitForClickable({timeout: config.wait.L})).click();
    }
}

export default new FrequentIntelligenOperations();
