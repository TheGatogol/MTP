import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

//Components
import BbvaHelpModal from '../../components/bbva-help-modal';
import FeedbackClientVoiceConnect from '../../components/feedback-client-voice-connect-gl';

@page()
class MyConversationPage extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-myConversations[state="active"]',
            elements: {
                panel: 'user-info-my-conversations-gl',
                dialogOperations: {
                    properties: { root: '#help' },
                    header: '#helpModalHeader',
                    backButton: '#btn-close',
                    picture:'img',
                    text:'bbva-type-text[text="En esta sección podrás"]',
                    acceptBtn:'[data-tag-name="bbva-button-default"]'
                },
                conversationList:{
                    properties: { root:'.conversation-list'},
                    header: '.header-index',
                    backButton:'#btn-back',
                    infoButton:'#btn-help',
                    menuButton: '#btn-menu',
                    optionButton: '#buttons [data-tag-name="bbva-button-action"][tabindex="0"]',
                    draftConversation: '.conversation.read [data-tag-name="bbva-badge-default"][text="Borrador"]',
                    resolvedConversation: '.conversation.read [data-tag-name="bbva-badge-default"][text="Resuelta"]',
                    conversation: '[data-tag-name="bbva-list-swipe"]',
                    respondBankerConversation: '[data-tag-name="bbva-list-swipe"] [data-tag-name="bbva-type-icon"][icon="spherica:email-read"]',
                    sectionNoConversations: '.no-conversations',
                    picture: '[data-tag-name="bbva-clip-microillustration"]',
                    subjectConversation: '[data-tag-name="bbva-list-swipe"] div.subject div[class="icon-title"] [data-tag-name="bbva-type-text"]',
                    closeButton: '.list-page [data-tag-name="bbva-header-main"] .button-2 .header-icons #btn-back',
                },
                chatConversation:{
                    properties: {root: '#chat'},
                    backButton: '#btn-back',
                    clearButton: '.clear',
                    chat: '[data-tag-name="bbva-chat-container"]',
                    header: '[data-tag-name="bbva-header-main"]',
                    addButton: '.add-icon',
                    input: '#idTextarea',
                    send: '.send',
                    chatReceived: '[data-tag-name="bbva-chat-container"] [text="Conversacion resulta "]',
                    receivedChat:'[data-tag-name="bbva-notification-message"]',
                },
                faqsModal:[
                    BbvaHelpModal,
                    {
                        root: {
                            web: '[data-tag-name="bbva-help-modal"]',
                            isWithoutRoot: true
                        },
                        additionalElements: {
                            faqQuestion: 'div div:nth-child(__N__) [data-tag-name="bbva-type-link"]',
                            faqQuestionTitle: 'div [data-tag-name="bbva-help-modal"] section [data-tag-name="help-faqs-aem-panel-info"] .content [data-tag-name="bbva-type-text"]',
                            faqQuestionAnswer: 'div [data-tag-name="bbva-help-modal"] section .detail-content',
                            closeButton: '[id="btn-close"]',
                            faqsList: '.link-list-container [data-tag-name="bbva-type-link"]',
                            header: '[data-tag-name="help-faqs-aem-panel-info"]',
                            closeBtn: '#helpModalHeader[text="Ayuda"] #btn-close [icon="spherica:close"]',
                            descriptions: 'div.detail-content',
                            bulletsList: '.detail-content [data-tag-name="bbva-list-bullet"]',
                            faqModalTitle: 'div [data-tag-name="bbva-header-category"] [text="¿Necesitas más información?"]',
                            faqModalBulletsList: 'div.link-list-container',
                        }
                    }
                ],
                newConversation: [
                    BbvaHelpModal,
                    {
                        root: {
                            web: '#new',
                            isWithoutRoot: true
                        },
                        additionalElements: {
                            backButton: '#btn-close',
                            titleInput: 'input',
                            reasonInput: '#first-message-input textarea',
                            createButton: '#onboarding-accept',
                            addFileLink: '.upload-file',
                        }
                    }
                ],
                searchModal: {
                    properties: {
                        root: '#search'
                    },
                    input: '#search-input input',
                    searchButton: '.action',
                    conversation: '.conversation.read',
                    closeButton: '[id="btn-close"]',
                    header: '[text="Buscar conversación"] .header',
                    notFoundMessage: '[text="No tienes conversaciones con ese tema."]',
                    title: '[text="Buscar conversación"] #text h1.text.lines',
                    description: '[data-tag-name="bbva-type-text"][text="Revisa la ortografía o escribe otra palabra clave."]',
                    microillustration: '[data-tag-name="bbva-clip-microillustration"]',
                },
                attachOnBoardingModal: [
                    BbvaHelpModal,
                    {
                        root: {
                            web: '#attachOnBoarding',
                            isWithoutRoot: true
                        }
                    }
                ],
                attachType: [
                    BbvaHelpModal,
                    {
                        root: {
                            web: '#attachType',
                            isWithoutRoot: true
                        },
                        additionalElements: {
                            backButton: '#btn-close',
                            cameraButton: '#bbva-camera-btn',
                            galleryButton: '#bbva-gallery-btn',
                            documentButton: '#bbva-document-btn',
                        }
                    }
                ],
                attach: {
                    properties: {
                        root: '#attach',
                    },
                    header: 'div.header',
                    attachFileBtn: '[data-tag-name="bbva-type-link"]',
                    attachFileInfo: '[data-tag-name="bbva-notification-message"]',
                    submitBtn: '[data-tag-name="bbva-button-default"][class="form-button"]'
                },
                attachFile: {
                    properties: {
                        root: '#chat-form',
                    },
                    addIcon: '[class="add-icon"]',
                },
                attachedMessageInput: {
                    properties: {
                        root: '#attached-message-input',
                    },
                    input: '[aria-multiline="true"][slot="_textarea"]',
                    closeButton: '[aria-label="Borrar mensaje"]'
                },
                feedbackClient: FeedbackClientVoiceConnect,
            },
            requiredElements: [
                'panel',
            ]
        });
    }

    async exitProcess() {
        await this.conversationList.closeButton.waitForDisplayed({timeout: config.wait.M});
        await this.conversationList.closeButton.click();
    }

    async answerFeedbackForm(feedback) {
        await this.feedbackClient.answerFeedbackForm(feedback);
    }

    async selectRating() {
        await this.feedbackClient.selectRating();
    }

    async sendFeedback() {
        await this.feedbackClient.sendFeedback();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.conversationList.header.waitForDisplayed();
                break;
            case 'back button':
                await this.conversationList.backButton.waitForDisplayed();
                break;
            case 'new conversation button':
                await (await this.conversationList.optionButton.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info message':
                await this.conversationList.menuButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info button':
                await this.conversationList.infoButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'section no conversations':
                await this.conversationList.sectionNoConversations.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'picture no conversations':
                await this.conversationList.picture.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header dialog':
                await this.dialogOperations.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back button dialog':
                await this.dialogOperations.backButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'picture dialog':
                await this.dialogOperations.picture.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text dialog':
                await this.dialogOperations.text.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept button dialog':
                await this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first conversation without draft status':
                await this.noDraft();
                break;
            case 'conversation without draft status':
                await this.conversationList.conversation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faq title':
                await this.faqsModal.additionalElements.faqQuestionTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faq answer':
                await this.faqsModal.additionalElements.faqQuestionAnswer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.faqsModal.additionalElements.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back button search':
                await this.chatConversation.backButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'chat':
                await this.chatConversation.chat.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header search':
                await this.chatConversation.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'add button':
                await this.chatConversation.addButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input':
                await this.chatConversation.input.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'chat received':
                await this.chatConversation.chatReceived.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'received text':
                await this.chatConversation.receivedChat.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'send':
                await this.chatConversation.send.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header attach type':
                await this.attachType.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back attach type':
                await this.attachType.additionalElements.backButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'camera button attach type':
                await this.attachType.additionalElements.cameraButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'gallery button attach type':
                await this.attachType.additionalElements.galleryButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'document button attach type':
                await this.attachType.additionalElements.documentButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'search header':
                await this.searchModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'search close button':
                await this.searchModal.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'not found label':
                await this.searchModal.notFoundMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'search query entered':
                await this.searchModal.input.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'search button':
                await this.searchModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'search title':
                await this.searchModal.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'search input':
                await this.searchModal.searchButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'microillustration':
                await this.searchModal.microillustration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no results description':
                await this.searchModal.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faq header':
                await this.faqsModal.additionalElements.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faq cross button':
                await this.faqsModal.additionalElements.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faq description':
                await this.faqsModal.additionalElements.descriptions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faq bullets list':
                await this.faqsModal.additionalElements.bulletsList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'attach header':
                await this.attach.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'attach file button':
                await this.attach.attachFileBtn.scrollIntoView({block: 'center', behavior: 'smooth'});
                await this.attach.attachFileBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'attach notification':
                await this.attach.attachFileInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'attach submit button':
                await this.attach.submitBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message input':
                await this.attachedMessageInput.input.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message close button':
                await this.attachedMessageInput.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faq modal title':
                await this.faqsModal.additionalElements.faqModalTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faq modal bullets list':
                await this.faqsModal.additionalElements.faqModalBulletsList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header feedback':
                await this.feedbackClient.welcome.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button feedback':
                await this.feedbackClient.welcome.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'rating feedback button':
                await this.feedbackClient.selectRating(5, false);
                break;
            case 'header thankyou feedback':
                await this.feedbackClient.thankYou.headerThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit thankyou feedback':
                await this.feedbackClient.thankYou.exitThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'micro thankyou feedback':
                await this.feedbackClient.thankYou.microillustrationThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title thankyou feedback':
                await this.feedbackClient.thankYou.titleThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description thankyou feedback':
                await this.feedbackClient.thankYou.descriptionThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async createNewConversation() {
        await (await this.conversationList.optionButton.elements()).value[0].waitForClickable({timeout: config.wait.M});
        await (await this.conversationList.optionButton.elements()).value[0].click();
    }

    async accessToConversation(conversationStatus) {
        switch (conversationStatus) {
            case 'resolved':
                await this.conversationList.resolvedConversation.waitForDisplayed({timeout: config.wait.M});
                await this.conversationList.resolvedConversation.scrollIntoView();
                await this.conversationList.resolvedConversation.click();
                break;
            case 'draft':
                await this.conversationList.draftConversation.waitForDisplayed({timeout: config.wait.M});
                await this.conversationList.draftConversation.scrollIntoView();
                await this.conversationList.draftConversation.click();
                break;
            case 'banker':
                await this.conversationList.respondBankerConversation.waitForDisplayed({timeout: config.wait.M});
                await this.conversationList.respondBankerConversation.scrollIntoView();
                await this.conversationList.respondBankerConversation.click();
                break;
            case 'active':
                await this.conversationList.subjectConversation.waitForDisplayed({timeout: config.wait.M});
                await this.conversationList.subjectConversation.scrollIntoView();
                await this.conversationList.subjectConversation.click();
                break;
            default:
                throw new Error(`The conversation status: ${conversationStatus} is not implemented`);
        }
    }

    async openModalInfo() {
        await this.conversationList.infoButton.waitForDisplayed({timeout: config.wait.M});
        await this.conversationList.infoButton.click();
    }

    async closeFirstAccessModal() {
        await this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.M});
        await this.dialogOperations.acceptBtn.click();
    }

    async closeCellsModal() {
        await this.sliderGroupTwo.waitForDisplayed({timeout: config.wait.M});
        await this.sliderGroupTwo.click();
        await this.sliderGroupThree.waitForDisplayed({timeout: config.wait.M});
        await this.sliderGroupThree.click();
        await this.cellsModalButton.scrollIntoView({block: 'start'});
        await this.cellsModalButton.waitForDisplayed({timeout: config.wait.M});
        await this.cellsModalButton.click();
    }

    async retryOperative() {
        let i = 0;
        while (i < 1) {
            await this.dialogOperations.confirmDialog({expectToDisappear: false});
            i++;
        }
    }

    async enterConversationTitle(title) {
        await this.newConversation.additionalElements.titleInput.waitForDisplayed({timeout: config.wait.M});
        await this.newConversation.additionalElements.titleInput.setValue({value: title});
    }

    async enterConversationReason(message) {
        await this.newConversation.additionalElements.reasonInput.waitForDisplayed({timeout: config.wait.M});
        await this.newConversation.additionalElements.reasonInput.setValue({value: message});
    }

    async accessChat() {
        await this.newConversation.additionalElements.createButton.waitForEnabled();
        await this.newConversation.additionalElements.createButton.click();
    }

    async addAttachment() {
        await this.newConversation.additionalElements.addFileLink.waitForEnabled();
        await this.newConversation.additionalElements.addFileLink.click();
    }

    async backToNewConversationPage() {
        await this.newConversation.additionalElements.backButton.waitForDisplayed({timeout: config.wait.M});
        await this.newConversation.additionalElements.backButton.click();
    }

    async discardDraftChat() {
        await this.chatConversation.clearButton.waitForDisplayed({timeout: config.wait.M});
        await this.chatConversation.clearButton.click();
    }

    async backToChatPage() {
        await this.chatConversation.backButton.waitForDisplayed();
        await this.chatConversation.backButton.click();
    }

    async editChatPage(message) {
        await this.chatConversation.input.waitForDisplayed();
        await this.chatConversation.input.setValue({value: message});
    }

    async noDraft() {
        await this.conversationList.conversation.waitForDisplayed({timeout: config.wait.M});
        const element = (await this.conversationList.draftConversation.element()).length;
        if (element > 0){
            throw new Error('There is a draft conversation');
        } else {
            await this.conversationList.conversation.waitForDisplayed({timeout: config.wait.M});
        }
    }

    async accessFrequentlyAskedQuestion(entryPoint) {
        switch(entryPoint.toLowerCase()) {
            case 'first':
                await this.faqsModal.additionalElements.faqsList.waitForDisplayed({timeout: config.wait.M});
                await (await this.faqsModal.additionalElements.faqsList.elements()).value[0].click();
                break;
            case 'second':
                await this.faqsModal.additionalElements.faqsList.waitForDisplayed({timeout: config.wait.M});
                await (await this.faqsModal.additionalElements.faqsList.elements()).value[1].click();
                break;
            case 'third':
                await this.faqsModal.additionalElements.faqsList.waitForDisplayed({timeout: config.wait.M});
                await (await this.faqsModal.additionalElements.faqsList.elements()).value[2].click();
                break;
            case 'fourth':
                await this.faqsModal.additionalElements.faqsList.waitForDisplayed({timeout: config.wait.M});
                await (await this.faqsModal.additionalElements.faqsList.elements()).value[3].click();
                break;
            case 'fifth':
                await this.faqsModal.additionalElements.faqsList.waitForDisplayed({timeout: config.wait.M});
                await (await this.faqsModal.additionalElements.faqsList.elements()).value[4].click();
                break;
            case 'sixth':
                await this.faqsModal.additionalElements.faqsList.waitForDisplayed({timeout: config.wait.M});
                await (await this.faqsModal.additionalElements.faqsList.elements()).value[5].click();
                break;
            default:
                throw new Error(`Option "${entryPoint}" is not valid`);
        }
    }

    async accessSearch() {
        await this.conversationList.conversation.waitForDisplayed({timeout: config.wait.M});
        await (await this.conversationList.optionButton.elements()).value[1].waitForClickable({timeout: config.wait.M});
        await (await this.conversationList.optionButton.elements()).value[1].click();
    }

    async attachFiles() {
        await this.attachFile.addIcon.waitForDisplayed({timeout: config.wait.M});
        await this.attachFile.addIcon.click();
    }

    async enterMessageAttachFiles() {
        await this.attachedMessageInput.input.waitForDisplayed({timeout: config.wait.M});
        await this.attachedMessageInput.input.waitForEnabled({timeout: config.wait.M});
        await this.attachedMessageInput.input.setValue({value: 'message', slow: true});
    }

    async enterNewMessage() {
        await this.chatConversation.input.waitForDisplayed({timeout: config.wait.M});
        await this.chatConversation.input.setValue({value: 'message', slow: true});
    }

    async enterSendMessage() {
        await this.chatConversation.send.waitForDisplayed({timeout: config.wait.M});
        await this.chatConversation.send.click();
    }

    async enterSearchConversation() {
        await this.searchModal.input.waitForDisplayed({timeout: config.wait.M});
        await this.searchModal.input.setValue({value: global.user.searchSubject});
        await this.searchConversation();
    }

    async enterSearchConversationWithoutResults() {
        await this.searchModal.input.waitForDisplayed({timeout: config.wait.M});
        await this.searchModal.input.setValue({value: global.user.noResults});
        await this.searchConversation();
    }

    async searchConversation() {
        await this.searchModal.searchButton.waitForDisplayed({timeout: config.wait.M});
        await this.searchModal.searchButton.click();
    }

    async accessSearchConversation() {
        await this.searchModal.conversation.waitForDisplayed({timeout: config.wait.M});
        await this.searchModal.conversation.click();
    }

    async showOptionsAttachment() {
        await this.attachOnBoardingModal.acceptBtn.waitForDisplayed({timeout: config.wait.M});
        await this.attachOnBoardingModal.acceptBtn.click();
    }
}

export default new MyConversationPage();
