import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

//Pages
import pinViewAdditionalCardsPage from '../../pages/operatives/pinRequest';

// Page Objects IDs
const PIN_REQUEST_AC = pinViewAdditionalCardsPage.getId();

class PinViewtAditionalCards extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'productDetails/additionalCardDetail', parentNavigation: 'card/additionalCardDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case PIN_REQUEST_AC:
                await pinViewAdditionalCardsPage.goBackToDetailCard();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new PinViewtAditionalCards();
