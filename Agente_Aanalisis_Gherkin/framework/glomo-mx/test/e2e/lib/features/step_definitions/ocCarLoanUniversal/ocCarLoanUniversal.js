import { When } from '@cucumber/cucumber';
import ocCarLoanUniversalPage from '../../pages/ocCarLoanUniversal/ocCarLoanUniversal';

When(/^the user select a old car to simulate and continues$/, async function () {
    await ocCarLoanUniversalPage.selectOldCarContinue();
});

When(/^the user accesses to the simulation car step$/, async function() {
    await ocCarLoanUniversalPage.enterSimulationStep();
});

When(/^the user enters other car price$/, async function () {
    await ocCarLoanUniversalPage.enterCarPrice();
});

When(/^the user enters other hitch price$/, async function () {
    await ocCarLoanUniversalPage.enterCarHitch('carHitch');
});

When(/^the user changes the range of months$/, async function () {
    await ocCarLoanUniversalPage.changeTermCar();
});

When(/^the user selects a tooltip "([^"]*)" modal$/, async function(step) {
    await ocCarLoanUniversalPage.selectTypeModal(step);
});

When(/^the user selects a widget "([^"]*)"$/, async function(step) {
    await ocCarLoanUniversalPage.selectWidget(step);
});

When(/^the user changes a "([^"]*)"$/, async function(step) {
    await ocCarLoanUniversalPage.enterCarHitch(step);
});

When (/^the user selects a modal "([^"]*)"$/, async function(step) {
    await ocCarLoanUniversalPage.selectedCheckBox(step);
});

When (/^the user accesses to accepted privacy terms$/, async function() {
    await ocCarLoanUniversalPage.continueFromTermsAndConditions();
});

When (/^the user accesses to summary steps$/, async function() {
    await ocCarLoanUniversalPage.continueFromTermsAndConditions();
});

When (/^the user with offer npa accesses to summary step$/, async function() {
    await ocCarLoanUniversalPage.checkReceivedAdviceInTerms(false);
});

When(/^the user selected not received advice$/, async function () {
    await ocCarLoanUniversalPage.completePersonalData();
});

When(/^the user continue to personal data$/, async function () {
    await ocCarLoanUniversalPage.viewPersonalData();
});

When(/^the user selected yes received advice$/, async function () {
    await ocCarLoanUniversalPage.checkReceivedAdvice();
});

When(/^the user selected yes received advice and continue to terms and conditions$/, async function () {
    await ocCarLoanUniversalPage.checkReceivedAdviceInTerms(true);
});

When (/^the user accesses to success simulation step$/, async function () {
    await ocCarLoanUniversalPage.generateSimulation();
});

When (/^the user accesses to success simulation step with error$/, async function () {
    await ocCarLoanUniversalPage.generateSimulationWithError();
});

When (/^the user accesses to otp step$/, async function () {
    await ocCarLoanUniversalPage.acceptSummaryContract();
});

When (/^retry modal request$/, async function () {
    await ocCarLoanUniversalPage.retryModalFullWarning();
});

When (/^the user back to simulation$/, async function () {
    await ocCarLoanUniversalPage.backToSimulation();
});
