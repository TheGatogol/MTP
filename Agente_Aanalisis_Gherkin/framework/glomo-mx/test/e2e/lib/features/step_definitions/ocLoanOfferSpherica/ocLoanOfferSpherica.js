import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import ocLoanOfferSpherica from '../../pages/ocLoanOffer/ocLoanOfferSpherica';
import dashboard from '../../pages/dashboard/dashboard';

When(/^the user accesses to continue process operative "([^"]*)"$/, async function(operative) {
    await navigation.ocLoanOffer.ocLoanOfferSpherica.go(operative);
});

When (/^the user close page simulator$/, async function() {
    await navigation.ocLoanOffer.ocLoanOfferSpherica.go();
});

When(/^the user navigates to the oc loan offer$/, async function () {
    await dashboard.scrollToOffer();
});

When(/^the user next "([^"]*)" step$/, async function(selector) {
    await ocLoanOfferSpherica.nextStep(selector);
});

When(/^the user confirms the token signature oc loan$/, async function() {
    await ocLoanOfferSpherica.fillOtp('11111111');
});

When(/^the user performs the action "([^"]*)"$/, async function(action) {
    await ocLoanOfferSpherica.handleActions(action);
});

When(/^the user exits the "([^"]*)" step$/, async function(flow) {
    await ocLoanOfferSpherica.exitStep(flow);
});
