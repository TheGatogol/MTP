import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

When('the user views all checks', async function() {
    await currentPage.viewMoreChecks();
});

When('the user filters the checks', async function() {
    await currentPage.viewMoreChecks();
    await navigation.checksDeposits.checksDepositsListSearcher.go();
});

When('the user edits a filter with period {string} from date {string} to date {string} from amount {string} to amount {string} status {string}',
    async function(dateSelector, fromDate, toDate, fromAmount, toAmount, status) {
        await currentPage.editFilter({ dateSelector, fromDate, toDate, fromAmount, toAmount, status });
    });

When('the user filters by accepted status', async function() {
    await currentPage.editFilter({ status: 'charged' });
    await navigation.checksDeposits.checksDepositsList.go();
});

When('the user filters by last month', async function() {
    await currentPage.editFilter({ dateSelector: 'last month' });
    await navigation.checksDeposits.checksDepositsList.go();
});

When('the user filters by from amount', async function() {
    await currentPage.editFilter({ fromAmount: 'amount' });
    await navigation.checksDeposits.checksDepositsList.go();
});

When('the user filters with no results', async function() {
    await currentPage.editFilter({ dateSelector: 'today', status: 'rejected' });
    await navigation.checksDeposits.checksDepositsList.go();
});

When('the user orders by {string} date', async function(order) {
    await currentPage.viewMoreChecks();
    await currentPage.orderList(order);
});

When('the user deletes the filter', async function() {
    await currentPage.deleteFilters();
});

When('the user deletes a filter label', async function() {
    await currentPage.editFilter({ dateSelector: 'today' });
    await navigation.checksDeposits.checksDepositsList.go();
    await currentPage.removeFilterLabel(1);
});

When('the user enters a lower to amount than the from amount', async function() {
    await currentPage.editFilter({ fromAmount: 'amount', toAmount: 'small amount' });
});

When(/^the app shows an error message in the check filter "([^"]*)" input$/, async function(inputType) {
    if (inputType === 'to amount') {
        await currentPage.checkNumberErrorIsShown();
    }
});
