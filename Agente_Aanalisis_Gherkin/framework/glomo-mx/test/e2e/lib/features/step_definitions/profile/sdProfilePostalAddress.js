import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import profilePage from '../../pages/profile/profile';
import profilePostalAddressPage from '../../pages/profile/pProfilePostalAddress';
import uploadFilePage from '../../pages/profile/pUploadFile';
import recipientsHelpModal from '../../pages/profileRecipients/recipientsHelpModal';

When(/^the user displays Address Data$/, async function () {
    await profilePage.unmaskAddressData();
});

When(/^the user accesses to "([^"]*)" screen$/, async function (option) {
    switch (option.toLowerCase()) {
        case 'attach pdf':
            await profilePostalAddressPage.addInformation();
            await profilePostalAddressPage.sendFormInformation();
            await navigation.profilePostalAddress.uploadFile.go({pdf: true});
            break;
        case 'choose or take photo':
            await profilePostalAddressPage.addInformation();
            await profilePostalAddressPage.sendFormInformation();
            await navigation.profilePostalAddress.uploadFile.go({pdf: false});
            break;
        case 'profile recipients help':
            await navigation.profileRecipients.recipientsHelpModal.go({forceLogin: true});
            break;
        case 'profile privacy notice':
            await navigation.profileRecipients.recipientsHelpModal.go({forceLogin: true});
            await recipientsHelpModal.goToPrivacyNotice();
            break;
        case 'profile recipients':
            await navigation.profileRecipients.profileRecipientsInit.go({forceLogin: true});
            break;
        case 'register another address':
            await navigation.profileRecipients.recipientsFormAddress.go();
            break;
        default:
            throw new Error(`${option} link is not available to navigate to...`);
    }
});

When(/^the user fills address form$/, async function () {
    await profilePostalAddressPage.addInformation();
    await profilePostalAddressPage.sendFormInformation();
});

When(/^the user accesses to summary screen from "([^"]*)" screen$/, async function (option) {
    switch (option.toLowerCase()) {
        case 'options photo':
            await navigation.profilePostalAddress.optionsPhoto.go({reverse: false});
            await navigation.profilePostalAddress.uploadFile.go();
            await navigation.profilePostalAddress.optionsPhoto.go({reverse: true});
            await navigation.profilePostalAddress.profilePostalAddress.go();
            break;
        case 'attach pdf':
            await uploadFilePage.attachPDF();
            await navigation.profilePostalAddress.profilePostalAddress.go({add: false});
            break;
        default:
            throw new Error(`${option} link is not available to navigate to...`);
    }
});

When(/^the user enters wrong "([^"]*)"/, async function (data) {
    switch (data.toLowerCase()) {
        case 'postal code':
            await profilePostalAddressPage.addWrongPC();
            break;
        case 'date':
            await uploadFilePage.addDate({typeDate: 'invalid'});
            break;
        case 'validity date':
            await uploadFilePage.selectProof({proof: 'elector credential'});
            await uploadFilePage.fillWrongValidityDate();
            break;
        default:
            throw new Error(`${data} data is not available.`);

    }
});

When(/^the user resends form "([^"]*)" data$/, async function (action) {
    switch (action.toLowerCase()) {
        case 'updating':
            await profilePostalAddressPage.addInformation();
            await profilePostalAddressPage.sendFormInformation();
            await profilePostalAddressPage.goChangeAddress();
            await profilePostalAddressPage.insertNewStreet();
            await profilePostalAddressPage.sendFormInformation();
            break;
        case 'not updating':
            await profilePostalAddressPage.addInformation();
            await profilePostalAddressPage.sendFormInformation();
            await profilePostalAddressPage.goChangeAddress();
            await profilePostalAddressPage.sendFormInformation();
            break;
        default:
            throw new Error(`${action} action is not available.`);
    }
});

When(/^the user completes information to "([^"]*)" proof$/, async function (proof) {
    switch (proof.toLowerCase()) {
        case 'elector credential':
            await uploadFilePage.selectProof({proof: proof});
            await uploadFilePage.fillInformationToElectorCredential();
            break;
        case 'electric bill option':
            await uploadFilePage.selectProof({proof: proof});
            await uploadFilePage.addDate({typeDate: 'valid'});
            break;
        default:
            throw new Error(`The navigation assertion in page: ${proof} is not implemented`);
    }
});

When(/^the user accesses to "([^"]*)" info modal$/, async function (option) {
    switch (option.toLowerCase()) {
        case 'ocr':
            await uploadFilePage.selectModalOCR();
            break;
        case 'upload file':
            await uploadFilePage.seesUploadFileInfoModal();
            break;
        case 'notice of privacy':
            await uploadFilePage.seesNoticeOfPrivacyModal();
            break;
        default:
            throw new Error(`${option} option is not available.`);
    }
});

When(/^the user cancels until profile screen$/, async function () {
    await navigation.profile.go();
});

When(/^the user enters his address starting with the "([^"]*)"$/, async function (option) {
    switch (option.toLowerCase()) {
        case 'street':
            await profilePostalAddressPage.insertStreet();
            break;
        case 'exterior number':
            await profilePostalAddressPage.insertNumExt();
            break;
        case 'postal code':
            await profilePostalAddressPage.insertPC();
            break;
        default:
            throw new Error(`${option} button is not available to tap on...`);
    }
});
