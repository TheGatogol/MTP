import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

//Components
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import GlomoAlertManager from '../../components/glomo-alert-manager';

@page()
class MyConversationChatPage extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-myConversationChatPage[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                dialogOperations: [
                    GlomoAlertManager
                ],
                callButton: 'cells-molecule-header #btnRight',
                clientMessage: 'cells-chat #repeater > div.self > div > div > cells-molecule-balloon #iconMessage .message',
                attachmentButton: 'cells-chat #addButton',
                textField: 'cells-chat iron-form cells-autogrow-textarea #ironArea #textarea',
                sendButton: 'cells-chat #inputButton',
                attachmentOptions: 'cells-modal-selector #modal #content',
                textFieldDisabled: 'cells-chat #userMessageInput.disabled-cells-autogrow-text-area',
                bankerMessage: 'cells-chat #repeater > div > div > div > cells-molecule-balloon #iconMessage .message',
                officeHourMessage: 'cells-chat #messages cells-icon-message.info-message',
                dateMessage: 'cells-chat #messages iron-list#repeater div p.date-message',
                privacyNoticeMessage: 'cells-chat #messages p',
                conversationResolvedInfo: 'cells-chat cells-icon-message.resolved-conversation',
                backButton: 'cells-molecule-header #btnLeft',
                discardMessageButton: 'cells-chat iron-form div.textarea--icon cells-atom-icon'
            },
            requiredElements: [
                'backButton',
                'callButton',
                'textField'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({isBtnRight: true});
                break;
            case 'call button':
                await this.callButton.waitForDisplayed();
                break;
            case 'client message':
                await this.clientMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'attachment button':
                await this.attachmentButton.waitForDisplayed();
                break;
            case 'text field':
                await this.textField.waitForDisplayed();
                break;
            case 'send button':
                await this.sendButton.waitForDisplayed();
                break;
            case 'attachment options':
                await this.attachmentOptions.waitForDisplayed();
                break;
            case 'attachment button disabled':
                await this.attachmentButton.isDisabled();
                break;
            case 'text field disabled':
                await this.textField.isDisabled();
                break;
            case 'send button disabled':
                await this.sendButton.isDisabled();
                break;
            case 'banker message':
                await this.bankerMessage.waitForDisplayed();
                break;
            case 'office hour message':
                await this.officeHourMessage.waitForDisplayed();
                break;
            case 'date message':
                await this.dateMessage.waitForDisplayed();
                break;
            case 'privacy notice message':
                await this.privacyNoticeMessage.waitForDisplayed();
                break;
            case 'conversation resolved info':
                await this.conversationResolvedInfo.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async sendMessage() {
        const message = 'Lorem ipsum dolor sit amet consectetur adipiscing elit rutrum hendrerit id, aliquet semper potenti litora facilisis rhoncus vulputate duis. Dui rutrum nostra scelerisque a tristique leo himenaeos orn.';
        await this.textField.waitForDisplayed();
        await this.textField.setValue({value: message});
        await this.sendButton.waitForDisplayed();
        await this.submitMessage();
    }

    async sendMessageHtml() {
        const message = '<h1>Hola buen dia</h1>';
        await this.textField.waitForDisplayed();
        await this.textField.setValue({value: message});
        await this.sendButton.waitForDisplayed();
        await this.submitMessage();
    }

    async submitMessage() {
        await this.sendButton.waitForDisplayed({timeout: config.wait.M});
        await this.sendButton.click();
    }

    async addAttachment() {
        await this.attachmentButton.waitForDisplayed({timeout: config.wait.L});
        await this.attachmentButton.waitForAnimation({timeout: config.wait.L});
        await this.attachmentButton.click();
    }

    async makeDraftMessage() {
        const message = 'Lorem ipsum dolor sit amet consectetur adipiscing elit rutrum hendrerit id, aliquet semper potenti litora facilisis rhoncus vulputate duis. Dui rutrum nostra scelerisque a tristique leo himenaeos orn.';
        await this.textField.waitForDisplayed();
        await this.textField.setValue({value: message});
    }

    async backToMessagePage() {
        await this.backButton.waitForDisplayed();
        await this.backButton.click();
    }

    async discardDraftMessage() {
        await this.discardMessageButton.waitForDisplayed({timeout: config.wait.M});
        await this.discardMessageButton.click();
    }

    async accessCall() {
        await this.callButton.waitForDisplayed({timeout: config.wait.M});
        await this.callButton.click();
    }

    async retryOperative() {
        let i = 0;
        while (i < 2) {
            await this.dialogOperations.confirmDialog({expectToDisappear: false});
            await this.textField.waitForDisplayed({timeout: config.wait.XL});
            await this.sendMessage();
            i++;
        }
    }

}

export default new MyConversationChatPage();
