import {When} from '@cucumber/cucumber';
import loansPaymentPledge from '../../pages/loansPaymentPledge/loansPaymentPledge';

import * as navigation from '../../navigation';

When(/^the user select date$/, async function() {
    await loansPaymentPledge.selectPaymentDate();
});

When(/^the user confirm date$/, async function() {
    await loansPaymentPledge.confirmPaymentDate();
});

When(/^the user navigate to loan payment$/, async function() {
    await navigation.loan.loanPayCredit.go();
});

When(/^the user select loan payment option$/, async function() {
    await loansPaymentPledge.openPaymentOption();
});

When(/^the user open offer option$/, async function() {
    await navigation.loansPaymentsPlans.ocPaymentPlanLoanError.go();
});

When(/^the user select loan payment option and retry$/, async function() {
    await loansPaymentPledge.openPaymentOption();
    await loansPaymentPledge.retryPaymentNavigation(3);
});

When(/^the user select payment pledge option$/, async function() {
    await loansPaymentPledge.openPaymentPledgeOption();
});

When(/^the user select loan payment option and select date radio$/, async function() {
    await loansPaymentPledge.selectPaymentPledgeAndDateRadio();
});
When(/^the user select loan payment pledge option and select date$/, async function() {
    await loansPaymentPledge.openPaymentPledgeOptionAndConfirmDate();
});

When(/^the user confirm amount$/, async function() {
    await loansPaymentPledge.confirmAmount();
});

When(/^the user confirm close multistep modal$/, async function() {
    await loansPaymentPledge.closeMultistep();
    await loansPaymentPledge.confirmExitMultistep();
});

When(/^the user close multistep modal$/, async function() {
    await loansPaymentPledge.closeMultistep();
});

When(/^the user tap close button but continue$/, async function() {
    await loansPaymentPledge.closeMultistep();
    await loansPaymentPledge.cancelExitMultistep();
});

When(/^the user fill promise data and confirm$/, async function() {
    await loansPaymentPledge.createPledge();
});

When(/^the user fill promise data with first date$/, async function() {
    await loansPaymentPledge.selectFirstDateAndConfirmMonthly();
});

When(/^the user fill promise data with last date and confirm$/, async function() {
    await loansPaymentPledge.selectLastDateAndCreateWithPayOff();
});

When(/^the user fill promise form with single date and confirm$/, async function() {
    await loansPaymentPledge.createSingleDatePledge();
});

When(/^the user fill promise form with other amount and confirm$/, async function() {
    await loansPaymentPledge.createOtherAmountPledge();
});

When(/^the user fill promise form with other amount modify and confirm$/, async function() {
    await loansPaymentPledge.createPledgeModifyingOtherAmount();
});

When(/^the user fill promise data confirm and retry$/, async function() {
    await loansPaymentPledge.cratePledgeAndRetry();
});

When(/^the user fill promise form with receipt amount and modify date$/, async function() {
    await loansPaymentPledge.createPledgeModifyingDate();
});

When(/^the user fill payment pledge form with "([^"]*)" option$/, async function(type) {
    await loansPaymentPledge.fillPaymentPledgeFormPaymentType(type);
});

When(/^the user fill amount step with "([^"]*)" other amount case$/, async function(amount) {
    await loansPaymentPledge.fillPaymentPledgeFormOtherAmount(amount);
});

When(/^the user change to pay off and create payment pledge$/, async function() {
    await loansPaymentPledge.changeAmountTo('payOff');
});

When(/^the user change to monthly and create payment pledge$/, async function() {
    await loansPaymentPledge.changeAmountTo('monthly');
});

When(/^the user change to other amount and create payment pledge$/, async function() {
    await loansPaymentPledge.changeAmountTo('otherAmount');
});

When(/^the user confirm payment pledge resume$/, async function() {
    await loansPaymentPledge.confirmPledgeCreation();
});
