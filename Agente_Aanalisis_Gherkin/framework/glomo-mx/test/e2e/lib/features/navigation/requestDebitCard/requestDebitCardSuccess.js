import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import requestDebitCardStep3 from '../../pages/requestDebitCard/requestDebitCardStep3';

// Page Objects IDs
const REQUEST_DEBIT_CARD_STEP3 = requestDebitCardStep3.getId();

class RequestDebitCardSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'requestDebitCard/requestDebitCardSuccess', parentNavigation: 'requestDebitCard/requestDebitCardStep3'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case REQUEST_DEBIT_CARD_STEP3:
                await requestDebitCardStep3.confirmToken();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new RequestDebitCardSuccess();
