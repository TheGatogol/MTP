import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import notificationsSettings from '../../pages/notificationsSettings/notificationsSettings';

// Page Object IDs
const NOTIFICATIONS_SETTINGS = notificationsSettings.getId();

class CreditCardPaymentReminderSettings extends AbstractGlomoNavigation {
    constructor() {
        super({
            page: 'creditCardPaymentReminderSettings/creditCardPaymentReminderSettings',
            parentNavigation: 'notificationsSettings/notificationsSettings'
        });
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case NOTIFICATIONS_SETTINGS:
                await notificationsSettings.openRecordatorio();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CreditCardPaymentReminderSettings();
