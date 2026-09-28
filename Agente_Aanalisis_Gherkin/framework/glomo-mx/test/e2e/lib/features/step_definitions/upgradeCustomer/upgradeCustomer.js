import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import upgradeCustomer  from '../../pages/upgradeCustomer/upgradeCustomer';

When(/^the user accesses to upgrade customer from "([^"]*)"(:? with "([^"]*)")?$/, async function(entryPoint, kycCompleted) {
    await navigation.upgradeCustomer.upgradeCustomer.go({ entryPoint });
    if (kycCompleted) {
        await upgradeCustomer.setLocalStorage('know_your_client_exception', true);
    }
});

When(/^the user gives consent to the "([^"]*)"(:? and the "([^"]*)")?$/, async function(firstCheckbox, secondCheckbox) {
    await upgradeCustomer.acceptTheCheckbox(firstCheckbox);
    if (secondCheckbox) {
        await upgradeCustomer.acceptTheCheckbox(secondCheckbox);
    }
});

When(/^the user tries to close the modal(:? and "([^"]*)")?$/, async function(option) {
    await upgradeCustomer.tryToCloseModal();
    if (option) {
        await upgradeCustomer.close(option);
    }
});

When(/^the user closes "([^"]*)" modal$/, async function(modal) {
    await upgradeCustomer.close(modal);
});
