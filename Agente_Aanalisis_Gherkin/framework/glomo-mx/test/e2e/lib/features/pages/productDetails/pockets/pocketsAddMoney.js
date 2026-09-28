import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import CellsMoleculeHeader from '../../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../../components/cells-molecule-header-spherica';
import AbstractGlomoPage from '../../abstract-glomo-page';

@page()
class PocketsAddMoney extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-pocketsAddMoney[state="active"]',
            elements: {
                header: CellsMoleculeHeader,
                sourcePocket: '#pockets-pay-origin:first-of-type',
                destinationAccount: '#pockets-pay-origin:last-of-type',
                input: '#input',
                inputMessage: '.available-balance-info-container',
                clearInput: 'cells-molecule-amount-input cells-atom-icon',
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
                clearInput: 'cells-molecule-amount-input-spherica cells-atom-icon-spherica',
                changeButton: 'cells-step-enter-amount-spherica #changeBtn',
                amount: 'cells-step-enter-amount-spherica .value-item',
                amountMessage: 'cells-step-enter-amount-spherica .collapsed-input-message',
                accept: '#summary cells-st-button-spherica:not([hidden]).full'
            },
            requiredElements: [
                'header',
            ],
        });
    }

    async fillAmountToAdd(value = '1399') {
        await (await this.input.waitForDisplayed({timeout: config.wait.M}))
            .sendKeys({keys: value});
    }

    async continueToSummary() {
        await (await this.continue.waitForClickable())
            .click();
    }

    async goToSuccess() {
        await (await (await this.accept.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.XXL}))
            .click();
    }

    async clearAmount() {
        await (await this.clearInput.waitForDisplayed({timeout: config.wait.XXL}))
            .click();
    }

    async _screenValidation({item, value = ''}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'source':
                await this.sourcePocket.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'destination':
                await this.destinationAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input':
                await this.input.waitForText({text: value, exactMatch: false, timeout: config.wait.M});
                break;
            case 'input message':
                await this.inputMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input error message':
                await this.inputErrorMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue':
                (value === 'disabled') ? await this.continue.waitForDisabled({timeout: config.wait.M})
                    : await this.continue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'change amount':
                await this.changeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary amount':
                await this.amount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary amount message':
                await this.amountMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount section':
                await this.amountSection.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept':
                await this.accept.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new PocketsAddMoney();
