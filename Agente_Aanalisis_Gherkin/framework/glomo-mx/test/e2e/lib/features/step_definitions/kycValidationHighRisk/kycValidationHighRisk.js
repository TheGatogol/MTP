import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import kycValidationHighRisk from '../../pages/kycValidationHighRisk/kycValidationHighRisk';

When(/^the user accesses the privacy notice modal$/, async function() {
    await kycValidationHighRisk.showModalPrivacyNotice();
});

When(/^the user closes the privacy notice modal$/, async function() {
    await kycValidationHighRisk.closeModalPrivacyNotice();
});

When(/^the user accesses to the "([^"]*)" questionnaire step$/, async function(step) {
    await navigation.proceedings.proceedings.go();
    await navigation.kycValidationHighRisk.kycValidationHighRisk.go();
    await kycValidationHighRisk.goToStep(step);
});

When(/^the user aswers "([^"]*)" and selects the main source of income$/, async function(option) {
    await kycValidationHighRisk.useOfAccountAnswer(option);
});

When(/^the user enters to the "([^"]*)" tooltip$/, async function(option) {
    await kycValidationHighRisk.toolTip(option);
});

When(/^the user enters to the document upload modal$/, async function() {
    await kycValidationHighRisk.documentUploadModal();
});

When(/^the user selects yes to public position question$/, async function() {
    await kycValidationHighRisk.selectYesToPublicPosition();
});

When(/^the user selects none to economic dependents question$/, async function() {
    await kycValidationHighRisk.selectWorkIncome(4);
});

When(/^the user fills the personal information form$/, async function() {
    await kycValidationHighRisk.fillPersonaInformationForm();
});

When(/^the user fills the work income form "([^"]*)"$/, async function(option) {
    await kycValidationHighRisk.fillWorkIncomeOwnBusinessForm(option);
});

When(/^the user selects a proof of income type$/, async function() {
    await kycValidationHighRisk.useOfAccountContinue();
});

When(/^the user exits the go branch screen$/, async function() {
    await kycValidationHighRisk.exitGoBranchScreen();
});

When(/^the user selects other main source of income$/, async function() {
    await kycValidationHighRisk.selectSourceIncome(5);
    await navigation.proceedings.proceedings.go();
    await navigation.kycValidationHighRisk.kycValidationHighRisk.go();
});

When(/^the user selects an option in source of income$/, async function() {
    await kycValidationHighRisk.selectSourceIncome(5);
    await kycValidationHighRisk.useOfAccountContinue();
    await kycValidationHighRisk.retrySectionCannotBeSavedErrorModal();
});

When(/^the user fills the work income form for other source of income$/, async function() {
    await kycValidationHighRisk.fillOtherSourceIncome();
    await kycValidationHighRisk.documentUploadModal();
});

When(/^the user fills the work income employment form$/, async function() {
    await kycValidationHighRisk.fillWorkIncomeEmploymentForm();
});

When(/^the user continues account user$/, async function() {
    await kycValidationHighRisk.selectSourceIncome(3);
    await kycValidationHighRisk.useOfAccountContinue();
});

When(/^the user taps on error modal retry button?$/, async function() {
    await kycValidationHighRisk.handleErrorModalRetries();
});
