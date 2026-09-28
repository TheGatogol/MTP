import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound} from '@csqe/radish';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

class CardlessWithdrawalHistoric extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-cardlessWithdrawalHistoric[state="active"]',

            elements: {
                // upper side
                header: 'h1#titleZone',
                backButton: '#btnLeft',
                infoButton: 'cells-molecule-header #btnRight',
                movement: 'cells-molecule-transaction-list-item.transactions-swipe__item p.transaction-name',
                btnCloseScreen: 'button cells-atom-icon',
                amount: 'span.amount-wrapper',
                floatingAction: 'bbva-button-floating-action',
                movementPendingPayment:'cells-molecule-transaction-list-item:first-child',
                movementExpired: 'cells-molecule-transaction-list-item:last-of-type div.default-status  div.transaction-info  div.transaction-status.fulfillment-status.error:last-of-type',
                movementCanceled: 'cells-molecule-transaction-list-item [class="transaction-status fulfillment-status error"]:first-of-type',
                headerWithdrawal: ' cells-molecule-header #titleZone span',
                backBtonWithdrawal : 'cells-molecule-header #btnLeft cells-atom-icon iron-icon svg',

                dialogOperations: [
                    GlomoAlertManager,
                    {
                        paragraphElements:{
                            titleModal: 'div.paragraph-template',
                            iconMessage: 'div.icon-container',
                            text: 'div p.paragraph-template-text'
                        },
                        additionalElements:{
                            btnClose: 'button#closeButton cells-atom-icon',
                            imgCardless: '#modal div.icon-container img',
                            textCardless: 'div.paragraph-template',
                            textInfo: '#modal div.icon-message-container cells-icon-message',
                            headerRTS: '#modal #modal h1'
                        }
                    }
                ]

            },
            elementsSpherica: {
                backButton: '#btnLeft',
                infoButton: 'cells-molecule-header-spherica #btnRight',
                movement: 'cells-molecule-transaction-list-item-spherica.transactions-swipe__item p.transaction-name',
                btnCloseScreen: 'button cells-atom-icon-spherica',
                floatingAction: 'cells-operations-list-indicators-spherica .filter-button .list__one-item .list__item  button.link',
                movementPendingPayment:'cells-molecule-transaction-list-item-spherica:first-child',
                movementExpired: 'cells-molecule-transaction-list-item-spherica:last-of-type div.transaction-status-block > div.transaction-status.fulfillment-status.error',
                movementCanceled: 'cells-molecule-transaction-list-item-spherica [class="transaction-status fulfillment-status error"]:first-of-type',
                headerWithdrawal: ' cells-molecule-header-spherica #titleZone span',
                backBtonWithdrawal : 'cells-molecule-header-spherica #btnLeft cells-atom-icon-spherica iron-icon svg',
                dialogOperations: [
                    GlomoAlertManagerSpherica,
                    {
                        paragraphElements: {
                            titleModal: 'div.paragraph-template',
                            iconMessage: 'div.icon-container',
                            text: 'div p.paragraph-template-text'
                        },
                        additionalElements: {
                            btnClose: 'button#closeButton cells-atom-icon-spherica',
                            imgCardless: '#modal div.icon-container img',
                            textCardless: 'div.paragraph-template',
                            textInfo: '#modal div.icon-message-container cells-icon-message-spherica',
                            headerRTS: '#modal #modal h1'
                        }
                    }
                ]

            },
            requiredElements: ['header'],
        });
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'back button':
                await this.backButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info button':
                await this.infoButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movement':
                await this.movement.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount':
                await this.amount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'float action':
                await this.floatingAction.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header withdrawal':
                await this.headerWithdrawal.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'botton back withdrawal':
                await this.headerWithdrawal.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});

        }
    }

    async _modalElementValidation({item, value, ...args} = {}) {
        switch (item.toLowerCase()) {
            case 'accept button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.ACCEPT_BUTTON}, {forceScroll: true});
                break;
            case 'img':
                await this.dialogOperations.additionalElements.imgCardless.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.dialogOperations.additionalElements.btnClose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text cardless':
                await this.dialogOperations.additionalElements.textCardless.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info text':
                await this.dialogOperations.additionalElements.textInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header rst':
                await this.dialogOperations.additionalElements.headerRTS.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cancel button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.CANCEL_BUTTON}, {forceScroll: true});
                break;
            default:
                await super._modalElementValidation({item, value, ...args});
        }
    }

    async accessToWithdrawal(withdrawalStatus){
        switch(withdrawalStatus.toLowerCase()){
            case 'first movement':
                await this.goFirstMovement();
                await this.dialogOperations.additionalElements.btnClose.waitForDisplayed({timeout: config.wait.M});
                await this.dialogOperations.additionalElements.btnClose.click();
                break;
            case 'service error':
                await this.goFirstMovement();
                break;
            case 'pending payment':
                await this.movementPendingPayment.waitForDisplayed({timeout: config.wait.M});
                await this.movementPendingPayment.click();
                break;
            case 'expired':
                await this.movementExpired.waitForAnimation({timeout: config.wait.M});
                await this.movementExpired.waitForClickable({timeout: config.wait.M});
                await this.movementExpired.click();
                break;
            case 'canceled':
                await this.movementCanceled.waitForAnimation({timeout: config.wait.M});
                await this.movementCanceled.waitForClickable({timeout: config.wait.M});
                await this.movementCanceled.click();
                break;
            default:
                throw new Error(`The withdrawal status: ${withdrawalStatus} is not implemented`);
        }
    }

    async closeOperative() {
        await this.btnCloseScreen.waitForClickable({timeout: config.wait.M});
        await this.btnCloseScreen.click();
    }

    async goBack() {
        await this.backButton.waitForClickable({timeout: config.wait.M});
        await this.backButton.click();
    }

    async goInfo() {
        await this.infoButton.waitForClickable({timeout: config.wait.M});
        await this.infoButton.click();
    }

    async goFirstMovement() {
        await this.movement.waitForAnimation({timeout: config.wait.M});
        await this.movement.waitForClickable({timeout: config.wait.M});
        await this.movement.click();
    }
}
export default new CardlessWithdrawalHistoric();
