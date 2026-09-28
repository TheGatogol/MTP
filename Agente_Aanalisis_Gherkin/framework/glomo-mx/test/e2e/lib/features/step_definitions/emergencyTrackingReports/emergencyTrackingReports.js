import { When } from '@cucumber/cucumber';
import EmergencyTrackingReports from '../../pages/emergencyTrackingReports/emergencyTrackingReports';
import * as navigation from '../../navigation';

// STEP DEFINITIONS
When(/^the user tab on "([^"]*)"$/, async function(btn) {
    switch(btn) {
        case 'cancel report':
            await EmergencyTrackingReports.cancellationRequest();
            break;
        case 'call executive':
            await EmergencyTrackingReports.callExecutive();
            break;
        case 'cancel operation':
            await EmergencyTrackingReports.cancelOperation();
            break;
        default:
            throw new Error('Selected option is not available...');
    }
});

When('tracking report is displayed', async function () {
    await navigation.emergencyTrackingReports.emergencyTrackingReports.go();
});

When('the user go to tracking report', async function () {
    await navigation.emergencyTrackingReports.emergencyTrackingReports.go();
    await EmergencyTrackingReports.goReport();
});

When('the user decides to cancel the report', async function () {
    await navigation.emergencyTrackingReports.emergencyTrackingReports.go();
    await EmergencyTrackingReports.goReport();
    await EmergencyTrackingReports.cancelOperation();
});
