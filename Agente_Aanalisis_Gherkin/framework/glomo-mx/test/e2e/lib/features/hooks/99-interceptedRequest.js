import {Before} from '@cucumber/cucumber';

/**
 * Delete the object interceptedRequest
 */
Before(async function() {
    global.interceptedRequest = {};
});
