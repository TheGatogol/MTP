import { When } from '@cucumber/cucumber';
import deferredSignatureCoowners from '../../pages/deferredSignatureCoowners/deferredSignatureCoowners';

When(/^the user check the summary screen$/, async function () {
    await deferredSignatureCoowners.checkTermsAndConditions();
    await deferredSignatureCoowners.completeResume();
});

When(/^the user confirms the signing process$/, async function () {
    await deferredSignatureCoowners.completeStep();
});

When(/^the user confirm the token screen$/, async function () {
    await deferredSignatureCoowners.confirmOtp();
});

When(/^the user completes the happy path of the signing process$/, async function () {
    await deferredSignatureCoowners.completeStep();
    await deferredSignatureCoowners.confirmOtp();
});

When(/^the user leaves the process deferred signature coowners "([^"]*)"$/, async function(option) {
    await deferredSignatureCoowners.exitProcess(option);
});
