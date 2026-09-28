import {When} from '@cucumber/cucumber';

// Utility requires
import carLoanPayment from '../../pages/loan/carLoanPayment';

When(/^the user selects "([^"]*)" on car loan payment$/, async function (type) {
    switch(type){
        case'receipt amount':
            await carLoanPayment.accessApaymentType('titleAmountOverdue');
            break;
        case'other amount':
            await carLoanPayment.accessApaymentType('titleOtherAmount');
            break;
        case'loan settlement':
            await carLoanPayment.accessApaymentType('titleSettleLoan');
            break;
        default:
            throw new Error(`Not recognized option "${type}"`);
    }
});

When(/^the user enters amount of "([^"]*)"$/, async function (amount) {
    await carLoanPayment.accessAmount({amount});
});

When(/^the user completes the car loan payment process$/, async function () {
    await carLoanPayment.accessCalculatePayment();
    await carLoanPayment.accessContinue();
    await carLoanPayment.accessResumen();
    await carLoanPayment.accessPay();
});
