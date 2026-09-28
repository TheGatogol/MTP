import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import depositConfigurationPage from '../../pages/depositConfiguration/depositConfiguration.js';

When(/^the user select deposit "([^"]*)"$/, async function(account) {
    await navigation.depositConfiguration.deposit.go(account);
});

When(/^the user accesses to details for deposit "([^"]*)"$/, async function(account) {
    await navigation.depositConfiguration.deposit.go(account);
    await navigation.depositConfiguration.depositDetail.go();
});

When(/^the user accesses to configuration for deposit "([^"]*)"$/, async function(account) {
    await navigation.depositConfiguration.deposit.go(account);
    await navigation.depositConfiguration.depositDetail.go();
    await navigation.depositConfiguration.depositConfiguration.go();
});

When(/^the user select deposit detail$/, async function() {
    await navigation.depositConfiguration.depositDetail.go();
});

When(/^the user selects deposit configuration$/, async function() {
    await navigation.depositConfiguration.depositConfiguration.go();
});

When(/^the user accesses deposit configuration review$/, async function() {
    await navigation.depositConfiguration.depositConfigurationReview.go();
});

When(/^the user selects renovation configuration$/, async function() {
    await depositConfigurationPage.selectRenovation();
});

When(/^the user selects new instruction$/, async function() {
    await depositConfigurationPage.selectNewInstruction();
});

When(/^the user continues the config process$/, async function() {
    await depositConfigurationPage.continueDepositConfiguration();
});
