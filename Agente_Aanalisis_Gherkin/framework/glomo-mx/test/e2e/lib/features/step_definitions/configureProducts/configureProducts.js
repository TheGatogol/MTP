import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import showAndHideProducts from '../../pages/configureProducts/showAndHideProducts';

When(/^the user accesses to show and hide product screen$/, async function() {
    await navigation.configureProducts.showAndHideProducts.go();
    await showAndHideProducts.closeModalFirstTime();
});

When(/^the user accesses to show and hide product section$/, async function() {
    await navigation.dashboard.go();
    await navigation.configureProducts.configureProducts.go();
    await navigation.configureProducts.showAndHideProducts.go();
    await showAndHideProducts.closeModalFirstTime();
});
When(/^the user accesses to help modal$/, async function() {
    await showAndHideProducts.goToHelpSection();
});

When(/^the user deactivates the card category$/, async function() {
    await showAndHideProducts.turnoffcategorycard();
});
When(/^the user deactivates a savings account product$/, async function() {
    await showAndHideProducts.turnoffsavingsaccountproduct();
});
When(/^the user active the card category$/, async function() {
    await showAndHideProducts.turnontheCardcategory();
});
When(/^the user activates a savings account product$/, async function() {
    await showAndHideProducts.turnonthesavingsAccountproduct();
});
When(/^the user shutdown of several products in a category$/, async function() {
    await showAndHideProducts.shutdownseveralProductsCategory();
});
When(/^the user cancels a single patrimonial contract$/, async function() {
    await showAndHideProducts.cancelssinglePatrimonialContract();
});
When(/^the user turns off all the patrimonial contract category$/, async function() {
    await showAndHideProducts.turnsOffallthePatrimonialContractcategory();
});
When( /^the user accesses to notifications option in configure products/, async function () {
    await navigation.notificationsSettings.notificationsSettings.go();
});
When( /^the user accesses to income limits option in configure products/, async function () {
    await navigation.incomeLimits.incomeLimits.go();
});
When( /^the user accesses to language settings option in configure products/, async function () {
    await navigation.languageSettings.languageSettings.go();
});
