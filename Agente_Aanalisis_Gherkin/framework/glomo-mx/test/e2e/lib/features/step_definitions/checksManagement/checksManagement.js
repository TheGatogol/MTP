import {When, Then} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import * as utilsAccount from '../../utils/utilsAccount';

async function navigateToChecksManagement() {
    const account = utilsAccount.getAccountChecksData('MXN', user);
    await navigation.account.productDetail.go({account});
    await navigation.checksManagement.checksManagement.go();
}

When('the user adds a check', async function() {
    await navigation.checksManagement.checksManagementAddCheck.go();
});

When('the user saves', async function() {
    await currentPage.saveCheck();
});

When(/^the user types "([^"]*)" digits in the check number input$/, async function(number) {
    await navigation.checksManagement.checksManagementAddCheck.go();
    await currentPage.fillNumber(false, number);
});

When('the user inserts 0 in the amount', async function() {
    await navigation.checksManagement.checksManagementAddCheck.go();
    await currentPage.fillAmount(false);
});

Then(/^the app shows an error message in the check "([^"]*)" input$/, async function(inputType) {
    if (inputType === 'number') {
        await currentPage.checkNumberErrorIsShown();
    }
    if (inputType === 'amount') {
        await currentPage.checkAmountErrorIsShown();
    }
});

When(/^the user adds a check and fill "([^"]*)" "([^"]*)"$/, async function(number, amount) {
    await navigation.checksManagement.checksManagementAddCheck.go();

    if (number !== 'empty') {
        await currentPage.fillNumber(number === 'valid_number');
    }
    if (amount !== 'empty') {
        await currentPage.fillAmount(amount === 'valid_amount');
    }
});

When('the user asks for help management screen', async function() {
    await currentPage.openHelpScreen();
});

When('the user is in the checks management operation screen', async function() {
    await navigation.checksManagement.checksManagement.assert();
});

When('the user is in the checks management operation screen filled', async function() {
    await navigation.checksManagement.checksManagement.assert();
    await currentPage.isFilled();
});

When('the user accesses to checks management summary screen', async function() {
    await navigateToChecksManagement();
    await currentPage.goToStep('summary');
});

When('the user is in the filled check management data add check', async function() {
    await navigation.checksManagement.checksManagementAddCheck.assert();
});

When('the user is in the warning delete check screen', async function() {
    await navigateToChecksManagement();
    await currentPage.goToStep('check data');
    await currentPage.fillCheckData();
    await currentPage.removeCheck();
});

When('the user is in the empty check management data step', async function() {
    await navigation.checksManagement.checksManagement.assert();
    await currentPage.isNotFilled();
});

When('the user has filled check management data step', async function() {
    await navigateToChecksManagement();
    await currentPage.goToStep('check data');
    await currentPage.fillCheckData();
});

When('the user edits the check', async function() {
    await currentPage.editCheck();
});

When('the user removes the check', async function() {
    await currentPage.removeCheck();
});

When('the user confirms check removal', async function() {
    await currentPage.checkRemovalConfirmation(true);
});

When('the user cancels check removal', async function() {
    await currentPage.checkRemovalConfirmation(false);
});

When('the user confirms activate protection', async function() {
    await currentPage.acceptServiceTerms();
});

When('the user finally declines the service terms', async function() {
    await currentPage.confirmDialog({ expectToDisappear: false });
});

When('the user confirm exit from the error screen', async function() {
    await currentPage.confirmDialog({isConfirmed: true, expectToDisappear: false }, true);
});

When('the user go to the checks authorize screen', async function() {
    await navigateToChecksManagement();
    await currentPage.goToStep('check data');
});
When('the user fill a check', async function() {
    await currentPage.fillCheckData();
});
When('the user go to add check screen', async function() {
    await navigation.checksManagement.checksManagementAddCheck.go();
});
When('the user cancel the fill', async function() {
    await currentPage.cancelFillCheck();
});

When('the user confirm otp', async function() {
    await currentPage.fillOtp();
});
