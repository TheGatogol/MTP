import {When, Then} from '@cucumber/cucumber';
import {Commands} from '@csqe/radish';
import * as navigation from '../../navigation';
import cardlessWithdrawal from '../../pages/cardlessWithdrawal/cardlessWithdrawal';
import cardlessWithdrawalReview from '../../pages/cardlessWithdrawal/cardlessWithdrawalReview';

When(/^the user select an amount$/, async function() {
    await currentPage.selectAmount();
});
When(/^the user enters a concept$/, async function() {
    await currentPage.entersConcept();
    await currentPage.confirmConcept();
});
When(/^the user continue with the withdrawal$/, async function() {
    await currentPage.continueWithOperation();
});
When(/^the user continue with the OTP modal$/, async function() {
    await navigation.cardlessWithdrawal.cardlessWithdrawalReview.go();
});
When(/^the user continues with the OTP modal for analytics$/, async function() {
    await navigation.cardlessWithdrawal.cardlessWithdrawalAnalytics.go();
});
Then(/^the user can't continue with the withdrawal and sees error modal$/, async function() {
    await currentPage.checkErrorModal();
});
When(/^the user introduces a concept "([^"]*)"$/, async function(concept) {
    switch (concept.toLowerCase()) {
        case 'concept':
            await currentPage.entersConcept();
            await currentPage.confirmConcept();
            break;
        case 'no concept':
            await currentPage.confirmConcept();
            break;
        default:
            throw new Error(`The navigation assertion in concept: ${concept} is not implemented`);
    }
});
Then(/^the user close modal$/, async function() {
    await cardlessWithdrawal.closeOnBoardingModal();
    await Commands.pause({time: config.wait.S});
});
When(/^the user exit cardless withdrawal screen$/, async function() {
    await cardlessWithdrawal.closeOption();
});
When(/^the user exits token screen$/, async function() {
    await cardlessWithdrawal.closeScreenOTP();
});
When(/^the user shows help section$/, async function() {
    await cardlessWithdrawalReview.showHelpModal();
});
When(/^the user exits the success screen "([^"]*)"$/, async function(option) {
    await cardlessWithdrawalReview.leaveProcess(option);
});
When(/^the user exits the summary screen$/, async function() {
    await cardlessWithdrawal.closeOption();
    await cardlessWithdrawal.closeScreenToken();
});
When(/^the user changes concept and amount to continue$/, async function() {
    await cardlessWithdrawal.changeConcept();
    await cardlessWithdrawal.confirmConcept();
    await cardlessWithdrawal.changeAmount();
    await cardlessWithdrawal.continueWithOperation();
});
When(/^the user selects an amount "([^"]*)"$/, async function(amount) {
    await cardlessWithdrawal.closeOnBoardingModal();
    await cardlessWithdrawal.selectAnAmount(amount);
});
When(/^the user enters other import$/, async function() {
    await cardlessWithdrawal.closeOnBoardingModal();
    await cardlessWithdrawal.entersOtherImport();
});
When(/^the user opens cardless withdrawal in commerce$/, async function() {
    await cardlessWithdrawal.closeOnBoardingModal();
    await cardlessWithdrawal.accessCommerce();
});
When(/^the user opens commerce information$/, async function() {
    await cardlessWithdrawalReview.accessCommerce();
});
When(/^the user selects account on cardless withdrawal screen$/, async function() {
    await navigation.card.digitalCardGenerate.go();
});
When(/^the user completes the process and accesses MTU Limit exceeded$/, async function() {
    await cardlessWithdrawal.closeOnBoardingModal();
    await cardlessWithdrawal.fillMultistep();
    await navigation.mtuLimits.mtuException.go();
});

When(/^the user completes the cardless withdrawal$/, async function() {
    await cardlessWithdrawal.closeOnBoardingModal();
    await cardlessWithdrawal.fillMultistep();
});

When(/^the user does not complete the cardless withdrawal due to a fraud error$/, async function() {
    await cardlessWithdrawal.closeOnBoardingModal();
    await cardlessWithdrawal.fillMultistep();
    await currentPage.fillOtp('12345678');
});

When(/^the user select account and import$/, async function() {
    await cardlessWithdrawal.closeOnBoardingModal();
    await cardlessWithdrawal.selectAccount();
    await cardlessWithdrawal.entersOtherImport();
});
