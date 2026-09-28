import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import btraderPage from '../../pages/btrader/btraderPage.js';

When(/^the user accesses to btrader(?: "(.*)")?$/, async function (type) {
    if (type === 'edit alias') {
        await navigation.btrader.btraderEditAlias.go();
    } else {
        await navigation.btrader.btrader.go();
    }
});

When(/^the user "([^"]*)" the balance information to invest$/, async function (action) {
    if (action === 'exit') {
        await btraderPage.exitBalanceInformationToInvest();
    } else if (action === 'accesses') {
        await btraderPage.showBalanceInformationToInvest();
    }
});

When(/^the user "([^"]*)" to order list and "([^"]*)" "([^"]*)"$/, async function (action, operation, valueOperation) {
    const editFilter = action === 'changes filter';

    if (action === 'accesses') {
        await btraderPage.accessOrderListBtrader();
    }

    switch (operation) {
        case 'filters':
        case 'close':
            await btraderPage.filterOrderList({action: operation, type: valueOperation, edit: editFilter});
            break;
        case 'select':
            await btraderPage.accessOrderDetail(valueOperation);
            break;
        default:
            break;
    }
});

When(/^the user select "([^"]*)" detail$/, async function (type) {
    await btraderPage.accessOrderDetail(type);
});

When(/^the user clean filter$/, async function () {
    await btraderPage.orderListFilterCancel();
});

When(/^the user close order list$/, async function () {
    await btraderPage.orderListBack();
});

When(/^the user consults a "([^"]*)" order$/, async function (type) {
    await btraderPage.orderListSelect(type);
});

When(/^the user opens the tooltip to "([^"]*)" titles$/, async function (type) {
    await btraderPage.openTooltipOrderDetail(type);
});

When(/^the user opens the "([^"]*)" detail$/, async function (product) {
    await btraderPage.accessInvestmentDetailBtrader(product);
});

When(/^user searches for "([^"]*)" stock "([^"]*)"$/, async function (issuer, action) {
    await btraderPage.searchIssuerStock(issuer, action);
});

When(/^the user opens the balance information to investment$/, async function () {
    await btraderPage.openBalanceToInvestmentModal();
});

When(/^the user returns to product detail$/, async function () {
    await navigation.btrader.btrader.go();
});

When(/^the user accesses to swipe operatives$/, async function () {
    await btraderPage.openSwipeAppleShare();
});

When(/^the user select "([^"]*)" option$/, async function (option) {
    await btraderPage.selectOperativeSwipe(option);
});

When(/^the user observes the information of the modal "([^"]*)"$/, async function (modal) {
    await btraderPage.showModalInformation(modal);
});

When(/^the user accesses to edit alias in btrader$/, async function () {
    await btraderPage.accessEditAliasBtrader();
});

When(/^the user accesses the order detail monitoring card$/, async function () {
    await btraderPage.orderDetailMonitoringCard();
});

When(/^the user exits the order detail$/, async function () {
    await btraderPage.orderDetailBack();
});

When(/^the user select "([^"]*)" operative in investment detail$/, async function (type) {
    await btraderPage.selectOperative(type);
});
