import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
@page()
class OcloanSustainableSimulator extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'OcloanSustainableSimulator',
            root: '#cells-template-loanSustainableRateSimulator[state="active"]',
            elements: {
                header: '[data-tag-name="bbva-header-main"]#basic',
                simulateButtonXinput: '[data-tag-name="bbva-button-default"].clear',
                textSimulateRate: '#heading',
                closeSimulateRate: '#btn-close',
                amountRequestLabel: '[data-tag-name="bbva-form-input"][label="Importe a solicitar"]',
                inputAmount: '[data-tag-name="bbva-form-input"] [data-tag-name="bbva-form-amount"] input',
                headerTitle: '[data-tag-name="bbva-header-main"] header div.header-main div.header h1 [data-tag-name="bbva-type-text"] span',
                infoMessage: '[data-tag-name="bbva-form-amount"] [data-tag-name="bbva-notification-help"] [data-tag-name="bbva-type-text"] p.text',
                purchaseProducts: '[data-tag-name="bbva-type-text"][text="Compras de productos sostenibles:"]',
                slider: '[data-tag-name="bbva-form-range-controller"] div.content div.control div.container div.current div.knob',
                rangeSimulation: '[data-tag-name="bbva-widget-loan-sustainable-rate-simulator"] .container .slide [data-tag-name="bbva-form-range"]',
                zeroPercent: '[data-tag-name="bbva-form-range-controller"] div.content div.control div.legend [data-tag-name="bbva-type-text"][text="0%"]',
                twentyFivePercent: '[data-tag-name="bbva-form-range-controller"] div.content div.control div.legend [data-tag-name="bbva-type-text"][text="25%"]',
                fiftyPercent:'[data-tag-name="bbva-form-range-controller"] div.content div.control div.legend [data-tag-name="bbva-type-text"][text="50%"]',
                eightyPercent:'[data-tag-name="bbva-form-range-controller"] div.content div.control div.legend [data-tag-name="bbva-type-text"][text="80%"]',
                oneHundredPercent:'[data-tag-name="bbva-form-range-controller"] div.content div.control div.legend [data-tag-name="bbva-type-text"][text="100%"]',
                exitButton: 'footer [data-tag-name="bbva-type-text"]',
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'simulate rate':
                await this.textSimulateRate.waitForText({text: global.user.text.simulateRate});
                break;
            case 'close simulate rate':
                await this.closeSimulateRate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input amount request':
                await this.amountRequestLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase products':
                await this.purchaseProducts.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'slider':
                await this.zeroPercent.waitForText({text: global.user.text.zeroPercent});
                await this.twentyFivePercent.waitForText({text: global.user.text.twentyFivePercent});
                await this.fiftyPercent.waitForText({text: global.user.text.fiftyPercent});
                await this.eightyPercent.waitForText({text: global.user.text.eightyPercent});
                await this.oneHundredPercent.waitForText({text: global.user.text.oneHundredPercent});
                break;
            case 'header title':
                await this.textSimulateRate.waitForText({text: global.user.text.simulateRate});
                break;
            case 'info message':
                await this.infoMessage.waitForText({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount within the range':
                await this.exitButton.waitForDisplayed({timeout: config.wait.M});
                await this.infoMessage.waitForText({timeout: config.wait.M});
                break;
            case 'amount less than the minimum':
                await this.infoMessage.waitForText({timeout: config.wait.M});
                break;
            case 'amount greater than the maximum':
                await this.infoMessage.waitForText({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async acceptAmount(){
        await this.slider.waitForDisplayed({timeout: config.wait.M});
        await this.simulateButtonXinput.click();
    }

    async amountInput(amount) {
        switch(amount.toLowerCase()){
            case 'amount within the range':
                await this.inputAmount.waitForDisplayed({timeout: config.wait.M});
                await this.inputAmount.setValue({value: 20000});
                await this.textSimulateRate.click();
                break;
            case 'amount less than the minimum':
                await this.inputAmount.waitForDisplayed({timeout: config.wait.M});
                await this.inputAmount.setValue({value: 20});
                await this.textSimulateRate.click();
                break;
            case 'amount greater than the maximum':
                await this.inputAmount.waitForDisplayed({timeout: config.wait.M});
                await this.inputAmount.setValue({value: 9999999});
                await this.textSimulateRate.click();
                break;
            default:
                throw new Error(`${amount} is not a valid option`);
        }
    }

    async rangeTermSimulator(porcentage) {
        await this.swipeRangeValue(this.rangeSimulation, porcentage);
    }

    async userCloseSimulator() {
        await this.closeSimulateRate.waitForDisplayed({timeout: config.wait.M});
        await this.closeSimulateRate.click();
    }

    async modifyInput() {
        await this.inputAmount.waitForDisplayed({timeout: config.wait.M});
        await this.inputAmount.setValue({value: '35000'});
        await this.textSimulateRate.click();
    }
}

export default new OcloanSustainableSimulator();
