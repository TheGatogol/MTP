import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import clarificationListPage from '../../pages/clarifications/clarificationsList';

// Page Objects IDs
const CLARIFICATIONSLIST = clarificationListPage.getId();

class ClarificationsTracking extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'clarifications/clarificationsTracking', parentNavigation: 'clarifications/clarificationsList'});
    }

    async go_impl(clarificationType) {
        switch (currentPage.getId()) {
            case CLARIFICATIONSLIST:
                await clarificationListPage.accessToClarification(clarificationType);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}
export default new ClarificationsTracking();
