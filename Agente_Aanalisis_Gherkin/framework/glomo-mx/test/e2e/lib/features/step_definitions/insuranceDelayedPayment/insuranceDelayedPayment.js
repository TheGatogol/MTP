import {When} from '@cucumber/cucumber';
import delayedPayment from '../../pages/insuranceDelayedPayment/insuranceDelayedPayment.js';

When(/^the user accepts delayed payment onboarding$/, async function() {
    await delayedPayment.confirmOnBoarding();
});

When(/^the user selects "([^"]*)" payment type$/, async function(type) {
    await delayedPayment.selectPaymentType(type);
});

When(/^the user selects "([^"]*)" payment method$/, async function(method) {
    await delayedPayment.selectPaymentMethod(method);
});

When(/^the user "([^"]*)" a insurance payment$/, async function(authorize) {
    if (authorize==='confirms and authorize'){
        await delayedPayment.authorizePendingPayment();
    }
    await delayedPayment.confirmInsurancePayment();
});

When(/^the user comes back to dashboard$/, async function() {
    await delayedPayment.selectClosePayInsurance();
});

When(/^the user accesses all "([^"]*)" payment type$/, async function(type) {
    await delayedPayment.selectViewAllTdcButton(type);
});

When(/^the user selects a "([^"]*)" of "([^"]*)" in insurance delayed payment$/, async function(linkType, paymentType) {
    await delayedPayment.accessTermsAndConditionsInformation(linkType, paymentType);
});

When(/^the user retries operation of delayed payment$/, async function() {
    await delayedPayment.selectRetry();
});
