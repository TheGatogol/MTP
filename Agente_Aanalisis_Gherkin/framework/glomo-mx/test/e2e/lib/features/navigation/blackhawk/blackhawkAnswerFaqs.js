import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import blackhawkFaqs from '../../pages/blackhawk/blackhawkFaqs';

// Page Objects IDs
const BLACKHAWK_FAQS = blackhawkFaqs.getId();

class BlackhawkAnswerFaqs extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'blackhawk/blackhawkAnswerFaqs', parentNavigation: 'blackhawk/blackhawkFaqs'});
    }

    async go_impl( {question} = {}) {
        switch (currentPage.getId()) {
            case BLACKHAWK_FAQS:
                await currentPage.goToQuestion(question);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new BlackhawkAnswerFaqs();
