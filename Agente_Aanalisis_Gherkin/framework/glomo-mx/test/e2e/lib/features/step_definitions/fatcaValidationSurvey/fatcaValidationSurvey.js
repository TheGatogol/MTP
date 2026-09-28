import {When} from '@cucumber/cucumber';
import fatcaValidationSurveyPage from '../../pages/fatcaValidationSurvey/fatcaValidationSurvey';

When(/^the user selects the option correct info$/, async function() {
    await fatcaValidationSurveyPage.optionSelectionRadioOption('correct info');
    await fatcaValidationSurveyPage.showTaxResidenceInformation();
});

When(/^the user selects the option in other countries$/, async function() {
    await fatcaValidationSurveyPage.optionSelectionRadioOption('in other countries');
    await fatcaValidationSurveyPage.addTaxResidence();
    await fatcaValidationSurveyPage.enterDataIntoTheForm('54321', 'AFG');
    await fatcaValidationSurveyPage.continueAddResidence();
});

When(/^the user selects the option incorrect info$/, async function() {
    await fatcaValidationSurveyPage.optionSelectionRadioOption('incorrect info');
    await fatcaValidationSurveyPage.showTaxInformationIncorrectResidence();
});

When(/^the user edits a tax residence "([^"]*)"$/, async function(result) {
    await fatcaValidationSurveyPage.optionSelectionRadioOption('in other countries');
    await fatcaValidationSurveyPage.editTaxResidence('12345');
    await fatcaValidationSurveyPage.enterTaxResidenceWithStatus(result);
});

When(/^the user confirms its information$/, async function() {
    await fatcaValidationSurveyPage.optionSelectionRadioOption('correct info');
    await fatcaValidationSurveyPage.showTaxSummary();
});

When(/^the user deletes a tax residence$/, async function() {
    await fatcaValidationSurveyPage.optionSelectionRadioOption('in other countries');
    await fatcaValidationSurveyPage.deletedTaxResidence();
});

When(/^the user edits the information from the summary screen "([^"]*)"$/, async function(result) {
    await fatcaValidationSurveyPage.optionSelectionRadioOption('correct info');
    await fatcaValidationSurveyPage.editSummaryStepConfirmationSummary(result);
});

When(/^the user edits a tax residence from the summary$/, async function() {
    await fatcaValidationSurveyPage.optionSelectionRadioOption('in other countries');
    await fatcaValidationSurveyPage.editResidenceSummary('6677881');
});

When(/^the user redirects to branch from the summary$/, async function() {
    await fatcaValidationSurveyPage.optionSelectionRadioOption('correct info');
    await fatcaValidationSurveyPage.editSummaryStepConfirmation();
});

When(/^the user exits the process upon entering$/, async function() {
    await fatcaValidationSurveyPage.exitProcessFlow();
});

When(/^the user exits the process of entering tax residences$/, async function() {
    await fatcaValidationSurveyPage.optionSelectionRadioOption('in other countries');
    await fatcaValidationSurveyPage.exitProcessAddResidence();
});

When(/^the user tries to complete the flow$/, async function() {
    await fatcaValidationSurveyPage.optionSelectionRadioOption('correct info');
    await fatcaValidationSurveyPage.serviceFailure();
});

When(/the user adds a new additional tax residence "([^"]*)"$/, async function(option) {
    await fatcaValidationSurveyPage.optionSelectionRadioOption('in other countries');
    await fatcaValidationSurveyPage.addTaxResidence();
    await fatcaValidationSurveyPage.enterInformationCountryInForm(option);
});
