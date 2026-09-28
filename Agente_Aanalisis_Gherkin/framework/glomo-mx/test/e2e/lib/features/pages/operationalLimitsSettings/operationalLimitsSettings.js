import AbstractGlomoPage from '../abstract-glomo-page';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class OperationalLimitsSettings extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-operationalLimits[state="active"]',
            elements: {
                header: 'cells-molecule-header',
                title: 'cells-molecule-header h1',
                backBtn: '#btnLeft',
                infoBtn: '#btnRight',
                successOperation:'cells-bottom-modal-message #content',
                cellsProductItemAmount: 'cells-operational-limits #userTransactionAmount .product-wrapper',
                editLimitMaxTransaction: 'cells-operational-limits #userTransactionAmount .transparent',
                operationlimit: 'cells-product-selector[primary-icon]:nth-of-type(2)',
                dailyAmount: 'cells-product-selector[primary-icon]:nth-of-type(3)',
                monthlyLimit: 'cells-product-selector[primary-icon]:nth-of-type(4)',
                helpLimitTransaction: 'cells-operational-limits #userTransactionAmount #iconTitle',
                helpLimitOperation: 'cells-operational-limits #per_execution #iconTitle',
                //Limits list
                opLimits: {
                    properties: {
                        root: 'cells-operational-limits'
                    },
                    info: 'cells-icon-message',
                    limits: 'cells-product-selector#__LIMIT__',
                    infoLimit: 'cells-product-selector#__LIMIT__ cells-product-item',
                    amountLim: 'cells-product-selector#__LIMIT__ cells-product-item .number',
                    editBtn: 'cells-product-selector#__LIMIT__ .transparent .btn-transparent',
                },
                //Info modal
                dialogOperations: [
                    GlomoAlertManager
                ],
                //Edit limit
                editLimit: {
                    properties: {
                        root: 'cells-limits-configuration-modal'
                    },
                    header: 'header',
                    closeBtn: '#closeButton',
                    amountInfoTxt: '.amount',
                    amountTxt: '#main-amount .integer',
                    inputAmount: '#input',
                    infoTxt: '.bottom-info',
                    modifyBtn: '#acceptButton',
                    cancelBtn: '#cancelButton',
                    errorTxt: '.cells-enter-limited-amount__error .cells-enter-limited-amount__txt',
                    clearAmount: '#ui #ltdAmmount #enterAmountInput #icon',
                },
                //Modal alert
                infoAlert: {
                    properties: {
                        root: '#iconMessage'
                    },
                    exitBtn: 'button[data-button="first"]',
                    continueBtn: 'button[data-button="second"]',
                },

                acceptButton: '#cells-template-__cross > glomo-alert-manager #modal #acceptButton',
            },
            elementsSpherica: {
                cellsProductItemAmount: 'cells-product-selector-spherica .product-wrapper .product-item-display-background      ',
                editLimitMaxTransaction: 'cells-product-selector-spherica .product-wrapper .product-item-display-background      .icon-wrapper',
                operationlimit: 'cells-operational-limits-spherica #per_execution',
                dailyAmount: 'cells-operational-limits-spherica #daily',
                monthlyLimit: 'cells-operational-limits-spherica #monthly',
                helpLimitTransaction: 'cells-operational-limits-spherica #userTransactionAmount #iconTitle',
                helpLimitOperation: 'cells-operational-limits-spherica #per_execution #iconTitle',
                header: 'cells-molecule-header-spherica',
                title: 'cells-molecule-header-spherica h1',
                successOperation:'cells-bottom-modal-message-spherica #content',
                opLimits: {
                    properties: {
                        root: 'cells-operational-limits-spherica'
                    },
                    info: 'cells-icon-message-spherica',
                    limits: '#__LIMIT__',
                    infoLimit: 'cells-product-selector-spherica:nth-of-type(__INDEX__) cells-product-item-spherica',
                    amountLim: 'cells-product-selector-spherica:nth-of-type(__INDEX__) cells-product-item-spherica .number',
                    editBtn: '#__LIMIT__ cells-product-item-spherica .transparent',
                },
                dialogOperations: [GlomoAlertManagerSpherica,
                    {additionalElements: {
                        image:'div.paragraph-template .paragraph-icon cells-atom-icon-spherica',
                        infoTitle: 'div.paragraph-template .title-with-margin-bottom',
                        infoDescription: 'div.paragraph-template .text-with-icon',
                        linkContinue: 'cells-bottom-modal-spherica .buttons-container #acceptButton',
                        titleTransaction: 'cells-alert-box-spherica .content #header',
                        buttonClose: 'cells-alert-box-spherica #header .rigthContainer #closeButton',
                        titleOperationInfo: 'cells-alert-box-spherica .templates-wrapper .paragraph-template .title-with-margin-bottom',
                        description: 'cells-alert-box-spherica .templates-wrapper .paragraph-template .no-text-icon',
                    }},
                ],
                editLimit: {
                    properties: {
                        root: 'cells-limits-configuration-modal-spherica'
                    },
                    inputLabelPlaceholder: '.text-field__label',
                },
            },
            requiredElements: [
                'header',
            ],
        });
    }

    async _screenValidation({item, value, visibility} = {}) {
        switch (item) {
            case 'header':
                if (value === 'enabled') {
                    await this.header.waitForDisplayed({timeout: config.wait.M});
                    await this.title.waitForDisplayed({timeout: config.wait.M});
                    await this.backBtn.waitForDisplayed({timeout: config.wait.M});
                    await this.infoBtn.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'limits list':
                await this.opLimits.limits.specifySelector({
                    placeholder: '__LIMIT__',
                    value: 'per_execution'
                }).waitForDisplayed({timeout: config.wait.M});
                await this.opLimits.limits.specifySelector({
                    placeholder: '__LIMIT__',
                    value: 'daily'
                }).waitForDisplayed({timeout: config.wait.M});
                await this.opLimits.limits.specifySelector({
                    placeholder: '__LIMIT__',
                    value: 'monthly'
                }).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modify button':
                if (value === 'enabled') {
                    await this.editLimit.modifyBtn.waitForEnabled({timeout: config.wait.M});
                }
                break;
            case 'info modal':
                await this.dialogOperations.additionalElements.infoDescription.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'error text':
                await this.editLimit.errorTxt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal error':
                await this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.XL});
                await this.dialogOperations.cancelBtn.waitForDisplayed({timeout: config.wait.XL});
                await this.dialogOperations.titles.waitForDisplayed({timeout: config.wait.M});
                assert((await this.dialogOperations.titles.getText()) === 'Operación no realizada', 'Error title is not showed');
                break;
            case 'limit operation':
                await this.editLimit.inputAmount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'limit operation info':
                await this.editLimit.infoTxt.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'cancel button':
                await this.editLimit.cancelBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'edit button':
                await this.editLimit.modifyBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'success operation':
                await this.successOperation.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'cells product item amount':
                await this.cellsProductItemAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit limit max transaction':
                await this.editLimitMaxTransaction.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation limit':
                await this.operationlimit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'daily amount':
                await this.dailyAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'monthly limit':
                await this.monthlyLimit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link continue':
                await this.dialogOperations.additionalElements.linkContinue.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'warning icon':
                await this.dialogOperations.additionalElements.image.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'text info':
                await this.dialogOperations.additionalElements.infoTitle.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'title modal transaction':
                await this.dialogOperations.additionalElements.titleTransaction.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'description modal transaction':
                await this.dialogOperations.additionalElements.description.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'title modal operation':
                await this.dialogOperations.additionalElements.titleOperationInfo.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'description modal operation':
                await this.dialogOperations.additionalElements.description.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'button close':
                if (visibility === 'exist') {
                    await this.dialogOperations.additionalElements.buttonClose.waitForDisplayed({timeout:config.wait.M});
                }
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async closeInfo() {
        await this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.XL});
        await this.dialogOperations.acceptBtn.click();
    }

    async interactInfo(access) {
        if (access === 'info icon') {
            await this.closeInfo();
            await (await this.infoBtn.waitForDisplayed({timeout: config.wait.M})).click();
        }
    }

    replaceAllCommas(str) {
        const occur = (str.match(/,/g) || []).length;
        for (let i = 1; i <= occur; i++) {
            str = str.replace(',', '');
        }
        return str;
    }

    async editAndSaveAmount(edit, option) {
        await this.opLimits.limits.specifySelector({
            placeholder: '__LIMIT__',
            value: option
        }).waitForDisplayed({timeout: config.wait.M});
        await (await this.opLimits.editBtn.specifySelector({
            placeholder: '__LIMIT__',
            value: option
        }).waitForDisplayed({timeout: config.wait.M})).click();
        const amountVal = Number(this.replaceAllCommas(await this.editLimit.amountTxt.getText()));
        const newAmount = amountVal - 1;

        await this.editLimit.inputLabelPlaceholder.waitForDisplayed({timeout: config.wait.M});
        await this.editLimit.inputLabelPlaceholder.waitForClickable({timeout: config.wait.M});
        await this.editLimit.inputLabelPlaceholder.click();

        await this.editLimit.inputAmount.waitForDisplayed({timeout: config.wait.M});
        await this.editLimit.inputAmount.waitForEnabled({timeout: config.wait.M});

        await this.editLimit.inputAmount.setValue({value: newAmount, slow: true});
        if (edit === 'edit and save') {
            await (await this.editLimit.modifyBtn.waitForDisplayed({timeout: config.wait.M})).click();
        }
        if (edit === 'edit and cancel') {
            await (await this.editLimit.cancelBtn.waitForDisplayed({timeout: config.wait.M})).click();
        }
    }

    async accLim(edit, option) {
        await this.opLimits.limits.specifySelector({
            placeholder: '__LIMIT__',
            value: option
        }).waitForDisplayed({timeout: config.wait.M});
        await (await this.opLimits.editBtn.specifySelector({
            placeholder: '__LIMIT__',
            value: option
        }).waitForDisplayed({timeout: config.wait.M})).click();
    }

    async modifyLimit(edit, limit) {
        await this.closeInfo();
        switch (limit) {
            case 'max transaction':
                await this.editAndSaveAmount(edit, 'userTransactionAmount');
                break;
            case 'operation':
                await this.editAndSaveAmount(edit, 'per_execution');
                break;
            case 'daily':
                await this.editAndSaveAmount(edit, 'daily');
                break;
            case 'montly':
                await this.editAndSaveAmount(edit, 'monthly');
                break;
            default:
                throw new Error(`Limit ${limit} is not defined`);
        }
    }

    async accessLimit(limit) {
        await this.closeInfo();
        switch (limit) {
            case 'operation':
                await this.accLim(limit, 'per_execution');
                break;
            case 'daily':
                await this.accLim(limit, 'daily');
                break;
            case 'montly':
                await this.accLim(limit, 'monthly');
                break;
            default:
                throw new Error(`Limit ${limit} is not defined`);
        }
    }

    async errorLimitAmount(edit) {
        await this.closeInfo();
        await this.opLimits.limits.specifySelector({placeholder: '__LIMIT__', value: 'per_execution'}).waitForDisplayed({timeout: config.wait.M});
        await (await this.opLimits.editBtn.specifySelector({placeholder: '__LIMIT__', value: 'per_execution'}).waitForDisplayed({timeout: config.wait.M})).click();
        const amountVal = Number(this.replaceAllCommas(await this.editLimit.amountTxt.getText()));
        await this.editLimit.inputLabelPlaceholder.waitForDisplayed({timeout: config.wait.M});
        await this.editLimit.inputLabelPlaceholder.waitForClickable({timeout: config.wait.M});
        await this.editLimit.inputLabelPlaceholder.click();

        switch (edit) {
            case 'lower than 1':
                await this.editLimit.inputAmount.waitForClickable({timeout: config.wait.M});
                await this.editLimit.inputAmount.click();
                await this.editLimit.inputAmount.setValue({value: 0.5, slow: true});
                break;
            case 'higher than actual':
                await this.editLimit.inputAmount.waitForClickable({timeout: config.wait.M});
                await this.editLimit.inputAmount.click();
                await this.editLimit.inputAmount.setValue({value: amountVal + 1, slow: true});
                break;
            case 'same than actual':
                await this.editLimit.inputAmount.waitForClickable({timeout: config.wait.M});
                await this.editLimit.inputAmount.click();
                await this.editLimit.inputAmount.setValue({value: amountVal, slow: true});
                break;
            default:
                throw new Error(`Option ${edit} is not defined`);
        }
    }

    async goBack() {
        await this.backBtn.waitForDisplayed({timeout: config.wait.L});
        await this.backBtn.click();
    }

    async deleteAmount() {
        await this.editLimit.clearAmount.waitForDisplayed({timeout: config.wait.L});
        await this.editLimit.clearAmount.click();
    }

    async closeOperation() {
        await this.editLimit.cancelBtn.waitForDisplayed({timeout: config.wait.M});
        await this.editLimit.cancelBtn.click();
    }

    async accesToLimits() {
        await this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.M});
        await this.dialogOperations.acceptBtn.waitForClickable({timeout: config.wait.M});
        await this.dialogOperations.acceptBtn.click({timeout: config.wait.M});
    }

    async helpOption(option) {
        switch (option) {
            case 'transaction':
                await this.helpLimitTransaction.waitForAnimation({timeout: config.wait.M});
                await this.helpLimitTransaction.click({timeout: config.wait.M});
                break;
            case 'operation':
                await this.helpLimitOperation.waitForAnimation({timeout: config.wait.M});
                await this.helpLimitOperation.click({timeout: config.wait.M});
                break;
            default:
                throw new Error(`Option ${option} is not defined`);
        }
    }
}

export default new OperationalLimitsSettings();
