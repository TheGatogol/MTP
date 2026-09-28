import { When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import ocCarLoanTracking from '../../pages/ocCarLoan/ocCarLoanTracking';
import ocCarLoanDetails from '../../pages/ocCarLoan/ocCarLoanDetails';
import ocCarLoanContractSigning from '../../pages/ocCarLoan/ocCarLoanContractSigning';

When(/^the user accesses the oc car loan offer tracking$/, async function () {
    await navigation.ocCarLoan.ocCarLoanTracking.go();
});

When(/^the user accesses the "([^"]*)" section of oc car loan$/, async function (section) {
    switch(section){
        case 'details':
            await navigation.ocCarLoan.ocCarLoanDetails.go(section);
            break;
        case 'down payment details':
            await navigation.ocCarLoan.ocCarLoanDownPayment.go(section);
            break;
        case 'account selection':
            await navigation.ocCarLoan.ocCarLoanDownPayment.go('down payment details');
            await navigation.ocCarLoan.ocCarLoanAccountSelection.go(section);
            break;
        case 'account list selection':
            await navigation.ocCarLoan.ocCarLoanDownPayment.go('down payment details');
            await navigation.ocCarLoan.ocCarLoanAccountListSelection.go();
            break;
        case 'account selection success':
            await navigation.ocCarLoan.ocCarLoanDownPayment.go('down payment details');
            await navigation.ocCarLoan.ocCarLoanAccountSelectionSuccess.go();
            break;
        case 'sign documents':
            if(await ocCarLoanTracking.isSigningAvailable()){
                await navigation.ocCarLoan.ocCarLoanContractSigning.go(section);
            } else {
                await ocCarLoanTracking.goToSection(section);
            }
            break;
        case 'sign documents success':
            await navigation.ocCarLoan.ocCarLoanContractSigningSuccess.go();
            break;
        case 'next steps':
            await ocCarLoanTracking.goToSection(section);
            break;
        default:
            throw new Error(`Section '${section}' not found in section list.`);
    }
});

When(/^the user attempts to access the "([^"]*)" section of oc car loan$/, async function(section){
    switch(section){
        case 'tracking':
            await navigation.ocCarLoan.ocCarLoanTracking.attempt();
            break;
        case 'details':
            await navigation.ocCarLoan.ocCarLoanDetails.attempt(section);
            break;
        case 'account selection success':
            await navigation.ocCarLoan.ocCarLoanDownPayment.go('down payment details');
            await navigation.ocCarLoan.ocCarLoanAccountSelectionSuccess.attempt();
            break;
        case 'sign documents':
            await navigation.ocCarLoan.ocCarLoanContractSigning.attempt(section);
            break;
        case 'sign documents success':
            await navigation.ocCarLoan.ocCarLoanContractSigningSuccess.attempt();
            break;
        case 'account selection':
            await navigation.ocCarLoan.ocCarLoanDownPayment.go('down payment details');
            await navigation.ocCarLoan.ocCarLoanTracking.go();
            await currentPage.goToSection(section);
            break;
        default:
            throw new Error(`the section ${section} wasn't found`);
    }
});

When(/^the user accesses to the exit modal(| but cancels the exit)$/, async function(outcome){
    if(outcome){
        await currentPage.goBack('cancel');
    } else {
        await currentPage.openModal('exit');
    }
});

When(/^the user return to the tracking page with the "([^"]*)" exit option$/, async function(button){
    await navigation.ocCarLoan.ocCarLoanTracking.go(button);
});

When(/^the user copies the folio of the car loan offer$/, async function () {
    await ocCarLoanDetails.copyFolio();
});

When(/^the user completes the whole documents signing section$/, async function(){
    await ocCarLoanContractSigning.completeCheck();
});

When(/^the user completes the signing process$/, async function(){
    await ocCarLoanContractSigning.finishSigning();
});
