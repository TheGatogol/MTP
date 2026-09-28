import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import goalsMinor from '../../pages/goalsMinor/goalsMinor.js';

When(/^the user selects goals hiring card$/, async function() {
    await navigation.goalsMinor.goalsMinor.go({account: {number: global.user.principalAccount}});
});

When(/^the user starts goals minor hiring$/, async function() {
    await goalsMinor.confirmHomePage();
});

When(/^user wants to learn more about goals minor hiring$/, async function() {
    await goalsMinor.openKnoweMoreModal();
});

When(/^the user selects minior hiring card$/, async function() {
    await navigation.goalsMinor.goalsMinorAccount.go({offerId: global.user.offerId});
});

When(/^the user shows "([^"]*)"$/, async function(element) {
    await goalsMinor.goToMinorOption(element);
});

When(/^the user accesses to multistep$/, async function() {
    await goalsMinor.confirmHomePage();
    await goalsMinor.fillSavingGoalDetails(global.user.id);
});

When(/^the user accesses to goals minors hiring confirm page$/, async function() {
    await goalsMinor.confirmGoalsMinorHiring();
});

When(/^user has encountered an error( for the third time)?$/, async function(full) {
    await goalsMinor.confirmGoalsMinorHiring();
    await goalsMinor.retryConfirmation(full);
});

When(/^the user shows error hiring modal$/, async function() {
    await goalsMinor.confirmGoalsMinorHiring();
});

When(/^the user selects modifies then "([^"]*)"$/, async function(element) {
    await goalsMinor.editStep(element);
});
