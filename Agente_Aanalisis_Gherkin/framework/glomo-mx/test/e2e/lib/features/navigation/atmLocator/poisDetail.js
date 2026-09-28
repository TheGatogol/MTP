import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

// Pages
import atmLocatorPage from '../../pages/atmLocator/atmLocator';

// Page Objects IDs
const ATMLOCATOR = atmLocatorPage.getId();

class PoisDetail extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'atmLocator/poisDetail', parentNavigation: 'atmLocator/atmLocator'});
    }

    async go_impl({atmType, navigateFrom} = {}) {
        switch (currentPage.getId()) {
            case ATMLOCATOR:
                await atmLocatorPage.access({functionality: 'poisDetail', atmType, navigateFrom});
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new PoisDetail();
