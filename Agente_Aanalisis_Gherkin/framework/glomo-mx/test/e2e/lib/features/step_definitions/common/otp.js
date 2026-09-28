import {Then, When} from '@cucumber/cucumber';

Then(/^the sms key "([^"]*)" is entered$/, async function(otpSms) {
    await currentPage.fillOtp(otpSms);
});

When(/^the sms key "([^"]*)" is entered removing the focus$/, async function(otpSms) {
    await currentPage.fillOtp(otpSms, true);
});

When('the user is in the otp modal', async function () {
    await currentPage.accessToOtpModal();
});
