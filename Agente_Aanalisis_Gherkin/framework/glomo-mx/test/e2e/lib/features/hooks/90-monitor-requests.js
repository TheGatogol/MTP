import {Commands} from '@csqe/radish';
import {Before} from '@cucumber/cucumber';

/**
 * Initialize monitored requests
 */
Before(async function() {
    // Only enable request monitoring when we are running locally.
    if (Commands.flags.isWeb && Commands.flags.isPuppeteer && !Commands.flags.isRemote) {
        Commands.resetMonitoredRequests();
        await Commands.startMonitorRequests({
            requests: {
                response: [
                    '/scripts/lit/vendors-lit-components.js',
                    '/scripts/lit/vendors-lit-initial-components.js',
                ],
                requestfinished: [
                    '/scripts/lit/vendors-lit-components.js',
                    '/scripts/lit/vendors-lit-initial-components.js',
                ],
            },
        });
    }
});
