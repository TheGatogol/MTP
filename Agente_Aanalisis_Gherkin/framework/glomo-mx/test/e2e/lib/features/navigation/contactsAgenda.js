import AbstractGlomoNavigation from './abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import transferPage from '../pages/diy/transfer/transfer';

// Page Objects IDs
const TRANSFER = transferPage.getId();

class ContactsAgenda extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'contactsAgenda/contactsAgenda', parentNavigation: 'diy/transfer/transfer'});
    }
    async go_impl() {
        switch (currentPage.getId()) {
            case TRANSFER:
                await transferPage.accessSavedContacts();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new ContactsAgenda();
