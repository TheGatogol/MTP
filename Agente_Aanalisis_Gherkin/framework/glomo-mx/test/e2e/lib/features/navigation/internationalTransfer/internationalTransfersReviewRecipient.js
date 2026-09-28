import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

// Pages
import internationaltransferCreateRecipientPage from '../../pages/internationalTransfer/internationalTransfersCreateRecipient';

// Page Objects IDs
const INTERNATIONALTRANSFERCREATERECIPIENT = internationaltransferCreateRecipientPage.getId();

class InternationalTransfersReviewRecipient extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'internationalTransfer/internationalTransfersReviewRecipient'});
    }

    async go_impl() {
        switch (currentPage.getId()) { // NOSONAR
            case INTERNATIONALTRANSFERCREATERECIPIENT:
                await internationaltransferCreateRecipientPage.addBankInformation();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new InternationalTransfersReviewRecipient();
