import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

//Components
import CellsMoleculeHeader from '../../components/cells-molecule-header';

@page()
class MyConversationSearchPage extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-myConversationSearchPage[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                backButton: 'cells-molecule-header #btnLeft',
                searchInput: 'cells-search-autocomplete #input #input-1 input',
                conversationFounded: 'glomo-conversation-list',
                conversationSearch: 'glomo-conversation-list div.conversation:not(.conversation-status-new-highlight)',
            },
            requiredElements: [
                'header'
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
            case 'conversation founded':
                await this.conversationFounded.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async searchConversation(subject) {
        await this.searchInput.waitForDisplayed({timeout: config.wait.M});
        await this.searchInput.setValue({value: subject});
    }

    async selectConvesation() {
        await this.conversationSearch.waitForDisplayed({timeout: config.wait.L});
        await this.conversationSearch.click();
    }
}

export default new MyConversationSearchPage();
