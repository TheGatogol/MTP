import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import profilePage from '../../pages/profile/profile';
import proceedingsPage from '../../pages/proceedings/proceedings';

const PROFILE = profilePage.getId();
const PROCEEDINGS = proceedingsPage.getId();

class KycValidationHighRisk extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'kycValidationHighRisk/kycValidationHighRisk', parentNavigation: 'profile'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case PROFILE:
                await profilePage.access({functionality: 'add kyc high risk'});
                break;
            case PROCEEDINGS:
                await proceedingsPage.kycValidationHighRisk();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new KycValidationHighRisk();
