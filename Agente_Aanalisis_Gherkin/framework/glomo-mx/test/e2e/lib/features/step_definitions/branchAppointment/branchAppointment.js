import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import atmLocator from '../../pages/atmLocator/atmLocator';
import branchAppointment from '../../pages/branchAppointment/branchAppointment';
import branchAppointmentSuccess from '../../pages/branchAppointment/branchAppointmentSuccess';
import branchAppointmentDetail from '../../pages/branchAppointment/branchAppointmentDetail';

When(/^the user (accesses|attempts to access) to the "([^"]*)" branch to get an appointment$/, async function(entry, branchName) {
    await navigation.dashboard.go();
    switch (entry) {
        case 'accesses':
            await navigation.branchAppointment.branchAppointment.go(branchName);
            break;
        default:
            await navigation.branchAppointment.branchAppointment.attempt(branchName);
            break;
    }
});

When(/^the user accesses to the "([^"]*)" branch card$/, async function(branchName) {
    await navigation.dashboard.go();
    await navigation.atmLocator.atmLocator.go();
    await atmLocator.confirmDialog();
    await atmLocator.searchBranchCard(branchName);
});

When (/^the user selects the "([^"]*)" procedure type for the appointment$/, async function(option) {
    await branchAppointment.selectProcedure(option);
});

When (/^the user selects the "([^"]*)" date$/, async function(time) {
    await branchAppointment.selectDay(time);
});

When (/^the user selects the "([^"]*)" appointment$/, async function(time) {
    await branchAppointment.selectHour(time);
});

When (/^the user opens the "([^"]*)" options menu$/, async function(option) {
    await branchAppointment.openOptionsMenu(option);
});

When (/^the user (accesses|attempts to access) the successfuly scheduled appointment screen$/, async function(entry) {
    switch (entry) {
        case 'accesses':
            await navigation.branchAppointment.branchAppointmentSuccess.go();
            break;
        default:
            await navigation.branchAppointment.branchAppointmentSuccess.attempt();
            break;
    }
});

When (/^the user changes the "([^"]*)" at summary$/, async function(section) {
    await branchAppointment.changeSummary(section);
});

When (/^the user opens the cancelation appointment modal$/, async function() {
    await branchAppointmentSuccess.openCancelationModal();
});

When (/^the user cancels the appointment "([^"]*)"$/, async function(outcome) {
    switch (outcome) {
        case 'from success screen successfully':
            await navigation.atmLocator.atmLocator.go('cancelAppt');
            break;
        case 'from the appointment detail and the service fails':
            await branchAppointmentDetail.cancelAppointment();
            break;
        default:
            await branchAppointmentDetail.cancelAppointment(false);
            break;
    }
});

When (/^the user closes the modal and "([^"]*)" the appointment form$/, async function(outcome) {
    switch (outcome) {
        case 'exits':
            await navigation.atmLocator.atmLocator.go('exitApptForm');
            break;
        default:
            await branchAppointment.closeApptForm(false);
            break;
    }
});

When (/^the user accesses to the detail of the made appointment$/, async function() {
    await navigation.dashboard.go();
    await navigation.branchAppointment.branchAppointmentDetail.go();
});

When (/^the user opens the "([^"]*)" step from summary$/, async function(section) {
    await branchAppointment.accessFromSummary(section);
});

When (/^the user opens request branch appointment$/, async function() {
    await atmLocator.accessBranchAppointmentFromCard();
});

When (/^the user download the appointment receipt$/, async function() {
    await branchAppointmentSuccess.downloadAppontmentReceipt();
});
