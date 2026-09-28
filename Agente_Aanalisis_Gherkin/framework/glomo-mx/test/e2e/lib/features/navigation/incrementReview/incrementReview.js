import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import increment from '../../pages/increment/increment';

// Page Objects IDs
const INCREMENT = increment.getId();

class IncrementReview extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'incrementReview/incrementReview', parentNavigation: 'increment/increment'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case INCREMENT:
                await increment.acceptCreditLine();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new IncrementReview();
