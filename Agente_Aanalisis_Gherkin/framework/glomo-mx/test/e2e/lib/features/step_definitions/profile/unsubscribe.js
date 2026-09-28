import {When} from '@cucumber/cucumber';
import unsubscribePage from '../../pages/profile/unsubscribe';
import * as navigation from '../../navigation';

When(/^the user uses "([^"]*)" option$/, async function(page) {
    switch (page) {
        case 'sucursales':
            await unsubscribePage.clickAtmLocatorLink();
            break;
        case 'contact us':
            await unsubscribePage.clickPhoneCallLink();
            break;
        default:
            throw new Error(`The navigation from unsubscribe page to ${page} is not implemented`);
    }
});

When(/^the user accesses to unsubscribe$/, async function() {
    await navigation.unsubscribe.go();
});
