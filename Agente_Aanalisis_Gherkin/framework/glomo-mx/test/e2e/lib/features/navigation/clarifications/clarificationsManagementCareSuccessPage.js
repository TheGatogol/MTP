import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import clarificationsManagementCarePage from '../../pages/clarifications/clarificationsManagementCarePage';

const SUMMARY_VIEW = clarificationsManagementCarePage.getId();

class ClarificationsManagementCareSuccessPage extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'clarifications/clarificationsManagementCareSuccessPage', parentNavigation: 'clarifications/clarificationsManagementCarePage'});
    }

    async go_impl({blockType} = {}) {
        switch (currentPage.getId()) {
            case SUMMARY_VIEW :
                await clarificationsManagementCarePage.confirmClarifications(blockType);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ClarificationsManagementCareSuccessPage();
