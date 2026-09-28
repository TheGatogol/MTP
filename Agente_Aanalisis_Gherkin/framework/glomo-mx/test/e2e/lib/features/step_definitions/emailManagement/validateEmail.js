import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import validateEmailPage from '../../pages/emailManagement/validateEmail';

When(/^the user wants to leave email validation process$/, async function() {
    await validateEmailPage.leaveValidation();
});

When(/^the user continues the email address update with a "([^"]*)" otp code received by email$/, async function(type) {
    switch (type.toLowerCase()) {
        case 'wrong':
            await validateEmailPage.validateMailCode();
            break;
        case 'right':
            await navigation.emailManagement.validatedEmailSuccess.go();
            break;
        case 'none':
            await validateEmailPage.showTimer();
            break;
        default:
            throw new Error(`${type} code is not available...`);
    }
});

When(/^the user clears the code entry$/, async function() {
    await validateEmailPage.deleteOtp();
});

When(/^the user enters "([^"]*)" in the OTP$/, async function(otp) {
    await validateEmailPage.validateMailCharacters(otp);
});
