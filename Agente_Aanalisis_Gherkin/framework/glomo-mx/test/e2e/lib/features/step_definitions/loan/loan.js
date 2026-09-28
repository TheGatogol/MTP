import {When, Then} from '@cucumber/cucumber';

// Utility requires
import * as navigation from '../../navigation';
import carLoan from '../../pages/loan/carLoan';
import carLoanSuccess from '../../pages/loan/carLoanSuccess';
import loanPayment from '../../pages/loan/loanPayment';
import sustainableRateJustification from '../../pages/sustainableRateJustification/sustainableRateJustification';
import loanPage from '../../pages/loan/loanPage';

When(/^the user accesses to loan$/, async function() {
    await navigation.loan.loan.go();
});

When(/^the user accesses to edit alias$/, async function() {
    await navigation.loan.loanEditAlias.go();
});

When(/^the user accesses to more infomation loan$/, async function() {
    await navigation.loan.loanMoreInfo.go();
});

When(/^the user accesses to upload and send files$/, async function() {
    await navigation.loan.loanSustainability.go();
});

When(/^the user continues from onboarding sustainable$/, async function() {
    await sustainableRateJustification.confirmOnboarding();
});

When(/^the user accesses to close the upload invoice modal$/, async function () {
    await navigation.loan.loan.go();
});

When(/^the user continues to send invoices with files$/, async function() {
    await sustainableRateJustification.confirmOnboarding();
    await sustainableRateJustification.showDocument();
});

When(/^the user accesses to the more information modal$/, async function() {
    await loanPage.accessModalMoreInfo();
});

When(/^the user close modal more info$/, async function() {
    await loanPage.closeModalMoreInfo();
});

When(/^the user selects upload file$/, async function() {
    await sustainableRateJustification.continueMoreFiles();
});

When(/^the user accesses to the review information modal/, async function() {
    await sustainableRateJustification.accessSendUploadFiles();
});

When(/^the user accesses to the car loan offer from "([^"]*)"$/, async function(entryPoint) {
    switch (entryPoint.toLowerCase()) {
        case 'dashboard':
            await navigation.dashboard.go();
            await navigation.loan.carLoan.go();
            break;
        case 'opportunities':
            await navigation.loan.carLoan.go();
            break;
        case 'car simulator':
            await navigation.loan.carLoan.go();
            break;
        case 'car loan universal':
            await navigation.ocCarLoanUniversal.ocCarLoanUniversal.go();
            break;
        default:
            throw new Error(`Not recognized option "${entryPoint}"`);
    }
});

When(/^the user continues to the "([^"]*)" step$/, async function(step){
    await carLoan.continueToStep(step);
});

When(/^the user completes the terms and conditions step$/, async function() {
    await carLoan.checkCheckboxes();
});

When(/^the user accepts the summary$/, async function(){
    await navigation.loan.carLoanSuccess.go('11111111');
});

When(/^the user selects the "([^"]*)" car option$/, async function(option) {
    await carLoan.selectCheckbox(option);
});

When(/^the user inputs "([^"]*)" as a loan ammount$/, async function(ammount) {
    await carLoan.insertAmmount(ammount);
});

When(/^the user modifys the loan term$/, async function() {
    await carLoan.changeTermValue();
});

When(/^the user wants to change the car loan values$/, async function(){
    await carLoan.changeValues();
});

When(/^the user wants to check the terms and conditions$/, async function(){
    await carLoan.checkTermsAndConditions();
});

When(/^the user "([^"]*)" exits the functionality$/, async function(action){
    await carLoan.exitCarLoan(action);
});

When(/^the user (applies for the loan|applies for the loan with a bad otp)$/, async function(context){
    switch (context) {
        case 'applies for the loan':
            await carLoan.acceptLoan('11111111');
            break;
        case 'applies for the loan with a bad otp':
            await carLoan.acceptLoan('12345678');
            break;
        default:
            throw new Error(`Not recognized option "${context}"`);
    }
});

When(/^the user continues to the otp screen$/, async function(){
    await carLoan.continueToOtp();
});

Then(/^the user confirms the term has changed$/, async function(){
    await carLoan.checkTerm();
});

When(/^the user select 36 months$/, async function(){
    await carLoan.selectMonths();
});

When(/^the user selects a term$/, async function(){
    await carLoan.selectMonthsError();
});

When(/^the user exits the "([^"]*)" screen$/, async function(screen){
    await carLoan.acceptModal(screen);
});

When(/^the user accesses to call me back$/, async function () {
    await carLoan.accessToCallMeBack();
});

When(/^the user share receipt$/, async function () {
    await carLoanSuccess.accessToShareReceipt();
});

When(/^the user accesses to pay credit$/, async function () {
    await navigation.loan.loan.go();
    await navigation.loan.loanPayCredit.go();
});

When(/^the user accesses to "([^"]*)" pay$/, async function (type) {
    switch(type){
        case'receipt amount':
            await loanPayment.accessApaymentType('titleAmountOverdue');
            break;
        case'other amount':
            await loanPayment.accessApaymentType('titleOtherAmount');
            break;
        case'loan settlement':
            await loanPayment.accessApaymentType('titleSettleLoan');
            break;
        default:
            throw new Error(`Not recognized option "${type}"`);
    }
});

When(/^the user enter link detail$/, async function () {
    await loanPayment.accessSeeDetail();
});

When(/^the user enter help button$/, async function () {
    await loanPayment.accessHelp();
});

When(/^the user enter close detail button$/, async function () {
    await loanPayment.accessCloseDetail();
});

When(/^the user enter close concept button$/, async function () {
    await loanPayment.accessCloseConcept();
});

When(/^the user enter continue reciept button$/, async function () {
    await loanPayment.accessReceipt();
});

When(/^the user ingrese amount of "([^"]*)"$/, async function (amount) {
    await loanPayment.accessAmount({amount});
});

When(/^the user enter on the calculate payment button$/, async function () {
    await loanPayment.accessCalculatePayment();
});

When(/^the user enter on the calculate payment and continue$/, async function () {
    await loanPayment.accessCalculatePayment();
    await loanPayment.accessContinue();
});

When(/^the user enter on the continue button radio$/, async function () {
    await loanPayment.accessContinueRadio();
});

When(/^the user select account loan$/, async function () {
    await loanPayment.accessResumen();
});

When(/^the user select account and enter pay$/, async function () {
    await loanPayment.accessResumen();
    await loanPayment.accessPay();
});

When(/^the user select change the amount entered$/, async function () {
    await loanPayment.accessChangeAmountEntered();
});

When(/^the user enter continue settlement button$/, async function () {
    await loanPayment.accessContinueSettlement();
});

When(/^the user change type payment$/, async function () {
    await loanPayment.accessReceipt();
    await loanPayment.accessChangeTypePayment();
});

When(/^the user enter all accounts$/, async function () {
    await loanPayment.accessSeeAllAccounts();
});

When(/^the user enter exit$/, async function () {
    await loanPayment.accessExit();
});

When(/^the user select term reduction option and continue$/, async function () {
    await loanPayment.accessCalculatePayment();
    await loanPayment.accessTermReduction();
    await loanPayment.accessContinueRadio();
});

When(/^the user select pay$/, async function () {
    await loanPayment.accessPay();
    await loanPayment.confirmShowData();
});

When(/^the user opts for deadline reduction and proceeds$/, async function () {
    await loanPayment.selectionReductionTerm();
});

When(/^the user starts quota cut, picks account and adjusts "([^"]*)"$/, async function (opcion) {
    await loanPayment.selectQuotaReduction();
    await loanPayment.selectRetirementAccount();
    await loanPayment.selectOptionLink(opcion);
});
