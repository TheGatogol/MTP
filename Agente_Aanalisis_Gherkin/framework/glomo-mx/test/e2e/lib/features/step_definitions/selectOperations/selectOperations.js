import {Then, When} from '@cucumber/cucumber';
// Utility requires
import * as navigation from '../../navigation';

// STEP DEFINITIONS

// Press international transfer button
Then(/^the user accesses to international transfers$/, async function() {
    await navigation.internationalTransfer.go();
});

When(/^the user accesses to "([^"]*)" operative from top up operationals$/, async function(operative) {
    switch (operative) {
        case 'gift cards':
            await navigation.blackhawk.blackhawkWelcome.go();
            break;
        case 'parking meters':
            await navigation.parkingMeters.parkingList.go();
            break;
        default:
            throw new Error(`Operative '${operative}' not found in top up list.`);
    }
});
