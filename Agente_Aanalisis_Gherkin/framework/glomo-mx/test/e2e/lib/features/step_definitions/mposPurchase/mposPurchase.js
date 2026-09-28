import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import mposPurchase from '../../pages/mposPurchase/mposPurchase';

When(/^the user accesses to card MPOS$/, async function() {
    await navigation.mposPurchase.mposPurchase.go();
});

When (/^the user selects an account for the process$/, async function () {
    await mposPurchase.continueMpos();
    await mposPurchase.continueAddress();
    await mposPurchase.selectAccount();
});

When (/^the user completes the process$/, async function () {
    await mposPurchase.confirmProcess();
    await mposPurchase.fillOtp('96226392');
});

When (/^the user accesses to more details section$/, async function () {
    await mposPurchase.accessMoreDetails();
});

When (/^the user selects all options$/, async function () {
    await mposPurchase.allOptions();
});

When (/^the user selects the main address and closes the section$/, async function () {
    await mposPurchase.continueMpos();
    await mposPurchase.mainAddress();
    await mposPurchase.closeMposSection();
    await mposPurchase.closeMpos();
});

When (/^the user selects at another time$/, async function () {
    await mposPurchase.anotherTimeOption();
});

When (/^the user adds and saves other address$/, async function () {
    await mposPurchase.continueMpos();
    await mposPurchase.otherAddress();
    await mposPurchase.addAddress();
    await mposPurchase.saveAddress();
});

When (/^the user edits and saves others number$/, async function () {
    await mposPurchase.editOtherAddress();
    await mposPurchase.editNumerAddress('26');
});

When (/^the user accepts the delete proccess$/, async function () {
    await mposPurchase.confirmDelete();
});

When (/^the user cancels the delete proccess$/, async function () {
    await mposPurchase.cancelDelete();
});

When (/^the user deletes the other address$/, async function () {
    await mposPurchase.deleteAddress();
});

When (/^the user shows the information$/, async function () {
    await mposPurchase.continueMpos();
    await mposPurchase.seeMainAddressInformation();
    await mposPurchase.fillOtp('36993312');
});

When (/^the user closes the MPOS section$/, async function () {
    await mposPurchase.continueMpos();
    await mposPurchase.closeMposSection();
});

When (/^the user consults the conditions and close the section$/, async function () {
    await mposPurchase.continueMpos();
    await mposPurchase.consultConditionsOption();
});

When (/^the user shows all accounts$/, async function () {
    await mposPurchase.continueMpos();
    await mposPurchase.continueAddress();
    await mposPurchase.seeAllAccounts();
});

When (/^the user closes the accounts section$/, async function () {
    await mposPurchase.closeAllAccounts();
});

When (/^the continues with the mpos process$/, async function() {
    await mposPurchase.continueMpos();
    await mposPurchase.continueAddress();
});

When (/^the user edits the main address information$/, async function () {
    await mposPurchase.changeOtherAddress();
});

When (/^the user accesses to other commissions section$/, async function () {
    await mposPurchase.accessCommissions();
});

