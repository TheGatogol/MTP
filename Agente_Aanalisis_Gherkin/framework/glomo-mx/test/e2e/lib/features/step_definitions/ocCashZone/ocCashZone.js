import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import ocCashZone from '../../pages/ocCashZone/ocCashZone';

When(/^the user accesses to card oc cash zone offer from "([^"]*)"$/, async function(entryPoint) {
    switch (entryPoint.toLowerCase()) {
        case 'dashboard':
            await navigation.dashboard.go();
            await navigation.ocCashZone.ocCashZone.go({forceLogin: true});
            break;
        case 'opportunities':
            await navigation.ocCashZone.ocCashZone.go();
            break;
        case 'sidebar':
            await navigation.sidebar.go({forceLogin: true});
            await navigation.ocCashZone.ocCashZone.go();
            break;
        default:
            throw new Error(`Not recognized option "${entryPoint}"`);
    }
});

When(/^the user accesses to the "([^"]*)" step of the oc cash zone offer$/, async function(step) {
    await ocCashZone.goToStep({step});
});

When(/^the user with multiple accounts accesses to the payment account step$/, async function() {
    await ocCashZone.goToStep({step: 'payment account', isMultipleAccounts: true});
});

When(/^the user selects one of their multiple accounts in the "([^"]*)" step$/, async function(step) {
    await ocCashZone.selectMultiplesAccounts(step);
});

When(/^the user changes the income account from the summary screen$/, async function() {
    await ocCashZone.changeAccountIncomeAccount();
});

When(/^the user unmask contact delivery address of oc cash zone offer$/, async function() {
    await ocCashZone.unmaskDeliveryAddressData();
});

When(/^the user confirms the contract$/, async function() {
    await ocCashZone.confirmOrder();
});

When(/^the user "([^"]*)" the "([^"]*)" from the dropdown menu$/, async function(action, listBox) {
    await ocCashZone.commercialCategorySection(action, listBox);
});

When(/^the user "([^"]*)" the "([^"]*)" accordions information$/, async function(action, section) {
    await ocCashZone.displayAccordionInformation(action, section);
});

When(/^the user closes the more info reader pop-up modal$/, async function() {
    await ocCashZone.goBackMoreInfoReader();
});

When(/^the user closes the all income accounts pop-up modal$/, async function() {
    await ocCashZone.goBackIncomeAccounts();
});

When(/^the user exits the oc cash zone offer screen$/, async function() {
    await ocCashZone.goBackCashZoneOffer();
});

When(/^the user unmask contact details data of oc cash zone offer$/, async function() {
    await ocCashZone.unmaskContactDetailsData();
});

When(/^the user exits the order data oc cash zone offer$/, async function() {
    await ocCashZone.exitOrderData();
});

When(/^the user "([^"]*)" all the terms and conditions of the contract$/, async function(action) {
    await ocCashZone.termsAndConditionsAction(action);
});

When(/^the user "([^"]*)" another delivery address$/, async function(action) {
    await ocCashZone.deliveryAddressAction(action);
});

When(/^the user confirm token$/, async function() {
    await ocCashZone.fillOtp('96226392');
});

When(/^the user selects the without card reader option and continues to summary$/, async function() {
    await ocCashZone.selectWithoutCardReaderAndGoToSummary();
});

When(/^the user changes the card reader option to without reader and continues to summary$/, async function() {
    await ocCashZone.changeCardReaderAndGoToSummary();
});

When(/^the user accepts the contract and finalizes the contracting of the offer$/, async function() {
    await ocCashZone.confirmOrder();
});
