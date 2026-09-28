import {When} from '@cucumber/cucumber';
import profileAddressManagementPage from '../../pages/profile/profileAddressManagement';

When(/^the user opens the "([^"]*)" modal$/, async function (modal) {
    await profileAddressManagementPage.openModal(modal);
});

When(/^the user opens the receipt type list(?: and selects the "([^"]*)")?$/, async function (receipt) {
    await profileAddressManagementPage.openTheDocumentTypeList();
    if (receipt) {
        await profileAddressManagementPage.selectsTheReceiptType(receipt);
    }
});

When(/^the user selects the "([^"]*)" media source(?: from "([^"]*)" modal)?$/, async function (mediaSource, modal) {
    if (modal) {
        await profileAddressManagementPage.openModal(modal);
    }
    await profileAddressManagementPage.selectsMediaSource(mediaSource);
});

When(/^the user closes the privacy modal$/, async function () {
    await profileAddressManagementPage.closePrivacyNoticeModal();
});
