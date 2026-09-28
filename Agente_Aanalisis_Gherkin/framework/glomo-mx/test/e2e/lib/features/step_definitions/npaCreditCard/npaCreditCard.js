import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import npaCreditCard from '../../pages/npaCreditCard/npaCreditCard';

When(/^the user accesses on non pre approved credit card "([^"]*)"$/, async function (result) {
    switch (result.toLowerCase()) {
        case 'successfully':
            await navigation.npaCreditCard.go();
            break;
        case 'unsuccessfully':
            await navigation.npaCreditCard.attempt({ successfullAttempt: false });
            break;
        default:
            throw new Error('Selected option is not available...');
    }
});

When(/^the user continue to checks page$/, async function () {
    await npaCreditCard.continueOfferPage();
});

When(/^the user receives approval for their request$/, async function () {
    await npaCreditCard.successCase();
});

When(/^the user receives a rejection of their request$/, async function () {
    await npaCreditCard.rejectionCase();
});

When(/^the user closes the waiting modal$/, async function () {
    await npaCreditCard.closeWaitingModal();
});

When(/^the user goes to pre approved credit card from npa credit card$/, async function () {
    await npaCreditCard.continueSuccessPage();
});

When(/^the user open modal of authorization$/, async function () {
    await npaCreditCard.openAuthorizationModal();
});

When(/^the user close the modal authorization$/, async function () {
    await npaCreditCard.closeAuthorizationModal();
});

When(/^the user open modal of benefits$/, async function () {
    await npaCreditCard.openBenefitsModal();
});

When(/^the user close the modal benefits$/, async function () {
    await npaCreditCard.closeBenefitsModal();
});

When(/^the user tries to exit from the checks page$/, async function () {
    await npaCreditCard.clickCloseChecksPage();
});

When(/^the user closes the exit modal through the "([^"]*)" method$/, async function (value) {
    await npaCreditCard.returnChecksPage(value);
});

When(/^the user close the exit modal$/, async function () {
    await npaCreditCard.exitChecksPage();
});

When(/^the user close the offer page$/, async function () {
    await npaCreditCard.exitOfferPage();
});

When(/^the user go to profile$/, async function () {
    await npaCreditCard.goProfileFromLackOfInfoModal();
});

When(/^the user proceeds to view more information$/, async function () {
    await npaCreditCard.moreInformation();
});

When(/^the user closes the lack of info modal through the "([^"]*)" method$/, async function (value) {
    await npaCreditCard.returnEntryPoint(value);
});

When(/^the user closes the rejection modal through the "([^"]*)" method$/, async function (value) {
    await npaCreditCard.closeRejectionModal(value);
});

When(/^the user closes the media modal through the "([^"]*)" method$/, async function (value) {
    await npaCreditCard.closeExternalLinkModal(value);
});
