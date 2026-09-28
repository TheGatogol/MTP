import AbstractGlomoPage from '../abstract-glomo-page';
import { page, ScreenValidationKeyNotFound } from '@csqe/radish';

import BbvaHeaderMain from '../../components/bbva-header-main';
import BbvaHeaderMainSpherica from '../../components/bbva-header-main-spherica';
import BbvaHelpModal from '../../components/bbva-help-modal';
import BbvaHelpModalSpherica from '../../components/bbva-help-modal-spherica';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

@page()
class ParkingList extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-parkingList[state="active"]',
            elements: {
                header: BbvaHeaderMain,
                modalInfo: [
                    BbvaHelpModal,
                    {
                        modifiers: '[id="modalDelete"]',
                    }
                ],
                titleRegisterAccounts: '[data-tag-name="bbva-header-category"] div.header-category div.title-container [data-tag-name="bbva-core-heading"][role="heading"]',
                imagePanel: '[data-tag-name="bbva-panel-info"] div.image',
                infoPanelDescription: '[data-tag-name="bbva-panel-info"] div.content [data-tag-name="bbva-text"].description',
                addAccountsButton: '[data-tag-name="bbva-button-row"]',
                listParkingAccounts: '[data-tag-name="bbva-aggregation-contact-list"].accounts',
                imageIcon: 'li.item-account:nth-of-type(__ACCOUNT__) [data-tag-name="bbva-list-contact"] [data-tag-name="bbva-clip-box"]',
                informationAccount: 'li.item-account:nth-of-type(__ACCOUNT__) div.container div.column [data-tag-name="bbva-text"]',
                rechargeBtn: 'li.item-account:nth-of-type(__ACCOUNT__) div.action-buttons-account [data-tag-name="bbva-button-default"]:nth-of-type(1)',
                deleteBtn: 'li.item-account:nth-of-type(__ACCOUNT__) div.action-buttons-account [data-tag-name="bbva-button-default"]:nth-of-type(2)',
                warningMessage: 'li.item-account:nth-of-type(__ACCOUNT__) [data-tag-name="bbva-notification-help"]',
                maxAccountsMessage: '[data-tag-name="bbva-notification-message"]',
                deleteMessage: '[data-tag-name="bbva-notification-toast"]#deleteParkingToast div.container',
            },
            elementsSpherica: {
                header: BbvaHeaderMainSpherica,
                modalInfo: [
                    BbvaHelpModalSpherica,
                    {
                        modifiers: '[id="modalDelete"]',
                    }
                ],
                titleRegisterAccounts: '[data-tag-name="bbva-header-category-spherica"] div.title-container [data-tag-name="bbva-core-heading"][role="heading"]',
                imagePanel: '[data-tag-name="bbva-panel-info-spherica"] div.image',
                infoPanelDescription: '[data-tag-name="bbva-panel-info-spherica"] div.content [data-tag-name="bbva-type-text"].description',
                addAccountsButton: '[data-tag-name="bbva-button-row-spherica"]',
                listParkingAccounts: '[data-tag-name="bbva-aggregation-contact-list-spherica"].accounts',
                imageIcon: 'li.item-account:nth-of-type(__ACCOUNT__) [data-tag-name="contact-list"] [data-tag-name="bbva-clip-box"]',
                informationAccount: 'li.item-account:nth-of-type(__ACCOUNT__) div.container div.column [data-tag-name="bbva-type-link"]',
                maxAccountsMessage: '[data-tag-name="bbva-notification-message-spherica"]',
                dialogOperations: [GlomoAlertManagerSpherica],
            },
            dialogOperations: [GlomoAlertManager],
            requiredElements: [
                'header'
            ],
        });
    }

    async accessParkingFaqs() {
        await (await this.header.buttonRightSecondary.waitForClickable({ timeout: config.wait.M })).click();
    }

    async accessToEnrollment() {
        await (await this.addAccountsButton.waitForClickable({ timeout: config.wait.M })).click();
    }

    async accessToRecharge() {
        await (await this.rechargeBtn.specifySelector({ placeholder: '__ACCOUNT__', value: 1 }).waitForClickable({ timeout: config.wait.M })).click();
    }

    async deleteParkingAccount(account) {
        await (await this.deleteBtn.specifySelector({ placeholder: '__ACCOUNT__', value: account }).waitForClickable({ timeout: config.wait.M })).click();
        await this.modalInfo.acceptBtn.waitForDisplayed({ timeout: config.wait.M });
        await (await this.modalInfo.acceptBtn.waitForClickable({ timeout: config.wait.M })).click();
        await this.waitUntilSpinnerVeil({ timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.L });
    }

    async _screenValidation({ item, value }) {
        switch (item.toLowerCase()) {
            case 'delete confirmation':
                await this.deleteMessage.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'parking title':
                await this.titleRegisterAccounts.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'image account':
                await this.imageIcon.specifySelector({ placeholder: '__ACCOUNT__', value: 1 }).waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'add account button':
                await this.addAccountsButton.scrollIntoView();
                await this.addAccountsButton.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'hidden' });
                break;
            case 'information account':
                await this.informationAccount.specifySelector({ placeholder: '__ACCOUNT__', value: 1 }).waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'accounts list':
                await this.listParkingAccounts.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'empty image':
                await this.imagePanel.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'information text':
                await this.infoPanelDescription.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'information box message':
                await this.maxAccountsMessage.scrollIntoView();
                await this.maxAccountsMessage.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'recharge button':
                await this.rechargeBtn.specifySelector({ placeholder: '__ACCOUNT__', value: 1 }).waitForEnabled({ timeout: config.wait.M, reverse: value !== 'active' });
                break;
            case 'delete button':
                await this.deleteBtn.specifySelector({ placeholder: '__ACCOUNT__', value: 1 }).waitForEnabled({ timeout: config.wait.M, reverse: value !== 'active' });
                break;
            case 'warning message':
                await this.warningMessage.specifySelector({ placeholder: '__ACCOUNT__', value: 1 }).waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'icon image':
                await this.errorDialogOperations.heroImage.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'error title':
                await this.errorDialogOperations.titles.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'error text':
                await this.errorDialogOperations.descriptions.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'retry button':
                await this.errorDialogOperations.acceptBtn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'cancel button':
                await this.errorDialogOperations.cancelBtn.waitForDisplayed({ timeout: config.wait.M });
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

}

export default new ParkingList();
