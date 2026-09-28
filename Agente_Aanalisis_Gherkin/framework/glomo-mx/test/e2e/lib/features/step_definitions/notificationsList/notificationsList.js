import { When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import notificationListPage from '../../pages/notificationsCenter/notificationsList';
import notificationListSearch from '../../pages/notificationsCenter/notificationListSearch';
import notificationListResultPage from '../../pages/notificationsCenter/notificationListResult';

When(/^the user accesses notifications list/, async function() {
    await navigation.notificationsList.notificationList.go();
});

When(/^the user accesses notifications list detail/, async function() {
    await notificationListPage.openNotificationDetail();
});

When(/^the user accesses the notification settings/, async function() {
    await notificationListPage.openNotificationSettings();
});

When(/^the user accesses access detail notification promotion/, async function() {
    await notificationListPage.showDetailPromotion();
});

When(/^the user accesses access detail notification alert/, async function() {
    await notificationListPage.showDetailAlert();
});

When(/^the user accesses access detail notification expense/, async function() {
    await notificationListPage.showDetailExpense();
});

When(/^the user accesses notification filter list/, async function() {
    await navigation.notificationsList.notificationListSearch.go();
});

When(/^the user accesses notification result list/, async function() {
    await navigation.notificationsList.notificationListResult.go();
});

When(/^the user removes a search filter from the notification result/, async function() {
    await notificationListResultPage.closeFilter();
});

When(/^the user removes all filters from the notification result/, async function() {
    await notificationListResultPage.closeAllFilters();
});

When(/^the user clears the filters of the checkboxes/, async function() {
    await notificationListSearch.selectCheckBox();
});
