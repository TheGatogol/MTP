import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import debitLineCancelPage from '../../pages/flexibleFinancing/financeDebitLineCancel';

When(/^the user (accesses|attempts to access) to Financing Cancel of Debit line$/, async function(option) {
    const card = user.products.cards[0].cardId;
    await navigation.card.orangeCardProductDetail.go({card});
    option === 'accesses' ? await navigation.flexibleFinancing.debitLineCancel.go() :
        await navigation.flexibleFinancing.debitLineCancel.attempt();
});

When(/^the user continues from onboarding$/, async function () {
    await debitLineCancelPage.continueCancelationOnboarding();
});

When(/^the user selects "([^"]*)" reason(| and continues| and confirm detail| and cancel line)$/, async function(reason, continues) {
    await debitLineCancelPage.selectReason(reason);
    if (continues) {
        switch(continues.toLowerCase()) {
            case ' and continues':
                await debitLineCancelPage.continueCancelationReason();
                break;
            case ' and confirm detail':
                await debitLineCancelPage.continueCancelationReason();
                await debitLineCancelPage.continueCancelationDetail();
                break;
            case ' and cancel line':
                await debitLineCancelPage.continueCancelationReason();
                await debitLineCancelPage.continueCancelationDetail();
                await debitLineCancelPage.cancelLine();
                break;
            default:
                throw new Error(`${continues} is not a valid option`);
        }
    }
});

When(/^the user keeps the line$/, async function() {
    await debitLineCancelPage.keepLine();
});

When(/^the user closes the screen and (keeps|continues with operation)$/, async function(option) {
    await debitLineCancelPage.exitScreen();
    if (option === 'continues with operation') {
        await debitLineCancelPage.continueHalfHelpModal({action: 'confirmLeave'});
    }
});

When(/^the user (anticipates payment|pays the balance due)$/, async function(option) {
    const action = option === 'anticipates payment' ? 'outstandingBalances' : 'overduePayments';
    await debitLineCancelPage.confirmHalfHelpModal({action: action});
});

When(/^the user modifies reason$/, async function() {
    await debitLineCancelPage.modifyReason();
});

When(/^the user consults the details of the cancellation$/, async function() {
    await debitLineCancelPage.consultDetails();
});

When(/^the user shares voucher$/, async function() {
    await debitLineCancelPage.toShare();
});
