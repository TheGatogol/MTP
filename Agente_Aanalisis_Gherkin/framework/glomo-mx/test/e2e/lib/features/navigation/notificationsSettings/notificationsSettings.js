import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import configureProducts from '../../pages/configureProducts/configureProducts';
import securityProfile from '../../pages/securityProfile/securityProfile';

// Page Objects IDs
const CONFIGURE_PRODUCTS = configureProducts.getId();
const SECURITY_PROFILE = securityProfile.getId();

class NotificationsSettings extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'notificationsSettings/notificationsSettings', parentNavigation: 'configureProducts/configureProducts'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CONFIGURE_PRODUCTS:
                await configureProducts.goNextPageFromConfigurationProducts('notifications');
                break;
            case SECURITY_PROFILE:
                await securityProfile.accessNotifications();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new NotificationsSettings();
