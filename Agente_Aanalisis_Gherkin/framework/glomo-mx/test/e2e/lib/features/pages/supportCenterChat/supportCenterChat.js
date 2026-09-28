import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class SupportCenterChat extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-supportCenterChat[state="active"]',
            elements: {
                //Header
                header: '[data-tag-name="bbva-header-main"]',
                exitButton: '#btn-right-primary',
                //Title
                icon: '[data-tag-name="bbva-panel-info"] svg',
                mainTitle: '[data-tag-name="bbva-panel-info"] [data-tag-name="bbva-text"]',
                //Bullet List
                firstInfo: '[data-tag-name="bbva-list-bullet"]:first-of-type',
                lastInfo: '[data-tag-name="bbva-list-bullet"]:last-of-type',
                chatButton: '#button',
                waitingScreenSpinner: '#spinnerMask',
                waitingScreenTitle: '[data-tag-name="bbva-progress-content"] [data-tag-name="bbva-text"] p:nth-of-type(2)',
                waitingScreenDescription: '[data-tag-name="bbva-progress-content"] [data-tag-name="bbva-text"] p:nth-of-type(3)',
                chatInitiatedIcon: '[data-tag-name="bbva-panel-offer"] .microillustration',
                chatInitiatedTitle: '[data-tag-name="bbva-panel-offer"] .title',
                chatInitiatedText: '[data-tag-name="bbva-panel-offer"] > p',
                chatInput: '#chatForm .field',
                sendButton: '#chatForm .send',
                microphoneButton: '#chatForm .microphone',
                assistantFirstMessage: '[data-tag-name="bbva-chat-text"][id="0"]',
                customerFirstMessage: '[data-tag-name="bbva-chat-text"][id="1"]',
                chatClosedIcon: '[data-tag-name="bbva-notification-help"] [data-tag-name="bbva-icon"]',
                chatClosedText: '[data-tag-name="bbva-notification-help"] [data-tag-name="bbva-text"]',
                ratingTitle: '.form-rating .title',
                ratingStars: '.form-rating #star-container',
                ratingStatus: '.form-rating [data-tag-name="bbva-badge-default"]'

            },
            requiredElements: ['header'],
        });
    }

    async goBack() {
        await (await this.exitButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async enterChat() {
        await (await this.chatButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon':
                await this.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.mainTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first info':
                await this.firstInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'last info':
                await this.lastInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'chat button':
                await this.chatButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'waiting icon':
                await this.waitingScreenSpinner.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'waiting title':
                await this.waitingScreenTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'waiting description':
                await this.waitingScreenDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'chat initiated icon':
                await this.chatInitiatedIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'chat initiated title':
                await this.chatInitiatedTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'chat initiated text':
                await this.chatInitiatedText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'chat input':
                await this.chatInput.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'microphone button':
                await this.microphoneButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'assistant first message':
                await this.assistantFirstMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'customer first message':
                await this.customerFirstMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'chat closed icon':
                await this.chatClosedIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'chat closed text':
                await this.chatClosedText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'chat rating title':
                await this.ratingTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'chat rating stars':
                await this.ratingStars.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async waitForAssistant(){
        await this.chatInitiatedText.waitForDisplayed({timeout: config.wait.L});
    }

    async waitForFirstMessage(){
        await this.assistantFirstMessage.waitForDisplayed({timeout: config.wait.M});
    }

    async finishChat(){
        await this.chatClosedIcon.waitForDisplayed({timeout: config.wait.L});
    }

    async sendMessage(message){
        await (await this.chatInput.waitForEnabled({timeout: config.wait.M})).setValue({value: message});
        await (await this.sendButton.waitForClickable({timeout: config.wait.M})).click();
    }
}

export default new SupportCenterChat();
