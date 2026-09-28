import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import requestDebitCardStep1 from '../../pages/requestDebitCard/requestDebitCardStep1';

// Page Objects IDs
const REQUEST_DEBIT_CARD_STEP1 = requestDebitCardStep1.getId();

class RequestDebitCardStep2 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'requestDebitCard/requestDebitCardStep2', parentNavigation: 'requestDebitCard/requestDebitCardStep1'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case REQUEST_DEBIT_CARD_STEP1:
                await requestDebitCardStep1.iwantButtonPress();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new RequestDebitCardStep2();
