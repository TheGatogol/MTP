import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import configureProducts from '../../../pages/configureProducts/configureProducts';

// Page Objects IDs
const CONFIGURE_PRODUCTS = configureProducts.getId();
class ConfigureProducts extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'configureProducts/showAndHideProducts', parentNavigation: 'configureProducts'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CONFIGURE_PRODUCTS:
                await configureProducts.goNextPage();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ConfigureProducts();
