import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

import welcomeUserDistribution from '../../pages/welcome/welcomeUserDistribution';

When('the user is in the Welcome User Distribution', async function() {
    await navigation.welcomeUserDistribution.go();
});

When('the user selects the {string} option', async function(option) {
    switch (option.toLowerCase()) {
        case 'entrar':
            await navigation.landingPublic.go();
            break;
        case 'hazte cliente':
            await welcomeUserDistribution.accessOnBoarding();
            break;
        default:
            throw new Error(`${option} welcome option is not available to navigate to...`);
    }
});
