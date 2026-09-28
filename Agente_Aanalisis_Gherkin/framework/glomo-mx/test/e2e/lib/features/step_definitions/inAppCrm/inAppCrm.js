import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import inAppCrmAdvancedPage from '../../pages/inAppCrmAdvancedPage/inAppCrmAdvancedPage';
import profileRecipients from '../../pages/profileRecipients/profileRecipients';
import recipientsForm from '../../pages/profileRecipients/recipientsForm';
import recipientsFormAddress from '../../pages/profileRecipients/recipientsFormAddress';

function getBeneficiary() {
    return user.beneficiry;
}

function getAddress() {
    return user.address;
}

When(/^the user is in the In App Crm screen$/, async function() {
    await navigation.dashboard.go();
    await navigation.landing.go({resetApp: true});
    await navigation.inAppCrm.inAppCrm.go();
});

When(/^the user access the dashboard with "([^"]*)"$/, async function(button) {
    await navigation.dashboard.go({ button });
});

When(/^the user access dashboard without in app crm$/, async function() {
    await navigation.dashboard.go();
    await navigation.landing.go({resetApp: true});
    await navigation.dashboard.go();
});

When(/^the user accesses to In App advanced$/, async function() {
    await navigation.dashboard.go();
    await navigation.landing.go({resetApp: true});
    await navigation.fido.fido.go();
    await navigation.landing.go({resetApp: true});
    await navigation.inAppCrmAdvancedPage.inAppCrmAdvancedPage.go();
});

When(/^the user displays an informative message$/, async function() {
    await inAppCrmAdvancedPage.sectionInfo();
});

When(/^the user views the In App privacy notice$/, async function() {
    await inAppCrmAdvancedPage.messageInfo();
});

When(/^the user accesses to the In App beneficiaries screen$/, async function () {
    await navigation.profileRecipients.recipientsHelpModal.go();
});

When(/^the user accesses to know more from In App screen$/, async function () {
    await inAppCrmAdvancedPage.sectionInfo();
});

When(/^the user exits the learn more screen$/, async function () {
    await inAppCrmAdvancedPage.closeModal();
});

When(/^the user goes to "([^"]*)" step in the In App CRM screen$/, async function (option) {
    switch (option) {
        case 'know more':
            await inAppCrmAdvancedPage.sectionInfo();
            break;
        case 'another time':
            await inAppCrmAdvancedPage.closeSecundary();
            break;
        case 'privacy notice':
            await inAppCrmAdvancedPage.messageInfo();
            break;
        case 'continue':
            await inAppCrmAdvancedPage.continueModal();
            break;
        default:
            throw new Error(`${option} option is not implemented.`);
    }
});

When(/^the user navigates to beneficiary flow$/, async function() {
    await inAppCrmAdvancedPage.sectionContinue();
});

When(/^the user accepts terms and conditions of inApp$/, async function() {
    await inAppCrmAdvancedPage.sectionAcceptModal();
});

When(/^the user navigates to the dashboard when selecting another time in inApp$/, async function() {
    await inAppCrmAdvancedPage.sectionOther();
});

When(/^the user navigation to the dashboard from inApp$/, async function() {
    await navigation.dashboard.go();
});

When(/^the user cancels external link$/, async function() {
    await inAppCrmAdvancedPage.closeDialog();
});

When(/^the user accesses to In App advanced beneficiary$/, async function() {
    await navigation.dashboard.go();
    await navigation.landing.go({resetApp: true});
    await navigation.fido.fido.go();
    await navigation.landing.go({resetApp: true});
    await navigation.digitalToken.go();
    await navigation.inAppCrmAdvancedPage.inAppCrmAdvancedPage.go({activeLaterToken: false});
    await navigation.profileRecipients.recipientsHelpModal.go();
    await navigation.profileRecipients.profileRecipients.go({ forceLogin: true });
});
When(/^the user goes to register beneficiary with "([^"]*)" account in App$/, async function(account) {
    await profileRecipients.chooseAccount(account);
    await navigation.profileRecipients.recipientsForm.go();
    const beneficiary = getBeneficiary();
    await recipientsForm.fillBeneficiary({beneficiary});
});

When(/^the user navigation to dashboard from recipients$/, async function() {
    await navigation.dashboard.go({button: true});
});

When(/^the user completes the registration$/, async function () {
    const address = getAddress();
    await recipientsFormAddress.fillNewAddress(address);
    await navigation.profileRecipients.recipientsForm.go({forceLogin: true});
    await navigation.profileRecipients.profileRecipients.go({forceLogin: true});
    await profileRecipients.assignPercentageToBeneficiary();
    await navigation.profileRecipients.RecipientsSuccess.go({ otpNative: true });
});
