import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import cardOriginationOcDebitCard from '../../pages/cardOriginationOcDebitCard/cardOriginationOcDebitCard.js';

When(/^the user (accesses to|accepts) the oc debit card$/, async function (action) {
    const actionType = action === 'accepts';
    await navigation.cardOriginationOcDebitCard.cardOriginationOcDebitCard.go();
    if (actionType) {
        await cardOriginationOcDebitCard.acceptsLandingPage();
    }
});

When(/^the user (selects|continues) "([^"]*)" delivery$/, async function (action, option) {
    const deliveryOption = option === 'other address';
    await cardOriginationOcDebitCard.selectAddressType(deliveryOption);
    if (action === 'continues') {
        await cardOriginationOcDebitCard.continueDeliveryAddressStep(1);
    }
});

When(/^the user (fills|retries fill) the other address form with "([^"]*)" postal code$/, async function (action, postalCode) {
    const actionType = action === 'retries fill';
    await cardOriginationOcDebitCard.selectAddressType(true);
    await cardOriginationOcDebitCard.fillsTheOtherAddressForm(postalCode);
    if (actionType) {
        await cardOriginationOcDebitCard.retriesContinueDeliveryAddressStep(4, postalCode);
    } else {
        await cardOriginationOcDebitCard.continueDeliveryAddressStep();
    }
});

When(/^the user fills the "([^"]*)" field with "([^"]*)"$/, async function (field, value) {
    const specialCharacter = value === 'enters a special character';
    await cardOriginationOcDebitCard.fillAddressFormWithWrongInformation(field, specialCharacter);
});

When(/^the user "([^"]*)" the "([^"]*)" modal$/, async function (action, modalType) {
    const actionType = action === 'accepts';
    if (actionType) {
        await cardOriginationOcDebitCard.acceptModal();
    } else {
        await cardOriginationOcDebitCard.closeModal(modalType);
    }
});

When(/^the user deploys the (delivery information|notice privacy) modal$/, async function (modalType) {
    await cardOriginationOcDebitCard.deployOcDebitCardModalType(modalType);
});

When(/^the user "([^"]*)" the shipping address$/, async function (action) {
    const actionType = action === 'shows';
    await cardOriginationOcDebitCard.showAddress(actionType);
});

When(/^the user completes the oc debit card request$/, async function () {
    await cardOriginationOcDebitCard.selectAddressType();
    await cardOriginationOcDebitCard.continueDeliveryAddressStep(1);
    await cardOriginationOcDebitCard.selectDeliveryDate();
    await cardOriginationOcDebitCard.acceptSummary();
});

When(/^the user chooses the delivery date$/, async function () {
    await cardOriginationOcDebitCard.selectDeliveryDate();
});

When(/^the user modifies the delivery address$/, async function () {
    await cardOriginationOcDebitCard.modifyShippingAddress();
});

When(/^the user (keeps|exits) the oc debit card from "([^"]*)"$/, async function (action, step) {
    const actionType = action === 'keeps';
    if (actionType) {
        await cardOriginationOcDebitCard.acceptModal();
    } else {
        await navigation.card.orangeCardProductDetail.go({step});
    }
});
