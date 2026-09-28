import {Given, Then, When} from '@cucumber/cucumber';
import {Commands} from '@csqe/radish';

Then(/^the "([^"]*)" step is collapsed$/, async function(stepName) {
    await Commands.pause({time: config.wait.S});
    await currentPage.isCollapsed(stepName);
});

Then(/^the "([^"]*)" step is uncollapsed$/, async function(stepName) {
    await currentPage.isUncollapsed(stepName);
});

Given(/^the user goes to the "([^"]*)" step$/, async function(stepName) {
    await currentPage.goToStep(stepName);
});

Given(/^the user uncollapsed "([^"]*)" step$/, async function(step) {
    await currentPage.uncollapse(step);
});

Given(/^the "([^"]*)" step continue button is enabled$/, async function(step) {
    await currentPage.isStepContinueButtonEnabled(step);
});

Given(/^the step continue button is enabled$/, async function() {
    await currentPage.isStepContinueButtonEnabled();
});

Given(/^the step continue button is disabled$/, async function() {
    await currentPage.isStepContinueButtonDisabled();
});

Given(/^the "([^"]*)" step continue button is disabled$/, async function(step) {
    await currentPage.isStepContinueButtonDisabled(step);
});

Then(/^the user is redirected to the signing flow$/, async function() {
    await currentPage.isStepActive('otpStep');
});

Then(/^the user fills the otp correctly$/, async function() {
    await currentPage.fillsOtp('123456');
});

When(/^the user cancel exits from operative$/, async function() {
    await currentPage.cancelLeaveTheProcess();
});

When(/^the user confirms to leave the operative$/, async function() {
    await currentPage.confirmLeaveProcess();
});

When(/^the user leaves the process$/, async function() {
    await currentPage.leaveTheProcess();
});

When(/^the user exits the operative$/, async function() {
    await currentPage.exitFlow();
});

When(/^the user confirms simulation$/, async function() {
    await currentPage.confirmSimulation();
});

When(/^the user confirms the operative$/, async function() {
    await currentPage.finish();
});
