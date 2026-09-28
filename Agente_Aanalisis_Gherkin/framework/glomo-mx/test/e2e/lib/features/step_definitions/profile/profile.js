import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import profilePage from '../../pages/profile/profile';

When(/^the user accesses to profile screen$/, async function () {
    await navigation.profile.go({forceLogin: true});
});

When(/^the user accesses to identification validation screen$/, async function () {
    await navigation.profile.go({forceLogin: true});
    await profilePage.unmaskPersonalInfo();
    await navigation.identification.identification.go({secondaryId: true});
});

When(/^the user taps on "([^"]*)" profile button$/, async function (option) {
    switch (option.toLowerCase()) {
        case 'personal info show data':
            await profilePage.unmaskPersonalInfo();
            break;
        case 'contacts show data':
            await profilePage.unmaskContacts();
            break;
        case 'tax residence show data':
            await profilePage.unmaskTaxResidenceData();
            break;
        case 'email show data':
            await profilePage.unmaskEmailData();
            break;
        case 'tax residence tooltip':
            profilePage.openInfoModal('taxResidence');
            break;
        case 'add mail':
            await navigation.emailManagement.updateEmail.go({add: true});
            break;
        case 'edit mail pencil':
            await navigation.emailManagement.updateEmail.go({add: false});
            break;
        case 'address info button':
            await profilePage.openInfoModalAddress();
            break;
        case 'edit address':
            await profilePage.seesEditAddressInfoModal();
            break;
        case 'add address':
            await profilePage.seesAddAddressInfoModal();
            break;
        case 'confirm curp':
            await profilePage.confirmCurp();
            break;
        case 'add tax residence survey':
            await profilePage.unmaskTaxResidenceData();
            await navigation.fatcaValidationSurvey.fatcaValidationSurvey.go({add: false});
            break;
        case 'contracts show data':
            await profilePage.seesCustomersContractsList();
            break;
        case 'add kyc validation':
            await navigation.kycValidation.kycValidation.go({add: true});
            break;
        case 'add kyc validation high risk':
            await navigation.kycValidationHighRisk.kycValidationHighRisk.go();
            break;
        default:
            throw new Error(`${option} button is not available to tap on...`);
    }
});

When(/^the user accesses to add "([^"]*)" screen$/, async function (option) {
    switch (option.toLowerCase()) {
        case 'identification':
            await navigation.identification.identification.go({add: true});
            break;
        case 'ine identification':
            await navigation.nationalId.nationalId.go();
            break;
        case 'address':
            await navigation.profilePostalAddress.profilePostalAddress.go({forceLogin: true}, {add: false});
            break;
        case 'curp':
            await navigation.curp.curp.go({forceLogin: true}, {add: true});
            break;
        default:
            throw new Error(`${option} link is not available to navigate to...`);
    }
});

When(/^the user accesses to edit "([^"]*)" screen$/, async function (option) {
    switch (option.toLowerCase()) {
        case 'identification':
            await navigation.identification.identification.go({add: false});
            break;
        case 'address':
            await navigation.profilePostalAddress.profilePostalAddress.go({forceLogin: true}, {add: true});
            break;
        case 'curp':
            await navigation.curp.curp.go({add: true});
            break;
        default:
            throw new Error(`${option} link is not available to navigate to...`);
    }
});

When(/^the user accesses to add address section$/, async function () {
    await navigation.profileAddressManagement.profileAddressManagement.go({forceLogin: true}, {add: false});
});
