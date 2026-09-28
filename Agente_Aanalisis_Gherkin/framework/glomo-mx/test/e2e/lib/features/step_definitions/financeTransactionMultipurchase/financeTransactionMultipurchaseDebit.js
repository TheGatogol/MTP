import {When, Then} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import financeTransactionMultipurchaseDebit from '../../pages/financeTransactionMultipurchase/financeTransactionMultipurchaseDebit';
import orangeCardProductDetail from '../../pages/productDetails/orangeCardProductDetail';
import financeTransactionMultipurchaseDebitPostHiringPage from '../../pages/financeTransactionMultipurchase/financeTransactionMultipurchaseDebitPostHiring';
import flexibleFinancingDashboard from '../../pages/flexibleFinancing/paymentDashboard';

When(/^the user accesses to finance transaction multipurchase debit$/, async function() {
    await navigation.financeTransactionMultipurchase.financeTransactionMultipurchaseDebit.go();
    await financeTransactionMultipurchaseDebit.accessPurchaseSelection();
});

When(/^the user attempts to access to finance transaction multipurchase debit post hiring$/, async function() {
    await navigation.financeTransactionMultipurchase.financeTransactionMultipurchaseDebitPostHiring.attempt();
});

When(/^the user accesses to onboarding screen$/, async function() {
    await navigation.financeTransactionMultipurchase.financeTransactionMultipurchaseDebit.go();
});

When(/^the user accesses to finance transaction multipurchase debit post (hiring from "([^"]*)"|hiring)$/, async function(button) {
    if(button===null){
        await navigation.financeTransactionMultipurchase.financeTransactionMultipurchaseDebitPostHiring.go();
    }else{
        await navigation.financeTransactionMultipurchase.financeTransactionMultipurchaseDebitPostHiring.go({button});
    }
    await financeTransactionMultipurchaseDebitPostHiringPage.acceptOnboarding();
});

When(/^the user to enter to months to defer step with a purchase "([^"]*)"(| and "([^"]*)")$/, async function(amount, amount2) {
    if(amount2===null){
        await currentPage.accessMonthsToDeferStep(amount);
    }else{
        await financeTransactionMultipurchaseDebitPostHiringPage.selectMovement(amount);
        await financeTransactionMultipurchaseDebitPostHiringPage.selectMovement(amount2);
        await financeTransactionMultipurchaseDebitPostHiringPage.continueMonthsToDeferStep();
    }
});

When(/^the user edits to months to defer step with a purchase "([^"]*)"$/, async function (amount) {
    await financeTransactionMultipurchaseDebit.editMonthsToDeferStep(amount);
});

When(/^the user selects more than five purchases$/, async function() {
    await financeTransactionMultipurchaseDebit.showMorePurchases();
    await financeTransactionMultipurchaseDebit.selectMorePurchase('917');
    await financeTransactionMultipurchaseDebit.selectMorePurchase('874');
    await financeTransactionMultipurchaseDebit.selectMorePurchase('769');
    await financeTransactionMultipurchaseDebit.selectMorePurchase('795');
    await financeTransactionMultipurchaseDebit.selectMorePurchase('544');
    await financeTransactionMultipurchaseDebit.selectMorePurchase('900');
    await financeTransactionMultipurchaseDebit.continueMorePurchasesToMonthsToDefer();

});

When(/^the user shows more purchases$/, async function() {
    await financeTransactionMultipurchaseDebit.showMorePurchases();
});

When(/^the user enters to terms and conditions with a period of "([^"]*)" months$/, async function(period) {
    await currentPage.accessTermsStep(period);
});

When(/^the user completes the deferral of purchase$/, async function() {
    await currentPage.accessSuccessfull();
    await currentPage.fillSmsInput({code: '11111111'});
});

When(/^the user (changes in purchase section|changes in term selection|consult financing line)$/, async function(option) {
    await financeTransactionMultipurchaseDebit.accessSuccessfull();
    await financeTransactionMultipurchaseDebit.fillSmsInput({code: '11111111'});
    await financeTransactionMultipurchaseDebit.accessExpandableMultistep();
    switch(option){
        case 'changes in purchase section':
            await financeTransactionMultipurchaseDebit.changeSelectPurchasesStep();
            await financeTransactionMultipurchaseDebit.selectCheckboxTrue();
            break;
        case 'changes in term selection':
            await financeTransactionMultipurchaseDebit.changeMonthsToDeferStep();
            break;
        case 'consult financing line':
            await financeTransactionMultipurchaseDebit.consultTermsStep();
            break;
        default:
            throw new Error(`${option} button is not available to option to...`);
    }
});

When(/^the user enters to participating purchases help screen$/, async function() {
    await financeTransactionMultipurchaseDebit.accessParticipatingPurchasesHelp();
});

When(/^the user enters to (defer commission detail|first pay date|cat commission help|CAT of recruitment|know the features) screen$/, async function(option) {
    switch(option){
        case 'defer commission detail':
            await financeTransactionMultipurchaseDebit.accessToHelp('defer commission detail');
            break;
        case 'first pay date':
            await financeTransactionMultipurchaseDebit.accessToHelp('first pay date');
            break;
        case 'cat commission help':
            await financeTransactionMultipurchaseDebit.accessToHelp('cat commission help');
            break;
        case 'know the features':
            await financeTransactionMultipurchaseDebit.accessToCharacteristics();
            break;
        case 'CAT of recruitment':
            await financeTransactionMultipurchaseDebit.accessToHelpInfo();
            break;
        default:
            throw new Error(`${option} button is not available to option to...`);
    }
});

When(/^the user closes token movil screen$/, async function() {
    await currentPage.accessSuccessfull();
    await currentPage.closeOperative();
});

When(/^the user exits contract terms and conditions$/, async function() {
    await financeTransactionMultipurchaseDebit.accessLinkCreditBuroDocument();
    await financeTransactionMultipurchaseDebit.closeOperative();
    await financeTransactionMultipurchaseDebit.accessLinkContractDocument();
    await financeTransactionMultipurchaseDebit.closeOperative();
});

Then(/^the user sees "([^"]*)" movements$/, async function(moviment) {
    await orangeCardProductDetail.counterMovements(moviment);
});

When(/^the user exits the due date and the next payment date$/, async function () {
    await flexibleFinancingDashboard.accessHelp();
});

When(/^the user accesses to (advance payment|monthly payment|line detail|pay overdue balance|more operatives)$/, async function (option) {
    switch(option){
        case 'advance payment':
            await flexibleFinancingDashboard.accessOperative('advancePayment');
            break;
        case 'monthly payment':
        case 'pay overdue balance':
            await navigation.flexibleFinancing.advancePayments.attempt({option});
            break;
        case 'line detail':
            await flexibleFinancingDashboard.accessOperative('seeLineDetail');
            break;
        case 'more operatives':
            await flexibleFinancingDashboard.accessOperative('moreOperatives');
            break;
        default:
            throw new Error(`${option} button is not available to option to...`);
    }
});

When(/^the user goes back to payment dashboard$/, async function () {
    await navigation.flexibleFinancing.paymentDashboard.go();
});

When(/^the user selects "([^"]*)" element on step$/, async function (element) {
    await currentPage.selectElement(element);
});

When(/^the user confirms terms and conditions step$/, async function () {
    await currentPage.accessSuccessfull();
});

When(/^the user (sees|confirms|signs) the summary view step$/, async function (action) {
    await financeTransactionMultipurchaseDebit.accessSummary();
    if (action.toLowerCase() === 'confirms' || action.toLowerCase() === 'signs') {
        await financeTransactionMultipurchaseDebit.confirmSummary(action.toLowerCase() === 'signs');
    }
});

When(/^the user selects a deferrable purchase$/, async function () {
    await flexibleFinancingDashboard.selectDeferrablePurchase();
});

When(/^the user accesses to finance transaction multipurchase debit and access advance payment$/, async function() {
    await navigation.financeTransactionMultipurchase.financeTransactionMultipurchaseDebitPostHiring.attempt();
    await financeTransactionMultipurchaseDebitPostHiringPage.confirmHalfHelpModal();
});
