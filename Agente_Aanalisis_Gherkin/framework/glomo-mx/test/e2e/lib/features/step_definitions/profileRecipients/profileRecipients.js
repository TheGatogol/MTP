import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import profileRecipients from '../../pages/profileRecipients/profileRecipientsInit';
import recipientsForm from '../../pages/profileRecipients/recipientsForm';
import recipientsFormAddress from '../../pages/profileRecipients/recipientsFormAddress';
import profileRecipientsBeneficiaries from '../../pages/profileRecipients/profileRecipients';

function getBeneficiary() {
    return user.beneficiry;
}

function getAddress() {
    return user.address;
}

When(/^the user chooses the "([^"]*)" account$/, async function (account) {
    await profileRecipients.chooseAccount(account);
});

When(/^the user goes to register beneficiary with "([^"]*)" account$/, async function (account) {
    await navigation.profileRecipients.profileRecipientsInit.go({forceLogin: true});
    await profileRecipients.chooseAccount(account);
    await navigation.profileRecipients.recipientsForm.go();
});

When(/^the user fills the beneficiary data (and stay|and continue)$/, async function (stay) {
    const beneficiary = getBeneficiary();
    await recipientsForm.fillBeneficiary({beneficiary});
    if (stay === 'and continue') {
        await navigation.profileRecipients.profileRecipientsInit.go({forceLogin: true});
    }
});

When(/^the user assigns a percentage to the beneficiary$/, async function () {
    await profileRecipients.assignPercentageToBeneficiary();
});

When(/^the user registers the beneficiary$/, async function () {
    await navigation.profileRecipients.RecipientsSuccess.go();
});

When(/^the user accesses to register screen$/, async function () {
    await navigation.profileRecipients.recipientsForm.go({forceLogin: true});
});

When(/^the user accesses to summary screen$/, async function () {
    await profileRecipients.goTo('summary');
});

When(/^the user ends the form$/, async function () {
    await profileRecipients.goTo('open OTP Modal');
});

When(/the user decides to change the account$/, async function () {
    await profileRecipients.goTo('change account');
});

When(/the user changes a beneficiary$/, async function () {
    await profileRecipients.goTo('change beneficiary');
});

When(/the user access to the modal delete beneficiary$/, async function () {
    await profileRecipients.goTo('open remove recipient modal');
});

When(/the user applies the beneficiary changes$/, async function () {
    await navigation.profileRecipients.RecipientsSuccess.go();
});

When(/the user selects to register another address$/, async function () {
    await recipientsForm.enableNewAddressReg();
});

When(/the user fills the new address data$/, async function () {
    const address = getAddress();
    await recipientsFormAddress.fillNewAddress(address);
    await navigation.profileRecipients.recipientsForm.go({forceLogin: true});
});

When(/the user closes the beneficiary screen$/, async function () {
    await profileRecipients.closeScreen();
});
When(/the user tries to access the recipients list three times$/, async function () {
    await profileRecipients.beneficiariesListRetry();
});

When(/the user tries registers the beneficiary$/, async function () {
    await profileRecipients.goTo('success');
});

When(/the user acceses to profile recipients screen$/, async function () {
    await navigation.profile.go({forceLogin: true});
    await navigation.profileRecipients.profileRecipientsInit.go();
});

When(/^the user shows the direction and register a new recipient$/, async function () {
    await navigation.profileRecipients.recipientsForm.go();
    await recipientsForm.showAddressAndFillUser();
    await navigation.profileRecipients.profileRecipientsInit.go();
});

When(/^the user accesses to profile recipients screen$/, async function () {
    await navigation.profileRecipients.profileRecipients.go({forceLogin: true});
    await profileRecipientsBeneficiaries.goToBeneficiaries();
});

When(/^the user accesses to privacy notices screen$/, async function () {
    await profileRecipientsBeneficiaries.openPrivacy();
});

When(/^the user selects an account for the recipient$/, async function () {
    await profileRecipientsBeneficiaries.selectAccount();
});

When(/^the user reveals address data$/, async function () {
    await profileRecipientsBeneficiaries.goToaddRecipients();
    await profileRecipientsBeneficiaries.viewData();
});

When(/^the user adds a beneficiary(?: with "([^"]*)" address)?$/, async function (option) {
    await profileRecipientsBeneficiaries.goToaddRecipients();
    if (option) {
        await profileRecipientsBeneficiaries.addBeneficiary(option);
    }
});

When(/^the user sends "([^"]*)" percentage for the beneficiary$/, async function (option) {
    await profileRecipientsBeneficiaries.sendPercentage(option);
    await profileRecipientsBeneficiaries.successPercentage();
});

When(/^the user changes the account for the beneficiary$/, async function () {
    await profileRecipientsBeneficiaries.changeAccount();
});

When(/^the user continues to summary$/, async function () {
    await profileRecipientsBeneficiaries.continueToSummary();
});

When(/^the user registers wrongly with a "([^"]*)"$/, async function (option) {
    await profileRecipientsBeneficiaries.errorMessage(option);
});

When(/^the user closes the profile recipient form$/, async function () {
    await profileRecipientsBeneficiaries.exitRecipients();
    await navigation.profile.assert();
});

When(/^the user selects a solidary account$/, async function () {
    await profileRecipientsBeneficiaries.selectInvalidAccount();
});

When(/^the user removes recipient$/, async function () {
    await profileRecipientsBeneficiaries.removeRecipient();
    await profileRecipientsBeneficiaries.successPercentage();
});

When(/^the user edits recipients information$/, async function () {
    await profileRecipientsBeneficiaries.editRecipientsInformation();
});

When(/^the user assigns a percentage above one hundred$/, async function () {
    await profileRecipientsBeneficiaries.sendPercentage('one');
});

When(/^the user retries to register the recipient$/, async function () {
    await profileRecipientsBeneficiaries.retryRequest();
});

When(/^the user with an already registered recipient accesses to profile recipients$/, async function () {
    await navigation.profileRecipients.profileRecipients.go({forceLogin: true});
});

When(/^the user access profile recipients from (nba|nbo)$/, async function(access) {
    await navigation.profileRecipients.profileRecipients.go({access});
});
