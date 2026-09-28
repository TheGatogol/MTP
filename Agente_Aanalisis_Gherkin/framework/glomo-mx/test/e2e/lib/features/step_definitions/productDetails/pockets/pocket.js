import {When} from '@cucumber/cucumber';
import * as navigation from '../../../navigation';
import accountProductDetail from '../../../pages/productDetails/accountProductDetail';
import pocketDetail from '../../../pages/productDetails/pockets/pocketDetail';
import pockets from '../../../pages/productDetails/pockets/pockets';
import pocketsAddMoney from '../../../pages/productDetails/pockets/pocketsAddMoney';
import createPocket from '../../../pages/productDetails/pockets/createPocket';
import pocketEdit from '../../../pages/productDetails/pockets/pocketEdit';

function getAccount() {
    return user.products[0].accounts[0];
}

When(/^the user accesses to product detail$/, async function() {
    const account = getAccount();
    await navigation.account.productDetail.go({account});
});

When(/^the user accesses to pockets screen$/, async function() {
    const account = getAccount();
    await navigation.account.productDetail.go({account});
    const isPocketPresent = await accountProductDetail.isPocket();
    (isPocketPresent) ? await navigation.pockets.pocket.go() : await navigation.pockets.pocketWelcome.go();
});
When(/^the user accesses information about the savings$/, async function() {
    const account = getAccount();
    await navigation.account.productDetail.go({account});
    await navigation.pockets.pocketWelcome.go();
});

When(/^the user accesses to pockets list$/, async function() {
    const isPocketPresent = await accountProductDetail.isPocket();
    (isPocketPresent) ? await navigation.pockets.pocket.go() : await navigation.pockets.pocketWelcome.go();
});

When(/^the user accesses to create pocket$/, async function() {
    await navigation.pockets.createPocket.go();
});

When(/^the user wants to know info about scheduled pocket amount$/, async function() {
    await createPocket.goToScheduledHelpScreen();
});

When(/^the user type the pocket name$/, async function() {
    await createPocket.fillPocketNameInput('new pocket');
    await createPocket.continueProcess();
});

When(/^the user accesses to pocket detail screen when is "([^"]*)"$/, async function(activity) {
    await navigation.pockets.pocketDetail.go({activity});
});

When(/^the user removes pocket$/, async function() {
    await pocketDetail.removePocket();
    await navigation.pockets.pocketSuccess.go();
});

When(/^the user retrie "([^"]*)" delete pocket three times$/, async function(valor) {
    await pocketDetail.removePocket();
    await pocketDetail.pocketDeleteRetry(valor);
});

When(/^the user try delete pocket and close error message$/, async function() {
    await navigation.pockets.pocket.go();
});

When(/^the user accesses to all activity$/, async function() {
    await navigation.pockets.pocketMovementList.go();
});

When(/^the user writes "([^"]*)" in the (pocket name|edit pocket name|scheduled pocket amount|pocket amount|add money amount|edit scheduled amount)$/, async function(value, context) {
    switch (context) {
        case 'pocket name':
            await createPocket.fillPocketNameInput(value);
            break;
        case 'edit pocket name':
            await pocketEdit.changePocketName(value);
            break;
        case 'scheduled pocket amount':
            await createPocket.fillScheduledAmountInput(value);
            break;
        case 'pocket amount':
            await createPocket.fillPocketAmountInput(value);
            break;
        case 'add money amount':
            await pocketsAddMoney.fillAmountToAdd(value);
            break;
        case 'edit scheduled amount':
            await pocketEdit.fillAmountToAdd(value);
            break;
        default:
            throw new Error(`Not recognized option "${context}"`);
    }
});

When(/^the user clears the pocket name$/, async function() {
    await createPocket.clearPocketName();
});

When(/^the user writes the amount to add and continue$/, async function() {
    await pocketsAddMoney.fillAmountToAdd('2000');
    await pocketsAddMoney.continueToSummary();
});

When(/^the user confirm the process$/, async function() {
    await navigation.pockets.pocketSuccess.go();
});

When(/^the user accesses to add money screen$/, async function() {
    const account = getAccount();
    await navigation.account.productDetail.go({account});
    await navigation.pockets.pocket.go();
    await navigation.pockets.pocketDetail.go({activity: true});
    await navigation.pockets.addMoney.go();
});

When(/^the user accesses to add money success screen$/, async function() {
    const account = getAccount();
    await navigation.account.productDetail.go({account});
    await navigation.pockets.pocket.go();
    await navigation.pockets.pocketDetail.go({activity: true});
    await navigation.pockets.addMoney.go();
    await pocketsAddMoney.fillAmountToAdd('2000');
    await pocketsAddMoney.continueToSummary();
    await navigation.pockets.pocketSuccess.go();
});

When(/^the user accesses to edit pocket screen$/, async function() {
    const account = getAccount();
    await navigation.account.productDetail.go({account});
    await navigation.pockets.pocket.go();
    await navigation.pockets.pocketDetail.go({activity: true});
    await navigation.pockets.editPocket.go();
});

When(/^the user accesses to amount multistep$/, async function() {
    const account = getAccount();
    await navigation.account.productDetail.go({account});
    const isPocketPresent = await accountProductDetail.isPocket();
    (isPocketPresent) ? await navigation.pockets.pocket.go() : await navigation.pockets.pocketWelcome.go();
    await navigation.pockets.createPocket.go();
    await createPocket.fillPocketNameInput('pago amex');
    await createPocket.continueProcess();
});

When(/^the user selects "([^"]*)" to close the screen$/, async function(element) {
    await createPocket.closeScheduledHelpScreen(element);
});

When(/^the user choose check pocket$/, async function () {
    await createPocket.schedulePockets();
});

When(/^the user clears the input of add money amount$/, async function() {
    await pocketsAddMoney.clearAmount();
});

When(/^the user continues the process pocket$/, async function() {
    await createPocket.continueProcessPocketSuccessful();
});

When(/^the user select "([^"]*)" (delete success screen|withdrawal success screen|add money success screen|edit pocket success screen|success screen)$/, async function(element, context) {
    switch (context) {
        case 'success screen':
        case 'delete success screen':
            await navigation.pockets.pocket.go({element});
            break;
        case 'add money success screen':
        case 'withdrawal success screen':
        case 'edit pocket success screen':
            await navigation.pockets.pocketDetail.go({element});
            break;
        default:
            throw new Error(`Not recognized option "${context}"`);
    }
});

When(/^the user accesses to pocket creation success screen$/, async function() {
    const account = getAccount();
    await navigation.account.productDetail.go({account});
    const isPocketPresent = await accountProductDetail.isPocket();
    (isPocketPresent) ? await navigation.pockets.pocket.go() : await navigation.pockets.pocketWelcome.go();
    await navigation.pockets.createPocket.go();
    await createPocket.fillPocketNameInput('pago amex');
    await createPocket.continueProcess();
    await createPocket.fillPocketAmountInput('2000');
    await createPocket.schedulePockets();
    await createPocket.fillScheduledAmountInput('3000');
    await createPocket.continueProcessPocketSuccessful();
    await navigation.pockets.pocketSuccess.go();
});

When(/^the user accept pockets$/, async function() {
    await createPocket.continueProcessPocketSuccessful();
    await navigation.pockets.pocketSuccess.go();
});

When(/^the user tries to access to the create pocket operative$/, async function() {
    await pockets.maxLimitCreatePocket();
});

When(/^the user cancel pocket delete operation$/, async function() {
    await pocketDetail.cancelDeletePocket();
});

When(/^the user accesses to "([^"]*)" pocket$/, async function(pocketName) {
    const account = getAccount();
    await navigation.pockets.pocket.go({account});
    await pockets.choosePocketByName(pocketName);
    await navigation.pockets.pocketDetail.assert();
});

When(/^the user access the pocket "([^"]*)" operative$/, async function(operative) {
    switch (operative) {
        case 'withdrawal':
            await navigation.pockets.withdrawalMoney.go();
            break;
        case 'delete':
            await pocketDetail.removePocket();
            break;
        case 'edit':
            await navigation.pockets.editPocket.go();
            break;
        case 'sort':
            await navigation.pockets.sortPocket.go();
            break;
        default:
            throw new Error(`Not recognized option "${operative}"`);

    }
});

When(/^the user enters "([^"]*)" for pocket withdrawal(| and continues)$/, async function(amount, leaveOrStay) {
    await currentPage.enterWithdrawalAmount(amount);
    if (leaveOrStay !== null) {
        await currentPage.amountStepContinue();
    }
});

When(/^the user enters "([^"]*)" to withdraw from pocket$/, async function(amount) {
    await currentPage.enterWithdrawalAmount(amount);
});

When(/^the user continues after enter withdraw amount$/, async function() {
    await currentPage.amountStepContinue();
});

When(/^the user confirms the pocket withdrawal$/, async function() {
    await currentPage.finishWithdrawal();
});

When(/^the user cancel edit pocket$/, async function() {
    await navigation.pockets.pocketDetail.go({activity:false});
});

When(/^the user removes scheduled amount$/, async function() {
    await pocketEdit.removeProgramming();
});

When(/^the user exits edit pocket$/, async function() {
    await pocketEdit.exitEdit();
});

When(/^the user saves his changes$/, async function() {
    await pocketEdit.saveEditPocket();
});
