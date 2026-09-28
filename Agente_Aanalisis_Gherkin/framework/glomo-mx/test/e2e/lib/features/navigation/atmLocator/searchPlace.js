import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

// Pages
import atmLocatorPage from '../../pages/atmLocator/atmLocator';

// Page Objects IDs
const ATMLOCATOR = atmLocatorPage.getId();

class SearchPlace extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'atmLocator/searchPlace', parentNavigation: 'atmLocator/atmLocator'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ATMLOCATOR:
                await atmLocatorPage.access({functionality: 'searchPlace'});
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new SearchPlace();
