import {When} from '@cucumber/cucumber';
import * as navigation from '../../../navigation';

When(/^the user enters the non pre approved offer "([^"]*)"$/, async function(result) {
    switch(result.toLowerCase()){
        case 'successfully':
            await navigation.creditCardApplication.nonPreApproved.nonPreApprovedCCBureauNav.go();
            break;
        case 'unsuccessfully':
            await navigation.creditCardApplication.nonPreApproved.nonPreApprovedCCBureauNav.attempt({successfullAttempt: false});
            break;
        default:
            throw new Error('Selected option is not available...');
    }
});

When(/^the user changes the credit line and continues$/, async function() {
    await currentPage.changeCreditAmount('50000');
    await currentPage.cmpltNPACC();
});

When(/^the user accesses the bureau consultation notice$/, async function() {
    await currentPage.openBureauInfoModal();
});

When(/^the user closes the modal with the "([^"]*)" exit option$/, async function(button) {
    await currentPage.closeModal(button);
});

When(/^the user enters the non pre approved offer and advances$/, async function() {
    await navigation.creditCardApplication.nonPreApproved.nonPreApprovedCCNav.go();
});

When(/^the user attempts to enter the non pre approved offer$/, async function() {
    await navigation.creditCardApplication.nonPreApproved.nonPreApprovedCCNav.attempt();
});

When(/^the user exits the rejection modal$/, async function() {
    await currentPage.exitRejectionModal();
});

When(/^the user accesses to more info on credit card offer screen$/, async function() {
    await currentPage.openCreditInfoModal();
});

When(/^the user exits the credit card offer$/, async function() {
    await currentPage.abandonOffer();
});

When(/^the user exits the credit card offer and "([^"]*)"$/, async function(action) {
    const choice = action === 'leaves' ? true : false;
    await currentPage.exitChoice(choice);
});

When(/^the user deletes the default amount and enters "([^"]*)" money in the input$/, async function(amount) {
    switch(amount.toLowerCase()){
        case 'less':
            await currentPage.changeCreditAmount('30000');
            break;
        case 'no':
            await currentPage.changeCreditAmount();
            break;
        case 'more':
            await currentPage.changeCreditAmount('90000');
            break;
        default:
            throw new Error('Selected option is not available...');
    }
});

When(/^the user enters "([^"]*)" as a new amount$/, async function(amount) {
    await currentPage.changeCreditAmount(amount);
});

When(/^the user agrees to the bureau check and accesses the otp$/, async function() {
    await currentPage.cmpltNPACC();
});
