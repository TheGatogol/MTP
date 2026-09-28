import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import ocMetaSegura from '../../pages/ocMetasegura/ocMetasegura';

When(/^the user accesses to the metasegura offer detail$/, async function() {
    await navigation.ocMetasegura.ocMetaSegura.go();
});

When(/^the user accesses to the "([^"]*)" step of the metasegura offer$/, async function(step) {
    await currentPage.goToStep({step});
});

When(/^the user opens the expandable questions$/, async function() {
    await currentPage.showWYSKAnswers();
});

When(/^the user opens the "([^"]*)" PDF$/, async function(pdfName) {
    await currentPage.openPDF(pdfName);
});

When(/^the user selects "([^"]*)" as health condition(| and continues)$/, async function(healthStatus, continueOrStay) {
    await currentPage.selectHealthOption(healthStatus);
    if(continueOrStay){
        await currentPage.continueProcess();
    }
});

When(/^the user close call me back tooltip$/, async function() {
    await ocMetaSegura.closeModalTooltip();
});

When(/^the user closes the current metasegura step$/, async function() {
    await ocMetaSegura.closeCurrentStep();
});

When(/^the user exits the metasegura offer$/, async function() {
    await ocMetaSegura.exitOffer();
});

When(/^the user inputs "([^"]*)" as the goal$/, async function(amount) {
    await currentPage.inputGoal(amount);
});

When(/^the user changes the contract period to the max allowed$/, async function() {
    await currentPage.chooseMaxPeriod();
});

When(/^the user selects the "([^"]*)" payment option$/, async function(option) {
    await currentPage.choosePaymentFrequency(option);
});

When(/^the user inputs an invalid code as executive code$/, async function() {
    await currentPage.registerExecCode({code: 'abc123e', invalidCode: true});
});

When(/^the user registers an executive code$/, async function() {
    await currentPage.openModal('executive code');
    await currentPage.registerExecCode({code: user.executiveCode});
    await currentPage.closeDialog();
});

When(/^the user deletes the registered executive code$/, async function() {
    await currentPage.deleteExecutiveCode();
});

When(/^the user adds "([^"]*)" beneficiaries$/, async function(option) {
    await currentPage.addBeneficiaries(~~option);
});

When (/^the user edits a beneficiary$/, async function() {
    await currentPage.editFirstBeneficiary();
});

When (/^the user deletes a beneficiary$/, async function() {
    await currentPage.deleteFirstBeneficiary();
});

When (/^the user edits the percentages to "([^"]*)"$/, async function(percentage) {
    await currentPage.openModal('edit percentages');
    await currentPage.editPercentages(~~percentage);
});

When (/^the user enters the wrong info on new beneficiary$/, async function() {
    await currentPage.fillBeneficiary(user.wrongBeneficiares[0]);
});

When (/^the user opts to add a new address(| and enters the modal)$/, async function(confAddAddress) {
    if(confAddAddress){
        await currentPage.registerNewAddress();
    } else {
        await currentPage.enableNewAddressReg();
    }
});

When (/^the user enters the beneficiary address$/, async function() {
    await currentPage.fillNewAddress(user.genericAddress);
});

When (/^the user reveals his address$/, async function() {
    await currentPage.showAddress();
});

When(/^the user accesses to the list of all his cards and accounts$/, async function() {
    await currentPage.openMoreAccountsModal();
});

When (/^the user selects the account "([^"]*)" as payment option$/, async function(account) {
    await currentPage.choosePaymentAccount(account);
});

When (/^the user accept terms and conditions$/, async function() {
    await currentPage.acceptAllTermsAndCondition();
});

When (/^the user accesses to the "([^"]*)" modal$/, async function(option) {
    await currentPage.openModal(option);
});

When (/^the user selects 3 checkboxes$/, async function() {
    await currentPage.selectTermsAndConditionOptions();
});

When (/^the user (accesses|attempts to access) to the meta segura success page$/, async function(atemptOrAccess) {
    if(atemptOrAccess==='accesses'){
        await navigation.ocMetasegura.ocMetaSeguraSuccess.go();
    } else if(atemptOrAccess==='attempts to access'){
        await navigation.ocMetasegura.ocMetaSegura.go();
        await currentPage.goToStep({step: 'summary'});
        await currentPage.finishContracting();
        await currentPage.fillOtp('11111111');
    }
});

When(/^the user accesses to the token page before the success page$/, async function() {
    await currentPage.finishContracting();
});

When(/^the user edits the "([^"]*)" step from summary step$/, async function(changes) {
    await currentPage.editSection(changes);
});

When(/^the user closes the meta segura success page$/, async function() {
    await currentPage.closeSuccessPage();
});
