import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import billPaymentsHome from '../../pages/billPaymentsHome/billPaymentsHome';

When(/^the user accesses bill payments home from operations and "([^"]*)" the onboarding$/, async function(followsOnboarding) {
    await navigation.selectOperations.selectOperations.go();
    await navigation.billPaymentsHome.billPaymentsHome.go();
    if (followsOnboarding === 'follows') {
        await billPaymentsHome.carouselAccept();
        await billPaymentsHome.completeTooltip();
    }
});

When('the user attempts to access bill payments home', async function() {
    await navigation.selectOperations.selectOperations.go();
    await navigation.billPaymentsHome.billPaymentsHome.go();
    await billPaymentsHome.carouselAccept();
});

When(/^the user follows the onboarding$/, async function() {
    await billPaymentsHome.carouselAccept();
});

When(/^the user follows the tooltip$/, async function() {
    await billPaymentsHome.completeTooltip();
});

When(/^the user selects the manual payment option$/, async function() {
    await billPaymentsHome.selectsManualPayment();
});

When(/^the user selects the service detail option$/, async function() {
    await billPaymentsHome.selectsServiceDetail();
});

When(/^the user selects the scheduled payment detail option$/, async function() {
    await billPaymentsHome.selectsScheduleService();
    await billPaymentsHome.selectsScheduledPaymentDetail();
});

When(/^the user selects the scheduled payment "([^"]*)" option$/, async function(detail) {
    await billPaymentsHome.selectsScheduledPayment();
    if (detail === 'detail') {
        await billPaymentsHome.selectsScheduledPaymentDetail();
    }
});

When(/^the user selects the programming detail option$/, async function() {
    await billPaymentsHome.selectsProgrammingDetail();
});

When(/^the user selects the manual payment detail option for a service "([^"]*)"$/, async function(service) {
    await billPaymentsHome.selectsManualPayment();
    if (service === 'manual') {
        await billPaymentsHome.selectServiceManual();
    } else if (service === 'programmable') {
        await billPaymentsHome.selectProgrammableServiceManual();
    } else {
        await billPaymentsHome.selectsServiceDetail();
    }
});

When(/^the user selects the delete service option$/, async function() {
    await billPaymentsHome.selectsDeleteService();
});

When(/^the user selects edit programmed service option$/, async function() {
    await navigation.scheduledBillPayments.scheduledBillPayments.attempt({statusId:'editScheduled'});
});

When(/^the user cancel the modal$/, async function() {
    await billPaymentsHome.cancelDelete();
});

When(/^the user view the onboarding$/, async function() {
    await billPaymentsHome.carouselPlay();
});

When(/^the user accepts the modal delete$/, async function() {
    await billPaymentsHome.acceptDelete();
});

When(/^the user selects the schedule service option$/, async function() {
    await billPaymentsHome.selectsScheduleManualService();
});
