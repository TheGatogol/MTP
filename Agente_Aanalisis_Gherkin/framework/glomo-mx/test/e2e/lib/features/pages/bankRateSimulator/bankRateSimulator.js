import AbstractGlomoPage from '../abstract-glomo-page';
import {Commands, ScreenValidationKeyNotFound, page} from '@csqe/radish';

import CellsMoleculeActionsSpherica from '../../components/cells-molecule-actions-spherica';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

@page()
class BankRateSimulator extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-interestSimulator[state="active"]',
            elements: {
                // Header
                title: '.header__title',
                //Simulator Controls
                tooltipBar: '.interest-simulator-input-slider',
                tooltipButton: '.interest-simulator-tooltip .interest-simulator-tooltip_content cells-st-button-spherica',
                anotherAmountButton: '.interest-simulator-link cells-st-button-spherica',
                anotherAmountInput: 'cells-molecule-amount-input-spherica div.field-wrapper div.content-input #input',
                acceptAmountButton: 'cells-modal-select-amount-spherica cells-st-button-spherica.footer-btn',
                positiveBalanceMessage: 'div.interest-simulator-positive-balance-info',
                acceptButton: 'cells-st-button-spherica.primary button#primaryButton',
                //Info Section
                moreInfoButton: 'cells-card-advice-spherica cells-molecule-link-icon-spherica .link-text',
                imageMinimumAmount: 'div#sizedImgDiv[style*="cactus.svg"]',
                imageNonInterest: 'div#sizedImgDiv[style*="success.svg"]',
                imageTotalDebt: 'div#sizedImgDiv[style*="think_big.svg"]',
                imageLessThanMinimum: 'div#sizedImgDiv[style*="customer_comes_first.svg"]',
                insufficientAmountMessage: 'div.interest-simulator-info-box span.message',
                errorAccessMessage: 'cells-icon-message-spherica span.message',
                moleculeActions: CellsMoleculeActionsSpherica,
                dialogOperations: GlomoAlertManagerSpherica
            },
            requiredElements: [
                'title',
                'anotherAmountButton',
            ]
        });
    }

    async _screenValidation({item, value, _args} = {}) {
        switch (item.toLowerCase()) {
            case 'accept button':
                await this.acceptButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'minimum amount image':
                await this.imageMinimumAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'non-interest image':
                await this.imageNonInterest.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'total debt image':
                await this.imageTotalDebt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'another amount image':
                await this.imageLessThanMinimum.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insufficient amount message':
                await this.insufficientAmountMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pay button':
                if (value === 'enabled') {
                    await this.moleculeActions.confirmBtn.waitForEnabled({timeout: config.wait.M});
                } else {
                    await this.moleculeActions.confirmBtn.waitForDisabled({timeout: config.wait.M});
                }
                break;
            case 'more information message':
                await this.dialogOperations.container.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close information button':
                await this.dialogOperations.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'access error message':
                await this.errorAccessMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'positive balance message':
                await this.positiveBalanceMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: {value, ..._args}});
        }
    }

    async continueProcess() {
        await this.dialogOperations.confirmDialog({isConfirmed: true});
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.M});
    }

    async closeTooltipBar() {
        if (await this.tooltipButton.isDisplayed()) {
            await this.tooltipButton.waitForEnabled({timeout: config.wait.L});
            await this.tooltipButton.click();
            await this.tooltipButton.waitForDisplayed({timeout: config.wait.M, reverse: true});
        }
    }

    async completesAmount(cardPayment, amount) {
        if (cardPayment.toUpperCase() === 'MINIMUM_AMOUNT_TO_AVOID_INTEREST') {
            await this.payDebt();
        } else {
            await this.defineAmount(cardPayment, amount);
            await this.payDebt();
        }
    }

    async defineAmount(cardPayment, amount) {
        if (cardPayment.toUpperCase() === 'LAST_PERIOD_AMOUNT') {
            amount = amount / 4;
        }
        await Commands.pause({time: config.wait.XS});
        await this.anotherAmountButton.waitForClickable({timeout: config.wait.L});
        await this.anotherAmountButton.click();
        await this.anotherAmountInput.waitForAnimation({timeout: config.wait.L});
        await this.anotherAmountInput.setValue({value: amount});
        await this.acceptAmountButton.waitForEnabled({timeout: config.wait.L});
        await this.acceptAmountButton.click();
        await this.acceptAmountButton.waitForAnimation({timeout: config.wait.L});
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.L});
    }

    async accessMoreInformation() {
        await this.moreInfoButton.waitForEnabled({timeout: config.wait.L});
        await this.moreInfoButton.scrollIntoView({block: 'end'});
        await this.moreInfoButton.waitForAnimation({timeout: config.wait.L});
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.M});
        await this.moreInfoButton.click();
        await this.dialogOperations.closeBtn.waitForAnimation({timeout: config.wait.L});
    }

    async payDebt() {
        await this.moleculeActions.confirmBtn.scrollIntoView({block: 'end'});
        await this.moleculeActions.confirmBtn.waitForDisplayed({timeout: config.wait.L});
        await this.moleculeActions.confirmBtn.waitForAnimation({timeout: config.wait.L});
        await this.moleculeActions.confirmBtn.waitForClickable({timeout: config.wait.L});
        await this.moleculeActions.confirmBtn.click();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.L});
    }

}

export default new BankRateSimulator();
