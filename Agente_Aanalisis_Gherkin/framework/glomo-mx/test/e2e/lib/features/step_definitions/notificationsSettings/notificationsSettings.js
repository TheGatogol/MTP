import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

When(/^the user accesses the list of "([^"]*)" that can be configured notifications$/, async function(type) {
    await navigation.notificationsSettings.notificationsSettingsEdit.go(type);
});

When(/^the user opens screen to modify amounts$/, async function() {
    await currentPage.openEditAmounts();
});

When(/^the user saves new notification settings$/, async function() {
    await currentPage.modifyAmounts();
});

When(/^the user try accesses the list of "([^"]*)"$/, async function(type) {
    await currentPage.openNotificationSettingsOf(type);
});

When(/^the user view modal help$/, async function() {
    await currentPage.openHelpModal();
});
