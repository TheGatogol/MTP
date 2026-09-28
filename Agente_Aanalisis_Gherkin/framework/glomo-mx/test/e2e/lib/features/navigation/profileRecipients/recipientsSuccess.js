import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import recipientsScreen from '../../pages/profileRecipients/profileRecipientsInit';

// Page Objects IDs
const PROFILE_RECIPIENTS = recipientsScreen.getId();

class RecipientsSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'profileRecipients/profileRecipientsSuccess', parentNavigation: 'profileRecipients/profileRecipients'});
    }

    async go_impl({otpNative = false} = {}) {
        switch (currentPage.getId()) {
            case PROFILE_RECIPIENTS:
                await recipientsScreen.goTo('success', otpNative);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new RecipientsSuccess();
