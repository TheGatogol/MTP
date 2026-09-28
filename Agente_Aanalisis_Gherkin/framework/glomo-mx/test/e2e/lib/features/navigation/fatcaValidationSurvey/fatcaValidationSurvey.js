import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import profilePage from '../../pages/profile/profile';

const PROFILE = profilePage.getId();

class FatcaValidationSurvey extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'fatcaValidationSurvey/fatcaValidationSurvey', parentNavigation: 'profile'});
    }

    async go_impl({add} = {}) {
        switch (currentPage.getId()) {
            case PROFILE:
                await profilePage.access({functionality: add?'add fatca':'edit fatca'});
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FatcaValidationSurvey();
