import { When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import ocAccount from '../../pages/ocAccount/ocAccount';

When(/^the user accesses to offer oc account$/, async function () {
    await navigation.ocAccount.ocAccount.go();
});

When(/^the user accesses to "([^"]*)" from offer page$/, async function (screen) {
    switch (screen.toLowerCase()) {
        case 'know more':
            await ocAccount.accessToKnowMore();
            break;
        case 'personal data':
            await ocAccount.accessToPersonalData();
            break;
        default:
            throw new Error(`The option: ${screen} is not implemented`);
    }
});

When(/^the user continues to terms and conditions$/, async function () {
    await ocAccount.continueToTermsAndConditions();
});

When(/^the user confirms terms and conditions of contract account$/, async function () {
    await ocAccount.confirmTermsAndConditions();
});

When(/^the user confirms the contracting of the account$/, async function () {
    await ocAccount.confirmContractingAccount();
});

When(/^the user updates his account$/, async function () {
    await ocAccount.accessToUpgradeAccount();
});

When(/^the user retries to call the service 3 times$/, async function () {
    await ocAccount.retryService();
});

When(/^the user returns to the dashboard from "([^"]*)"$/, async function (option) {
    await navigation.dashboard.go({ option });
});

When(/^the user displays his address$/, async function () {
    await ocAccount.displaysAddress();
});

When(/^the user verifies his personal data again$/, async function () {
    await ocAccount.verifyPersonalData();
});

When(/^the user consults terms and conditions from summary$/, async function () {
    await ocAccount.consultTermsAndConditions();
});

When(/^the user consults the privacy notice$/, async function () {
    await ocAccount.consultPrivacyNotice();
});

When(/^the user closes his personal data$/, async function () {
    await ocAccount.closePersonalDataPage();
});

When(/^the user accepts the terms and conditions of the product$/, async function () {
    await ocAccount.acceptTermsAndConditions();
});

When(/^the user opens the account by entering the otp$/, async function () {
    await ocAccount.contractAccountWithOtp();
});

When(/^the user accesses to upgrade N2 to N4 account$/, async function () {
    await navigation.payrollPortabilityDocument.payrollPortabilityDocument.go();
});
