import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import notificationsSettings from '../../pages/notificationsSettings/notificationsSettings';

// Page Object ID
const NOTIFICATIONS_SETTINGS = notificationsSettings.getId();

class NotificationsSettings extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'notificationsSettings/notificationsSettingsEdit', parentNavigation: 'notificationsSettings/notificationsSettings'});
    }

    async go_impl(type) {
        switch (currentPage.getId()) {
            case NOTIFICATIONS_SETTINGS:
                await notificationsSettings.navigateToEditConfiguration(type);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new NotificationsSettings();
