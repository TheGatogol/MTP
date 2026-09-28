import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import advancePayments from '../../pages/flexibleFinancing/advancePayments';
import paymentDashboard from '../../pages/flexibleFinancing/paymentDashboard';

When(/^the user accesses the "([^"]*)" section$/, async function(option) {
    await navigation.flexibleFinancing.flexibleFinancingDashboard.go();
    switch (option) {
        case 'no deferrals':
        case 'anticipate payments':
            await navigation.flexibleFinancing.advancePayments.go({option});
            if (option === 'anticipate payments') {
                await advancePayments.closeModal();
            }
            break;
        case 'pay overdue balance':
            await navigation.flexibleFinancing.advancePayments.attempt({option});
            break;
        case 'monthly payment':
            await paymentDashboard.accessOperative('moreOperatives');
            await navigation.flexibleFinancing.advancePayments.attempt({option});
            break;
        default:
            throw new Error(`The option ${option} is not defined`);
    }
});

When(/^the user selects "([^"]*)" and continue$/, async function(value){
    await advancePayments.paymentType(value);
    await advancePayments.continueChange();
    if(value === 'advance payment') {
        await advancePayments.seeAllMovements();
    }
});

When(/^the user selects an account and continue$/, async function(){
    await advancePayments.continueResumenSelectAccount({index: 2});
    await advancePayments.continueSummaryLate();
    await advancePayments.fillOtp('12345678');
});

When(/^the user enters the amount "([^"]*)" and continues$/, async function(amount){
    await advancePayments.accountBalance(amount);
});

When(/^the user observes the payment and continues$/, async function(){
    await advancePayments.accessMonthlyPayment();
});

When(/^the user selects a purchase and continues$/, async function(){
    await advancePayments.paymentType('advance payment');
    await advancePayments.continueChange();
    await advancePayments.selectMovement();
    await advancePayments.selectDeferral();
});

When(/^the user enters the section to help with overdue balance$/, async function(){
    await advancePayments.enterLatePaymentHelp();
});

When(/^the user chooses a movement "([^"]*)" "([^"]*)"$/, async function(option, amount){
    await advancePayments.selectPurchase();
    if(option !== 'continue') {
        switch (option) {
            case 'modifies monthly payment':
                await advancePayments.changeMonthlyPayments();
                break;
            case 'chooses another amount':
                await advancePayments.changeMonthlyOther();
                await advancePayments.customAmount(amount);
                break;
            default:
                throw new Error(`The option ${option} is not defined`);
        }
    }
    await advancePayments.continuePayments();
});

When(/^the user tries to close the advance payments$/, async function(){
    await advancePayments.closeOperative();
});

When(/^the user enters to change the deferrals$/, async function(){
    await advancePayments.changeDeferralFun();
    await advancePayments.seeAllMovements();
});

When(/^the user changes the payment type to the settlement option$/, async function(){
    await advancePayments.changePaymentType();
    await advancePayments.paymentType('settle deferrals');
    await advancePayments.continueChange();
    await advancePayments.changePaymentTypeAccept();
});

When(/^the user enters a larger amount "([^"]*)"$/, async function(amount){
    await advancePayments.higherAmountIncome(amount);
});

When(/^the user enters advance payments$/, async function(){
    await navigation.flexibleFinancing.flexibleFinancingDashboard.go();
    await navigation.flexibleFinancing.advancePayments.attempt({option: 'anticipate payments'});
});

When(/^the user selects the origin account$/, async function(){
    await advancePayments.continueResumenSelectAccount();
    await advancePayments.continueSummaryLate();
});

When(/^the user accesses overdue payment info modal$/, async function(){
    await advancePayments.accessOverdueModal();
});
