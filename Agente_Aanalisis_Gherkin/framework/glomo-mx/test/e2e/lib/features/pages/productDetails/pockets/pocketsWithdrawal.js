import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import CellsMoleculeHeader from '../../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../../components/cells-molecule-header-spherica';
import AbstractGlomoPage from '../../abstract-glomo-page';

@page()
class PocketsWithdrawal extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-pocketsWithdrawal[state="active"]',
            elements: {
                header: CellsMoleculeHeader,
                sourcePocket: '#pockets-pay-origin:first-of-type',
                destinationAccount: '#pockets-pay-origin:last-of-type',
                icon: '.above-input-icon-message #principalIcon',
                message: '.above-input-icon-message .message',
                input: '#input',
                inputMessage: '.available-balance-info-container',
                inputErrorMessage: '.max-product-error-container',
                continue: '#enterAmountBtn',
                //summary
                changeButton: 'cells-step-enter-amount #changeBtn',
                amount: 'cells-step-enter-amount .value-item',
                amountMessage: 'cells-step-enter-amount .collapsed-input-message',
                amountSection: '#operationTotal',
                accept: '.primary',
            },
            elementsSpherica: {
                header: CellsMoleculeHeaderSpherica,
                changeButton: 'cells-step-enter-amount-spherica #changeBtn',
                amount: 'cells-step-enter-amount-spherica .value-item',
                amountMessage: 'cells-step-enter-amount-spherica .collapsed-input-message',
                accept: '#summary cells-st-button-spherica:not([hidden]).full'
            },
            requiredElements: [
                'header',
                'icon'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'source pocket':
                await this.sourcePocket.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'destination account':
                await this.destinationAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon':
                await this.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message':
                await this.message.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input':
                await this.input.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input message':
                await this.inputMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                await this.continue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input error message':
                await this.inputErrorMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary change button':
                await this.changeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary amount':
                await this.amount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary amount message':
                await this.amountMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary amount section':
                await this.amountSection.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async enterWithdrawalAmount(amount) {
        await (await this.input.waitForDisplayed({timeout: config.wait.XXL})).sendKeys({keys: amount});
    }

    async amountStepContinue() {
        await (await this.continue.waitForClickable({timeout: config.wait.XL})).click();
    }

    async finishWithdrawal() {
        await (await this.accept.waitForClickable({timeout: config.wait.XL})).click();
    }
}

export default new PocketsWithdrawal();
