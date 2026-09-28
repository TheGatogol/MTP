import {When} from '@cucumber/cucumber';
import nCreditLineIncrease from '../../pages/nCreditLineIncrease/nCreditLineIncrease';
import notificationsCenter from '../../pages/notificationsCenter/notificationsCenter';
import * as navigation from '../../navigation';

When(/^the user enters accordions "([^"]*)"$/, async function(option) {
    await nCreditLineIncrease.openAccordion(option);
});

When(/^the user accesses offer card dashboard "([^"]*)"$/, async function(option) {
    await navigation.increment.increment.go({ option });
});

When(/^the user goes to increment review page$/, async function() {
    await navigation.incrementReview.incrementReview.go();
});

When(/^the user open credit line notification credit line increase$/, async function() {
    await notificationsCenter.notificationSelect(user.notifications.notifictationId);
});

When(/^the user goes to nCreditLineIncrease page$/, async function() {
    await navigation.nCreditLineIncrease.nCreditLineIncrease.go();
});
