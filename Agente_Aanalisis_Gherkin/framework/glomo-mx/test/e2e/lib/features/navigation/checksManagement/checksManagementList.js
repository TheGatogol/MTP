import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import checksSection from '../../pages/checksSection/checksSection';
const CHECKS_SECTION = checksSection.getId();
const checksManagementListSearcher = require('../../pages/checksManagement/checksManagementListSearcher').default;

const CHECKS_MANAGEMENT_LIST_SEARCHER = checksManagementListSearcher.getId();
class ChecksManagementList extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'checksManagement/checksManagementList', parentNavigation: 'checksSection/checksSection'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CHECKS_SECTION:
                await checksSection.goToSection('management');
                break;
            case CHECKS_MANAGEMENT_LIST_SEARCHER:
                await checksManagementListSearcher.doFilter();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ChecksManagementList();
