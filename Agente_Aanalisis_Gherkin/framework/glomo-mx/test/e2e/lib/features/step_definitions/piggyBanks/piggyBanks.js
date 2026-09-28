import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import piggyBanks from '../../pages/piggyBanks/piggyBanks';

When(/^the user accesses to piggy banks$/, async function() {
    await navigation.piggyBanks.piggyBanks.go({account: {number: user.principalAccount}});
});

When(/^the user goes back to account detail$/, async function() {
    await navigation.account.productDetail.go();
});

When(/^the user stops at "([^"]*)" slide$/, async function(slide) {
    await piggyBanks.nextSlide(slide);
});

When(/^the user creates a piggy bank( with "([^"]*)" rule)?( "([^"]*)")?( then modifies "([^"]*)" step)?$/, async function(rule, frequency, step) {
    await piggyBanks.createPiggyBank(rule, frequency, step);
});

When(/^the user names its piggy bank$/, async function() {
    await piggyBanks.namePiggyBank(false);
});

When(/^the user sets amount to save$/, async function() {
    await piggyBanks.setPiggyBankAmount();
});

When(/^the user enables automatic contributions$/, async function() {
    await piggyBanks.addRule();
});

When(/^the user reviews its piggy bank( movements)?$/, async function(movement) {
    await piggyBanks.showPiggyBankDetails(movement);
});

When(/^the user accesses to its piggy bank general details$/, async function() {
    await piggyBanks.showGeneralDetails();
});

When(/^the user "([^"]*)" money to its piggy bank$/, async function(operation) {
    await piggyBanks.addRefundPiggyBank(operation);
});

When(/^the user adds an automatic contribution with "([^"]*)" frequency$/, async function(frequency) {
    await piggyBanks.addNewRule(frequency);
});

When(/^the user "([^"]*)" automatic contributions$/, async function(operation) {
    await piggyBanks.performRuleOperation(operation);
});

When(/^the user reviews its piggy banks dashboard$/, async function() {
    await piggyBanks.showPiggyBanksDashboard();
});

When(/^the user closes piggy banks onboarding$/, async function() {
    await piggyBanks.closeOnboarding();
});

When(/^the user tries to create an automatic contribution$/, async function() {
    await piggyBanks.enableAutomaticContributions();
});

When(/^the user confirms piggy bank creation$/, async function() {
    await piggyBanks.confirmCreation();
});

When(/^the user opens and closes piggy bank more operations$/, async function() {
    await piggyBanks.openCloseMoreOperations();
});

When(/^the user tries to edit its piggy bank name$/, async function() {
    await piggyBanks.editPiggyBankName();
});

When(/^the user deletes a piggy bank$/, async function() {
    await piggyBanks.deletePiggyBank();
});

When(/^the user filters its piggy banks "([^"]*)" result$/, async function(result) {
    await piggyBanks.filterPiggyBanks(result);
});

When(/^the user adds percentage rule to its piggy bank$/, async function() {
    await piggyBanks.addPercentageRule();
});

When(/^the user exits piggy bank creation mode "([^"]*)"$/, async function(operation) {
    await piggyBanks.exitsCreationPiggyBank(operation);
});

When(/^the user tries to exit the piggy bank creation process with "([^"]*)"$/, async function(operation) {
    await piggyBanks.remainCreation(operation);
});
