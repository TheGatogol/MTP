import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import ocTopCreditCardPage from '../../pages/ocTopCreditCard/ocTopCreditCard';

When(/^the user accesses to the credit card offer onboarding screen$/, async function() {
    await navigation.ocTopCreditCard.ocTopCreditCard.go();
});

When(/^the user accesses to the top credit card offer detail$/, async function() {
    await navigation.ocTopCreditCard.ocTopCreditCard.go();
    await ocTopCreditCardPage.acceptOnboarding();
});

When(/^the user swipes to onboarding "([^"]*)" screen$/, async function(slideNumber) {
    await ocTopCreditCardPage.swipeOnboarding(slideNumber);
});

When(/^the user deploys "([^"]*)" help modal$/, async function(tooltip) {
    await ocTopCreditCardPage.selectTooltip(tooltip);
});

When(/^the user accepts top credit card offer detail$/, async function() {
    await ocTopCreditCardPage.acceptsOfferDetail();
});

When(/^the user accepts his address information from top credit card offer$/, async function() {
    await ocTopCreditCardPage.acceptsAddressInformation();
});

When(/^the user accepts the summary from top credit card offer$/, async function() {
    await ocTopCreditCardPage.acceptsSummary(false);
});

When(/^the user request upgrade card from top credit card offer$/, async function() {
    await ocTopCreditCardPage.requestUpgradeCard();
});

When(/^the user "([^"]*)" address information$/, async function(show) {
    await ocTopCreditCardPage.showHideAddress(show);
});

When(/^the user accesses to the faqs list screen$/, async function() {
    await ocTopCreditCardPage.accessFaqs();
});

When(/^the user consults some question to faqs list from top credit card offer$/, async function() {
    await ocTopCreditCardPage.accessFaqQuestion();
});

When(/^the user consults document pdf to terms and conditions$/, async function() {
    await ocTopCreditCardPage.consultsDocumentPdf();
});

When(/^the user consults "([^"]*)" from summary screen$/, async function(step) {
    await ocTopCreditCardPage.consultsStep(step);
});

When(/^the user deploys the benefits modal from top credit card offer$/, async function() {
    await ocTopCreditCardPage.accessBenefits();
});

When(/^the user accesses "([^"]*)" element screen$/, async function(element) {
    await ocTopCreditCardPage.accessElementScreen(element);
});

When(/^the user goes to summary screen$/, async function() {
    await ocTopCreditCardPage.goToSummary();
});
