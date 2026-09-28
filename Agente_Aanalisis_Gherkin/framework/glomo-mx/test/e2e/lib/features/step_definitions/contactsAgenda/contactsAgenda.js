import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import contactsAgendaPage from '../../pages/contactsAgenda/contactsAgenda';

function searchInAgenda(contact){
    let contactFound;
    switch (contact.toLowerCase()){
        case 'account bbva':
            contactFound= user.products[0].searchContact[6].nameContactBBVA;
            break;
        case 'more accounts bbva':
            contactFound= user.products[0].searchContact[7].nameContactWith2ProductsBBVA;
            break;
        default:
            throw new Error(`${contact} The contact is not available to browse...`);
    }
    return contactFound;
}

When (/^the user accesses the agenda screen$/, async function() {
    await navigation.contactsAgenda.go();
});

When (/^the user selects a contact user$/, async function() {
    await navigation.diy.transfer.contactTransfers.go();
});

When (/^the user deletes a "([^"]*)" user$/, async function(product) {
    await contactsAgendaPage.swipeContact(product);
});

When (/^the user cancels the deletion and deletes another contact with more than 3 products$/, async function () {
    await currentPage.confirmDialog({isConfirmed: true});
    await contactsAgendaPage.searchContactsaved(user.products[0].searchContact[5].nameContactWith3Products);
    await contactsAgendaPage.swipeContact('contact');
    await currentPage.confirmDialog({isConfirmed: true});
});

When (/^the user search a contact$/, async function() {
    await contactsAgendaPage.searchContact();
});

When (/^the user sees a contact search result$/, async function() {
    await contactsAgendaPage.searchContactValidation();
});

When (/^the user is in the contacts agenda screen$/, async function() {
    await navigation.contactsAgenda.assert();
});

When (/^the user deletes a contact that has "([^"]*)"$/, async function (contact) {
    const contactInAgenda= searchInAgenda(contact);
    await contactsAgendaPage.contactRemoval(contactInAgenda);
    await currentPage.confirmDialog({isConfirmed: true});
});

When (/^the user cancels the deletion and deletes another contact with "([^"]*)"$/, async function (contact) {
    const contactInAgenda= searchInAgenda(contact);
    await contactsAgendaPage.contactRemoval(contactInAgenda);
    await currentPage.confirmDialog({isConfirmed: false, secondaryBtn: true });
    await contactsAgendaPage.contactRemoval(contactInAgenda);
    await currentPage.confirmDialog({isConfirmed: true});
});
