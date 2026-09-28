import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import OnBoardingDigitalAccount from '../../pages/onBoardingN2/onBoardingDigitalAccount';
import onBoardingDigitalAccountMultistep from '../../pages/onBoardingN2/onBoardingDigitalAccountMultistep';
import onBoardingAccountSignaturePadModal from '../../pages/onBoardingN2/onBoardingAccountSignaturePadModal';

When(/^the user goes to "([^"]*)"$/, async function(option) {
    switch (option.toLowerCase()){
        case 'screen open account':
            await navigation.onBoardingN2.onBoardingDigitalAccountMultiStep.go();
            break;
        case 'register account':
            await navigation.onBoardingN2.onBoardingN2.go();
            break;
        default:
            throw new Error(`Option "${option}" not available.`);
    }
});

When(/^the user accesses for the first time and enters "([^"]*)" personal data$/, async function(option) {
    await navigation.onBoardingN2.onBoardingDigitalAccountMultiStep.go();
    const useIncorrectData = option.toLowerCase() !== 'correct';
    await onBoardingDigitalAccountMultistep.firstPartOfRegistration({ useIncorrectData });
});

When(/^the user accesses to personal data$/, async function() {
    await onBoardingDigitalAccountMultistep.validatesPersonalData();
});

When(/^the user registers current address information and "([^"]*)" continue$/, async function(option) {
    await onBoardingDigitalAccountMultistep.secondPartOfRegistration();
    if (option.toLowerCase() === 'selects') {
        await onBoardingDigitalAccountMultistep.continueAddress();
    }
});

When(/^the user registers their current contact information with "([^"]*)" phone$/, async function(option) {
    const phone = option.toLowerCase() === 'valid' ? user.contact[0].number : '0000000000';
    await onBoardingDigitalAccountMultistep.thirdPartOfRegistration({ phone });
});

When(/^the user accepts terms and conditions of contracts and "([^"]*)" to sign$/, async function(option) {
    await onBoardingDigitalAccountMultistep.fourthPartOfRegistration();
    if (option.toLowerCase() === 'wants') {
        await navigation.onBoardingN2.onBoardingSignaturePadModal.go();
        await onBoardingAccountSignaturePadModal.signatureEntry();
        await navigation.onBoardingN2.onBoardingSignatureMultistep.go();
        await onBoardingDigitalAccountMultistep.continueContractsData();
    }
});

When(/^the user enters password data(| and registers an account| and tries to register an account| and registers an account with otp)$/, async function(option) {
    await onBoardingDigitalAccountMultistep.registerPartPassword(user.contact[0].password);
    if(option) {
        switch (option.toLowerCase()){
            case ' and registers an account':
                await navigation.onBoardingN2.onBoardingCreateAccountSuccess.go();
                break;
            case ' and registers an account with otp':
                await navigation.onBoardingN2.onBoardingCreateAccountSuccess.go(true);
                break;
            default:
                throw new Error(`${option} not available.`);
        }
    }
});

When(/^the user enters the fourth section$/, async function() {
    await navigation.onBoardingN2.onBoardingDigitalAccountMultiStep.go();
    await onBoardingDigitalAccountMultistep.goToSection('fourth');
});

When(/^the user accesses his account$/, async function() {
    await navigation.onBoardingN2.onBoardingDigitalAccountSuccess.go();
});

When(/^the user exits the modal "([^"]*)" through the "([^"]*)" button$/, async function(option, button) {
    switch (option.toLowerCase()){
        case 'more information':
            await OnBoardingDigitalAccount.closeMoreInfoModal(button);
            break;
        case 'privacy notice':
            await OnBoardingDigitalAccount.closePrivacyNoticeModal(button);
            break;
        default:
            throw new Error(`${option} not available.`);
    }
});

When(/^the user accesses to "([^"]*)" modal$/, async function(modalName) {
    await onBoardingDigitalAccountMultistep.accessToModal(modalName);
});

When(/^the user closes the account digital screen$/, async function() {
    await OnBoardingDigitalAccount.closeDigitalAccount();
});

When(/^the user edits current "([^"]*)" section$/, async function(section) {
    if (section.toLowerCase() === 'contract') {
        await onBoardingDigitalAccountMultistep.editContract();
    } else {
        await onBoardingDigitalAccountMultistep.editPassword();
    }
});

When(/^the user taps on "([^"]*)" item$/, async function(item) {
    switch(item.toLowerCase()){
        case 'name':
            await onBoardingDigitalAccountMultistep.fillsNameItem();
            break;
        case 'first lastname':
            await onBoardingDigitalAccountMultistep.fillsFirstLastNameItem();
            break;
        case 'second lastname':
            await onBoardingDigitalAccountMultistep.fillsSecondLastNameItem();
            break;
        case 'birthdate':
            await onBoardingDigitalAccountMultistep.fillsBirthDateItem();
            break;
        case 'birthplace':
            await onBoardingDigitalAccountMultistep.fillsBirthPlaceItem();
            break;
        case 'sex option male':
            await onBoardingDigitalAccountMultistep.selectsSexOptionMaleItem();
            break;
        case 'sex option female':
            await onBoardingDigitalAccountMultistep.selectsSexOptionFemaleItem();
            break;
        case 'sex option non binary':
            await onBoardingDigitalAccountMultistep.selectsSexOptionNonBinaryItem();
            break;
        case 'number ine':
            await onBoardingDigitalAccountMultistep.fillsNumberIneItem();
            break;
        case 'ine tooltip':
            await onBoardingDigitalAccountMultistep.selectsBtnHelpIneItem();
            break;
        case 'help id':
            await onBoardingDigitalAccountMultistep.selectsBtnHelpIDItem();
            break;
        default:
            throw new Error(`${item} data is not available.`);
    }
});

When(/^the user enters the wrong info "([^"]*)"/, async function(data) {
    switch(data.toLowerCase()){
        case 'date error':
            await onBoardingDigitalAccountMultistep.registerDateOfBirth({typeDate: 'minor'});
            break;
        case 'zip code error':
            await onBoardingDigitalAccountMultistep.errorZipCode({codeError: 'error'});
            break;
        case 'zip code invalid':
            await onBoardingDigitalAccountMultistep.errorZipCode({codeError: 'invalid'});
            break;
        case 'zip code short':
            await onBoardingDigitalAccountMultistep.registerZipCode(user.address[0].shortZipCode);
            await onBoardingDigitalAccountMultistep.registerOutsideNumber(user.address[0].outsideNumber);
            break;
        case 'number contact invalid':
            await onBoardingDigitalAccountMultistep.registerNumber(user.contact[0].invalidPhone);
            break;
        case 'email invalid':
            await onBoardingDigitalAccountMultistep.registerEmail(user.contact[0].invalidEmail);
            break;
        case 'validate email':
            await onBoardingDigitalAccountMultistep.validateEmailParts();
            break;
        case 'password invalid':
            await onBoardingDigitalAccountMultistep.errorPassword({element: 'invalid'});
            break;
        case 'validate password':
            await onBoardingDigitalAccountMultistep.errorPassword({element: 'validate'});
            break;
        default:
            throw new Error(`${data} data is not available.`);
    }
});

When(/^the user accesses help register ine$/, async function() {
    await onBoardingDigitalAccountMultistep.registerIneAndShowHelp();
});

When(/^the user remove address information$/, async function() {
    await onBoardingDigitalAccountMultistep.resetAllAddressInputs();
});

When(/^the user registers current contact information and not continue$/, async function() {
    await onBoardingDigitalAccountMultistep.thirdPartOfRegistration({ isContinue: false });
});

When(/^the user accesses help ine and "([^"]*)" modal$/, async function(option) {
    await onBoardingDigitalAccountMultistep.selectsBtnHelpIDItem();
    await onBoardingDigitalAccountMultistep.selectHelpIdBtn(option);
});

When(/^the user accesses to non account client section and enters "([^"]*)" personal data$/, async function(option) {
    await navigation.digitalActivation.digitalActivation.go();
    await navigation.onBoardingN2.onBoardingDigitalAccountMultiStep.go();
    switch (option.toLowerCase()){
        case 'correct':
            await onBoardingDigitalAccountMultistep.firstPartOfRegistration();
            break;
        case 'only':
            await onBoardingDigitalAccountMultistep.firstPartOfRegistration({ onlySetData: true});
            break;
        case 'short id':
            await onBoardingDigitalAccountMultistep.registerIne(user.data[0].lessNumberIne);
            break;
        case 'minor':
            await onBoardingDigitalAccountMultistep.registerDateOfBirth({typeDate: 'minor'});
            break;
        case 'incorrect':
            await onBoardingDigitalAccountMultistep.firstPartOfRegistration({ useIncorrectData: true });
            break;
        default:
            throw new Error(`${option} not available.`);
    }
});

When(/^the user accepts sign contract and "([^"]*)" otp$/, async function(section) {
    await onBoardingDigitalAccountMultistep.fillOtp('12345678');
    await onBoardingDigitalAccountMultistep.fourthPartOfRegistration(true);
    await navigation.onBoardingN2.onBoardingSignaturePadModal.go();
    if (section.toLowerCase() === 'close') {
        await onBoardingAccountSignaturePadModal.signatureEntry();
        await navigation.onBoardingN2.onBoardingSignatureMultistep.go();
        await onBoardingDigitalAccountMultistep.continueContractsData();
    }
});

When(/^the user tries to enter personal data and "([^"]*)"$/, async function(options) {
    await onBoardingDigitalAccountMultistep.retryPersonalData(options);
});

When(/^the user registers current address information with no inner number$/, async function() {
    await onBoardingDigitalAccountMultistep.secondPartOfRegistration(false);
});

When(/^the user accesses to non account client section$/, async function() {
    await navigation.digitalActivation.digitalActivation.go();
    await navigation.onBoardingN2.onBoardingDigitalAccountMultiStep.go();
});
