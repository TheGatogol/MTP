import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import payrollPortabilityPage from '../../pages/payrollPortability/payrollPortability';

function getCardNumber(account){
    const nameAccount = account === 'clabe number' ? 'clabeNumber' : 'cardNumber';
    return user.products[nameAccount];
}

When (/^the user start account payroll portability process$/, async function() {
    await payrollPortabilityPage.startProcess();
});

When (/^the user "([^"]*)" his birth date on account operative$/, async function(option) {
    const confirmBirthDate = option.toLowerCase() === 'confirms';
    if (confirmBirthDate) {
        await payrollPortabilityPage.selectBirthDate(confirmBirthDate);
    } else {
        if (payrollPortabilityPage.isSpherica()) {
            await payrollPortabilityPage.selectBirthDate(false);
        } else {
            await navigation.payrollPortability.payrollPortabilityWrongBirthDate.go();
        }
    }
});

When (/^the user enter "([^"]*)" and select bank on account operative$/, async function(option) {
    const accountType = getCardNumber(option);
    await payrollPortabilityPage.fillCurrentPayroll(option, accountType);
});

When (/^the user selects "([^"]*)" account$/, async function(account) {
    const uniqueAccount = account.toLowerCase() === 'unique';
    await payrollPortabilityPage.selectAccount(uniqueAccount);
});

When (/^the user accepts payroll terms and conditions and continue portability$/, async function() {
    await payrollPortabilityPage.acceptTerms();
});

When (/^the user accepts payroll summary on account operative$/, async function() {
    await payrollPortabilityPage.confirmSummary();
});

When (/^the user signs payroll operation on account operative$/, async function() {
    if (payrollPortabilityPage.isSpherica()) {
        await payrollPortabilityPage.signOperation();
    } else {
        await navigation.payrollPortability.payrollPortabilityReview.go();
    }
});

When (/^the user signs payroll operation with payroll in progress on account operative$/, async function() {
    await payrollPortabilityPage.signOperation();
});

When (/^the user start payroll portability process$/, async function() {
    const option = 'card number';
    const accountType = getCardNumber(option);
    await payrollPortabilityPage.operativePayrollProgress(accountType, option);
});

When (/^the user start payroll portability process "([^"]*)" gradual$/, async function(origin) {
    const option = 'card number';
    const accountType = getCardNumber(option);
    await payrollPortabilityPage.operativePayrollProgress(accountType, option, origin);
});

When (/^the user confirms the selected account and continues with payroll portability$/, async function() {
    await payrollPortabilityPage.productSelectorContinue();
});
