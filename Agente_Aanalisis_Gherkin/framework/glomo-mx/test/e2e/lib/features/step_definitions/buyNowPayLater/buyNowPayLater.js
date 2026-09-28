import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

import buyNowPayLaterTerm from '../../pages/buyNowPayLater/buyNowPayLaterTerm';
import monthlyStatementEnquiry from '../../pages/flexibleFinancing/monthlyStatementEnquiry';

When(/^the user accesses to the provision page "([^"]*)"$/, async function(entryPoint) {
    switch(entryPoint.toLowerCase()) {
        case 'manage financing lines':
            await navigation.buyNowPayLater.buyNowPayLater.go();
            break;
        case 'bbva choose your term':
            await navigation.buyNowPayLater.buyNowPayLater.go();
            await navigation.buyNowPayLater.buyNowPayLaterTerm.go();
            break;
        case 'various product':
            await navigation.buyNowPayLater.buyNowPayLater.go();
            await navigation.buyNowPayLater.buyNowPayLaterTerm.go();
            await buyNowPayLaterTerm.selectProvision();
            break;
        case 'single product':
            await navigation.buyNowPayLater.buyNowPayLaterDisposition.go();
            await buyNowPayLaterTerm.selectProvision();
            break;
        case 'acount statement':
            await navigation.buyNowPayLater.buyNowPayLaterDisposition.go();
            await navigation.buyNowPayLater.ButNowPayLaterMonthlyStatement.go();
            break;
        case 'line detail':
            await navigation.buyNowPayLater.buyNowPayLater.go();
            await navigation.buyNowPayLater.buyNowPayLaterTerm.go();
            await buyNowPayLaterTerm.goLineDetail();
            break;
        case 'bbva choose your term single product':
            await navigation.buyNowPayLater.buyNowPayLaterDisposition.go();
            break;
        default:
            throw new Error(`${entryPoint} option is not available to navigate.`);
    }
});

When(/^the user access to the disposition detail and payment history$/, async function() {
    await buyNowPayLaterTerm.viewDispositionDetailPaymentHistory();
});

When(/^the user accesses to "([^"]*)" information and exit with "([^"]*)" option$/, async function(section, option) {
    await buyNowPayLaterTerm.selectSection(section);
    await buyNowPayLaterTerm.exitPaymentsInformationModal(option);
});

When(/^the user filters the results by status "([^"]*)"$/, async function(status) {
    await buyNowPayLaterTerm.filterResultsByStatus(status);
});

When(/^the user filters dispositions by status "([^"]*)"$/, async function(status) {
    await buyNowPayLaterTerm.filterDispositionsByStatus(status);
});

When(/^the user clears the filters on the movements screen$/, async function() {
    await buyNowPayLaterTerm.clearFilterDispositions();
});

When(/^the user modifies the filters from the movements to show screen$/, async function() {
    await buyNowPayLaterTerm.filterDispositionsEdit();
    await buyNowPayLaterTerm.filterDispositionsByCompleted();
    await buyNowPayLaterTerm.filterDispositionsContinue();
});

When(/^the user "([^"]*)" their available account statement$/, async function(entryPoint) {
    await monthlyStatementEnquiry.accessAcounts(entryPoint);
});
