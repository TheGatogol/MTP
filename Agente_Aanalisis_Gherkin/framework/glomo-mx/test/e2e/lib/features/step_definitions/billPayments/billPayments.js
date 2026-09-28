import {When} from '@cucumber/cucumber';
import * as utilsAccount from '../../utils/utilsAccount';
import * as navigation from '../../navigation';
import billPaymentsSummary from '../../pages/billPayments/productDetail/billPaymentsSummary';
import billPaymentsStep1 from '../../pages/billPayments/productDetail/billPaymentsStep1';

When(/^the user finish a bill payment "([^"]*)"$/, async function(option) {
    switch(option.toLowerCase()){
        case 'stored service':
            await navigation.billPayments.productDetail.step2.go({serviceInfo: user.search1});
            await navigation.billPayments.productDetail.review.go(true);
            break;
        case 'service':
            await navigation.billPayments.productDetail.step2.go({serviceInfo: user.search1});
            await navigation.billPayments.productDetail.review.go(false);
            break;
        case 'suggested service':
            await navigation.billPayments.productDetail.step4.go();
            await navigation.billPayments.productDetail.review.go(false);
            break;
        default:
            throw new Error(`${option} option is not available to navigate...`);
    }
});

When(/^the user attempts finish a bill payment suggested service$/, async function() {
    await navigation.billPayments.productDetail.step4.go();
    await billPaymentsSummary.confirmPayment();
});

When(/^the user selects an stored service$/, async function() {
    await navigation.billPayments.productDetail.step2.go({storedService: true, serviceInfo: user.search1});
});

When(/^the user store the service with alias "([^"]*)"$/, async function(alias) {
    await navigation.billPayments.productDetail.review.go();
    await currentPage.saveService(alias);
});

When(/^the user selects an account$/, async function() {
    const account = utilsAccount.getAccountChecksData('MXN', user);
    await navigation.account.productDetail.go({account});
});

When(/^the user goes to bill payments page$/, async function() {
    await navigation.billPayments.productDetail.step1.go();
});

When(/^the user is in the "([^"]*)" step of bill payments$/, async function(option) {
    const analyticsService = {serviceInfo: user.search1};
    switch (option.toLowerCase()) {
        case 'select service':
            await navigation.billPayments.productDetail.step2.go(analyticsService);
            await navigation.billPayments.productDetail.review.go(false);
            break;
        case 'amount':
            await navigation.billPayments.productDetail.step2.go(analyticsService);
            await navigation.billPayments.productDetail.review.go(false);
            break;
        case 'concept':
            await navigation.billPayments.productDetail.step2.go(analyticsService);
            await navigation.billPayments.productDetail.step3.go();
            await navigation.billPayments.productDetail.review.go(false);
            break;
        case 'summary':
            await navigation.billPayments.productDetail.step2.go(analyticsService);
            await navigation.billPayments.productDetail.step3.go();
            await navigation.billPayments.productDetail.review.go(false);
            break;
        case 'summary not saved':
            await navigation.billPayments.productDetail.step2.go(analyticsService);
            await navigation.billPayments.productDetail.step4.go();
            break;
        case 'otp modal':
            await navigation.billPayments.productDetail.step2.go(analyticsService);
            await navigation.billPayments.productDetail.step3.go();
            await navigation.billPayments.productDetail.step4.go();
            await navigation.billPayments.productDetail.review.go(false);
            break;
        case 'review':
            await navigation.billPayments.productDetail.step2.go(analyticsService);
            await navigation.billPayments.productDetail.review.go(false);
            break;
        default:
            throw new Error(`${option} option is not available to navigate...`);
    }
});

When(/^the user accesses to bill payments from "([^"]*)"$/, async function(navigate) {
    const account = utilsAccount.getAccountChecksData('MXN', user);
    switch (navigate.toLowerCase()) {
        case 'product detail':
            await navigation.account.productDetail.go({account});
            await navigation.billPayments.productDetail.step1.go();
            await billPaymentsStep1.accessToPayNewService();
            break;
        default:
            throw new Error(`${navigate} option is not available to navigate...`);
    }
});

When(/^the user searches for the service "([^"]*)"$/, async function(service) {
    await currentPage.findService(service);
});

When(/^the user accesses to the agreement with number "([^"]*)"$/, async function(agreement) {
    await currentPage.findAgreement(agreement);
});

When(/^the user enters the agreement reference number "([^"]*)"$/, async function(reference) {
    await currentPage.addAgreement(reference);
});

When(/^the user (accesses|accesses and closes) the reference help screen$/, async function(mode) {
    await currentPage.accessToHelpReference();
    if (mode === 'accesses and closes') {
        await currentPage.confirmDialog();
        await currentPage.accessToPayStoredService();
    }
});

When(/^the user deletes the search$/, async function() {
    await billPaymentsStep1.cleanSearch();
});

When(/^the user changes the amount and confirms the change$/, async function() {
    await billPaymentsSummary.changeAmount();
});

When(/^the user cancels the service payment$/, async function() {
    await currentPage.cancelPayment();
});

When(/^the user changes the concept$/, async function() {
    await billPaymentsSummary.changeConcept();
});

When(/^the user is in the otp modal from special service$/, async function() {
    await navigation.billPayments.productDetail.step2.go({serviceInfo: user.search5});
    await navigation.billPayments.productDetail.step4.go();
    await currentPage.confirmPayment();
});

When(/^the user select the card to enter to a frequent service$/, async function() {
    await navigation.billPayments.productDetail.step4.go();
});

When(/^the user edits the amount with an amount exceeding the limit$/, async function() {
    await navigation.billPayments.productDetail.step2.go();
});

When(/^the user opens the modal to exit the flow$/, async function() {
    await billPaymentsSummary.openModalToExitFlow();
});

When(/^the user completes the MTU limit payment from fast access with reference "([^"]*)"$/, async function(serviceReference) {
    const account = utilsAccount.getAccountChecksData('MXN', user.billPaymentProductDetail);
    const {isStoredService, amount, billNumber, search, id} = user.fastAccessServices.find(service => service.id === serviceReference);
    await navigation.billPayments.productDetail.step4.go({account, serviceInfo: {billNumber, search, id}, isStoredService, amount});
    await navigation.mtuLimits.mtuException.go();
});

When(/^the user changes the "([^"]*)" step of bill payments$/, async function(option) {
    switch (option.toLowerCase()) {
        case 'amount':
            await billPaymentsSummary.changeAmount();
            break;
        case 'concept':
            await billPaymentsSummary.changeConcept();
            break;
        default:
            throw new Error(`${option} option is not available to navigate...`);
    }
});
