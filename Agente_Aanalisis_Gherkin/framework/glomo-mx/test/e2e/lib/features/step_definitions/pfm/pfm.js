import { When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import categorizationPage from '../../pages/pfm/categorization/categorization';
import dashboardDetailPage from '../../pages/pfm/dashboard/dashboardDetail';
import transactionDetailPage from '../../pages/pfm/categorization/transactionDetail';
import pfmSettingsPage from '../../pages/pfm/settings/pfmSettings';

const PFM_CONSTS = {
    CHART_TYPE_CATEGORY: 'category',
    CHART_TYPE_SUBCATEGORY: 'subcategory',
    PAGE_TYPE_TRENDS: 'trends',
    PAGE_TYPE_INCOMES_EXPENSES: 'incomes expenses'
};

const PFM_MONTHLY_PERIOD = 'monthly_period';
const PFM_FORTNIGHTLY_PERIOD = 'fortnightly_period';
const PFM_WEEKLY_PERIOD = 'weekly_period';
const PFM_DASHBOARD = 'dashboard';

When(/^the user accesses dashboard detail PFM "([^"]*)"/, async function(accessFrom) {
    await navigation.pfm.dashboardDetail.dashboardDetail.go({accessFrom});
});

When(/^the user selects the incomes card/, async function () {
    await dashboardDetailPage.selectIncomeCard();
});

When(/^the user selects the expenses card/, async function () {
    await dashboardDetailPage.selectExpenseCard();
});

When(/^the user selects the saves card/, async function () {
    await dashboardDetailPage.selectSaveCard();
});

When(/^the user selects the investments card/, async function () {
    await dashboardDetailPage.selectInvestmentCard();
});

When(/^the user accesses PFM settings/, async function () {
    await navigation.pfm.settings.settings.go();
});

When(/^accesses PFM settings (.*) period type$/, async function(periodPfmType) {
    if (periodPfmType.toLowerCase() === PFM_MONTHLY_PERIOD) {
        await navigation.pfm.settings.periodMonthly.go();
    } else if (periodPfmType.toLowerCase() === PFM_WEEKLY_PERIOD) {
        await navigation.pfm.settings.periodWeekly.go();
    } else {
        throw new Error(`PFM period type not supported ${periodPfmType}.`);
    }
});

When(/^the user accesses PFM period monthly/, async function() {
    await navigation.pfm.settings.periodMonthly.go();
});

When(/^user change PFM period config/, async function() {
    await navigation.pfm.settings.periodMonthly.go();
    await currentPage.changeMonthlyDays();
    await currentPage.changePeriod();
    await navigation.pfm.settings.settings.assert();
});

When(/^the user accesses PFM period fortnightly/, async function() {
    await navigation.pfm.settings.periodFortnightly.go();
});

When(/^the user change period config/, async function() {
    await currentPage.changePeriod();
    await navigation.pfm.settings.settings.assert();
});

When(/^the user accesses PFM period weekly/, async function() {
    await navigation.pfm.settings.periodWeekly.go();
});

When(/^the user accesses PFM (.*) from PFM (.*)$/, async function(destinationPage, sourcePage) {
    if (destinationPage.toLowerCase() === PFM_FORTNIGHTLY_PERIOD) {
        await navigation.pfm.settings.periodFortnightly.go();
    } else if (destinationPage.toLowerCase() === PFM_WEEKLY_PERIOD) {
        await navigation.pfm.settings.periodWeekly.go();
    } else if (destinationPage.toLowerCase() === PFM_MONTHLY_PERIOD && sourcePage.toLowerCase() === PFM_DASHBOARD) {
        await navigation.pfm.settings.periodMonthly.go();
    } else if (destinationPage.toLowerCase() === PFM_MONTHLY_PERIOD && sourcePage.toLowerCase() === PFM_WEEKLY_PERIOD) {
        await currentPage.accessMonthlyPeriod();
    }
});

When(/^the user changes the selected (.*) day$/, async function(daysType) {
    if (daysType.toLowerCase() === PFM_WEEKLY_PERIOD) {
        await currentPage.changeWeeklyDays();
    } else if (daysType.toLowerCase() === PFM_MONTHLY_PERIOD) {
        await currentPage.changeMonthlyDays();
    }
});

When(/^the user accesses PFM products/, async function() {
    await navigation.pfm.settings.products.go();
});

When(/^the user change config pfm products/, async function () {
    await pfmSettingsPage.changeConfigProducts();
});

When(/^the user change config products without saving/, async function() {
    await pfmSettingsPage.changeConfigWithoutSaving();
});

When(/^the user selects right option/, async function () {
    await pfmSettingsPage.selectsRightOption();
});

When(/^the user accesses PFM categorization from "([^"]*)"/, async function(accessFrom) {
    await navigation.pfm.categorization.categorization.go({accessFrom});
});

When(/^the user accesses PFM category detail/, async function() {
    await categorizationPage.accessCategorizationCategory();
});

When(/^the user accesses pfm dates tab categorization/, async function() {
    await categorizationPage.accessCategorizationDatesTab();
});

When(/^the user accesses pfm category tab categorization/, async function() {
    await categorizationPage.accessCategorizationCategoryTab();
});

When(/^the user accesses history monthly tab/, async function() {
    await categorizationPage.selectTabHistoryMonthly();
});

When(/^the user accesses history annual tab/, async function() {
    await categorizationPage.selectTabHistoryAnnual();
});
When(/^the user accesses edit categorization period/, async function() {
    await categorizationPage.editPeriod();
});

When(/^the user changes the categorization period/, async function() {
    await categorizationPage.editPeriodPastYear();
});

When(/^the user selects the perzonalized option in categorization period/, async function() {
    await categorizationPage.editPeriodPersonalized();
});

When(/^the user accesses PFM Categorization period/, async function() {
    await categorizationPage.accessCategorizationDefinePeriod();
});

When(/^the user accesses expenses history detail/, async function() {
    await categorizationPage.accessCategorizationExpensesHistory();
});

When(/^the user selects a category in history detail/, async function() {
    await categorizationPage.categorizationExpensesHistoryCategories();
});

When(/^the user accesses to subcategory movements list/, async function() {
    await categorizationPage.accessMovementDetailSubcategory();
});

When(/^the user accesses to "([^"]*)" period selector/, async function (pageType) {
    if (pageType.toLowerCase() === PFM_CONSTS.PAGE_TYPE_TRENDS) {
        await navigation.pfm.trends.pfmTrendsPeriodSelection.go();
    } else if (pageType.toLowerCase() === PFM_CONSTS.PAGE_TYPE_INCOMES_EXPENSES) {
        await navigation.pfm.incomeVsExpenses.incomeExpensesPeriodSelection.go();
    }
});

When(/^the user accesses PFM transaction detail/, async function () {
    await navigation.pfm.transactions.transactionDetail.go();
});

When(/^the user accesses PFM movement detail from "([^"]*)"$/, async function(accessFrom) {
    if (accessFrom.toLowerCase() === PFM_CONSTS.CHART_TYPE_CATEGORY) {
        await categorizationPage.accessCategorizationCategory();
        await categorizationPage.selectCatTabMovements();
        await navigation.pfm.categorization.transactionDetail.go(accessFrom.toLowerCase());
    } else if (accessFrom.toLowerCase() === PFM_CONSTS.CHART_TYPE_SUBCATEGORY) {
        await categorizationPage.accessCategorizationCategory();
        await categorizationPage.accessCategorizationSubcategory();
        await navigation.pfm.categorization.transactionDetail.go(accessFrom.toLowerCase());
    } else {
        await categorizationPage.selectTabMovements();
        await navigation.pfm.categorization.transactionDetail.go();
    }
});

When(/^the user accesses PFM movement recategorization/, async function() {
    await navigation.pfm.categorization.recategorization.go();
});

When(/^the user accesses movement detail PFM/, async function() {
    await navigation.pfm.categorization.transactionDetail.go();
});

When(/^the user makes a pfm recategorization of a movement$/, async function() {
    await categorizationPage.sendRecategorization();
});

When(/^the user accesses PFM recategorization transaction/, async function() {
    await navigation.pfm.transactions.recategorization.go();
});

When(/^the user makes a recategorization of a movement$/, async function() {
    await navigation.pfm.transactions.recategorizationReview.go();
});

When(/^the user sees the previous period "([^"]*)" "([^"]*)" "([^"]*)"$/, async function (frequency, actualDate, substrFrequency) {
    await currentPage.previousPeriod({frequency, actualDate, substrFrequency});
});

When(/^the user closes the recategorization review/, async function () {
    await currentPage.closeReview();
});

When(/^the user accesses to the detail of the proactivity campaign/, async function () {
    await navigation.proactivity.ticket.proactivityTicket.go();
});

When(/^the user closes the proactivity campaign "([^"]*)" times/, async function (times) {
    await currentPage.closeProactivityMessage(times);
});

When(/^the user accesses to investments from PFM Dashboard/, async function () {
    await dashboardDetailPage.accessInvestments();
});

When(/^the user accesses to dashboard from PFM Dashboard/, async function () {
    await dashboardDetailPage.accessDashboard();
});

When(/^the user accesses to PFM Dashboard from subcategory of categorization/, async function () {
    await navigation.pfm.categorization.categorization.assert();
    await categorizationPage.accessPfmDashboardfromSubcategory();
});

When(/^the user return from transaction detail/, async function () {
    await transactionDetailPage.returnFromTransactionDetail();
});

When(/^the user accesses to categorization from history detail/, async function () {
    await categorizationPage.returnFromHistory();
});

When(/^the user accesses to PFM Dashboard from categorization/, async function () {
    await categorizationPage.returnFromCategorization();
});

When(/^the user accesses to pockets from PFM Dashboard/, async function () {
    await dashboardDetailPage.accessPockets();
});

When(/^the user closes onboarding modal and tooltips/, async function () {
    await dashboardDetailPage.closeOnBoardingAndTooltips();
});

When(/^the user go to past period card/, async function() {
    await dashboardDetailPage.goToPeriodContainer();
});

When(/^the user go to saving tools options/, async function() {
    await dashboardDetailPage.goToSavingTools();
});

When(/^the user selects incomes from the featured module/, async function() {
    await dashboardDetailPage.selectIncomesModule();
});
