import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import configureProducts from '../../pages/configureProducts/configureProducts';

// Page Objects IDs
const CONFIGURE_PRODUCTS = configureProducts.getId();

class IncomeLimits extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'incomeLimits/incomeLimits', parentNavigation: 'configureProducts/configureProducts'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CONFIGURE_PRODUCTS:
                await configureProducts.goNextPageFromConfigurationProducts('income limits');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new IncomeLimits();
