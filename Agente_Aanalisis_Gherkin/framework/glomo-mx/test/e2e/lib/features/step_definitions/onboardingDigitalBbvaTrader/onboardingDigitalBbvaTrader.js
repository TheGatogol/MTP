import { When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import onboardingBbvaTraderPage from '../../pages/onboardingBbvaTrader/onboardingBbvaTrader';

When(/^the user goes to the onboarding bbva trader offer$/, async () => {
    await navigation.onboardingBbvaTrader.onboardingBbvaTrader.go();
});

When(/^the user accepts the onboarding offer$/, async () => {
    await onboardingBbvaTraderPage.acceptOffer();
});

When(/^the user selects the account in the onboarding offer$/, async () => {
    await onboardingBbvaTraderPage.chooseAccount();
});

When(/^the user completes the onboarding flow(?: "(.*)")?(?: "(.*)")?$/, async (condition, addBeneficiaries) => {
    await onboardingBbvaTraderPage.completeFlow(condition, addBeneficiaries === 'adding beneficiaries');
});

When(/^the user continue without changes in the beneficiaries section$/, async () => {
    await onboardingBbvaTraderPage.continueWithBeneficiaries();
});

When(/^the user accepts the bbva trader terms and conditions$/, async () => {
    await onboardingBbvaTraderPage.acceptTermsAndConditionsAndContinue();
});

When(/^the user opens the "([^"]*)" beneficiary (?:form|modal)$/, async (type) => {
    await onboardingBbvaTraderPage.openBeneficiaryForm(type);
});

When(/^the user deletes the beneficiary$/, async () => {
    await onboardingBbvaTraderPage.deleteBeneficiary();
});

When(/^the user adds the first beneficiary in the beneficiaries section$/, async () => {
    await onboardingBbvaTraderPage.addSingleBeneficiary();
});

When(/^the user adds all beneficiaries in the beneficiaries section$/, async () => {
    await onboardingBbvaTraderPage.addBeneficiary();
});

When(/^the user opens the first document in the terms and conditions section$/, async () => {
    await onboardingBbvaTraderPage.openTermsDocument();
});

When(/^the user confirms the onboarding process summary$/, async () => {
    await onboardingBbvaTraderPage.confirmOnboardingProcessSummary();
});

When(/^the user confirms the onboarding bbva trader contracting$/, async () => {
    await onboardingBbvaTraderPage.contractingWithError();
});

When(/^the user confirms the operation onboarding$/, async () => {
    await onboardingBbvaTraderPage.confirmOperationOnboarding();
});

When(/^the user completes edition of beneficiary$/, async () => {
    await onboardingBbvaTraderPage.completeEditionOfBeneficiary();
});

When(/^the user changes the account associated to the onboarding offer$/, async () => {
    await onboardingBbvaTraderPage.changeAccountInSummary();
});

When(/^the user return to "([^"]*)" section from summary$/, async (section) => {
    await onboardingBbvaTraderPage.returnToSectionFromSummary(section);
});

When(/^the user closes the beneficiary form$/, async () => {
    await onboardingBbvaTraderPage.closeBeneficiaryForm();
});

When(/^the user only fills part of the beneficiary form$/, async () => {
    await onboardingBbvaTraderPage.addBeneficiary(true);
});
