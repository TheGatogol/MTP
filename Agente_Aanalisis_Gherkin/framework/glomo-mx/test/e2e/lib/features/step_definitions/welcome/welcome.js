import {When} from '@cucumber/cucumber';
// Utility requires
import * as navigation from '../../navigation';

// STEP DEFINITIONS
When(/^the user is in the Welcome screen$/, async function() {
    return navigation.welcome.access.go();
});

When(/^the user access the Login Screen$/, async function() {
    return navigation.login.go();
});
