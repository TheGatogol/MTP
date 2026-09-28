import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsModalAlert from '../../components/cells-modal-alert';
import GlomoAlertManager from '../../components/glomo-alert-manager';

const limitsTypes = {
    'pos daily': 'POS_DAILY',
    'atm daily': 'ATM_DAILY',
    'office daily': 'OFFICE_DAILY',
    'transaction daily': 'TRANSACTION_DAILY',
    'digital': 'POS_DAILY-digital',
    'physical': 'POS_DAILY-physical',
    'atm physical': 'ATM_DAILY-physical',
};

@page()
class ListCreditCardLimits extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-listCreditCardLimits[state="active"]',
            elements: {
                valueList: 'cells-key-values-list',
                editBtn: 'cells-key-values-list cells-atom-icon',
                editLimitButton: 'cells-key-values-list cells-atom-icon[id="__LIMIT__"]',
                editDigitalLimitButton: 'cells-key-values-list cells-atom-icon[id="POS_DAILY-digital"]',
                editPhysicalLimitButton: 'cells-key-values-list cells-atom-icon[id="POS_DAILY-physical"]',
                editPhysicalAtmLimitButton: 'cells-key-values-list cells-atom-icon[id="ATM_DAILY-physical"]',
                titleDailyAmount: '#glomo-limits-list-daily-limits-text-description p[data-selector="title-0"]',
                titleDescription: 'p.description.htmlDescription',
                helpIcon: 'cells-st-button[data-selector="button-0"] button iron-icon',
                limitTitle: 'cells-key-values[data-selector="main-key-values-info-0"] div.key',
                amountUsedValue: '.value-item-0 cells-atom-amount.value-amount',
                amountAvailableTitle: 'cells-key-values-list .additional-info[data-selector="additonal-info-0"] div > span',
                amountAvailableValue: 'cells-atom-amount[data-selector="additional-key-values-info-amount-1"] .amount-wrapper',
                dailyCashButton: 'cells-key-values-list #ATM_DAILY iron-icon',
                headerHelpButton: '#cells-template-listCreditCardLimits > cells-molecule-header #btnRight',
                modalSuccess: '#cells-template-listCreditCardLimits > cells-modal-alert #iconMessage #notInline',
                atmButton: 'cells-key-values-list #POS_DAILY iron-icon',

                //no-results
                imageGlass: 'cells-key-values-list div.no-results img',
                messageNoLimits: 'cells-key-values-list div.no-results p',

                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },

                dialogOperations: [
                    GlomoAlertManager
                ],

                tooltip: {
                    component: {
                        ComponentClass: CellsModalAlert
                    }
                }

            },
            requiredElements: [
                'valueList',
                'titleDailyAmount'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({isBtnLeft: true, isBtnRight: true});
                break;
            case 'title daily amount':
                await this.titleDailyAmount.waitForText({timeout: config.wait.M});
                break;
            case 'help icon':
                await this.helpIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title of limit':
                await this.limitTitle.waitForText({timeout: config.wait.M});
                break;
            case 'amount used value':
                await this.amountUsedValue.waitForText({timeout: config.wait.M});
                break;
            case 'amount available title':
                await this.amountAvailableTitle.waitForText({timeout: config.wait.M});
                break;
            case 'amount available value':
                await this.amountAvailableValue.waitForText({timeout: config.wait.M});
                break;
            case 'limit edit icon':
                await this.editBtn.waitForClickable({timeout: config.wait.M});
                break;
            case 'image of a glass':
                await this.imageGlass.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message no limits':
                await this.messageNoLimits.waitForText({timeout: config.wait.M});
                break;
            case 'modal success':
                await this.modalSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help button':
                await this.headerHelpButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'atm button':
                await this.atmButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'daily cash button':
                await this.dailyCashButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pos digital limit':
                await this.editDigitalLimitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pos physical limit':
                await this.editPhysicalLimitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'atm physical limit':
                await this.editPhysicalAtmLimitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title description':
                await this.titleDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async goToEditCardLimits(limitValue) {
        const limit = this.editLimitButton.specifySelector({placeholder: '__LIMIT__', value: limitsTypes[limitValue]});
        await limit.waitForClickable({timeout: config.wait.L});
        await limit.click();

    }

    async generalInformationOfLimits() {
        await this.header.actionRight();
    }

    async dailyLimitsInformation() {
        await this.helpIcon.waitForClickable({timeout: config.wait.L});
        await this.helpIcon.click();
    }

    async headerHelpModal() {
        await this.headerHelpButton.waitForDisplayed({timeout: config.wait.M});
        await this.headerHelpButton.click();
    }

    async successTooltip() {
        await this.tooltip.waitForMessage();
    }

    async exitModal() {
        await this.dialogOperations.closeDialog({timeout: config.wait.M});
    }

    async accessTypeLimit(buttonType) {
        switch (buttonType) {
            case 'atm cash':
                await this.dailyCashButton.waitForDisplayed({timeout: config.wait.L});
                await this.dailyCashButton.waitForClickable({timeout: config.wait.M});
                await this.dailyCashButton.click();
                break;
            case 'shopping cash':
                await this.atmButton.waitForDisplayed({timeout: config.wait.L});
                await this.atmButton.waitForClickable({timeout: config.wait.M});
                await this.atmButton.click();
                break;
            default:
                throw new Error(`${buttonType} is not a valid option`);
        }

    }

    async confirmDialog() {
        await this.dialogOperations.acceptBtn.click();
    }

    async _modalElementValidation({item} = {}) {
        switch (item.toLowerCase()) {
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
            case 'description':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.DESCRIPTION});
                break;
            default:
                await super._modalElementValidation(arguments[0]);
        }
    }

}

export default new ListCreditCardLimits();
