import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import ocLoanRelocation from '../../pages/ocLoanRelocation/ocLoanRelocation';

When(/^the user accesses to loan relocation offer$/, async function() {
    await navigation.ocLoanRelocation.ocLoanRelocation.go();
});

When (/^the user selects "([^"]*)" button$/, async function(option) {
    await ocLoanRelocation.selectButton(option);
});

When (/^the user requests the "([^"]*)"$/, async function(option) {
    await ocLoanRelocation.amountLess(option);
});

When (/^the user to access to security screen$/, async function() {
    await ocLoanRelocation.otpScreen();
});

When (/^the user confirms the offer$/, async function() {
    await ocLoanRelocation.confirmShowData();
});
