import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import newsItemPage from '../../pages/sustainability/newsSection';

// Page Objects IDs
const NEWS = newsItemPage.getId();

class NewsItem extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'sustainability/newsItem', parentNavigation: 'sustainability/newsSection'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case NEWS:
                await newsItemPage.openFirstItem();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new NewsItem();
