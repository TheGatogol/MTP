import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class FundsContributionStep2 extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'FundsContributionStep2',
            root: '#cells-template-fundsContribution[state="active"]',
            elements: {
                amountInput: '#cells-step-simulation-operation input.enterAmountInput',
                amountInputBtn: '#cells-step-simulation-operation cells-st-button-spherica button.cells-enter-limited-amount__btn',
                simulationAcceptBtn: '#cells-step-simulation-operation cells-confirm-buttons.simulation-inline-message #primaryBtn',
                purchaseTypeMessage: '#cells-step-simulation-operation #cellsEnterLimitedAmount cells-icon-message-spherica',
            },
            requiredElements: [
                'amountInput'
            ]
        });
    }

    async _screenValidation({item, value = '', _args} = {}) {
        switch (item.toLowerCase()) {
            case 'investment amount input':
                await this.amountInput.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                await (await this.amountInputBtn.waitForDisplayed({timeout: config.wait.M}))
                    .waitForEnabled({timeout: config.wait.M, reverse: value !== 'enabled'});
                break;
            case 'message':
                if (value === 'after hours') {
                    await this.purchaseTypeMessage.verifyText({text: 'Harás la compra fuera de horario y se reflejará en tu fondo al siguiente día hábil.'});
                } else if (value === 'within hours') {
                    await this.purchaseTypeMessage.verifyText({text: 'El importe final de tu compra podría ser menor, ya que lo ajustaremos al precio del título.'});
                }
                await this.amountInputBtn.waitForDisplayed({timeout: config.wait.S});
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: { value, ..._args } });
        }
    }

    async acceptAmount(amount) {
        await this.amountInput.setValue({value: amount});
        await this.amountInputBtn.click();
    }

    async enterAmount() {
        await this.amountInput.setValue({value: global.user.products.investmentFunds[0].amount});
    }

    async showSimulation() {
        await this.acceptAmount(global.user.products.investmentFunds[0].minimumAmount);
        await this.simulationAcceptBtn.waitForExist({timeout: config.wait.L});
    }

    async completeSimulation() {
        await this.acceptAmount(global.user.products.investmentFunds[0].minimumAmount);
        const hasSimulation = await this.simulationAcceptBtn.waitForExist({timeout: config.wait.S, failOnError: false});
        if (hasSimulation) {
            await this.simulationAcceptBtn.scrollIntoView({block: 'start'});
            await this.simulationAcceptBtn.waitForClickable({timeout: config.wait.M});
            await this.simulationAcceptBtn.click();
        }
    }
}

export default new FundsContributionStep2();
