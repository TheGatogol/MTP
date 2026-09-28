import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import deferredSignaturePurchaseInstruction from '../../pages/deferredSignature/deferredSignaturePurchaseInstruction';

When(/^the user with purchase instruction reach the contract summary$/, async function() {
    await deferredSignaturePurchaseInstruction.interactWithElement();
    await deferredSignaturePurchaseInstruction.completeResume();
});

When(/^the user with purchase instruction completes the process$/, async function() {
    await navigation.deferredSignature.deferredSignaturePurchaseInstructionReview.go();
});

When(/^the user interrupts the contract$/, async function() {
    await deferredSignaturePurchaseInstruction.exitPurchaseInstruction();
});

When(/^the user confirms that the data is correct$/, async function() {
    await deferredSignaturePurchaseInstruction.btnContinue();
    await deferredSignaturePurchaseInstruction.continueWithOTP();
});
