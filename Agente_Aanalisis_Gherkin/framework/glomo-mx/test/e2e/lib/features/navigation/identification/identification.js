import AbstractGlomoNavigation from './../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

import profilePage from '../../pages/profile/profile';
import securityProfile from '../../pages/securityProfile/securityProfile';

const PROFILE = profilePage.getId();
const SECURITY_PROFILE = securityProfile.getId();

class Identification extends AbstractGlomoNavigation {
    constructor() {
        super({ page: 'identification/identification', parentNavigation: 'profile' });
    }

    async go_impl({add, secondaryId = false} = {}) {
        switch (currentPage.getId()) {
            case PROFILE:
                if (secondaryId) {
                    await profilePage.access({functionality: 'edit secondary id'});
                } else {
                    await profilePage.access({functionality: add ? 'add identification' : 'edit identification'});
                }
                break;
            case SECURITY_PROFILE:
                await securityProfile.accessIdentityDocument();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new Identification();
