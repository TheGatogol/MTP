import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import mortgageReview from '../../pages/mortgageCertificateReview/mortgageCertificateReview';

// Page Objects IDs
const MORTGAGE_REVIEW = mortgageReview.getId();

class MortgageCertificateCancellation extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'mortgageCertificateReview/mortgageCertificateCancellation', parentNavigation: 'mortgageCertificateReview/mortgageCertificateReview'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case  MORTGAGE_REVIEW:
                await mortgageReview.cancelCertificate(true);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new MortgageCertificateCancellation();
