import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import cleanCardOperationsPage from '../../pages/operatives/cleanCardOperations';

const CLEAN_CARD_OPERATIONS = cleanCardOperationsPage.getId();

class CleanCardOperationsFaqs extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'operatives/cleanCardOperationsFaqs'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CLEAN_CARD_OPERATIONS:
                await cleanCardOperationsPage.moreInformation();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CleanCardOperationsFaqs();
