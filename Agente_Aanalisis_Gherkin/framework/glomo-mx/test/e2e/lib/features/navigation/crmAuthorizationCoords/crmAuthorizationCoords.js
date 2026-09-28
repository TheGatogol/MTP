import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import inAppCrmAdvancedPage from '../../pages/inAppCrmAdvancedPage/inAppCrmAdvancedPage';

// Page Objects IDs

const IN_APP_CRM_ADVANCED = inAppCrmAdvancedPage.getId();

class CrmAuthorizationCoords extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'crmAuthorizationCoords/crmAuthorizationCoords', parentNavigation: 'login'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case IN_APP_CRM_ADVANCED:
                await inAppCrmAdvancedPage.sectionContinue();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CrmAuthorizationCoords();
