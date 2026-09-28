import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import ocLoanOffer from '../../pages/ocLoanOffer/ocLoanOffer';

const OCLOANOFFER = ocLoanOffer.getId();

class OcLoanOfferReview extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'ocLoanOffer/ocLoanOfferReview', parentNavigation: 'ocLoanOffer/ocLoanOffer'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case OCLOANOFFER:
                await ocLoanOffer.otpSms();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OcLoanOfferReview();
