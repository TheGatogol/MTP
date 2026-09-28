import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import ocLoanOffer from '../../pages/ocLoanOffer/ocLoanOffer';
import ocLoanOfferSpherica from '../../pages/ocLoanOffer/ocLoanOfferSpherica';

// Page Objects IDs
const LOAN_OFER = ocLoanOffer.getId();
const LOAN_OFER_SPHERICA = ocLoanOfferSpherica.getId();

class OcLoanSustainable extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'ocLoanSustainableCatalog/ocLoanSustainableCatalog', parentNavigation: 'ocLoanOffer/ocLoanOffer'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case LOAN_OFER:
                await ocLoanOffer.accessToCatalogProduct();
                break;
            case LOAN_OFER_SPHERICA:
                await ocLoanOfferSpherica.accessToCatalogProduct();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OcLoanSustainable();
