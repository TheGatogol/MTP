import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class FundsHiringStep5 extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'FundsHiringStep5',
            root: '#cells-template-fundsHiring[state="active"]',
            elements: {
                amountInput: '#step-funds-hiring-simulation-operation #input',
                amountInputBtn: '#step-funds-hiring-simulation-operation #enterAmountBtn',
                simulationAcceptBtn: 'cells-confirm-buttons.simulation-inline-message #primaryBtn',
                messageBox: '#step-funds-hiring-simulation-operation cells-icon-message#cellsStepEnterAmountSimulateFill',
                telephoneIcon: '#funds-hiring-header #btnRightSecondary',
                stickyCallMeBack: '#step-funds-hiring-offer #stepContainer .sticky-button'
            },
            elementsSpherica: {
                simulationAcceptBtn: 'cells-confirm-buttons-spherica.simulation-inline-message #primaryBtn',
                messageBox: '#step-funds-hiring-simulation-operation cells-icon-message-spherica#cellsStepEnterAmountSimulateFill'
            },
            requiredElements: [
                'amountInput'
            ]
        });

    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'amount input':
                await this.header.waitForDisplayed();
                break;
            case 'accept simulation button':
                await this.simulationAcceptBtn.waitForClickable({timeout: config.wait.L});
                break;
            case 'message box':
                await this.simulationAcceptBtn.waitForClickable({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async acceptAmount(amount = '50') {
        await this.amountInput.setValue({value: amount});
        await this.amountInputBtn.waitForClickable({timeout: config.wait.M});
        await this.amountInputBtn.click();
    }

    async showSimulation(amount = '50') {
        await this.acceptAmount(amount);
        await this.simulationAcceptBtn.waitForExist({timeout: config.wait.L});
    }

    async completeSimulation(amount = '50') {
        await this.acceptAmount(amount);
        const hasSimulation = await this.simulationAcceptBtn.waitForExist({timeout: config.wait.M, failOnError: false});
        if (hasSimulation) {
            await this.simulationAcceptBtn.scrollIntoView({block: 'start'});
            await this.simulationAcceptBtn.waitForClickable({timeout: config.wait.M});
            await this.simulationAcceptBtn.click();
        }
    }

    async accessToCallMeBack(access) {
        switch (access) {
            case 'link':
                await this.stickyCallMeBack.waitForClickable({timeout: config.wait.M});
                await this.stickyCallMeBack.click();
                break;
            case 'header':
                await this.telephoneIcon.waitForClickable({timeout: config.wait.L});
                await this.telephoneIcon.click();
                break;
            default:
                throw new Error(`The access '${access}' not found.`);
        }
    }
}

export default new FundsHiringStep5();
