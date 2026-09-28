import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import chat from '../../pages/inAppChat/inAppChatWelcome';
import chatFeedback from '../../pages/feedback/feedbackContextualNPS';

// Page Objects IDs
const CHAT = chat.getId();
const CHATFEEDBACK = chatFeedback.getId();

class InAppChat extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'inAppChat/inAppChat', parentNavigation: 'inAppChat/inAppChatWelcome'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CHAT:
                await currentPage.continueChat();
                break;
            case CHATFEEDBACK:
                await currentPage.leavesFeedback();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new InAppChat();
