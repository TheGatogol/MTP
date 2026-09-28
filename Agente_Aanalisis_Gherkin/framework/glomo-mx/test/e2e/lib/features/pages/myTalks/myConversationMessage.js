import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

//Components
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import GlomoAlertManager from '../../components/glomo-alert-manager';

@page()
class MyConversationMessagePage extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-myConversationMessagePage[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                dialogOperations: [
                    GlomoAlertManager
                ],
                backButton: 'cells-molecule-header #btnLeft',
                newConversationButton: 'glomo-conversation-list div.new-conversation-section-center-style',
                infoMessage: 'glomo-conversation-list div.container div.conversation div.conversation-info',
                infoButton: 'cells-molecule-header #btnRightSecondary',
                searchButton: 'cells-molecule-header #btnRight',
                conversationHistory: 'glomo-conversation-list div.container > div:nth-child(3)',
                searchInput: 'cells-search-autocomplete #input #input-1 input',
                resolvedConversation: 'glomo-conversation-list div.container div.conversation div.conversation-info cells-key-values.conversation-status-resolved',
                draftConversation: 'glomo-conversation-list div.container div.conversation div.conversation-info cells-key-values.conversation-status-draft',
                firstConversationDraft: 'glomo-conversation-list div.container div:nth-child(3) div.conversation-info cells-key-values.conversation-status-draft',
                firstConversationNoDraft: 'glomo-conversation-list div.container div:nth-child(3) div.conversation-info cells-key-values:not(.conversation-status-draft)',
                newConversation: 'glomo-conversation-list div.container > div.conversation.conversation-status-new-highlight',
                sentConversation: 'glomo-conversation-list div.container > div.conversation:not(.conversation-status-new-highlight)',
                closeButtonModal: 'cells-modal-slider cells-bottom-modal #closeButton',
                imageModalInfo: 'cells-modal-slider cells-bottom-modal cells-image-card div.card-media',
                imageModalInfoDescription: 'cells-modal-slider cells-bottom-modal cells-image-card div.card-body',
                listItemsInfoDescription: 'cells-modal-slider cells-bottom-modal cells-legend-graphics section.legend__container',
                sliderGroupTwo: 'cells-modal-slider #SliderGroup div > div.swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets > button[data-index= "1"]',
                sliderGroupThree: 'cells-modal-slider #SliderGroup div > div.swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets > button[data-index= "2"]',
                cellsModalButton: 'cells-modal-slider #bottomModal section div cells-st-button:not([hidden]) button'
            },
            requiredElements: [
                'header',
                'newConversationButton'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed();
                break;
            case 'back button':
                await this.backButton.waitForDisplayed();
                break;
            case 'new conversation button':
                await this.newConversationButton.waitForDisplayed();
                break;
            case 'info message':
                await this.header.faqsBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info button':
                await this.infoButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'search button':
                await this.searchButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'conversation history':
                await this.conversationHistory.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'first conversation with "draft" status':
                await this.firstConversationDraft.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'first conversation without "draft" status':
                await this.firstConversationNoDraft.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'close button modal':
                await this.closeButtonModal.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'image modal info':
                await this.imageModalInfo.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'image modal info description':
                await this.imageModalInfoDescription.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'list items info description':
                await this.listItemsInfoDescription.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async createNewConversation() {
        await this.newConversationButton.waitForDisplayed();
        await this.newConversationButton.click();
    }

    async accessSearchConversation() {
        await this.conversationHistory.waitForDisplayed({timeout: config.wait.L});
        await this.searchButton.waitForDisplayed();
        await this.searchButton.click();
    }

    async accessToConversation(conversationStatus) {
        switch (conversationStatus) {
            case 'resolved':
                await this.conversationHistory.waitForDisplayed({timeout: config.wait.L});
                await this.resolvedConversation.scrollIntoView();
                await this.resolvedConversation.waitForDisplayed();
                await this.resolvedConversation.click();
                break;
            case 'new':
                await this.conversationHistory.waitForDisplayed({timeout: config.wait.L});
                await this.newConversation.scrollIntoView();
                await this.newConversation.waitForDisplayed();
                await this.newConversation.click();
                break;
            case 'sent':
                await this.conversationHistory.waitForDisplayed({timeout: config.wait.L});
                await this.sentConversation.scrollIntoView();
                await this.sentConversation.waitForDisplayed();
                await this.sentConversation.click();
                break;
            case 'draft':
                await this.conversationHistory.waitForDisplayed({timeout: config.wait.L});
                await this.draftConversation.scrollIntoView();
                await this.draftConversation.waitForDisplayed();
                await this.draftConversation.click();
                break;
            default:
                throw new Error(`The conversation status: ${conversationStatus} is not implemented`);
        }
    }

    async openModalInfo() {
        await this.header.faqsBtn.waitForDisplayed({timeout: config.wait.L});
        await this.header.secondaryAction();
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
        await this.cellsModalButton.waitForDisplayed({timeout: config.wait.L});
        await this.cellsModalButton.click();
    }

    async retryOperative() {
        let i = 0;
        while (i < 1) {
            await this.dialogOperations.confirmDialog({expectToDisappear: false});
            i++;
        }
    }
}

export default new MyConversationMessagePage();
