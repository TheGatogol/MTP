import { When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import followUpInvestmentsGlobalFinancialPage from '../../pages/followUpInvestmentsGlobalFinancial/followUpInvestmentsGlobalFinancial';

When(/^the user accesses to dashboard in patrimonial$/, async function () {
    await followUpInvestmentsGlobalFinancialPage.accessDashboard();
});

When(/^the user accesses the patrimonial balance page$/, async function () {
    await navigation.followUpInvestmentsGlobalFinancial.followUpInvestmentsGlobalFinancial.go();
});

When(/^the user access account consolidation$/, async function () {
    await followUpInvestmentsGlobalFinancialPage.viewsConsolidatedAccounts();
});

When(/^the user select the evolution period on consolidated tab$/, async function () {
    await followUpInvestmentsGlobalFinancialPage.evolutionPeriodConsolidated();
});

When(/^the user select a tab from patrimonial distribution section$/, async function () {
    await followUpInvestmentsGlobalFinancialPage.loadPatrimonialDistributionSection();
});

When(/^the user select accounts tab$/, async function () {
    await followUpInvestmentsGlobalFinancialPage.viewInfoAccount();
    await followUpInvestmentsGlobalFinancialPage.viewSelectAccount();
    await followUpInvestmentsGlobalFinancialPage.selectAccount();
});

When(/^the user select last movements section$/, async function () {
    await followUpInvestmentsGlobalFinancialPage.lastMovementsSection();
});

When(/^the user select an evolution period$/, async function () {
    await followUpInvestmentsGlobalFinancialPage.selectAnEvolutionPeriod();
});

When(/^the user select active tab$/, async function () {
    await followUpInvestmentsGlobalFinancialPage.selectAssetAccount();
    await followUpInvestmentsGlobalFinancialPage.selectAsset();
});

When(/^the user select product tab$/, async function () {
    await followUpInvestmentsGlobalFinancialPage.viewInfoProduct();
    await followUpInvestmentsGlobalFinancialPage.selectProduct();
});

When(/^the user searches for an instrument by name or code$/, async function () {
    await followUpInvestmentsGlobalFinancialPage.searchesForInstruments();
    await followUpInvestmentsGlobalFinancialPage.findByCode('C');
});

When(/^the user selects an instrument$/, async function () {
    await followUpInvestmentsGlobalFinancialPage.selectInstrument();
});
