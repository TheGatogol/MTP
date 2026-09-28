import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import sustainabilityPage from '../../pages/sustainability/sustainability';

// Page Objects IDs
const SUSTAINABILITY = sustainabilityPage.getId();

class ReceiptPayments extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'sustainability/receiptPayments', parentNavigation: 'sustainability/sustainability'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case SUSTAINABILITY:
                await sustainabilityPage.goToPayReceipts();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ReceiptPayments();
