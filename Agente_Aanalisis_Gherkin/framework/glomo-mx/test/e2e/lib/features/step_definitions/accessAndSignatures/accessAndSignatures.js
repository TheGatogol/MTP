import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import accessAndSignarutes from '../../pages/securityAccess/securityAccess';

When(/^the user enters the main login and signatures screen$/, async function () {
    await navigation.securitySettings.securityMenu.go({forceLogin: true});
    await navigation.accessAndSignatures.accessAndSignaturesDashboard.go();
});

When(/^the user closed access and signatures initial modal$/, async function () {
    await accessAndSignarutes.closeFirstModal();
});

When(/^the user wants turn on the biometrics switch on access tab page$/, async function () {
    await accessAndSignarutes.turnOnTheSwitch();
});

When(/^the user accesses to the fido configuration page$/, async function () {
    await navigation.fido.fido.go();
});

When(/^the user doesn't wants activate fido$/, async function () {
    await accessAndSignarutes.goAtAnotherTime();
});

When(/^the user navigates to the access and signatures screen and closes the modal$/, async function () {
    await navigation.accessAndSignatures.accessAndSignaturesDashboard.go();
    await accessAndSignarutes.closeFirstModal();
});

When(/^the user turn on switch and goes to configuration$/, async function () {
    await accessAndSignarutes.turnOnTheSwitch();
    await accessAndSignarutes.goConfiguration();
    await navigation.fido.fido.go();
});
