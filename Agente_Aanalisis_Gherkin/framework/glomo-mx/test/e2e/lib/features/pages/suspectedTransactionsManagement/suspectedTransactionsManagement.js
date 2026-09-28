import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page()
class SuspectedTransactionsManagement extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-suspectedTransactionsPage[state="active"]',
            elements: {
                header: '#cardInfoModal #helpModalHeader',
                notificationDetail: '#cardInfoModal .amountCardContainer',
                notificationDetailExitBtn: 'modal-template #cardInfoModal #helpModalHeader #btn-close',
                declineBtn: '#cardInfoModal .modal-footer .footer-button.link',
                confirmBtn: '#cardInfoModal .modal-footer .footer-button',
                confirmModalHeader: '#cardConfirmSuspectedTransactionModal [data-tag-name="bbva-header-main"]',
                confirmModalPanelInfo: '#cardConfirmSuspectedTransactionModal .modalBodyContainer',
                beforeConfirmModalInfo: '#repeatedTransactionModal .modal-container',
                beforeConfirmModalExitBtn: '#repeatedTransactionModal .modal-footer [data-tag-name="bbva-button-default"]',
                rejectModalHeader: '#rejectTransaction #helpModalHeader',
                callLineBtn: '#rejectTransaction .modal-footer bbva-button-default',
                lockAndResetBtn: '#rejectTransaction .modal-footer [data-tag-name="bbva-button-default"]',
                rejectModalExitBtn: '#rejectTransaction .modal-footer bbva-button-default[text="Salir"]',
                withoutResponseModalInfo: '#withoutResponseModal .modal-container',
                withoutResponseModalExitBtn: '#withoutResponseModal .modal-footer [data-tag-name="bbva-button-default"]',
                withoutResponseModalReturnBtn: '#withoutResponseModal .modal-footer bbva-button-default[text="Volver"]',
            },
            requiredElements: [
                'header',
            ],
        });
    }

    async _screenValidation({item, value, _args} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'suspected transaction message':
                await this.notificationDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'decline button':
                await this.declineBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm button':
                await this.confirmBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm header':
                await this.confirmModalHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm info':
                await this.confirmModalPanelInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm exit button':
                await this.confirmModalExitBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirmed before info':
                await this.beforeConfirmModalInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirmed before exit button':
                await this.beforeConfirmModalExitBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'reject header':
                await this.rejectModalHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'lock and reset button':
                await this.lockAndResetBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'call line button':
                await this.callLineBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'reject exit button':
                await this.rejectModalExitBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'without response modal header':
                await this.withoutResponseModalInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm exit without response button':
                await this.withoutResponseModalExitBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'return exit without response button':
                await this.withoutResponseModalReturnBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: {value, ..._args}});
        }
    }

    async declineTransaction() {
        await (await this.declineBtn.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async confirmTransaction() {
        await (await this.confirmBtn.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async closeNotification(type) {
        switch (type) {
            case 'with response':
                await (await this.rejectModalExitBtn.waitForDisplayed({timeout: config.wait.M}))
                    .click();
                break;
            case 'without response':
                await (await this.notificationDetailExitBtn.waitForDisplayed({timeout: config.wait.M}))
                    .click();
                await (await this.withoutResponseModalExitBtn.waitForDisplayed({timeout: config.wait.M}))
                    .click();
                break;
            default:
                throw new Error(`${type} IS NOT DEFINED`);
        }
    }

    async returnFromExitNotification() {
        await (await this.withoutResponseModalReturnBtn.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async exitNotification() {
        await (await this.notificationDetailExitBtn.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async exitRejectModal() {
        await (await this.rejectModalExitBtn.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async goBlockAndRepleacement() {
        await (await this.lockAndResetBtn.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }
}

export default new SuspectedTransactionsManagement();
