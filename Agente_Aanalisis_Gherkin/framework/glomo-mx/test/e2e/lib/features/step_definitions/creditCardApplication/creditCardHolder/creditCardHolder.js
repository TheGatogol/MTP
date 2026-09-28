import { When } from '@cucumber/cucumber';
import * as navigation from '../../../navigation';
import creditCardHolder from '../../../pages/creditCardApplication/creditCardHolder/creditCardHolder';
import creditCardHolderOld from '../../../pages/creditCardApplication/creditCardHolder/creditCardHolderOld';
import contractProductSection from '../../../pages/contractProductSection/contractProductSection';
import dashboardPage from '../../../pages/dashboard/dashboard';

When(/^the user navigates to the offer section$/, async function () {
    await dashboardPage.scrollToOffer();
});

When (/^the user navigates to the offers and opportunities section$/, async function() {
    await contractProductSection.selectMainBanner();
});

When(/^the user navigates to the "([^"]*)" section$/, async function (feature) {
    const config = {
        'credit card holder': { page: 'credit-card-holder', navKey: 'creditCardHolder' },
        'non preapproved credit card': { page: 'non-preapproved-credit-card', navKey: 'creditCardHolder' },
        'credit card holder old': { page: 'credit-card-holder', navKey: 'creditCardHolderOld' },
    }[feature.toLowerCase()];

    await navigation.creditCardApplication.creditCardHolder[config.navKey].go({ section: config.page });
});

When(/^the user performs "([^"]*)" with "([^"]*)"$/, async function (item, caseName) {
    await creditCardHolder.performAction(item, caseName);
});

When(/^the user makes a change in the offer information section$/, async function () {
    await creditCardHolder.setModalAmountAndConfirm(150000);
});

When(/^the user exits the credit card holder section from "([^"]*)"$/, async function (from) {
    await creditCardHolder.leaveFlow(from);
});

When(/^the user continues from the offer page without benefits to "([^"]*)"$/, async function (from) {
    await creditCardHolder.performAction(from, 'normal', false);
});

When(/^the user remains in the credit card holder section$/, async function () {
    await creditCardHolder.remain();
});

When(/^the user enters the OTP in the credit card holder section$/, async function () {
    await creditCardHolder.fillOtp('11111111');
});

When (/^the user continues from the RFC$/, async function() {
    await creditCardHolder.retryRfcError();
});

When (/^the user request card from credit card offer screen$/, async function() {
    await creditCardHolderOld.doRequestCard();
    await navigation.creditCardApplication.creditCardHolder.creditCardHolderOldSuccess.go();
});

When (/^the user accesses to the payment date selector$/, async function() {
    await creditCardHolderOld.openPaymentDateSelector();
});
