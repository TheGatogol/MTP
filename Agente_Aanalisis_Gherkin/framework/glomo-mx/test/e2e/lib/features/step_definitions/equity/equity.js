import {When, Then} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import equityDetailPage from '../../pages/equity/equityDetailPage';

When(/^the user accesses to equity$/, async function() {
    await navigation.equity.equity.go();
});

When(/^the user accesses to equity detail$/, async function() {
    await navigation.equity.equityDetail.go();
});

When(/^the user accesses to equity detail error$/, async function() {
    await navigation.equity.equityDetail.go({error: true});
});

When(/^the user accesses to equity transfer$/, async function() {
    await navigation.equity.equityTransfers.go();
});

When(/^the user accesses to assistance$/, async function() {
    await navigation.equity.equityAssistance.go();
});

When(/^the user accesses the information of the type of management service$/, async function (){
    await navigation.equity.equityDetail.go();
    await equityDetailPage.showManagementServiceModal();
});

When(/^the user accesses to equity fund detail$/, async function () {
    await navigation.equity.equityFundDetail.go();
});

Then(/^the user accesses the equity edit alias$/, async function () {
    await navigation.equity.equityEditAlias.go();
});
