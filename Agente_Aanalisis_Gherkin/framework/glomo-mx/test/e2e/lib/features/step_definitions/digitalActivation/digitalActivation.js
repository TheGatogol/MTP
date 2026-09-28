import { When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';

When('the user completes the Digital Activation Flow', async function() {
    await currentPage.fillPhone();
    await currentPage.fillCard();
    await currentPage.fillBirthDate();
    await currentPage.inputCardDetails();
});

When(/^the user requests the sms key$/, async function() {
    await currentPage.selectCall();
});

When(/^the user accesses to Digital Activation Flow$/, async function() {
    await navigation.digitalActivation.digitalActivation.go();
});

When(/^the user closes success registration modal$/, async function() {
    await navigation.digitalActivation.digitalActivationCall.go();
});

When(/^the user initiates call to customer support$/, async function() {
    await currentPage.selectCall();
});

When(/^the user requests call after closing success registration modal$/, async function() {
    await navigation.digitalActivation.digitalActivationMobileServices.go();
});

When(/^the user enters the contact information of additional$/, async function () {
    await navigation.digitalActivation.digitalActivation.go();
    await currentPage.setCard('4772133016906361');
    await currentPage.setPhone('5522202040');
    await currentPage.selectContinueCard();
});

When(/^the user submits their phone and card number$/, async function() {
    await currentPage.fillPhone();
    await currentPage.fillCard();
});

When(/^the user chooses to exit$/, async function() {
    await currentPage.exitHeader();
});

When(/^the user submits an incorrect card number$/, async function() {
    await currentPage.fillPhone();
    await currentPage.fillCard('1111111111111111');
});

When(/^the user accesses to "([^"]*)" section$/, async function(option) {
    await navigation.digitalActivation.digitalActivation.go();
    switch (option.toLowerCase()) {
        case 'register':
            await currentPage.monoproductOption('monoproduct access');
            break;
        case 'register and select notice privacy':
            await currentPage.monoproductOption('identify notice privacy');
            break;
        case 'register and identify without card':
            await currentPage.goToMonoproductEnrollmentEntrypoint();
            break;
        case 'monoproduct flow':
            await currentPage.goToMonoproductEnrollmentFlow();
            break;
        case 'monoproduct flow and confirm their personal data':
            await currentPage.goToMonoproductEnrollmentFlow();
            await currentPage.enterPersonalData();
            await currentPage.monoproductOption('finish fill personal data');
            break;
        case 'monoproduct until to biometric screen':
            await currentPage.enterToBiometric();
            break;
        case 'monoproduct until to biometric screen and select privacy':
            await currentPage.enterToBiometric();
            await currentPage.monoproductOption('enter biometric notice privacy');
            break;
        case 'monoproduct and accept the processing of their personal data':
            await currentPage.enterToBiometric();
            await currentPage.monoproductOption('accept to process data');
            await currentPage.startBiometricVerification();
            break;
        case 'transversal enrollment':
            await currentPage.goToTransversalEnrollmentEntrypoint();
            break;
        default:
            throw new Error(`${option}`);
    }
});
