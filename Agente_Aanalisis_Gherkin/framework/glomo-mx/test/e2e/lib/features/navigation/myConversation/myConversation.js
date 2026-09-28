import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import assistanceSectionPage from '../../pages/assistanceSection/assistanceSection';
import myConversationChat from '../../pages/myTalks/myConversationChat';

// Page Objects IDs
const ASSISTANCE = assistanceSectionPage.getId();
const MY_CONVERSATION_CHAT = myConversationChat.getId();

class MyConversation extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'myConversation/myConversation', parentNavigation: 'assistanceSection'});
    }

    async go_impl({segment} = {}) {
        switch (currentPage.getId()) {
            case ASSISTANCE:
                await assistanceSectionPage.intoContact(segment);
                break;
            case MY_CONVERSATION_CHAT:
                await myConversationChat.backToMessagePage();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new MyConversation();
