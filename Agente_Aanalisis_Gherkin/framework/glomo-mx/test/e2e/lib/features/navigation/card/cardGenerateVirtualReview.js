import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import cardGenerateVirtualPage from '../../pages/card/cardGenerateVirtual';

const CARD_GENERATE_VIRTUAL_CARD = cardGenerateVirtualPage.getId();

class CardGenerateVirtualReview extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'card/cardGenerateVirtualReview', parentNavigation: 'card/cardGenerateVirtual'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CARD_GENERATE_VIRTUAL_CARD:
                await cardGenerateVirtualPage.confirmAccessDigitalCard();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CardGenerateVirtualReview();
