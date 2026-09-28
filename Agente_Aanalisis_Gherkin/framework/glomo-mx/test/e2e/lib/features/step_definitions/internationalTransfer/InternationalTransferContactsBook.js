import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import InternationalTransferContactsBook from '../../pages/internationalTransfer/InternationalTransferContactsBook';

When(/^the user accesses to make an international transfer of the select operation$/, async function() {
    await navigation.selectOperations.selectOperations.go();
    await navigation.internationalTransfer.InternationalTransferContactsBook.go({previousScreen:'internationalTransfersPanel'});
});

When(/^the user accesses the contact list to search by "([^"]*)"$/, async function(value) {
    await InternationalTransferContactsBook.searchContact(value);
});

When(/^the user accesses to the international transfer$/, async function() {
    await navigation.selectOperations.selectOperations.go();
    await navigation.internationalTransfer.internationalTransfersPanel.go();
    await navigation.internationalTransfer.internationalTransfer.go({previousScreen:'internationalTransfersPanel'});
});

When(/^the user accesses the activity economic with contact saved "([^"]*)"$/, async function(name) {
    await InternationalTransferContactsBook.accessNewContact();
    await InternationalTransferContactsBook.createContact(name);
});

When(/^the user selects the "([^"]*)" option in the international transfer flow$/, async function(rawStep) {
    await InternationalTransferContactsBook.actionsContactBook(rawStep);
});
