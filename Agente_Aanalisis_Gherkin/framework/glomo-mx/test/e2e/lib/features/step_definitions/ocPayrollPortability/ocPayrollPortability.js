import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import ocPayrollPortabilityPage from '../../pages/ocPayrollPortability/ocPayrollPortability';

When (/^the user goes to the payroll portability operation$/, async function() {
    await navigation.ocPayrollPortability.ocPayrollPortability.go();
});

When (/^the user request the payroll portability offer with the "([^"]*)" account$/, async function(account) {
    await ocPayrollPortabilityPage.requestOffer(account.toLowerCase());
});

When (/^the user start oc payroll portability process$/, async function() {
    await ocPayrollPortabilityPage.startProcess();
});

When (/^the user "([^"]*)" his birth date$/, async function(option) {
    const confirmBirthDate = option.toLowerCase() === 'confirms';
    if (confirmBirthDate) {
        await ocPayrollPortabilityPage.selectBirthDate(confirmBirthDate);
    } else {
        if (ocPayrollPortabilityPage.isSpherica()) {
            await ocPayrollPortabilityPage.selectBirthDate(false);
        } else {
            await navigation.ocPayrollPortability.ocPayrollPortabilityWrongBirthDate.go();
        }
    }
});

When (/^the user enter "([^"]*)" and select bank to oc payroll portability$/, async function(option) {
    await ocPayrollPortabilityPage.fillCurrentPayroll(option.toLowerCase());
});

When (/^the user selects "([^"]*)" account to oc payroll portability$/, async function(account) {
    await ocPayrollPortabilityPage.selectAccount(account.toLowerCase());
});

When (/^the user accepts payroll terms and conditions$/, async function() {
    await ocPayrollPortabilityPage.acceptTerms();
});

When (/^the user signs oc payroll portability operation$/, async function() {
    if (ocPayrollPortabilityPage.isSpherica()) {
        await ocPayrollPortabilityPage.signOperation();
    } else {
        await navigation.ocPayrollPortability.ocPayrollPortabilityReview.go();
    }
});

When (/^the user signs oc payroll portability operation with payroll in progress$/, async function() {
    await ocPayrollPortabilityPage.signOperation();
});
