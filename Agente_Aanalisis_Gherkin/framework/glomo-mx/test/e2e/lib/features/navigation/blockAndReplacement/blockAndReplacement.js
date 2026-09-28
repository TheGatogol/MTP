import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import additionalCardDetail from '../../pages/productDetails/additionalCardDetail';
import suspectedTransactionsManagement from '../../pages/suspectedTransactionsManagement/suspectedTransactionsManagement';
import digitalButler from '../../pages/digitalButler/digitalButler';

// Page Objects IDs
const ADDITIONAL_CARD_DETAIL = additionalCardDetail.getId();
const SUSPECTED_TRANSACTIONS = suspectedTransactionsManagement.getId();
const DIGITAL_BUTLER = digitalButler.getId();

class BlockAndReplacement extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'blockAndReplacement/blockAndReplacement', parentNavigation: 'card/additionalCardDetail'});
    }

    async go_impl(options) { 
        switch (currentPage.getId()) {
            case ADDITIONAL_CARD_DETAIL:
                await additionalCardDetail.blockAndReplacementOperative();
                break;
            case SUSPECTED_TRANSACTIONS:
                await suspectedTransactionsManagement.goBlockAndRepleacement();
                break;
            case DIGITAL_BUTLER:
                await digitalButler.selectNavigation(options);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new BlockAndReplacement();
