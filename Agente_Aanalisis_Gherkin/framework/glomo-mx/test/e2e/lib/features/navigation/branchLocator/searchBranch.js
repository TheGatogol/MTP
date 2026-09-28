import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import branchLocator from '../../pages/branchLocator/branchLocator';

const BRANCH_LOCATOR = branchLocator.getId();

class SearchBranch extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'branchLocator/searchBranch', parentNavigation: 'branchLocator'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case BRANCH_LOCATOR:
                await branchLocator.searchBranch();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new SearchBranch();
