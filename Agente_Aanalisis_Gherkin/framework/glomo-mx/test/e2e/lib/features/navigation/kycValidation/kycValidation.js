import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import profilePage from '../../pages/profile/profile';

const PROFILE = profilePage.getId();

class KycValidation extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'kycValidation/kycValidation', parentNavigation: 'profile'});
    }

    async go_impl({add} = {}) {
        switch (currentPage.getId()) {
            case PROFILE:
                if (add) {
                    await profilePage.access({functionality: 'add kyc'});
                } else {
                    await profilePage.access({functionality: 'edit kyc'});
                }
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new KycValidation();
