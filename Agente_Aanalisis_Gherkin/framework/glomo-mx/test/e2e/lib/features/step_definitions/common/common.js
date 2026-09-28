import {Given, When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import {Commands} from '@csqe/radish';

Given(/^a user accesses the application for the first time$/, async function() {
    await navigation.welcomeUserDistribution.go();
});

Given('a user accesses/starts the application', async function() {
    await navigation.splash.attempt();
});

Given(/^a user not logged and not cached$/, async function() {
    if (Commands.flags.isMobile) {
        await navigation.welcomeUserDistribution.go();
    } else {
        await navigation.welcome.access.go();
    }
});

When(/^the user closes the current operative$/, async function() {
    await currentPage.closeOperative();
});

When('the user starts the application', async function() {
    await navigation.splash.attempt();
});

When(/^the user waits for the application to start$/, async function() {
    await Commands.pause({time: config.wait.XS});
});

When(/^the user continues the process$/, async function() {
    await currentPage.continueProcess();
});

When(/^the user goes back to previous page$/, async function() {
    await currentPage.goBack();
});

When(/^the user sees only the "([^"]*)" step open$/, async function(step) {
    await currentPage.isStepOpen(step);
});

Given(/^the user is in "([^"]*)" step$/, async function(step) {
    await currentPage.goToStep(step);
});

When(/^the user confirm to exit the operative$/, async function() {
    await currentPage.confirmExitOperative();
});

When(/^the user scroll to bottom page$/, async function() {
    await currentPage.scrollToBottom();
});

When(/^the user "([^"]*)" permissions to access$/, async function(permission) {
    switch (permission.toLowerCase()) {
        case 'allows':
            await currentPage.dialogPermissions.allowPermission();
            break;
        case 'denies':
            await currentPage.dialogPermissions.notAllowPermission();
            break;
        case 'allows use app':
            await currentPage.dialogPermissions.allowUseAppPermission();
            break;
        case 'allows once':
            await currentPage.dialogPermissions.allowOncePermission();
            break;
        case 'denies notifications':
            await currentPage.dialogPermissions.deniesNotification();
            break;
        default:
            throw new Error(`"${permission}" is not an option`);
    }
});

When(/^the user accepts terms and conditions$/, async function() {
    await currentPage.acceptTermsAndConditions();
});

When('the user closes the receipt', async function () {
    await currentPage.closeReceipt();
});

When('the user accesses to the branch locator', async function() {
    await navigation.branchLocator.branchLocator.go();
});
