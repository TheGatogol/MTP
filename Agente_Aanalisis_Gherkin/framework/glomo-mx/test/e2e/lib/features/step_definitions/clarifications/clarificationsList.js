import {When} from '@cucumber/cucumber';

// Utility requires
import * as navigation from '../../navigation';
import clarificationsListPage from '../../pages/clarifications/clarificationsList';

When(/^the user accesses to clarifications list$/, async function() {
    await navigation.clarifications.clarificationsList.go();
});

When(/^the user select clarification closed$/, async function() {
    await clarificationsListPage.clarificationsClosed();
});

When(/^the user select to one "([^"]*)" clarifications$/, async function(clarificationType) {
    await navigation.clarifications.clarificationsTracking.go(clarificationType);
});

