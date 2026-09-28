import { When } from '@cucumber/cucumber';

// Utility requires
import * as navigation from '../../navigation';

import disabilityVideocallHearingTacticalPutAttention from '../../pages/disabilityVideocall/disabilityVideocallHearingTacticalPutAttention';
import disabilityVideocallHearingTacticalCalling from '../../pages/disabilityVideocall/disabilityVideocallHearingTacticalCalling';

// STEP DEFINITIONS

When(/^the user accesses to disability videocall$/, async function() {
    await navigation.disabilityVideocall.disabilityVideocall.go();
});

When(/^the user accesses to disability videocall put attention with "([^"]*)" status$/, async function(option) {
    await navigation.disabilityVideocall.disabilityVideocallPutAttention.go();
    switch (option.toLowerCase()) {
        case 'success network':
            await disabilityVideocallHearingTacticalPutAttention.successNetwork();
            break;
        case 'error network':
            await disabilityVideocallHearingTacticalPutAttention.errorNetwork();
            break;
        default:
            throw new Error(`${option}`);
    }
});

When(/^the user accesses the lobby the waiting time is over only for analytics$/, async function() {
    await navigation.disabilityVideocall.disabilityVideocallCalling.go('2000');
    await disabilityVideocallHearingTacticalCalling.waitForAnalytics();
});

When(/^the user accesses the lobby with a timeout of "([^"]*)" milliseconds$/, async function(timeout) {
    await navigation.disabilityVideocall.disabilityVideocallCalling.go(timeout);
});
