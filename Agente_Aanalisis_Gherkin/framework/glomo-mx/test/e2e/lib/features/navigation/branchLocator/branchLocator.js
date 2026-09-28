import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import ocAdditionalCreditCardPage from '../../pages/ocAdditionalCreditCard/ocAdditionalCreditCard';
import newAdditionalCard from '../../pages/productDetails/newAdditionalCard';
import searchBranch from '../../pages/branchLocator/searchBranch';
import cardBlockReplacementPage from '../../pages/cardBlockManagement/cardBlockManagement';

const OC_ADDITIONAL_CREDIT_CARD = ocAdditionalCreditCardPage.getId();
const NEW_ADDITIONAL = newAdditionalCard.getId();
const SEARCH_LOCATOR = searchBranch.getId();
const CARD_BLOCK_REPLACEMENT = cardBlockReplacementPage.getId();

class BranchLocator extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'branchLocator/branchLocator', parentNavigation: 'card/newAdditionalCard'});
    }

    async go_impl({flag}={}) {
        switch (currentPage.getId()) {
            case OC_ADDITIONAL_CREDIT_CARD:
                await ocAdditionalCreditCardPage.openBranchLocator();
                break;
            case NEW_ADDITIONAL:
                await newAdditionalCard.accessToMap();
                break;
            case SEARCH_LOCATOR:
                await searchBranch.backToMap(flag);
                break;
            case CARD_BLOCK_REPLACEMENT:
                await cardBlockReplacementPage.selectAddress('choose branch', false);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new BranchLocator();
