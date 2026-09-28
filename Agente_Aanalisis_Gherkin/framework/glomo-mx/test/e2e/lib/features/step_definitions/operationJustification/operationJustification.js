import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import notificationsCenter from '../../pages/notificationsCenter/notificationsCenter';

When(/^the user accesses to In App operations information$/, async function() {
    await navigation.dashboard.go();
    await navigation.landing.go({resetApp: true});
    await navigation.fido.fido.go();
    await navigation.landing.go({resetApp: true});
    await navigation.inAppCrmAdvancedPage.inAppCrmAdvancedPage.go();
});

When(/^the user open a operations information notification/, async function() {
    await notificationsCenter.detailJustification(user.notifications.notifictationId);
});

When(/^the user access a operations information notification/, async function() {
    await navigation.operationJustification.operationJustification.go();
});
