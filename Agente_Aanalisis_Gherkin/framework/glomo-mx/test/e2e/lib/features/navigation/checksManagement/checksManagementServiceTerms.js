import {NotPathNavigationError} from '@csqe/radish';

import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import checksSection from '../../pages/checksSection/checksSection';

const CHECKS_SECTION = checksSection.getId();

class ChecksManagementServiceTerms extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'checksManagement/checksManagementServiceTerms', parentNavigation: 'checksSection/checksSection'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CHECKS_SECTION:
                await checksSection.goToSection('management');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ChecksManagementServiceTerms();
