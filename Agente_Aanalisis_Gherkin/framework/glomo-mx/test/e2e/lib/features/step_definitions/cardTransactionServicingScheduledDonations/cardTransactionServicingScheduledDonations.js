import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import cardTransactionServicingScheduledDonations from '../../pages/cardTransactionServicingScheduledDonations/cardTransactionServicingScheduledDonations';

When(/^the user accesses to the card transaction servicing scheduled donations offer detail$/, async function() {
    await navigation.cardTransactionServicingScheduledDonations.cardTransactionServicingScheduledDonations.go({id: global.user.productId});
});

When(/^the user accesses to the step of the card transaction servicing scheduled donations offer$/, async function() {
    await cardTransactionServicingScheduledDonations.sectionSteps();
});

When(/^the user accesses to modify account section$/, async function() {
    await cardTransactionServicingScheduledDonations.showAccounts();
});

When(/^the user completes the steps until confirmation$/, async function() {
    await cardTransactionServicingScheduledDonations.sectionSteps();
    await cardTransactionServicingScheduledDonations.continueAmountStep();
});

When(/^the user select one hundred on amount step$/, async function() {
    await cardTransactionServicingScheduledDonations.hundredAmount();
});

When(/^the user writes a card transaction amount$/, async function() {
    await cardTransactionServicingScheduledDonations.typeAmount({amount: global.user.otherAmount});
});

When(/^the user continue and edit amount step$/, async function() {
    await cardTransactionServicingScheduledDonations.continueAmountStep();
    await cardTransactionServicingScheduledDonations.editAmountStep();
});

When(/^the user exit from card transaction onboarding$/, async function() {
    await cardTransactionServicingScheduledDonations.exitOnboarding();
});

When(/^the user "([^"]*)" from card transaction offer$/, async function(action) {
    await cardTransactionServicingScheduledDonations.exitOrContinueOffer(action);
});

When(/^the user confirm transaction on step$/, async function() {
    await cardTransactionServicingScheduledDonations.confirmTransaction();
});

When(/^the user confirm amount on step$/, async function() {
    await cardTransactionServicingScheduledDonations.continueAmountStep();
});

When(/^the user confirm transaction$/, async function() {
    await cardTransactionServicingScheduledDonations.clickConfirmButton();
});

When(/^the user "([^"]*)" on card transaction$/, async function(buttonClick) {
    await cardTransactionServicingScheduledDonations.editOrigin(buttonClick);
});

When(/^the user changes origin amount$/, async function() {
    await cardTransactionServicingScheduledDonations.changeOrigin();
});
