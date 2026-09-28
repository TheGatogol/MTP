import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import investmentsFollowUpPage from '../../pages/investmentsFollowUp/investmentsFollowUp';
import investmentsFollowUpDistribution from '../../pages/investmentsFollowUp/investmentsFollowUpDistribution';

When(/^the user accesses My Investments dashboard "([^"]*)"$/, async function(onboardingState) {
    await navigation.investmentsFollowUp.investmentsFollowUp.go({onboardingState});
});

When(/^the user closes the onboarding$/, async function() {
    await investmentsFollowUpPage.closeOnboarding();
});

When(/^the user opens the FAQs$/, async function() {
    await investmentsFollowUpPage.openFaqs();
});

When(/^the user opens the FAQ "([^"]*)"$/, async function(faq) {
    await investmentsFollowUpPage.openFaq(faq);
});

When(/^the user sees next values$/, async function(table) {
    const hash = table.hashes();

    await investmentsFollowUpPage.checkTotalInvestmentData([
        { attrName: 'amount', value:  hash[0].value },
        { attrName: currentPage.isSpherica?'symbol':'unit', value:  hash[1].value },
        { attrName: 'description', value:  hash[currentPage.isSpherica?3:2].value }
    ]);
});

When(/^the user selects data by "([^"]*)"$/, async function(type) {
    await investmentsFollowUpPage.selectChartBy(type);
});

When(/^the user selects period "([^"]*)"$/, async function (period) {
    await investmentsFollowUpPage.selectPeriod(period);
});

When(/^the user selects the period "([^"]*)"$/, async function(period) {
    await investmentsFollowUpPage.selectPeriod(period);
});

When(/^the user changes section to "([^"]*)" and the list is shown$/, async function(typeSection) {
    await investmentsFollowUpDistribution.changeSection(typeSection);
});

When('the user selects the position "{int}" into chart', async function(position) {
    await investmentsFollowUpPage.selectChartPosition(position);
});

When(/^the user selects a "([^"]*)" from the list$/, async function(typeItem) {
    await investmentsFollowUpDistribution.selectAnItemList(typeItem);
});

When(/^the user selects a "([^"]*)" from the pie chart$/, async function(typeItem) {
    await investmentsFollowUpDistribution.selectAnItemPieChart(typeItem);
});

When(/^the selected "([^"]*)" is displayed in the list$/, async function(typeItem) {
    await investmentsFollowUpDistribution.displayItemInList(typeItem);
});

When(/^the selected "([^"]*)" is displayed in the pie chart$/, async function(typeItem) {
    await investmentsFollowUpDistribution.displayItemInPie(typeItem);
});

When(/^the user accesses My Investments distribution$/, async function() {
    await navigation.investmentsFollowUp.investmentsFollowUpDistribution.go();
});

When(/^the user selects "([^"]*)" stars to give feedback$/, async function(stars) {
    await navigation.investmentsFollowUp.investmentsFollowUpFeedback.go({stars});
});

When(/^the user closes the holidays notification if it is displayed$/, async function() {
    await investmentsFollowUpPage.closeHolidaysNotification();
});

When(/^the new amount "([^"]*)" has been uploaded$/, async function(amount) {
    await investmentsFollowUpPage.checkUploadedInformation(amount);
});

When(/^a system error occurs$/, async function() {
    await investmentsFollowUpPage.systemError();
});

When(/^the user taps the retry button$/, async function() {
    await investmentsFollowUpPage.retrySystemError();
});

When(/^the user selects the corresponding product$/, async function() {
    await investmentsFollowUpPage.selectProduct();
});

When(/^the user opens custom date and selects start "([^"]*)" and end "([^"]*)" date$/, async function (startDate, endDate) {
    await investmentsFollowUpPage.openCustomDate(startDate, endDate);
});

When(/^the user accept the changes$/, async function () {
    await investmentsFollowUpPage.saveCustomDates();
});

When(/^the user opens the term description modal$/, async function () {
    await investmentsFollowUpPage.showTermDescriptionModal();
});

When(/^the user views more articles in financial health$/, async function () {
    await investmentsFollowUpPage.showMoreArticles();
});

When(/^the user close section recent posts$/, async function () {
    await investmentsFollowUpPage.closeSectionRecentPosts();
});

When(/^the user selects icon of the description graph$/, async function () {
    await investmentsFollowUpPage.showDescriptionGraph();
});

When(/^the user selects article to the view information$/, async function () {
    await investmentsFollowUpPage.showArticleData();
});

When(/^the user shows list contracts$/, async function () {
    await investmentsFollowUpPage.showMoreProducts();
});
