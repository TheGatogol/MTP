import {When} from '@cucumber/cucumber';
import buyNowPayLaterRemaining from '../../pages/buyNowPayLaterRemaining/buyNowPayLaterRemaining';

When('the user gets the step one of multistep', async function() {
    await buyNowPayLaterRemaining.continueMultistep();
});

When('the user gets to the buy now pay later summary', async function() {
    await buyNowPayLaterRemaining.summaryView();
});

When('the user complete the buy now pay later multistep', async function() {
    await buyNowPayLaterRemaining.acceptTermsAndConditions();
});

When('the user confirms the form and continues to otp screen', async function() {
    await buyNowPayLaterRemaining.goesToOtpScreen();
});

When('the user accesses to the buy now pay later success page', async function() {
    await buyNowPayLaterRemaining.fillOtp('11111111');
});
