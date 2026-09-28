import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import GlomoAlertManager from '../../components/glomo-alert-manager';

@page()
class InAppChat extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-chat',
            elements: {
                greenToast: 'bbva-notification-toast',
                header: 'bbva-header-main',
                closeBtn: '#btn-right-primary',
                notifyWelcome: 'bbva-notification-help:nth-of-type(1)',
                notifyConnected: 'bbva-notification-help:nth-of-type(2)',
                notifyEnding: 'bbva-notification-help:nth-of-type(3)',
                notifyCompleted: 'bbva-notification-help:nth-of-type(4)',
                messageClient: '[data-tag-name="bbva-chat-text"]:nth-of-type(1)',
                messageAdvisor: '[data-tag-name="bbva-chat-text"]:nth-of-type(2)',
                messageAdvisor2: '[data-tag-name="bbva-chat-text"]:nth-of-type(3)',
                inputField: '.field textarea',
                sendBtn: '.send',
                closeModal: '[data-tag-name="bbva-help-modal"]:first-of-type .footer-button',
                title: '[data-tag-name="bbva-help-modal"]:first-of-type #helpModalTitle',
                content: '[data-tag-name="bbva-help-modal"]:first-of-type #helpModalContent',
            },
            dialogOperations: [
                GlomoAlertManager
            ],
            requiredElements: [
                'header',
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'green toast':
                await this.greenToast.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'header chat':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button chat':
                await this.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input chat':
                await this.inputField.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'send button':
                await this.sendBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification welcome':
                await this.notifyWelcome.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification connected':
                await this.notifyConnected.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification ending':
                await this.notifyEnding.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'notification completed':
                await this.notifyCompleted.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'customer message':
                await this.messageClient.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'advisor message':
                await this.messageAdvisor.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'advisor message 2':
                await this.messageAdvisor2.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'message in input text':
                await this.inputField.verifyText({text: 'Hola buenos días'});
                break;
            case 'modal error title':
                await this.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal error content':
                await this.content.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal error close button':
                await this.closeModal.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async waitForLoaded(timeout = config.wait.XXXL) {
        await super.waitForLoaded(timeout);
    }

    async goBack() {
        await this.dialogOperations.confirmDialog();
    }

    async sendMessage(message) {
        await this.inputField.waitForEnabled({timeout: config.wait.L});
        await this.inputField.setValue({value: message});
        await this.submitMessage();
    }

    async submitMessage() {
        await this.sendBtn.waitForDisplayed({timeout: config.wait.L});
        await this.sendBtn.click({useActions: true});
    }

    async enterText(text) {
        await this.inputField.waitForEnabled({timeout: config.wait.L});
        await this.inputField.setValue({value: text, slow: true});
        await this.inputField.waitForAnimation({timeout: config.wait.XL});
    }

    async closeChat() {
        await this.closeBtn.waitForDisplayed({timeout: config.wait.L});
        await this.closeBtn.click();
    }

    async finishChat() {
        await this.closeChat();
    }
}

export default new InAppChat();
