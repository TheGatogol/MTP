import { When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';

When(/^the user enter to business debit card modal$/, async function() {
    await navigation.businessDebitCard.businessDebitCardModal.go();
});

When(/^the user enter to business debit card modal from "([^"]*)" section$/, async function(access) {
    await navigation.businessDebitCard.businessDebitCardModal.go(access);
});

When( /^the user accesses the business debit modal from "([^"]*)" option in configure products/, async function (access) {
    await navigation.businessDebitCard.businessDebitCardModal.go(access);
});
