import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

import financeTransactionMultipurchase from '../../pages/financeTransactionMultipurchase/financeTransactionMultipurchase';

When(/^the user attempts to access to finance transaction multipurchase for the first time$/, async function() {
    await navigation.financeTransactionMultipurchase.financeTransactionMultipurchase.attempt();
});

When(/^the user accesses to finance transaction multipurchase$/, async function() {
    await navigation.financeTransactionMultipurchase.financeTransactionMultipurchase.go();
    await financeTransactionMultipurchase.acceptOnboarding();
});

When(/^the user accesses to finance transaction multipurchase and moves to slide "([^"]*)"$/, async function(sliderNumber) {
    await navigation.financeTransactionMultipurchase.financeTransactionMultipurchase.go();
    await financeTransactionMultipurchase.changeSliderOnboarding(sliderNumber);
});

When(/^the user selects "([^"]*)" transaction multipurchase$/, async function(purchaseNumber) {
    await financeTransactionMultipurchase.selectPurchase(purchaseNumber, false);
});

When(/^the user completes selection of "([^"]*)" transaction multipurchase$/, async function(purchaseNumber) {
    await financeTransactionMultipurchase.selectPurchase(purchaseNumber,  true);
});

When(/^the user selects "([^"]*)" purchases and "([^"]*)" months$/, async function(purchaseNumber, months) {
    await financeTransactionMultipurchase.selectPurchase(purchaseNumber, true);
    await financeTransactionMultipurchase.selectMonth(months);
});

When(/^the user completes finance transaction multipurchase process for "([^"]*)" months$/, async function(months) {
    await financeTransactionMultipurchase.selectPurchase(undefined, true);
    await financeTransactionMultipurchase.selectMonth(months);
    await financeTransactionMultipurchase.financeTransactionContinue();
});

When(/^the user selects finance transaction multipurchase process for "([^"]*)" months$/, async function(months) {
    await financeTransactionMultipurchase.selectPurchase(undefined, true);
    await financeTransactionMultipurchase.selectMonthWithoutContinue(months);
});

When(/^the user finishes finance transaction multipurchase process for "([^"]*)" months$/, async function(months) {
    await financeTransactionMultipurchase.selectMonth(months);
    await financeTransactionMultipurchase.financeTransactionContinue();
});

When(/^the user shows more transactions$/, async function() {
    await financeTransactionMultipurchase.showMoreTransactions();
});

When('the user shows more transactions and uploads all purchases', async function() {
    await financeTransactionMultipurchase.showMoreTransactions();
    await financeTransactionMultipurchase.uploadsAllPurchases();
});

When(/^the user retries "([^"]*)" more times to show more transactions$/, async function(times) {
    await financeTransactionMultipurchase.retryShowTransactions(times);
});

When(/^the user sees more transactions$/, async function() {
    await financeTransactionMultipurchase.assertMoreTransactionsLoaded();
});

When(/^the user edits selection finance transaction multipurchase$/, async function() {
    await financeTransactionMultipurchase.editTransactionMultipurchase();
});

When(/^the user edits selection of deferred months in "([^"]*)" months$/, async function(months) {
    await financeTransactionMultipurchase.editDeferredMonths(months);
});

When(/^the user consults the terms and conditions of summary$/, async function() {
    await financeTransactionMultipurchase.consultsFinanceTransaction();
});

When(/^the user opens "([^"]*)" tooltip$/, async function(tooltip) {
    await financeTransactionMultipurchase.openTooltip(tooltip);
});

When(/^the user confirms finance multipurchase simulation$/, async function() {
    await navigation.financeTransactionMultipurchase.multipurchaseReceipt.go();
});

When(/^the user attempts to confirm finance multipurchase simulation$/, async function() {
    await navigation.financeTransactionMultipurchase.multipurchaseReceipt.attempt();
});

When(/^the user accepts finance multipurchase simulation$/, async function() {
    await financeTransactionMultipurchase.confirmSimulation();
    await financeTransactionMultipurchase.otpSms();
});

When(/^the user retries "([^"]*)" more times with otp$/, async function(times) {
    await financeTransactionMultipurchase.retryModalOtp(times);
});

When(/^the user completes finance transaction simulation$/, async function() {
    await financeTransactionMultipurchase.selectPurchase(2,  true);
    await financeTransactionMultipurchase.selectMonth(3);
    await financeTransactionMultipurchase.financeTransactionContinue();
    await financeTransactionMultipurchase.confirmSimulation();
});

