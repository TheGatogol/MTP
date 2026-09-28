import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import configureProducts from '../../pages/configureProducts/configureProducts';

// Page Objects IDs
const CONFIGURE_PRODUCTS = configureProducts.getId();

class LanguageSettings extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'languageSettings/languageSettings', parentNavigation: 'configureProducts/configureProducts'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CONFIGURE_PRODUCTS:
                await configureProducts.goNextPageFromConfigurationProducts('language');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new LanguageSettings();
