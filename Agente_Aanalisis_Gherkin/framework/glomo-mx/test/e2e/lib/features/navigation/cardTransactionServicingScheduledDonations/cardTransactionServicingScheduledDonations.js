import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
// Pages
import contractProductPage from '../../pages/contractProductSection/contractProductSection';
// Page Objects IDs
const CONTRACT_PRODUCT_SECTION = contractProductPage.getId();

class CardTransactionServicingScheduledDonations extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'cardTransactionServicingScheduledDonations/cardTransactionServicingScheduledDonations', parentNavigation: 'contractProductSection'});
    }

    async go_impl({id} = {}) {
        switch (currentPage.getId()) {
            case CONTRACT_PRODUCT_SECTION:
                await contractProductPage.selectProductOfferId(id);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CardTransactionServicingScheduledDonations();
