import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

// Pages
import internationaltransferPage from '../../pages/internationalTransfer/internationalTransfer';

// Page Objects IDs
const INTERNATIONALTRANSFER = internationaltransferPage.getId();

class InternationalTransferSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'internationalTransfer/internationalTransferSuccess', parentNavigation: 'internationalTransfer'});
    }

    async go_impl() {
        switch (currentPage.getId()) { // NOSONAR
            case INTERNATIONALTRANSFER:
                await internationaltransferPage.fillOtp();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new InternationalTransferSuccess();
