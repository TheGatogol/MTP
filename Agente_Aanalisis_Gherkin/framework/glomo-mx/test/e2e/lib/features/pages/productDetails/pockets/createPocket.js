import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import CellsMoleculeHeader from '../../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../../components/cells-molecule-header-spherica';
import GlomoAlertManager from '../../../components/glomo-alert-manager';
import GlomoAlertManagerSpherica from '../../../components/glomo-alert-manager-spherica';
import AbstractGlomoPage from '../../abstract-glomo-page';

@page()
class CreatePocket extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-pocketsCreate[state="active"]',
            elements: {
                header: CellsMoleculeHeader,
                createPocketsMultiStep: {
                    stepAccount: {
                        properties: {root: 'cells-step-product-selector[active]'},
                        title: '#stepContainer .cells-step__header',
                        account: '#stepContainer .item__name',
                        accountFound: '#stepContainer .item__quantities',
                    },
                    stepPocket: {
                        properties: {root: 'cells-step-input-message[data-select="app__main"]'},
                        title: '.cells-step__header-title',
                        countOne: '.cells-step__header-step-number',
                        input: '.cells-step-input .field__input',
                        inputText: '.cells-step-input .field__label',
                        clearInput: '#btnMainIcon',
                        inputMessage: '.info-alert-message-show-skeleton',
                        continue: '#enterAmountBtn',
                    },
                    stepAmount: {
                        properties: {root: 'cells-step-enter-amount'},
                        title: '.cells-step__header-title',
                        countTwo: '.cells-step__header-step-number',
                        inputAmount: '#cellsEnterLimitedAmount #enterAmountInput #input',
                        inputAmountText: '#enterAmountInput .text-field__label',
                        clearAmountInput: 'cells-step-enter-amount #enterAmountInput #icon',
                        inputAmountMessage: '.cells-enter-limited-amount__textInfo',
                        inputAmountErrorMessage: '.cells-enter-limited-amount__error',
                        scheduledAmountTitle: '.text-icon-container',
                        scheduledHelpIcon: '#info-atom-icon',
                        scheduledCheckbox: '#cellsEnterLimitedAmount cells-checkbox-button .checkbox-container #checkbox',
                        scheduledCheckboxText: '.right-description #label',
                        inputScheduledAmount: '#secondaryAmountInput input',
                        inputScheduledAmountText: '#secondaryAmountInput .text-field__label',
                        clearInputScheduledAmount: '#secondaryAmountInput cells-st-button cells-atom-icon',
                        continue: '#enterAmountBtn'
                    },
                },
                scheduleHelpModal: [
                    GlomoAlertManager,
                    {
                        additionalElements: {
                            title: 'div.paragraph-template h2:not([style="display: none;"])',
                            paragraphIcon: 'div.paragraph-template iron-icon:not([style="display: none;"])',
                            firstDescription: '#modal > div > div.paragraph-template > div:nth-child(32) > p',
                            lastDescription: '#modal > div > div.paragraph-template > div:nth-child(44) > p',
                            acceptBtn: 'div.buttons-container cells-st-button #acceptButton',
                            closeBtn: 'cells-alert-box[opened] #header button.btn-close',
                        }
                    }
                ],
                //summary
                titlePocketSummary: 'cells-step-input-message[data-select="app__main"] .cells-step__header-title',
                changePocketSummary: '#stepCardInputMessageContainer #changeBtn ',
                pocketNameSummary: 'cells-step-input-message[data-select="app__main"] .value-simple',
                titleAmountSummary: 'cells-step-enter-amount .cells-step__header-title',
                changeAmoutSummary: 'cells-step-enter-amount #changeBtn',
                amountValueSummary: 'cells-step-enter-amount #cellsStepEnterAmountFilled .value-item',
                scheduleAmountValueSummary: 'cells-step-enter-amount #cellsStepEnterSecondAmountFilled .value-item',
                amountMessageSummary: 'cells-step-enter-amount .collapsed-input-message  span.message',
                messageSummary: '#stepContainer > div.filled > cells-icon-message:nth-child(12)',
                amountSummary: '#operationTotal > cells-atom-amount',
                scheduleAmountSummary: '#operationTotal',
                continue: '.primary',
            },
            elementsSpherica: {
                header: CellsMoleculeHeaderSpherica,
                createPocketsMultiStep: {
                    stepAccount: {
                        properties: {root: 'cells-step-product-selector-spherica[active]'}
                    },
                    stepPocket: {
                        properties: {root: 'cells-step-input-message-spherica[data-select="app__main"]'}
                    },
                    stepAmount: {
                        properties: {root: 'cells-step-enter-amount-spherica'},
                        clearAmountInput: 'cells-step-enter-amount-spherica #enterAmountInput #icon',
                        scheduledCheckbox: '#cellsEnterLimitedAmount cells-checkbox-button-spherica .checkbox-container #checkbox',
                        clearInputScheduledAmount: '#secondaryAmountInput cells-st-button-spherica cells-atom-icon-spherica'
                    }
                },
                scheduleHelpModal: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements: {
                            title: '#modal h1',
                            paragraphIcon: '.paragraph-template cells-atom-icon-spherica',
                            firstDescription: '.text-with-icon [data-selector="paragraph-template-text"][aria-label="Es la cantidad que eliges para que separemos el día en que tu nómina es depositada. Apartaremos la misma cantidad de forma automática."]',
                            lastDescription: '.text-with-icon [data-selector="paragraph-template-text"][aria-label="Puedes añadir o retirar dinero del apartado cuando quieras, así como activar o desactivar la programación."]',
                            acceptBtn: 'div.buttons-container cells-st-button-spherica #acceptButton',
                            closeBtn: 'cells-alert-box-spherica[opened] #header button.btn-close',
                        }
                    }
                ],
                //summary
                titlePocketSummary: 'cells-step-input-message-spherica[data-select="app__main"] .cells-step__header-title',
                pocketNameSummary: 'cells-step-input-message-spherica.pockets-card.cells-step-container',
                titleAmountSummary: 'cells-step-enter-amount-spherica .cells-step__header-title',
                changeAmoutSummary: 'cells-step-enter-amount-spherica #changeBtn',
                amountValueSummary: 'cells-step-enter-amount-spherica #cellsStepEnterAmountFilled .value-item',
                scheduleAmountValueSummary: 'cells-step-enter-amount-spherica #cellsStepEnterSecondAmountFilled .value-item',
                amountMessageSummary: 'cells-step-enter-amount-spherica .collapsed-input-message .message-container [aria-label="cells-pockets-opx-manager-add-money-message-spherica"]',
                amountSummary: '#operationTotal > cells-atom-amount-spherica',
                continue: '#summary cells-st-button-spherica:not([hidden]).full'
            },
            requiredElements: [
                'header',
            ],
        });

    }

    async goToPocketSuccess() {
        await (await this.continue.waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async fillPocketNameInput(value) {
        await (await this.createPocketsMultiStep.stepPocket.input.waitForDisplayed({timeout: config.wait.M}))
            .setValue({value: value});
    }

    async fillPocketAmountInput(value) {
        await (
            await this.createPocketsMultiStep.stepAmount.inputAmount.waitForDisplayed(
                { timeout: config.wait.M },
            )
        ).sendKeys({ keys: value.toString() });
    }

    async clearPocketName() {
        await (await this.createPocketsMultiStep.stepPocket.clearInput.waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async continueProcess() {
        await (await this.createPocketsMultiStep.stepPocket.continue.waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async goToScheduledHelpScreen() {
        if (this.isSpherica()) {
            await (await this.createPocketsMultiStep.stepAmount.scheduledHelpIcon.waitForDisplayed({timeout: config.wait.M})).click();
        } else {
            await (await (await this.createPocketsMultiStep.stepAmount.scheduledHelpIcon.waitForDisplayed({timeout: config.wait.M}))
                .scrollIntoView())
                .click();
        }
    }

    async closeScheduledHelpScreen(element) {
        switch (element.toLowerCase()) {
            case 'accept button':
                await (await (await this.scheduleHelpModal.additionalElements.acceptBtn.waitForDisplayed({timeout: config.wait.M}))
                    .scrollIntoView())
                    .click();
                break;
            case 'close screen':
                await (await this.scheduleHelpModal.additionalElements.closeBtn.waitForDisplayed({timeout: config.wait.M}))
                    .click();
                break;
            default:
                throw new Error('elemento no disponible');
        }
    }

    async schedulePockets() {
        await (await (await this.createPocketsMultiStep.stepAmount.scheduledCheckbox.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async fillScheduledAmountInput(value) {
        await (await this.createPocketsMultiStep.stepAmount.inputScheduledAmount.waitForDisplayed({timeout: config.wait.M}))
            .sendKeys({keys: value});
    }

    async continueProcessPocketSuccessful() {
        await (await (await this.createPocketsMultiStep.stepAmount.continue.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async _screenValidation({item, value = '', status = ''}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'scheduled help screen title':
                await this.scheduleHelpModal.additionalElements.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'scheduled help screen icon':
                await this.scheduleHelpModal.additionalElements.paragraphIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first description scheduled help screen':
                await this.scheduleHelpModal.additionalElements.firstDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'last description scheduled help screen':
                await this.scheduleHelpModal.additionalElements.lastDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept scheduled help screen':
                await this.scheduleHelpModal.additionalElements.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title account':
                await this.createPocketsMultiStep.stepAccount.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account':
                await this.createPocketsMultiStep.stepAccount.account.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account found':
                await this.createPocketsMultiStep.stepAccount.accountFound.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title pocket':
                await this.createPocketsMultiStep.stepPocket.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'count pocket':
                await this.createPocketsMultiStep.stepPocket.countOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input pocket':
                await this.createPocketsMultiStep.stepPocket.input.waitForDisplayed({timeout: config.wait.XL});
                if (status === 'disabled') {
                    await this.createPocketsMultiStep.stepPocket.continue.waitForDisabled({timeout: config.wait.M});
                } else if ((await this.createPocketsMultiStep.stepPocket.input.getValue()) !== value) {
                    throw new Error('no match');
                }
                break;
            case 'input text pocket':
                await this.createPocketsMultiStep.stepPocket.inputText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'clear pocket':
                await this.createPocketsMultiStep.stepPocket.clearInput.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message pocket':
                await this.createPocketsMultiStep.stepPocket.inputMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue pocket':
                await this.createPocketsMultiStep.stepPocket.continue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount title':
                await this.createPocketsMultiStep.stepAmount.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'count two':
                await this.createPocketsMultiStep.stepAmount.countTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount input':
                await this.createPocketsMultiStep.stepAmount.inputAmount.waitForDisplayed({timeout: config.wait.M});
                if (value && value !== '') {
                    const actualValue = await this.createPocketsMultiStep.stepAmount.inputAmount.getValue();
                    if (parseFloat(actualValue || '0') !== parseFloat(value)) {
                        throw new Error('no match');
                    }
                }
                break;
            case 'amount message input':
                await this.createPocketsMultiStep.stepAmount.inputAmountMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input amount message error':
                await this.createPocketsMultiStep.stepAmount.inputAmountErrorMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'scheduled amount title':
                await this.createPocketsMultiStep.stepAmount.scheduledAmountTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'scheduled help icon':
                await this.createPocketsMultiStep.stepAmount.scheduledHelpIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'scheduled checbox':
                await this.createPocketsMultiStep.stepAmount.scheduledCheckbox.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'scheduled input amount':
                await this.createPocketsMultiStep.stepAmount.inputScheduledAmount.waitForText({
                    text: value,
                    exactMatch: false,
                    timeout: config.wait.M
                });
                if ((await this.createPocketsMultiStep.stepAmount.inputScheduledAmount.getValue()) !== value) {
                    throw new Error('no match');
                }
                break;
            case 'continue amount':
                if (value === 'disabled') {
                    await this.createPocketsMultiStep.stepAmount.continue.waitForEnabled({
                        timeout: config.wait.M,
                        reverse: true
                    });
                } else {
                    await this.createPocketsMultiStep.stepAmount.continue.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'summary pocket title':
                await this.titlePocketSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'change pocket name':
                await this.changePocketSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary pocket name':
                await this.pocketNameSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary amount title':
                await this.titleAmountSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'change pocket amount':
                await this.changeAmoutSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary pocket amount':
                await this.amountValueSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary scheduled amount':
                await this.scheduleAmountValueSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary amount message':
                await this.amountMessageSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary message':
                await this.messageSummary.waitForDisplayed({timeout: config.wait.M, reverse: this.isSpherica()});
                break;
            case 'amount summary section':
                await this.amountSummary.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'scheduled amount summary section':
                await this.scheduleAmountSummary.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'summary continue':
                await this.continue.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new CreatePocket();
