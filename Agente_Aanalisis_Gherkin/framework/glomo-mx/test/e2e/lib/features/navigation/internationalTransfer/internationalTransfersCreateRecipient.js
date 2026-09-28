import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

// Pages
import internationaltransferPage from '../../pages/internationalTransfer/internationalTransfer';

// Page Objects IDs
const INTERNATIONALTRANSFER = internationaltransferPage.getId();

class InternationalTransfersCreateRecipient extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'internationalTransfer/internationalTransfersCreateRecipient', parentNavigation: 'internationalTransfer'});
    }

    async go_impl() {
        switch (currentPage.getId()) { // NOSONAR
            case INTERNATIONALTRANSFER:
                await internationaltransferPage.addRecipient();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new InternationalTransfersCreateRecipient();
