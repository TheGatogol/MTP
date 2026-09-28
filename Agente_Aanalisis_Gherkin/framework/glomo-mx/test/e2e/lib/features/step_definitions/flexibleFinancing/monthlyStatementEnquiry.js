import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import monthlyStatementEnquiry from '../../pages/flexibleFinancing/monthlyStatementEnquiry';
import paymentDashboard from '../../pages/flexibleFinancing/paymentDashboard';

When(/^the user accesses to Financing Dashboard$/, async function() {
    await navigation.flexibleFinancing.paymentDashboard.go();
});

When(/^the user accesses to the monthly statement enquiry$/, async function() {
    await navigation.flexibleFinancing.monthlyStatementEnquiry.go();
});

When(/^the user "([^"]*)" the "([^"]*)" status$/, async function(action, status) {
    await monthlyStatementEnquiry.accessMonthlyStatement(action, status);
});

When(/^the user consults status$/, async function() {
    await monthlyStatementEnquiry.consultsAccount();
});

When(/^the user downloads account status report$/, async function() {
    await monthlyStatementEnquiry.downloadReceipt();
});

When(/^the user attempts to access to the monthly statement enquiry$/, async function() {
    await navigation.flexibleFinancing.monthlyStatementEnquiry.attempt();
});

When(/^the user agrees to a deferred purchase "([^"]*)"$/, async function(type) {
    await paymentDashboard.purchaseInProgress(type);
});

When(/^the user accesses the option more details$/, async function() {
    await paymentDashboard.seeMore();
});

When(/the user requests accesses to payment history$/, async function() {
    await paymentDashboard.paymentHistory();
});

When(/^the user share movement detail$/, async function() {
    await paymentDashboard.shareMovementDetail();
});

When(/^the user agrees to filter$/, async function() {
    await paymentDashboard.filterFunction();
});

When(/^the user selects "([^"]*)" and enters filter$/, async function(option) {
    await paymentDashboard.selectFilterType(option);
});

When(/^the user unchecks In Progress option$/, async function() {
    await paymentDashboard.accessModalAspa();
});

When(/^the user exits the modal learn more$/, async function() {
    await paymentDashboard.accessModTextInfo();
});

When(/^the user attempts accesses to finance transaction multipurchase debit post hiring$/, async function() {
    await navigation.financeTransactionMultipurchase.financeTransactionMultipurchaseDebitPostHiring.attempt();
});
