import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page()
class SuspectedTransactionsDirectDebit extends AbstractGlomoPage{
    constructor(){
        super({
            root: '#cells-template-suspectedTransactionDirectDebits[state="active"] bbva-feature-suspected-transactions-management-mx',
            elements: {
                debitDetail:{
                    properties: { root: '#help-modal-direct-debits' },
                    header: '#helpModalHeader [aria-label="Confirmar o rechazar"]',
                    exitClose: '#helpModalHeader[text="Confirmar o rechazar"] #btn-close',
                    confirmButton: '#btn-accept',
                    rejectButton: '#btn-reject',
                },
                debitSuccess:{
                    properties: {root: '#help-modal-direct-success'},
                    confirmHeader: '#helpModalHeader [aria-label="Confirmar o rechazar"]',
                    confirmClose: '#btn-close',
                    confirmShare:'[data-tag-name="bbva-button-row"]',
                },
                debitReject:{
                    properties: {root: '#help-modal-direct-rejected'},
                    rejectHeader: '#helpModalHeader [aria-label="Confirmar o rechazar"]',
                    rejectCloseButton: '#btn-close',
                },
                debitExit: {
                    properties: {root: '#help-modal-direct-exit-operation'},
                    exitTitle: '#title-text',
                    exitCloseButton: '#btn-close',
                    exitButton:'[data-tag-name="bbva-button-default"]',
                    exitCloseButtonLink: '.footer-button.link'
                },
                debitSubscription:{
                    properties: {root: '#help-modal-direct-pre-subscription'},
                    subscriptionTitle: '#title-text',
                    subscriptionCloseButton: '#btn-close',
                },
            },
            requiredElements: [
                'debitDetail.header',
            ],
        });
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.debitDetail.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit close':
                await this.debitDetail.exitClose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm button':
                await this.debitDetail.confirmButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'reject button':
                await this.debitDetail.rejectButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm header':
                await this.debitSuccess.confirmHeader.scrollIntoView({block:'start'});
                await this.debitSuccess.confirmHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm close':
                await this.debitSuccess.confirmHeader.scrollIntoView({block:'start'});
                await this.debitSuccess.confirmClose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm share':
                await this.debitSuccess.confirmHeader.scrollIntoView({block:'end'});
                await this.debitSuccess.confirmShare.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'reject header':
                await this.debitReject.rejectHeader.scrollIntoView({block:'start'});
                await this.debitReject.rejectHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'reject close button':
                await this.debitReject.rejectCloseButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async closeExitDetail(){
        await (await this.debitDetail.exitClose.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async acceptSubscription(accept){
        switch(accept){
            case 'confirms':
                await (await this.debitDetail.confirmButton.waitForDisplayed({timeout: config.wait.M})).click();
                await this.fillOtp('15947550');
                break;
            case 'cancel':
                await (await this.debitDetail.rejectButton.waitForDisplayed({timeout: config.wait.M})).click();
                await this.fillOtp('62971042');
                break;
            default:
                throw new Error(`${accept} subscription the movement`);
        }
    }

    async closeModal(action) {
        switch(action) {
            case 'exit':
                await (await this.debitExit.exitButton.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'continue':
                await (await this.debitExit.exitCloseButtonLink.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`${action} half modal page`);
        }
    }

    async responseModal(button) {
        switch (button) {
            case 'confirms':
                await (await this.debitDetail.confirmButton.waitForDisplayed({timeout: config.wait.M})).click();
                await this.fillOtp('15947550');
                await (await this.debitSubscription.subscriptionCloseButton.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'rejects':
                await (await this.debitDetail.rejectButton.waitForDisplayed({timeout: config.wait.M})).click();
                await this.fillOtp('62971042');
                await (await this.debitSubscription.subscriptionCloseButton.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`Button ${button} not found`);
        }
    }

}

export default new SuspectedTransactionsDirectDebit;
