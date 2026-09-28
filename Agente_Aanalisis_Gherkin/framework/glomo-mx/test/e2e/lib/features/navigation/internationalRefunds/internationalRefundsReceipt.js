import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import internationalRefunds from '../../pages/internationalRefunds/internationalRefunds';

const INTERNATIONAL_REFUNDS_PAGE_ID = internationalRefunds.getId();
class InternationalRefundsReceipt extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'internationalRefunds/internationalRefundsReceipt', parentNavigation: 'internationalRefunds/internationalRefunds'});
    }

    async go_impl() {
        switch(currentPage.getId()) {
            case INTERNATIONAL_REFUNDS_PAGE_ID:
                await internationalRefunds.confirmAdditionalInformation();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new InternationalRefundsReceipt();
