import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import fundsWithdrawalStep3 from '../../pages/diy/fundsWithdrawal/fundsWithdrawalStep3';
import fundsWithdrawalStep4 from '../../pages/diy/fundsWithdrawal/fundsWithdrawalStep4';

function getDataAmount(cardType) {
    const funds= cardType.toLowerCase() === 'minor' ? user.products.investmentFunds[0].minorAmount
        : user.products.investmentFunds[1].majorAmount;
    return funds;
}

// STEP DEFINITIONS

When(/^the user accesses to the funds withdrawal screen$/, async function() {
    await navigation.diy.fundsWithdrawal.step1.go();
});

When(/^the user completes a fund withdrawal/, async function() {
    await navigation.diy.fundsWithdrawal.review.go();
});

When(/^the user tries completes a sale of the fund$/, async function() {
    await navigation.diy.fundsWithdrawal.step5.go();
    await currentPage.confirmWithdrawal();
});

When(/^the user selects a type of "([^"]*)" sale/, async function(operation) {
    await navigation.diy.fundsWithdrawal.step3.go(operation);
});

When(/^the user adds the quantity of "([^"]*)" to sell/, async function(amount) {
    const selectedAmount = getDataAmount(amount);
    await fundsWithdrawalStep3.addAmount(selectedAmount);
});

When (/^the user exits the resume screen$/, async function() {
    await fundsWithdrawalStep4.exitResumeScreen();
});

When(/^the user selects link change from the "([^"]*)"/, async function (section) {
    switch (section) {
        case 'sales type section':
            await fundsWithdrawalStep3.changeSale();
            break;
        case 'withdrawal type':
            await navigation.diy.fundsWithdrawal.step3.go('total');
            await fundsWithdrawalStep3.changeSale();
            break;
        case 'amount to sell section':
            await navigation.diy.fundsWithdrawal.step4.go();
            await fundsWithdrawalStep4.modifySale();
            break;
        case 'section modify amount to sell':
            await navigation.diy.fundsWithdrawal.step4.go();
            await fundsWithdrawalStep4.changeAmount();
            break;
        default:
            throw new Error(`The option: ${section} is not implemented`);
    }
});

When(/^the user accesses to the "([^"]*)" section of the funds withdrawal screen$/, async function(option) {
    switch (option.toLowerCase()) {
        case 'step 2':
            await navigation.diy.fundsWithdrawal.step2.go();
            break;
        case 'step 3':
            await navigation.diy.fundsWithdrawal.step3.go();
            break;
        case 'step 4':
            await navigation.diy.fundsWithdrawal.step4.go();
            break;
        case 'step 5':
            await navigation.diy.fundsWithdrawal.step5.go();
            break;
        case 'review':
            await navigation.diy.fundsWithdrawal.review.go();
            break;
        default:
            throw new Error(`${option} option is not available to navigate...`);
    }
});
