import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import operationalLimitsSettings from '../../pages/operationalLimitsSettings/operationalLimitsSettings';

When(/^the user accesses to operational limits settings$/, async function() {
    await navigation.dashboard.go();
    await navigation.sidebar.go();
    await navigation.operationalLimitsSettings.settingsNav.go();
    await navigation.operationalLimitsSettings.operationalLimitsSettings.go();
});

When(/^the user accesses to operational limits settings with previous login "([^"]*)"$/, async function(onboardingState) {
    await navigation.dashboard.go();
    await navigation.sidebar.go();
    await navigation.operationalLimitsSettings.settingsNav.go();
    await navigation.operationalLimitsSettings.operationalLimitsSettings.go({onboardingState});
});

When(/^the user go to about info from "([^"]*)"$/, async function(access) {
    await navigation.dashboard.go();
    await navigation.sidebar.go();
    await navigation.operationalLimitsSettings.settingsNav.go();
    await navigation.operationalLimitsSettings.operationalLimitsSettings.go();
    await currentPage.interactInfo(access);
});

When(/^the user "([^"]*)" limit "([^"]*)"$/, async function(edit, limit) {
    await operationalLimitsSettings.modifyLimit(edit, limit);
});

When(/^the user "([^"]*)" limit mtu "([^"]*)"$/, async function(edit, limit) {
    switch (edit.toLowerCase()) {
        case 'edit and save':
            await operationalLimitsSettings.modifyLimit(edit, limit);
            await navigation.mtuLimits.userTransactionAmountPendingConfirmation.go();
            break;
        case 'edit and cancel':
            await operationalLimitsSettings.modifyLimit(edit, limit);
            break;
        default:
            throw new Error(`Unknown edit action: ${edit}`);
    }
});

When(/^the user type limit amount "([^"]*)"$/, async function(edit) {
    await currentPage.errorLimitAmount(edit);
});

When(/^the user accesses to limits "([^"]*)"$/, async function( limit){
    await currentPage.accessLimit(limit);
});

When(/^the user deletes the amount entered$/, async function() {
    await operationalLimitsSettings.deleteAmount();
});

When(/^the user confirms the exit operation$/, async function (){
    await operationalLimitsSettings.closeOperation();
    await currentPage.closeInfo();
});

When(/^the user closes the operational limits modal$/, async function (){
    await operationalLimitsSettings.accesToLimits();
});

When(/^the user select the help "([^"]*)" limit$/, async function(option) {
    await operationalLimitsSettings.helpOption(option);
});

When(/^the user closes the MTU modification screen$/, async function (){
    await navigation.operationalLimitsSettings.operationalLimitsSettings.go();
});
