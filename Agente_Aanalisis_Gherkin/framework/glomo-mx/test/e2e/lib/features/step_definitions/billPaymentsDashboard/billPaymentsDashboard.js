import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import billPaymentsDashboard from '../../pages/billPaymentsDashboard/billPaymentsDashboard';

When(/^the user accepts the onboarding bill payments dashboard$/, async function() {
    await navigation.billPaymentsDashboard.billPaymentsDashboard.go();
    await billPaymentsDashboard.selectAcceptOnboarding();
});

When(/^the user finish a bill payment from dashboard service "([^"]*)" reference "([^"]*)" concept "([^"]*)"$/, async function(service, reference, concept) {
    await billPaymentsDashboard.makePayment({serviceParam: service, referenceParam: reference, conceptParam: concept});
});

When(/^the user selects the service "([^"]*)" with reference "([^"]*)"$/, async function(service, reference) {
    await billPaymentsDashboard.selectServiceWithReference({serviceParam: service, referenceParam: reference});
});

When(/^the user closes the screen new service or tax$/, async function() {
    await billPaymentsDashboard.cancelServiceDetail();
});

When(/^the user selects the modal and finish the flow$/, async function() {
    await billPaymentsDashboard.exitFlowOperation();
});

When(/^the user exit process$/, async function() {
    await billPaymentsDashboard.cancelPayment();
});

When(/^the user click the button and save the ticket$/, async function() {
    await billPaymentsDashboard.makeSchedulePayment();
});

When(/^the user selects the service "([^"]*)" with reference "([^"]*)" up to the concept$/, async function(service, reference) {
    await billPaymentsDashboard.selectServiceUpToConcept({serviceParam: service, referenceParam: reference});
});

When(/^the user decides not to abandon the operation$/, async function() {
    await billPaymentsDashboard.doNotAbandonOperation();
});

When(/^the user change the selected service$/, async function() {
    await billPaymentsDashboard.changeSelectedService(true);
});

When(/^the user change the selected service "([^"]*)" with reference "([^"]*)"$/, async function(service, reference) {
    await billPaymentsDashboard.changeSelectedServiceFromSummary({serviceParam: service, referenceParam: reference});
});

When(/^the user change the origin after selected service "([^"]*)" with reference "([^"]*)" to step "([^"]*)"$/, async function(service, reference, step) {
    await billPaymentsDashboard.changeOptionFromOrigin(service, reference, step);
});

When(/^the user decides edit the "([^"]*)" step of service "([^"]*)" with reference "([^"]*)"$/, async function(step, service, reference) {
    await billPaymentsDashboard.editStep(step, {serviceParam: service, referenceParam: reference});
});

When(/^the user view the information screen of service and "([^"]*)" the information$/, async function(accepts) {
    if (accepts === 'accepts') {
        await billPaymentsDashboard.informationScreen(true);
    } else {
        await billPaymentsDashboard.informationScreen(false);
    }
});

When(/^the user selects all accounts of the service "([^"]*)" with reference "([^"]*)"$/, async function(service, reference) {
    await billPaymentsDashboard.selectAllAccounts({serviceParam: service, referenceParam: reference});
});

When(/^the user selects the service "([^"]*)" with reference "([^"]*)" and accepts modal$/, async function(service, reference) {
    await billPaymentsDashboard.selectServiceWithReference({serviceParam: service, referenceParam: reference});
    await billPaymentsDashboard.acceptServiceDetailModal();
});

When(/^the user select the summary service "([^"]*)" reference "([^"]*)" concept "([^"]*)"$/, async function(service, reference, concept) {
    await billPaymentsDashboard.summaryAllStep({serviceParam: service, referenceParam: reference, conceptParam: concept});
});

When(/^the user continue the summary service "([^"]*)" reference "([^"]*)" concept "([^"]*)"$/, async function(service, reference, concept) {
    await billPaymentsDashboard.continueSummaryAllStep({serviceParam: service, referenceParam: reference, conceptParam: concept});
});

When(/^the user observes the information screen of service the information "([^"]*)" with reference "([^"]*)"$/, async function(service, reference) {
    await billPaymentsDashboard.informationScreenModal({serviceParam: service, referenceParam: reference});
});

When(/^the user search service "([^"]*)"$/, async function(service) {
    await billPaymentsDashboard.selectNewService();
    await billPaymentsDashboard.searchService(service);
});

When(/^the user search "([^"]*)"$/, async function(service) {
    await billPaymentsDashboard.searchService(service);
});

When(/^the user search and select "([^"]*)"$/, async function(service) {
    await billPaymentsDashboard.searchAndSelectService(service);
});

When(/^the user choose a new service$/, async function() {
    await billPaymentsDashboard.selectNewService();
});

When(/^the user choose a view all saved services$/, async function() {
    await billPaymentsDashboard.selectViewAll();
});

When(/^the user choose saved services$/, async function() {
    await billPaymentsDashboard.selectServicesSave();
});

When(/^the user select otp screen "([^"]*)" reference "([^"]*)" concept "([^"]*)"$/, async function(service, reference, concept) {
    await billPaymentsDashboard.selectOtpFromNewPayment({serviceParam: service, referenceParam: reference, conceptParam: concept});
});

When(/^the user selects the service "([^"]*)" with reference "([^"]*)" up to the amount$/, async function(service, reference) {
    await billPaymentsDashboard.makePaymentTax({serviceParam: service, referenceParam: reference, amountParam: '338'});
});

When(/^the user accesses bill payments dashboard$/, async function() {
    await navigation.billPaymentsDashboard.billPaymentsDashboard.go();
});

When(/^the user finish a bill payment$/, async function() {
    await billPaymentsDashboard.confirmSummaryPayment(true);
});

When(/^the user saves new service$/, async function() {
    await billPaymentsDashboard.saveNewService(true);
});

When(/^the user selects more information$/, async function() {
    await billPaymentsDashboard.showDetailModal();
});

When(/^the user call native bar code$/, async function() {
    await billPaymentsDashboard.showNativeQrReader('cdmx');
});

When(/^the user call native qr code$/, async function() {
    await billPaymentsDashboard.showNativeQrReader('sipare');
});

When(/^the user select "([^"]*)" with reference "([^"]*)" and amount "([^"]*)"$/, async function(service, reference, amount) {
    await billPaymentsDashboard.makePaymentTax({serviceParam: service, referenceParam: reference, amountParam: amount});
});

When(/^the user completed pay tax$/, async function() {
    await billPaymentsDashboard.completedPayTax();
});

When(/^the user selects the schedule option$/, async function() {
    await billPaymentsDashboard.confirmSummaryPayment();
    await billPaymentsDashboard.schedulePaymentsOption();
});

When(/^the user finish a cdmx bill payment with "([^"]*)" reference "([^"]*)" amount "([^"]*)" payment option$/, async function(reference, amount, paymentOption) {
    await billPaymentsDashboard.makeCdmxPayment(reference, amount, paymentOption, true);
});

When(/^the user selects the "([^"]*)" payment option with reference "([^"]*)" up to the payment option$/, async function(paymentOption, reference) {
    await billPaymentsDashboard.goToPaymentOption(paymentOption, reference);
});

When(/^the user deploys modify the "([^"]*)" step to bill payment$/, async function(step) {
    await billPaymentsDashboard.deployEditStep(step);
});

When(/^the user make a store and forward payment and navigate to "([^"]*)"$/, async function(navigateTo) {
    await billPaymentsDashboard.summaryAllStep({serviceParam: 'sky', referenceParam: '112233445678', conceptParam: 'MyConcept'});
    await billPaymentsDashboard.confirmSummaryPayment(true);
    navigateTo === 'dashboard'
        ? await navigation.dashboard.go()
        : await navigation.account.productDetail.go({ exitType: 'btnClose' });
});

When(/^the user makes a payment from the saved services list and navigates to schedule payment$/, async function() {
    await billPaymentsDashboard.makePaymentsFromServicesSaved('12345678901234567890');
    await billPaymentsDashboard.confirmSummaryPayment(true);
    await navigation.scheduledBillPayments.scheduledBillPayments.go();
});

When(/^the user exits the reference expired modal using "([^"]*)"$/, async function(exitType) {
    await billPaymentsDashboard.summaryAllStep({serviceParam: 'RADIO', referenceParam: '5559047263503', conceptParam: 'MyConcept'});
    await billPaymentsDashboard.exitReferenceExpired();
    await navigation.account.productDetail.go({exitType});
});

When(/^the user success payment in progress to "([^"]*)" reference "([^"]*)" concept "([^"]*)"( and shared service)?$/, async function(service, reference, concept, sharing) {
    await billPaymentsDashboard.summaryAllStep({serviceParam: service, referenceParam: reference, conceptParam: concept});
    await billPaymentsDashboard.confirmSummaryPayment(true);
    if (sharing) {
        await billPaymentsDashboard.sharedService();
    }
});

When(/^the user save "([^"]*)" service$/, async function(save) {
    await billPaymentsDashboard.butonRowSaveService();
    const isCLick = save === 'save';
    if(isCLick) {
        await billPaymentsDashboard.saveServiceModal(isCLick);
    }
});

When(/^the user retry save service with alias "([^"]*)"$/, async function(alias) {
    await billPaymentsDashboard.butonRowSaveService();
    await billPaymentsDashboard.retrySaveService(alias);
});

When(/^the user save service with alias "([^"]*)"$/, async function(alias) {
    await billPaymentsDashboard.butonRowSaveService();
    await billPaymentsDashboard.saveServiceModal(true, alias, true);
});

When(/^the user scans the barcode "([^"]*)"$/, async function(barcode) {
    await billPaymentsDashboard.showNativeQrReader(barcode);
});

When(/^the user clicks the barcode scanner button$/, async function() {
    await billPaymentsDashboard.clickBarcodeScannerButton();
});
