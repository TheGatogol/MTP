import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

import BbvaHeaderMain from '../../components/bbva-header-main';
import BbvaHelpModal from '../../components/bbva-help-modal';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import CellsSignOperationModal from '../../components/cells-sign-operation-modal';
import CellsSignOperationModalSpherica from '../../components/cells-sign-operation-modal-spherica';
@page()
class ParkingRecharge extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-parkingRecharge[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: BbvaHeaderMain,
                        args: {
                            root: `${BbvaHeaderMain._baseRoot}#parkingRechargeHeader`,
                        },
                    }
                },
                dialogOperations: [GlomoAlertManager],
                rechargeSteps: {
                    properties: { root: '[data-tag-name="bbva-expandable-multistep"]' },
                    accountStep: {
                        properties: { root: '[data-tag-name="bbva-expandable-step"]#parkingAccountStep div.expandable-step-summary [data-tag-name="bbva-list-contact"]' },
                        imageIcon: '[data-tag-name="bbva-clip-box"]',
                        infoAccount: 'div.column [data-tag-name="bbva-text"].title',
                    },
                    amountStep: {
                        properties: { root: '[data-tag-name="bbva-expandable-step"]#parkingRechargeStep' },
                        amountSelection: '[data-tag-name="bbva-form-preset-amount"] [data-tag-name="bbva-form-preset-amount-item"][value="__ITEM__"]',
                        infoAccountLink: '[data-tag-name="bbva-notification-message"] [data-tag-name="bbva-link"]',
                        continueBtn: '[data-tag-name="bbva-button-default"]#parkingRechargeButton',
                        changeAmountBtn: 'div.header [data-tag-name="bbva-link"]#editButton',
                        quantitiesAmounts: '[data-tag-name="bbva-form-preset-amount"][name="radios1"]',
                        messageInformation: '[data-tag-name="bbva-notification-message"]'
                    },
                    amountStepBlock: '[data-tag-name="bbva-expandable-step"]#parkingRechargeStep',
                    methodPaymentStep: {
                        properties: { root: '[data-tag-name="bbva-expandable-step"]#selectAccountStep' },
                        accountSelection: '[data-tag-name="bbva-list-card"][id="selectAccountCard0"]',
                        allAccountsBtn: '[data-tag-name="bbva-header-category"] [data-tag-name="bbva-link"]',
                        insufficientBalanceMsg: '[data-tag-name="bbva-notification-message"][variant="error"]',
                        warningBalanceAccount: '[data-tag-name="bbva-notification-help"].alert',
                        onlyAccountContinueBtn: 'div.step-amount-button-container [data-tag-name="bbva-button-default"]',
                        changePaymentBtn: 'div.header [data-tag-name="bbva-link"]#editButton',
                        accountSelectedChange: 'div.expandable-step-content [data-tag-name="bbva-list-card"]#keepSelectionCard',
                        changeSelectionContent: 'div.expandable-step-content div.step-select-account'
                    },
                    methodPaymentBlock: '[data-tag-name="bbva-expandable-step"]#selectAccountStep',
                },
                modalInfoRecharge: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="bbva-multistep-parking-recharge"]',
                        modifiers: '#modal-more-information',
                        additionalElements: {
                            icontype: 'div.content div.help-modal div.modal-main div.modal-title [data-tag-name="bbva-icon"]',
                            titleSlotted: 'div.content div.help-modal div.modal-main div.modal-title [data-tag-name="bbva-text"]',
                            descriptionSlotted: 'div div.content section.transition-container div#helpModalContent'
                        }
                    }
                ],
                modalAllAccounts: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="bbva-multistep-parking-recharge"]',
                        modifiers: '#modal-all-accounts',
                        additionalElements: {
                            allAccounts: 'div[slot="slot-content"]'
                        }
                    }
                ],
                rechargeSummaryBtn: '[data-tag-name="bbva-panel-button-fixed"] [data-tag-name="bbva-button-default"]#button',
                signConnector: CellsSignOperationModal
            },
            elementsSpherica: {
                signConnector: CellsSignOperationModalSpherica
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async requestRechargeInfo() {
        await this.rechargeSteps.amountStep.infoAccountLink.waitForAnimation({timeout: config.wait.M});
        await (await this.rechargeSteps.amountStep.infoAccountLink.waitForClickable({timeout: config.wait.M})).click();
    }

    async amountToRecharge() {
        await this.rechargeSteps.amountStepBlock.waitForEnabled({timeout: config.wait.M});
        await (await this.rechargeSteps.amountStep.amountSelection.specifySelector({placeholder: '__ITEM__', value:'item1'}).waitForClickable({timeout: config.wait.M})).click();
        await this.rechargeSteps.amountStep.continueBtn.scrollIntoView();
        await (await this.rechargeSteps.amountStep.continueBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async selectPaymentMethod() {
        await this.amountToRecharge();
        await this.rechargeSteps.methodPaymentBlock.waitForEnabled({timeout: config.wait.M});
        await (await this.rechargeSteps.methodPaymentStep.accountSelection.waitForClickable({timeout: config.wait.M})).click();
    }

    async viewAllAccounts() {
        await this.rechargeSteps.methodPaymentBlock.waitForEnabled({timeout: config.wait.M});
        await (await this.rechargeSteps.methodPaymentStep.allAccountsBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async finishParkingRecharge() {
        await this.rechargeSummaryBtn.waitForDisplayed({timeout: config.wait.M});
        await (await this.rechargeSummaryBtn.waitForClickable({timeout: config.wait.M})).click();
        await this.continueWithOTP();
    }

    async continueWithOTP(){
        await this.signConnector.isLoaded();
        await this.signConnector.setPassword(32671741);
        await this.signConnector.confirmPassword();
    }

    async changePaymentMethod() {
        await (await this.rechargeSteps.methodPaymentStep.changePaymentBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async changeAmount() {
        await (await this.rechargeSteps.amountStep.changeAmountBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            case 'parking account image':
                await this.rechargeSteps.accountStep.imageIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'parking account information':
                await this.rechargeSteps.accountStep.infoAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'recharge amount step':
                await this.rechargeSteps.amountStepBlock.waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'modal icon':
                await this.modalInfoRecharge.additionalElements.icontype.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal title':
                await this.modalInfoRecharge.additionalElements.titleSlotted.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'information text':
                await this.modalInfoRecharge.additionalElements.descriptionSlotted.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept button':
                await this.modalInfoRecharge.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'quantities':
                await this.rechargeSteps.amountStep.quantitiesAmounts.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'information box':
                await this.rechargeSteps.amountStep.messageInformation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account selected':
                await this.rechargeSteps.methodPaymentStep.accountSelectedChange.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'action buttons':
                await this.rechargeSteps.methodPaymentStep.changeSelectionContent.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'all payment methods':
                await this.modalAllAccounts.additionalElements.allAccounts.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.modalAllAccounts.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'alert message balance':
                await this.rechargeSteps.methodPaymentStep.insufficientBalanceMsg.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'account warning message':
                await this.rechargeSteps.methodPaymentStep.warningBalanceAccount.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'continue account button':
                await this.rechargeSteps.methodPaymentStep.onlyAccountContinueBtn.waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'continue payment button':
                await this.rechargeSteps.amountStep.continueBtn.scrollIntoView();
                await this.rechargeSteps.amountStep.continueBtn.waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'method payment step':
                await this.rechargeSteps.methodPaymentBlock.scrollIntoView();
                await this.rechargeSteps.methodPaymentBlock.waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new ParkingRecharge();
