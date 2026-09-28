import {Before} from '@cucumber/cucumber';
import GlomoDevice from '../devices/glomo-device';

/**
 * Register the {@link GlomoDevice} instance
 * @see {@link GlomoDevice}
 */
Before(async function() {
    if (global.scenario.pickle.tags.some(t => t.name === '@analytics')) {
        global.glomoDevice = new GlomoDevice();
    }
});
