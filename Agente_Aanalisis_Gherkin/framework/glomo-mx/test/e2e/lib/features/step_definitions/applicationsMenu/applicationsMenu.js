import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

// STEP DEFINITIONS

When(/^the user access the "([^"]*)" screen$/, async function(page) {
    switch (page.toLowerCase()) {
        case 'login':
            await navigation.login.go();
            break;
        case 'dashboard':
            await navigation.dashboard.go();
            break;
        default:
            throw new Error(`The navigation assertion in page: ${page} is not implemented`);
    }
});

