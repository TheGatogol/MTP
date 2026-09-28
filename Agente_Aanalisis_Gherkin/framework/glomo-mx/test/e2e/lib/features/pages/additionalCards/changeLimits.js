import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsAtomAmount from '../../components/cells-atom-amount';
import CellsEnterLimitedAmount from '../../components/cells-enter-limited-amount';
import CellsKeyValues from '../../components/cells-key-values';
import GlomoAlertManager from '../../components/glomo-alert-manager';

@page()
class ChangeLimits extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'editCreditCardLimits',
            root: '#cells-template-editCreditCardLimits[state="active"]',
            elements: {
                dialogOperations: [
                    GlomoAlertManager
                ],
                header: CellsMoleculeHeader,
                atomAmount: CellsAtomAmount,
                cardName: 'cells-limits-configuration cells-heading[data-selector="title-top-amount"]',
                currentLimitHeadingText: 'cells-heading[data-selector="info-below-amount"]',
                currentLimitBar: '#info-meter-list cells-meter .meter-wrapper',
                helpButton: '#info-meter-list #type-heading-help',
                inputLimit: '#info-meter-list #ltdAmmount #enterAmountInput #input',
                iconWarning: '#info-meter-list #ltdAmmount #iconlimitsAlert iron-icon',
                errorText: ' #info-meter-list #ltdAmmount div.cells-enter-limited-amount__error > div[class="cells-enter-limited-amount__textInfo"]',
                usedBalanceComponent: [CellsKeyValues, {
                    keyText: 'Saldo utilizado:',
                    root: `cells-lists ${CellsKeyValues._baseRoot}`
                }],
                availableBalanceComponent: [CellsKeyValues, {
                    keyText: 'Saldo disponible:',
                    root: `cells-lists ${CellsKeyValues._baseRoot}`
                }],
                titleEditNewLimit: 'div.type-help cells-heading',
                descriptionEditNewLimit: 'cells-icon-message.main-message',
                enterLimit: CellsEnterLimitedAmount,
                acceptBtn: 'div.buttons cells-st-button.primary button#acceptButton',
                cancelBtn: '.buttons cells-st-button.link button#cancelButton',
            },
            requiredElements: [
                'atomAmount.integer'
            ],
        });
    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({isBtnLeft: true});
                break;
            case 'card name':
                await this.cardName.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'current limit':
                await this.atomAmount.visibleAmount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'current limit bar':
                await this.currentLimitBar.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'used balance':
                await this.waitForUsedBalance();
                break;
            case 'available balance':
                await this.waitForAvailableBalance();
                break;
            case 'new credit limit description':
                await this.waitForAreaNewLimit();
                break;
            case 'new credit limit input':
                await this.waitForAreaInput();
                break;
            case 'input info text error':
                await this.waitForInputInfoTextError();
                break;
            case 'input info text':
                await this.waitForInputInfoText();
                break;
            case 'accept button':
                await this.acceptButtonIsEnabled(value === 'disabled');
                break;
            case 'cancel button':
                await this.cancelButtonIsEnabled(value === 'disabled');
                break;
            case 'icon warning':
                await this.iconWarning.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'text error':
                await this.errorText.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});

        }
    }

    async waitForUsedBalance() {
        await this.usedBalanceComponent.waitForDisplayed({timeout: config.wait.M});
        await (await this.usedBalanceComponent.value()).waitForText({timeout: config.wait.M});
    }

    async waitForAvailableBalance() {
        await this.availableBalanceComponent.waitForDisplayed({timeout: config.wait.M});
        await (await this.availableBalanceComponent.value()).waitForText({timeout: config.wait.M});
    }

    async acceptButtonIsEnabled(reverse) {
        await this.acceptBtn.waitForEnabled({timeout: config.wait.M, reverse: reverse});
    }

    async cancelButtonIsEnabled(reverse) {
        await this.cancelBtn.waitForEnabled({timeout: config.wait.M, reverse: reverse});
    }

    async waitForAreaNewLimit() {
        await this.titleEditNewLimit.waitForText({timeout: config.wait.M});
        await this.descriptionEditNewLimit.waitForText({timeout: config.wait.M});
    }

    async enterValue(value) {
        await this.enterLimit.enterValue(value);
    }

    async waitForAreaInput() {
        await this.enterLimit.waitForAreaInput();
    }

    async waitForInputInfoTextError() {
        await this.enterLimit.waitForInfoTextError();
    }

    async waitForInputInfoText() {
        await this.enterLimit.waitForInfoText();
    }

    async confirmsChangeLimit() {
        await this.acceptBtn.waitForDisplayed({timeout: config.wait.M});
        await this.acceptBtn.scrollIntoView({block: 'end'});
        await this.acceptBtn.click({useActions: false});
    }
    async accessHelp() {
        await this.helpButton.waitForDisplayed({timeout: config.wait.L});
        await this.helpButton.waitForClickable({timeout: config.wait.L});
        await this.helpButton.click();
    }
    async confirmDialog() {
        await this.dialogOperations.confirmDialog();
    }

    async retryModal(times) {
        let i = 0;
        await this.confirmsChangeLimit();
        while (i < times) {
            await this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.M});
            await this.dialogOperations.acceptBtn.click();
            i++;
        }
    }

    /**
     * Through this function and the modal-specific step, we will be able to validate our modal.
     * By default, this function uses the elementValidation function from glomo-alert-manager
     *
     * Screen specific implementations or terminology of our modal cam be implemented here,
     * using the default option for the glomo-alert-manager default validation function
     * @param {object} [options] Options passed as columns on step
     */
    async _modalElementValidation({item} = {}) {
        logger.debug(`el valor de item es: ${item}`);
        switch (item.toLowerCase()) {
            // In our screen, exit button is the same as the "accept button"
            case 'exit button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.ACCEPT_BUTTON});
                break;
            default:
                await super._modalElementValidation(arguments[0]);
        }
    }

    async continueProcess() {
        await (await this.acceptBtn
            .waitForClickable({timeout: config.wait.L}))
            .click();
    }
}

export default new ChangeLimits();
