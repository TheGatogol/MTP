import { When, Then } from '@cucumber/cucumber';
import * as navigation from '../../navigation';

//STEP DEFINITIONS
When(/^the user accesses to debit card request offer$/, async function () {
    await navigation.rdc.step1.go();
});

When(/^the user is in the "([^"]*)" step of debit card request$/, async function (option) {
    switch (option.toLowerCase()) {
        case 'delivery address':
            await navigation.rdc.step2.go();
            break;
        case 'shipping summary':
            await navigation.rdc.step3.go();
            break;
        default:
            throw new Error(`${option} option is not available to navigate...`);
    }
});

When(/^the user tap on show delivery address$/, async function () {
    await currentPage.showDeliveryAddress();
});

Then(/^the user address is unmasked$/, async function () {
    await currentPage.isAddressUnmasked();
});

Then(/^the user confirms contract of debit card request$/, async function () {
    await currentPage.confirmContract();
});

When(/^the user confirms the sms key to finalize debit card request$/, async function () {
    await navigation.rdc.success.go();
});
