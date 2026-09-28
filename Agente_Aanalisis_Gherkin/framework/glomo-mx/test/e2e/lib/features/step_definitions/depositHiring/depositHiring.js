import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import depositHiringPage from '../../pages/depositHiring/depositHiring';

When(/^the user goes to the contract payment offer operation$/, async function () {
    await navigation.contractPaymentExisting.contractPaymentExistingModal.go();
});

When(/^the user goes to the deposit purchase operation$/, async function () {
    await navigation.contractPaymentExisting.contractPaymentExisting.go();
});

When(/^the user goes to the contract page$/, async function () {
    await navigation.depositHiring.depositHiringPage.go();
});

When(/^the user goes to the deposit hiring operation$/, async function () {
    await navigation.depositHiring.depositHiring.go();
});

When(/^the user close tooltip$/, async function () {
    await depositHiringPage.closeTooltip();
});

When(/^the user completes the contracting process$/, async function () {
    await depositHiringPage.continueSteps();
});

When(/^the user completes the contracting process without otp$/, async function () {
    await depositHiringPage.continueWithoutOtp();
});

When(/^the user confirms otp deposit code$/, async function () {
    await navigation.depositHiring.depositHiringReview.go();
});

When(/^the user confirms otp deposit code error$/, async function () {
    await depositHiringPage.continueModalError();
});

When(/^the user accesses to account step$/, async function () {
    await depositHiringPage.continueSimulate();
});

When(/^the user accesses to instruction step$/, async function () {
    await depositHiringPage.continueStepInstruction();
});

When(/^the user accesses to terms and conditions step$/, async function () {
    await depositHiringPage.continueStepTerms();
});

When(/^the user continues to instructions$/, async function () {
    await depositHiringPage.goesToInstructions();
});

When(/^the user completes the instructions$/, async function () {
    await depositHiringPage.accessesToInstructionOption();
});

When(/^the user accesses to screen help modal gat$/, async function () {
    await depositHiringPage.accessToGatModals();
});

When(/^the user accesses to modals on instructions$/, async function () {
    await depositHiringPage.accessesToInstructionModal();
});

When(/^the user goes to coupon on first step$/, async function () {
    await depositHiringPage.viewCoupon();
});

When(/^the user dont have a coupon on first step$/, async function () {
    await depositHiringPage.couponNotDisplay();
});

When(/^the user accesses to screen coupon modal$/, async function () {
    await depositHiringPage.uniquePromotionModal();
});
