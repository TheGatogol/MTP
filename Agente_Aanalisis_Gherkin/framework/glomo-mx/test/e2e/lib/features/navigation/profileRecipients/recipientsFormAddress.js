import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

// Pages
import recipientsForm from '../../pages/profileRecipients/recipientsForm';

// Page Objects IDs
const RECIPIENTS_FORM = recipientsForm.getId();

class RecipientsFormAddress extends AbstractGlomoNavigation {
    constructor() {
        super({ page: 'profileRecipients/recipientsFormAddress', parentNavigation: 'profileRecipients/recipientsForm' });
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case RECIPIENTS_FORM:
                await recipientsForm.registerNewAddress();
                break;
            default:
                throw new NotPathNavigationError();

        }
    }
}
export default new RecipientsFormAddress();
