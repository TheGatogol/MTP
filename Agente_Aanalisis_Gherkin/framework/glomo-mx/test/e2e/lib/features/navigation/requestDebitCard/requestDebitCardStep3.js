import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import requestDebitCardStep2 from '../../pages/requestDebitCard/requestDebitCardStep2';

// Page Objects IDs
const REQUEST_DEBIT_CARD_STEP2 = requestDebitCardStep2.getId();

class RequestDebitCardStep3 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'requestDebitCard/requestDebitCardStep3', parentNavigation: 'requestDebitCard/requestDebitCardStep2'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case REQUEST_DEBIT_CARD_STEP2:
                await requestDebitCardStep2.confirmAddress();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new RequestDebitCardStep3();
