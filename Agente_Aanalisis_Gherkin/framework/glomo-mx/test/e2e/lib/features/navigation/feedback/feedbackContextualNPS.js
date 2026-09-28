import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import demoFeedbackPage from '../../pages/feedback/demoFeedback';
import chatAdvisor from '../../pages/inAppChat/inAppChat';

// Page Objects IDs
const DEMO = demoFeedbackPage.getId();
const CHATADVISOR = chatAdvisor.getId(); 

class FeedbackContextualNPS extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'feedback/feedbackContextualNPS', parentNavigation: 'feedback/demoFeedback'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DEMO:
                await demoFeedbackPage.accessDemoFeedbackTransferSuccess();
                break;
            case CHATADVISOR:
                await currentPage.finishChat();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FeedbackContextualNPS();
