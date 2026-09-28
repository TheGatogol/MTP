import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';
@page()
class NotificationsSettings extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-notificationsSettingsPage[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                switchItem: 'cells-switch-item div.item-switch cells-switch #switcher',
                operationSwipeList: {
                    properties: {root: 'cells-operation-swipe-list'},
                    content: 'div.operation-info',
                    accountsConfigLink: 'cells-left-swipe-action#swipe-0 .groupItem-items',
                    cardsConfigLink: 'cells-left-swipe-action#swipe-1 .groupItem-items',
                    recordatorioConfigLink: 'cells-left-swipe-action#swipe-2 .groupItem-items',
                },
                dialogOperations: [
                    GlomoAlertManager
                ]
            },
            elementsSpherica: {
                header: CellsMoleculeHeaderSpherica,

                switchItem: 'cells-switch-item-spherica div.item-switch cells-switch-spherica #switcher',

                operationSwipeList: {
                    properties: {
                        root: 'cells-operation-swipe-list-spherica'
                    },

                    accountsConfigLink: 'cells-left-swipe-action-spherica#swipe-0 .groupItem-items',
                    cardsConfigLink: 'cells-left-swipe-action-spherica#swipe-1 .groupItem-items',
                    recordatorioConfigLink: 'cells-left-swipe-action-spherica#swipe-2 .groupItem-items'
                },

                dialogOperations: [
                    GlomoAlertManagerSpherica
                ]
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async _screenValidation({item} = {}) {
        switch (item) {
            case 'header title':
                await this.header.operationTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back button':
                await this.header.waitForDisplayed({timeout: config.wait.M, isBtnLeft: true});
                break;
            case 'help button':
                await this.header.waitForDisplayed({timeout: config.wait.M, isBtnRight: true});
                break;
            case 'switch element':
            case 'notifications toggle':
                await this.switchItem.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accounts configuration':
                await this.operationSwipeList.accountsConfigLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cards configuration':
                await this.operationSwipeList.cardsConfigLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'credit card payment reminder settings link':
                await this.operationSwipeList.recordatorioConfigLink.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async openNotificationSettingsOf(type) {
        switch (type.toLowerCase()) {
            case 'accounts':
                await (await this.operationSwipeList.accountsConfigLink.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'cards':
                await (await this.operationSwipeList.cardsConfigLink.waitForClickable({timeout: config.wait.L})).click();
                break;
            default:
                throw new Error(`The option "${type}" are unknown. Cannot be processed.`);
        }
    }

    async openRecordatorio() {
        await this.operationSwipeList.recordatorioConfigLink.waitForDisplayed({timeout: config.wait.S});
        await this.operationSwipeList.recordatorioConfigLink.click();
    }

    async navigateToEditConfiguration(type) {
        await this.openNotificationSettingsOf(type);
    }

    async openHelpModal() {
        await this.header.actionRight();
    }

    async closeDialog() {
        await this.dialogOperations.closeDialog({timeout: config.wait.S});
    }

    async _modalElementValidation({item, ...args} = {}) {
        await this.dialogOperations.container.waitForDisplayed({timeout: config.wait.S});
        switch (item.toLowerCase()) {
            case 'modal title':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.TITLE});
                break;
            case 'close button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.CLOSE});
                break;
            case 'help illustration':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.HERO_IMAGE});
                break;
            case 'help description':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.DESCRIPTION});
                break;
            default:
                await super._modalElementValidation({item, ...args});
        }
    }
}

export default new NotificationsSettings();
