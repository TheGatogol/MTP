import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import securityReactivationPage from '../../pages/facialRecognition/securityReactivation';

// Page Objects IDs
const SECURITY_REACTIVATION = securityReactivationPage.getId();

class FacialRecognition extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'facialRecognition/facialRecognition', parentNavigation: 'facialRecognition/securityReactivation'});
    }
    async go_impl() {
        switch (currentPage.getId()) {
            case SECURITY_REACTIVATION:
                await securityReactivationPage.updateFacial();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new FacialRecognition();
