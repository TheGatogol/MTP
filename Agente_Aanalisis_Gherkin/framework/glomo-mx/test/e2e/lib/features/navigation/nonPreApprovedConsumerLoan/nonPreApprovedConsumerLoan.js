import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

import nonPreApprovedConsumerLoanBureau from '../../pages/nonPreApprovedConsumerLoan/nonPreApprovedConsumerLoanBureau.js';

const BUREAU_SECTION = nonPreApprovedConsumerLoanBureau.getId();
class NpaConsumerLoanOffer extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'nonPreApprovedConsumerLoan/nonPreApprovedConsumerLoan', parentNavigation: 'nonPreApprovedConsumerLoan/nonPreApprovedConsumerLoanBureau'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case BUREAU_SECTION:
                await nonPreApprovedConsumerLoanBureau.acceptCreditBureauApplication();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new NpaConsumerLoanOffer();
