import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import transferSuccess from '../../../pages/diy/transfer/transferSuccess';

// Page Objects IDs
const SUCCESS = transferSuccess.getId();

class TransfersFeedback extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'feedback/feedbackContextualNPS', parentNavigation: 'diy/transfer/transferSuccess'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case SUCCESS:
                await transferSuccess.closeOperative();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new TransfersFeedback();
