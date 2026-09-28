import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation/index.js';
import btraderPurchaseAndSellPage from '../../pages/btrader/btraderPurchaseAndSellPage.js';

When(/^the user returns to "([^"]*)" when "([^"]*)"/, async function (page, action) {
    await navigation.btrader.btrader.go({page, action});
});

When(/^the user cancel order and "([^"]*)" cancellation$/, async function (action) {
    await navigation.btrader.btraderPurchaseAndSell.go('cancel');
    if (action === 'confirm') {
        await btraderPurchaseAndSellPage.cancelModalAction('confirm');
    }
});

When(/^the user "([^"]*)" the cancel order$/, async function (action) {
    await btraderPurchaseAndSellPage.cancelModalAction(action);
});

When(/^the user select an "([^"]*)" issuer and "([^"]*)" a "([^"]*)" share$/, async function (issuer, action, type) {
    await navigation.btrader.btraderPurchaseAndSell.go(action, issuer);
    await btraderPurchaseAndSellPage.createOrderType(type, action);
});

When(/^the user create "([^"]*)" order sell$/, async function (type) {
    await btraderPurchaseAndSellPage.createOrderType(type, 'sell');
});

When(/^the user select an "([^"]*)" issuer and "([^"]*)"$/, async function (issuer, action) {
    await navigation.btrader.btraderPurchaseAndSell.go(action, issuer);
});

When(/^the user tries to buy "([^"]*)" titles at "([^"]*)" of "([^"]*)" shares and "([^"]*)"$/, async function (quantity, price, type, action) {
    await btraderPurchaseAndSellPage.purchaseShare(quantity, price, type, action);
});

When(/^the user exits the operation and returns$/, async function () {
    await btraderPurchaseAndSellPage.exitAndResume();
});

When(/^the user observes the information to "([^"]*)"$/, async function (infoModal) {
    await btraderPurchaseAndSellPage.showInfoModal(infoModal);
});

When(/^the user "([^"]*)" out the purchase information and modifies the "([^"]*)"$/, async function (fill, step) {
    await btraderPurchaseAndSellPage.modifyStep(step, fill);
});

When(/^the user enters an amount "([^"]*)"$/, async function (range) {
    await btraderPurchaseAndSellPage.fillDataWithRange(range);
});

When(/^the user enters a target price "([^"]*)" than the range$/, async function (target) {
    await btraderPurchaseAndSellPage.fillDataWithTargetPrice(target);
});

When(/^the user tries to sell "([^"]*)" titles at "([^"]*)" and "([^"]*)"$/, async function (quantity, price, action) {
    await btraderPurchaseAndSellPage.sellShare(quantity, price, action);
});

When(/^the user changes date$/, async function () {
    await btraderPurchaseAndSellPage.changeDate();
});
