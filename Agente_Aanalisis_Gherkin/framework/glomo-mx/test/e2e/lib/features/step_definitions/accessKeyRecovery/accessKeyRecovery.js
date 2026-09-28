import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import accessKeyRecovery from '../../pages/accessKeyRecovery/accessKeyRecovery';

When(/^the user accesses the recovery password screen$/, async function() {
    await navigation.accessKeyRecovery.AccessKeyRecovery.go({accessToForgotPassword: true});
});

When(/^the user "([^"]*)" the sms key "([^"]*)"$/, async function(confirm, otpSms) {
    await navigation.accessKeyRecovery.AccessKeyRecovery.go({accessToForgotPassword: true});
    await currentPage.fillForm();
    await currentPage.sendForm();
    await currentPage.fillOtp(otpSms, false, confirm.toLowerCase() !== 'confirms');
});

When(/^the user continues "([^"]*)" step$/, async function(option) {
    await accessKeyRecovery.continueOption(option);
});

When(/^the user fills the "([^"]*)" of step$/, async function(option) {
    await accessKeyRecovery.fillSummary(option);
});

When(/^the user input "([^"]*)" and "([^"]*)" and fill "([^"]*)"$/, async function(option, choose, summary) {
    await accessKeyRecovery.fillSummary(option);
    await accessKeyRecovery.continueOption(choose);
    await accessKeyRecovery.fillSummary(summary);
});

When(/^the user corrects the information with "([^"]*)"$/, async function(option) {
    await accessKeyRecovery.editNumbers(option);
});

When(/^the user tries the process several times$/, async function() {
    await accessKeyRecovery.tryingProcess();
});
