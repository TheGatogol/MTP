import {When} from '@cucumber/cucumber';
import incomeLimits from '../../pages/incomeLimits/incomeLimits.js';

When(/^the user accesses the information screen$/, async function() {
    await incomeLimits.continueShareInfo();
});

When(/^the user accesses the share economic activity step$/, async function() {
    await incomeLimits.continueShareInfo();
    await incomeLimits.acceptInfo();
});

When(/^the user enter the required information in economic activity step$/, async function() {
    await incomeLimits.stepEconomicActivity();
});

When(/^the user accesses to proof of income step$/, async function() {
    await incomeLimits.stepEconomicActivity();
    await incomeLimits.nextStepProofOfIncome();
});

When(/^the user enters invoices as proof of income$/, async function() {
    await incomeLimits.selectInvoices();
});

When(/^the user accesses to agreement step$/, async function() {
    await incomeLimits.selectInvoices();
    await incomeLimits.nextStepAgreement();
});

When(/^the user confirms that the information provided is true$/, async function() {
    await incomeLimits.selectInvoices();
    await incomeLimits.acceptVerificationOfInformation();
});

When(/^the user gets to the confirm summary screen with all steps filled$/, async function() {
    await incomeLimits.selectInvoices();
    await incomeLimits.summaryOfTheSteps();
});

When(/^the user confirms the information and gets to the success screen$/, async function() {
    await incomeLimits.selectInvoices();
    await incomeLimits.continueToTheTokenScreen();
});

When(/^the user accesses information about "([^"]*)"$/, async function(option) {
    switch (option.toLowerCase()) {
        case 'details of your economic activity':
            await incomeLimits.tooltipOfEconomicActivity();
            break;
        case 'reasons for deposits':
            await incomeLimits.tooltipOfReasonsForDeposits();
            break;
        default:
            throw new Error(`${option} select is not available to show...`);
    }
});

When(/^the user enters an "([^"]*)" as proof of income step$/, async function(option) {
    switch (option.toLowerCase()) {
        case 'monthly statement':
            await incomeLimits.selectMonthlyStatement();
            await incomeLimits.uploadProofOfIncome();
            break;
        case 'annual statement':
            await incomeLimits.selectAnnualStatement();
            await incomeLimits.uploadProofOfIncome();
            break;
        case 'contract':
            await incomeLimits.selectContract();
            await incomeLimits.uploadProofOfIncome();
            break;
        case 'agreement':
            await incomeLimits.selectAgreement();
            await incomeLimits.uploadProofOfIncome();
            break;
        case 'modal monthly statement':
            await incomeLimits.selectMonthlyStatement();
            await incomeLimits.linkToUploadProofOfIncome();
            break;
        case 'modal annual statement':
            await incomeLimits.selectAnnualStatement();
            await incomeLimits.linkToUploadProofOfIncome();
            break;
        case 'modal contract':
            await incomeLimits.selectContract();
            await incomeLimits.linkToUploadProofOfIncome();
            break;
        case 'modal agreement':
            await incomeLimits.selectAgreement();
            await incomeLimits.linkToUploadProofOfIncome();
            break;
        case 'modal invoice':
            await incomeLimits.selectInvoice();
            await incomeLimits.linkToUploadProofOfIncome();
            break;
        default:
            throw new Error(`${option} select is not available to show...`);
    }
});

When(/^the user accesses information about the invoices that need to be uploaded$/, async function() {
    await incomeLimits.infoOnUploadedInvoices();
});

When(/^the user accesses to proof of income step to update documents$/, async function() {
    await incomeLimits.updateDocument();
});

When(/^the user accesses to economic activity step to update form$/, async function() {
    await incomeLimits.updateForm();
});

When(/^the user updates the form and documents$/, async function() {
    await incomeLimits.updateInfoAndDocs();
});

When(/^the user enter the information in economic activity step and displays error "([^"]*)"$/, async function(option) {
    switch (option.toLowerCase()) {
        case 'service not available':
            await incomeLimits.serviceNotAvailable();
            break;
        case 'service not available softtoken':
            await incomeLimits.serviceNotAvailableSofttoken();
            break;
        default:
            throw new Error(`${option} select is not available to show...`);
    }
});
