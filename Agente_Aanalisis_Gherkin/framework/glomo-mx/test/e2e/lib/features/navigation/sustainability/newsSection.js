import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import sustainabilityPage from '../../pages/sustainability/sustainability';
import newsItem from '../../pages/sustainability/newsItem';

// Page Objects IDs
const SUSTAINABILITY = sustainabilityPage.getId();
const NEWS_ITEM= newsItem.getId();

class NewsDashboard extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'sustainability/newsSection', parentNavigation: 'sustainability/sustainability'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case SUSTAINABILITY:
                await sustainabilityPage.accessToNews();
                break;
            case NEWS_ITEM:
                await newsItem.goBack();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new NewsDashboard();
