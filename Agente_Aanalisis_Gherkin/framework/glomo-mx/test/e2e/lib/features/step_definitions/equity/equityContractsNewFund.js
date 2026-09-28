import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import equityNewFundPage from '../../pages/equity/equityContractsNewFund';

When(/^the user accesses to equity new fund contract$/, async function() {
    await navigation.equity.equityNewFund.go();
    await equityNewFundPage.waitForFullyLoaded();
});

When(/^the user selects the "([^"]*)" fund category$/, async function(selector) {
    await equityNewFundPage.selectFundCategory({selector});
});

When(/^the user selects the "([^"]*)" investment fund$/, async function(selector) {
    await equityNewFundPage.selectInvestmentFund({selector});
});

When(/^the user goes to the "([^"]*)" fund filter category$/, async function(selector) {
    await equityNewFundPage.selectCategoryFilter({selector});
});

When(/^the user selects the "([^"]*)" liquidity filter$/, async function(selector) {
    await equityNewFundPage.selectLiquidityFilter({selector});
});

When(/^the user search for the "([^"]*)" fund$/, async function(selector) {
    await equityNewFundPage.searchInvestmentFund({selector});
});

When(/^the user closes the "([^"]*)" modal$/, async function(selector) {
    await equityNewFundPage.closeModal({selector});
});

When(/^the user accesses to view all funds$/, async function() {
    await equityNewFundPage.selectViewAllFunds();
});

When(/^the user selects the new fund with the "([^"]*)" id$/, async function(selector) {
    await equityNewFundPage.selectNewFund({selector});
});

When(/^the user confirms an amount to invest$/, async function() {
    await equityNewFundPage.enterAmount();
});

When(/^the user accesses to the fund performance and detail modal$/, async function() {
    await equityNewFundPage.openFundDetailModal();
});

When(/^the user modifies the completed "([^"]*)" step$/, async function(selector) {
    await equityNewFundPage.openStep(selector);
});

When(/^the user confirms the new fund purchase$/, async function() {
    await equityNewFundPage.confirmPurchase();
});

When(/^the user accesses to the fund description modal$/, async function() {
    await equityNewFundPage.openFundDescriptionModal();
});

When(/^the user accesses to the investment amount modal$/, async function() {
    await equityNewFundPage.openInvestAmountModal();
});

When(/^the user opens the DICI document$/, async function() {
    await equityNewFundPage.openDiciDocument();
});

When(/^the user accesses to the privacy notice modal$/, async function() {
    await equityNewFundPage.openPrivacyModal();
});

When(/^the user selects the debt fund tab category$/, async function() {
    await equityNewFundPage.selectDebtCategory();
});

When(/^the user retries the fund operation modal$/, async function() {
    await equityNewFundPage.retryOperation();
});
