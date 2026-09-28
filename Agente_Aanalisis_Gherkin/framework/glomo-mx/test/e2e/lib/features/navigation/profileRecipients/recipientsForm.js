import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import recipientsFormAddress from '../../pages/profileRecipients/recipientsFormAddress';
import profileRecipients from '../../pages/profileRecipients/profileRecipientsInit';

// Page Objects IDs
const PROFILE_RECIPIENTS = profileRecipients.getId();
const RECIPIENTS_FORM_ADDRESS = recipientsFormAddress.getId();

class RecipientsForm extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'profileRecipients/recipientsForm', parentNavigation: 'profileRecipients/profileRecipients'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case PROFILE_RECIPIENTS:
                await profileRecipients.goTo('register beneficiary');
                break;
            case RECIPIENTS_FORM_ADDRESS:
                await recipientsFormAddress.saveNewAddres();
                break;
            default:
                throw new NotPathNavigationError();

        }
    }
}
export default new RecipientsForm();
