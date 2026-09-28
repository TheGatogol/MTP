import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import profilePage from '../../pages/profile/profile';
import proceedings from '../../pages/proceedings/proceedings';
import securityProfile from '../../pages/securityProfile/securityProfile';

const PROFILE = profilePage.getId();
const PROCEEDINGS = proceedings.getId();
const SECURITY_PROFILE = securityProfile.getId();

class NationalId extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'nationalId/nationalId'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case PROFILE:
                await profilePage.access({functionality: 'add identification'});
                break;
            case PROCEEDINGS:
                await proceedings.identityValidation();
                break;
            case SECURITY_PROFILE:
                await securityProfile.accessIdentityDocument();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new NationalId();
