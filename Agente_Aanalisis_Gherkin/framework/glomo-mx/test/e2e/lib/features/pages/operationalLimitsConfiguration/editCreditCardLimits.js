import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import GlomoAlertManager from '../../components/glomo-alert-manager';

import CellsMoleculeHeader from '../../components/cells-molecule-header';

@page()
class EditCreditCardLimits extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-editCreditCardLimits[state="active"]',
            elements: {
                // Container
                amountDaily: '#info-meter-list div.amount',
                amountDailyDesc: '#info-meter-list div.amount cells-heading',
                progressBar: '#info-meter-list cells-meter div.meter-wrapper',
                amountUsedTitle: '#info-meter-list cells-lists.dark-blue ul li.listItem .listItem__item cells-key-values div.key',
                amountUsedValue: '#info-meter-list cells-lists.dark-blue ul li.listItem .listItem__item cells-key-values div.value',
                amountUsedInteger: '#info-meter-list cells-lists.dark-blue ul li.listItem .listItem__item cells-key-values div.value .integer',
                amountAvailableTitle: '#info-meter-list cells-lists.grey ul li.listItem .listItem__item cells-key-values div.key',
                amountAvailableValue: '#info-meter-list cells-lists.grey ul li.listItem .listItem__item cells-key-values div.value',
                ammountAvailableInteger: '#info-meter-list cells-lists.grey ul li.listItem .listItem__item cells-key-values div.value .integer',
                limitTitle: '#info-meter-list div.type-help cells-heading',
                helpBtn: '#info-meter-list div.type-help cells-atom-icon iron-icon',
                message: '#info-meter-list cells-icon-message.main-message span.message',
                input: '#info-meter-list #ltdAmmount #enterAmountInput #input',
                infoIcon: '#info-meter-list #ltdAmmount .cells-enter-limited-amount__txt iron-icon',
                messageInfo: '#info-meter-list #ltdAmmount div.cells-enter-limited-amount__range div p',
                warningIcon: '#info-meter-list #ltdAmmount div.cells-enter-limited-amount__error cells-atom-icon',
                warningMessage: '#info-meter-list #ltdAmmount .cells-enter-limited-amount__error .cells-enter-limited-amount__textInfo p',
                blueInfo: '#info-meter-list cells-icon-message.bottom-info',
                acceptBtn: '#info-meter-list #acceptButton',
                cancelBtn: '#info-meter-list #cancelButton',
                errorText: ' #info-meter-list #ltdAmmount div.cells-enter-limited-amount__error > div[class="cells-enter-limited-amount__textInfo"]',

                dialogOperations: [
                    GlomoAlertManager
                ],

                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
            },
            requiredElements: [
                'amountDaily',
                'progressBar',
            ],
        });
    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({isBtnLeft: true});
                break;
            case 'amount daily':
                await this.amountDaily.waitForText({timeout: config.wait.M});
                break;
            case 'amount daily description':
                await this.amountDailyDesc.waitForText({timeout: config.wait.M});
                break;
            case 'progress bar':
                await this.progressBar.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount used title':
                await this.amountUsedTitle.waitForText({timeout: config.wait.M});
                break;
            case 'amount used value':
                await this.amountUsedValue.waitForText({timeout: config.wait.M});
                break;
            case 'amount available title':
                await this.amountAvailableTitle.waitForText({timeout: config.wait.L});
                break;
            case 'amount available value':
                await this.amountAvailableValue.waitForText({timeout: config.wait.L});
                break;
            case 'title of limit':
                await this.limitTitle.waitForText({timeout: config.wait.M});
                break;
            case 'help icon':
                await this.helpBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'input':
                await this.input.waitForClickable({timeout: config.wait.M});
                break;
            case 'info icon':
                await this.infoIcon.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'info message about amount':
                await this.messageInfo.waitForText();
                break;
            case 'warning icon':
                await (await this.warningIcon.elements()).value[1].waitForDisplayed();
                break;
            case 'warning message about amount':
                await (await this.warningMessage.elements()).value[1].waitForText();
                break;
            case 'blue info box':
                await this.blueInfo.waitForDisplayed({timeout: config.wait.L, reverse: value !== ''});
                break;
            case 'accept button':
                await this.verifyAcceptButton(value !== 'enable');
                break;
            case 'cancel button':
                await this.cancelBtn.waitForClickable({timeout: config.wait.M});
                break;
            case 'text error':
                await this.errorText.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    verifyInfoModal() {
        this.dialogOperations.verifyInfoModal({title: false});
    }

    async enterAmount({amount} = {}) {
        await this.input.waitForClickable({timeout: config.wait.L});
        await this.input.setValue({value: amount});
    }

    async closeOperation() {
        await this.header.actionLeft();
    }

    async verifyAcceptButton(reverse) {
        if (reverse) {
            await this.acceptBtn.waitForDisplayed({timeout: config.wait.L});
            await this.acceptBtn.waitForDisabled();
        } else {
            await this.acceptBtn.waitForDisplayed({timeout: config.wait.L});
            await this.acceptBtn.waitForEnabled();
        }

    }

    async showLimitInformation() {
        await this.helpBtn.waitForClickable({timeout: config.wait.L});
        await this.helpBtn.click();
    }

    async confirmNewLimit({amount} = {}) {
        await this.enterAmount({amount});
        await this.acceptBtn.waitForClickable({timeout: config.wait.L});
        await this.acceptBtn.click();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS});
    }

    async exitModal() {
        await this.dialogOperations.closeDialog({timeout: config.wait.M});
    }

    checkAmmountStatus() {
        let status;
        this.input !== '' ? status = true : status = false;
        return status;
    }

    async insertAmmount(ammountType) {
        let value;
        switch (ammountType.toLowerCase()) {
            case 'non multiple':
                await (await (await this.input.waitForDisplayed({timeout: config.wait.L})).waitForClickable({timeout: config.wait.L}))
                    .setValue({value: '75'});
                break;
            case 'lesser that limit':
                await (await (await this.input.waitForDisplayed({timeout: config.wait.L})).waitForClickable({timeout: config.wait.L}))
                    .setValue({value: '0'});
                break;
            case 'greater than credit line':
                value = (await (await this.ammountAvailableInteger.waitForDisplayed({timeout: config.wait.M})).getText()).replace(',', '') + 100;
                await (await (await this.input.waitForDisplayed({timeout: config.wait.L})).waitForClickable({timeout: config.wait.L}))
                    .setValue({value: value});
                break;
            case 'lesser than consumed':
                value = ((await (await this.amountUsedInteger.waitForDisplayed({timeout: config.wait.M})).getText()).replace(',', '') * 1) - 100;
                value >= 0 ?
                    await (await (await this.input.waitForDisplayed({timeout: config.wait.L})).waitForClickable({timeout: config.wait.L}))
                        .setValue({value: value})
                    : await (await (await this.input.waitForDisplayed({timeout: config.wait.L})).waitForClickable({timeout: config.wait.L}))
                        .setValue({value: '0'});
                break;
            default:
                throw new Error(`The ${ammountType} ammount doesn't exist`);
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
            case 'header title modal':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.HEADER});
                break;
            case 'paragraph icon':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.PARAGRAPH_ICON});
                break;
            case 'bullets list':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.BULLETS_LIST});
                break;
            case 'ok button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.ACCEPT_BUTTON});
                break;
            default:
                await super._modalElementValidation(arguments[0]);
        }
    }
}

export default new EditCreditCardLimits();
