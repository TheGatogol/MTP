import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import servicePayments from '../../pages/scheduledBillPayments/scheduledBillPayments';

When(/^the user selects saves services$/, async function() {
    await servicePayments.savedService();
});

When(/^the user selects new service option$/, async function() {
    await servicePayments.newService();
});

When(/^the user selects one service of the list$/, async function() {
    await servicePayments.elementsNewServiceList();
});

When(/^the user searches by "([^"]*)" service$/, async function(option) {
    await servicePayments.searchServices(option);
});

When(/^the user deletes the service searches$/, async function() {
    await servicePayments.newService();
    await servicePayments.searchServicesThree();
    await servicePayments.deleteServiceSearch();
});

When(/^the user captures the full name of the owner of the saved service option$/, async function(){
    await servicePayments.savedService();
    await servicePayments.elementSaveServiceList();
    await servicePayments.referencesService();
    await servicePayments.ownersName();
});

When(/^the user accesses to the scheduled payment option$/, async function() {
    await navigation.scheduledBillPayments.scheduledBillPayments.go();
});

When(/^the user selects saved service option$/, async function() {
    await servicePayments.completeStep();
});

When(/^the user selects saved service option and proceeds to terms and conditions$/, async function() {
    await servicePayments.completeStep();
    await servicePayments.selectOriginAccounts();
    await servicePayments.maxAmounts('10');
    await servicePayments.continuesButtonStep3();
});

When(/^the user selects saved service option with recurring charge$/, async function() {
    await servicePayments.completeStep();
    await servicePayments.recurringChargeFormat();
    await servicePayments.completeOperation();
});

When(/^the user selects an origin "([^"]*)"$/, async function(option) {
    await servicePayments.selectOriginOption(option);
});

When(/^the user chooses a "([^"]*)" service$/, async function(option) {
    await servicePayments.serviceType(option);
});

When(/^the user continues the process with a "([^"]*)" as origin$/, async function(option) {
    await servicePayments.completeStepOption(option);
});

When(/^the user modifies the origin payment$/, async function() {
    await servicePayments.modifyAccount();
});

When(/^the user select other "([^"]*)" origin$/, async function(option) {
    await servicePayments.otherOrigin(option);
});

When(/^the user selects origin section and goes to "([^"]*)" view all option$/, async function(option) {
    await servicePayments.viewAllOptions(option);
});

When(/^the user selects cards section$/, async function() {
    await servicePayments.goCardOption();
});

When(/^the user selects maximum amount section and goes to periodicity section$/, async function() {
    await servicePayments.selectOriginAccounts();
    await servicePayments.maxAmounts('10');
    await servicePayments.continuesButtonStep3();
});

When(/^the user selects terms and conditions section$/, async function() {
    await servicePayments.periodicityMonth();
    await servicePayments.continuePeriodicitySection();
});

When(/^the user accepts the recurring charge format$/, async function() {
    await servicePayments.recurringChargeFormat();
    await servicePayments.completeOperation();
});

When(/^the user modifies the service saved detail$/, async function() {
    await servicePayments.tryModifyServiceDetail();
});

When(/^the user closes "([^"]*)" section$/, async function(option) {
    await servicePayments.closeOperative(option);
});

When(/^the user continues with the operation$/, async function() {
    await servicePayments.closeOperation();
    await servicePayments.continueOperation();
});

When(/^the user selects an saved service$/, async function() {
    await servicePayments.elementSaveServiceList();
});

When(/^the user cancels delete the service$/, async function() {
    await servicePayments.tryDeleteService();
    await servicePayments.cancelsDeleteServices();
});

When(/^the user selects terms and condition from the summary$/, async function() {
    await servicePayments.goSummaryTermsAndConditions();
});

When(/^the user selects periodicity from the summary$/, async function() {
    await servicePayments.goSummaryPeriodicity();
});

When(/^the user edits periodicity from the summary$/, async function() {
    await servicePayments.editSummaryPeriodicity();
});

When(/^the user modifies the max amount$/, async function() {
    await servicePayments.changeAmount();
    await servicePayments.maxAmounts();
});

When(/^the user selects a save service and goes to "([^"]*)" help section$/, async function(option) {
    await servicePayments.savedService();
    await servicePayments.elementSaveServiceList();
    await servicePayments.helpOption(option);
});

When(/^the user "([^"]*)" the help section$/, async function(option) {
    await servicePayments.barcodeOption(option);
});

When(/^the user selects a save service and goes to help section payment method$/, async function() {
    await servicePayments.helpPaymentSection();
});

When(/^the user goes to payment origin help option$/, async function() {
    await servicePayments.helpPaymentOption();
});

When(/^the user goes to payment origin help option and continue with operation$/, async function() {
    await servicePayments.continueHelpOption();
});

When(/^the user accesses to scheduled bill payments and goes to summary section$/, async function() {
    await navigation.scheduledBillPayments.scheduledBillPayments.go();
    await servicePayments.completeStepNewService();
    await servicePayments.recurringChargeFormat();
    await servicePayments.completeOperation();
});

When(/^the user completes the operation( with OTP)?$/, async function(otp) {
    await servicePayments.completePayment(otp === ' with OTP');
});

When(/^the user "([^"]*)" delete saved service option$/, async function(option) {
    await servicePayments.tryDeleteService();
    if (option === 'completes') {
        await servicePayments.confirmDeleteServiceSaved();
    }
});
