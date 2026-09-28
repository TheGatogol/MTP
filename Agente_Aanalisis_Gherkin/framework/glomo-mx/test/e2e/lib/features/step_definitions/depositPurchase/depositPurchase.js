import {When} from '@cucumber/cucumber';
import {Commands} from '@csqe/radish';
import * as navigation from '../../navigation';
import depositPurchasePage from '../../pages/depositPurchase/depositPurchase.js';

When(/^the user accesses to purchase deposit "([^"]*)"$/, async function(account) {
    await navigation.depositPurchase.deposit.go(account);
    await Commands.wait({time: config.wait.S});
    await navigation.depositPurchase.depositPurchase.go();
});

When(/^the user accesses to screen help gat$/, async function() {
    await depositPurchasePage.helpSimulateInfo();
});

When(/^the user select simulate continue$/, async function() {
    await depositPurchasePage.continueSimulate();
});

When(/^the user select simulate new continue$/, async function() {
    await depositPurchasePage.continueSimulateForOtp();
});

When(/^the user accesses to screen help instruction$/, async function() {
    await depositPurchasePage.helpRadioInfo();
});

When(/^the user select renovation$/, async function() {
    await depositPurchasePage.continueInstruction();
});

When(/^the user confirms otp code$/, async function() {
    await navigation.depositPurchase.depositPurchaseReview.go();
});

When(/^the user continues without otp$/, async function() {
    await depositPurchasePage.continueWithoutOtp();
});

When(/^the user accesses to the help modals$/, async function() {
    await depositPurchasePage.accessesToInstructionModal();
});
