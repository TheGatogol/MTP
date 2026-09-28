import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import profilePage from '../../pages/profile/profile';
import helpModal from '../../pages/profileRecipients/recipientsHelpModal';
import recipientsForm from '../../pages/profileRecipients/recipientsForm';

// Page Objects IDs
const PROFILE = profilePage.getId();
const HELP_MODAL = helpModal.getId();
const RECIPIENTS_FORM = recipientsForm.getId();

class ProfileRecipientsInit extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'profileRecipients/profileRecipientsInit', parentNavigation: 'profileRecipients/recipientsHelpModal'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case PROFILE:
                await profilePage.access({functionality: 'edit recipients'});
                break;
            case HELP_MODAL:
                await helpModal.goToBeneficiaries();
                break;
            case RECIPIENTS_FORM:
                await recipientsForm.saveBeneficiary();
                break;
            default:
                throw new NotPathNavigationError();

        }
    }
}
export default new ProfileRecipientsInit();
