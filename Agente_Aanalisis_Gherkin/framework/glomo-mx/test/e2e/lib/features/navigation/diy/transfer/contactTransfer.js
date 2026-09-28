import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';
// Pages
import contactsAgenda from '../../../pages/contactsAgenda/contactsAgenda';
// Page Objects IDs
const CONTACTAGENDA = contactsAgenda.getId();

class ContactsAgendaTransfers extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'contactsAgenda/selectedContact', parentNavigation: 'contactsAgenda'});
    }
    async go_impl() {
        switch (currentPage.getId()) {
            case CONTACTAGENDA:
                await contactsAgenda.accessContact();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new ContactsAgendaTransfers();
