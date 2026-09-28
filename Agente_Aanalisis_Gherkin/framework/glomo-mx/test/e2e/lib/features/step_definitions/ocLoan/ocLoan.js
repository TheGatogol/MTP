import {When} from '@cucumber/cucumber';
import ocLoan from '../../pages/ocLoan/ocLoan.js';

When(/^the user accesses the details of the credit history authorization$/, async function() {
    await ocLoan.openCreditHistoryDetail();
});

When(/^the user accesses the details of the credit history authorization and then returns$/, async function() {
    await ocLoan.returnFromCreditHisotry();
});

When(/^the user with "([^"]*)" accepts the conditions$/, async function(user) {
    await ocLoan.acceptTermsAndConditions(user);
});

When(/^the user with "([^"]*)" continues with the contracting process$/, async function(user) {
    await ocLoan.continueToSummary(user);
});

When(/^the user with "([^"]*)" enters the otp$/, async function(user) {
    await ocLoan.enterOtp(user);
});

When(/^the user opens the credit history authorization$/, async function() {
    await ocLoan.openCreditHistoryAuthorization();
});

When(/^the user tries to enters the loan details again$/, async function() {
    await ocLoan.retryError();
});

When(/^the user confirms the contacting$/, async function() {
    await ocLoan.confirmContratcting();
});
