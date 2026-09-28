import { When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import deviceAccessPage from '../../pages/deviceAccess/deviceAccessPage';

When(/^the user inserts card number$/, async function() {
    await deviceAccessPage.insertNumberCard(user.numberCard[0].id);
});

When(/^the user accesses screen of call$/, async function () {
    await navigation.deviceAccess.deviceAccessCall.go();
});

When(/^the user starts the scan of the Qr of the card$/, async function () {
    await deviceAccessPage.openCamera();
});

When(/^the user reactivates his account$/, async function () {
    await navigation.deviceAccess.deviceAccessPage.go();
});

When(/^the user accesses to device access page$/, async function () {
    await deviceAccessPage.accessContinue();
});

When(/^the user accesses to verification page$/, async function () {
    await navigation.deviceAccess.deviceAccessVerification.go();
});

When(/^the user exit modal$/, async function () {
    await deviceAccessPage.accessExitModal();
});

When(/^the user accesses to reactivates his c4 status$/, async function () {
    await navigation.deviceAccess.deviceAccess.go();
});

When(/^the user accesses to reactivation screen and begins the process$/, async function () {
    await navigation.deviceAccess.deviceAccessPage.go();
    await deviceAccessPage.insertNumberCard(user.products.numberCard[0].id);
    await deviceAccessPage.accessContinue();
});

When(/^the user does not have a card or account$/, async function () {
    await deviceAccessPage.entryNonAccountClient();
});
