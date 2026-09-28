import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import ocLoanOffer from '../../pages/ocLoanOffer/ocLoanOffer';
import ocLoanOfferSpherica from '../../pages/ocLoanOffer/ocLoanOfferSpherica';

// Page Objects IDs
const LOAN_OFER = ocLoanOffer.getId();
const LOAN_OFER_SPHERICA = ocLoanOfferSpherica.getId();

class OcLoanSustainableSimulator extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'ocLoanOffer/ocLoanSustainableSimulator', parentNavigation: 'ocLoanOffer/ocLoanOffer'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case LOAN_OFER:
                await ocLoanOffer.accessToSustainableSimulator();
                break;
            case LOAN_OFER_SPHERICA:
                await ocLoanOfferSpherica.accessToSustainableSimulator();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OcLoanSustainableSimulator();
