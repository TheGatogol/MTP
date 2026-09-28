import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import ocPayrollAdvance from '../../pages/ocPayrollAdvance/ocPayrollAdvance';

When(/^the user accesses to the payroll advance operation "([^"]*)"$/, async function(option){
    switch (option.toLowerCase()) {
        case 'without callme back':
            await navigation.ocPayrollAdvance.ocPayrollAdvance.go();
            break;
        case 'with callme back':
            await navigation.ocPayrollAdvance.ocPayrollAdvance.go();
            await ocPayrollAdvance.closeCallMeBack();
            break;
        default:
            throw new Error(`The option: ${option} is not implemented`);
    }
});

When(/^the user accepts payroll terms$/, async function() {
    await ocPayrollAdvance.acceptAllConditions();
});

When(/^the user confirms the sms key to finalize the payroll advance$/, async function() {
    await navigation.ocPayrollAdvance.ocPayrollAdvanceReview.go();
});

When(/^the user modifies the suggested amount for an amount of "([^"]*)"$/, async function(amount) {
    await ocPayrollAdvance.changeValueAmount(amount);
});

When(/^the user open tooltip commission information$/, async function() {
    await ocPayrollAdvance.tooltipCommissionInformation();
});

When(/^the user open tooltip cat information$/, async function() {
    await ocPayrollAdvance.tooltipCatInformation();
});

When(/^the user accepts amount$/, async function() {
    await ocPayrollAdvance.acceptAmount();
});

When(/^the user accesses modal bureau$/, async function() {
    await ocPayrollAdvance.showModalBureau();
});

When(/^the user accepts checklist conditions$/, async function() {
    await ocPayrollAdvance.acceptTermsAndConditions();
});

When(/^the user enters the credit history link(| again and understood it)$/, async function(step) {
    await ocPayrollAdvance.reviewCreditHistory();
    if(step) {
        await currentPage.closeDialog();
    } else if(!currentPage.isSpherica) {
        await ocPayrollAdvance.acceptButtonHistory();
    }
});
