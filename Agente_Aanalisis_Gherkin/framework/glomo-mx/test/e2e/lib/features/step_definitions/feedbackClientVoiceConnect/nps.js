import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import nps from '../../pages/feedbackClientVoiceConnect/nps';

When(/^the user open the nps data form$/, async function() {
    await navigation.nps.go();
});

When(/^the user rate app number "(\d+)"$/, async function(rate) {
    await nps.onRateNps(rate);
});

When(/^the user comment form$/, async function() {
    await nps.submitNps();
});

When(/^the user closes the NPS data form on the "([^"]*)" page$/, async function(screen) {
    await nps.closeOperative(screen);
});

When(/^the user closes the nps error page$/, async function() {
    await nps.closeErrorModal();
});
