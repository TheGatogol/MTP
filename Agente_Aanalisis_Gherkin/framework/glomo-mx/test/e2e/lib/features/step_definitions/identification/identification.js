import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import identificationPage from '../../pages/identification/identification';

When(/^the user accesses to "([^"]*)"$/, async function(option) {
    await navigation.identification.identification.go({
        option: option
    });
});

When(/^the user accepts the privacy notice$/, async function() {
    await identificationPage.acceptPrivacyNotice();
});

When(/^the user reads the recommendations to scan the ID$/, async function() {
    await identificationPage.scannINE();
});

When(/^the user scan their identification$/, async function() {
    await identificationPage.closeRecomendationsModal();
});

When(/^the user takes a selfie$/, async function() {
    await identificationPage.scannSelfie();
});

When(/^the user continues to the second step$/, async function() {
    await identificationPage.continueFirstStep();
});

When(/^the user continues to the resume screen$/, async function() {
    await identificationPage.continueSecondStep();
});

When(/^the user reads the privacy notice$/, async function() {
    await identificationPage.openPrivacyNotice();
});

When(/^the user confirms the summary and update his identification$/, async function() {
    await identificationPage.completeProcess();
});

When(/^the user closes identification screen$/, async function() {
    await identificationPage.exitAndConfirm();
});
