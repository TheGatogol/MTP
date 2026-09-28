import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import helpSearchDetailPage from '../../pages/helpSearch/helpSearch';

// Page Objects IDs
const HELP_SEARCH = helpSearchDetailPage.getId();

class HelpSearchDetail extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'helpSearch/helpSearchDetail', parentNavigation: 'helpSearch'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case HELP_SEARCH:
                await helpSearchDetailPage.accessFaq();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new HelpSearchDetail();
