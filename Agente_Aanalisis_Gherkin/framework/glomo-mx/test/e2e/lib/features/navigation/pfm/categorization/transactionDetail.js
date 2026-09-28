import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import categorizationPage from '../../../pages/pfm/categorization/categorization';

// Page Objects IDs
const PFM_CATEGORIZATION = categorizationPage.getId();

class PfmTransactionDetail extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'pfm/categorization/transactionDetail', parentNavigation: 'pfm/categorization/categorization'});
    }

    async go_impl(accessFrom) {
        switch (currentPage.getId()) {
            case PFM_CATEGORIZATION:
                if (accessFrom === 'category') {
                    await categorizationPage.accessCatTransactionDetail();
                } else if (accessFrom === 'subcategory') {
                    await categorizationPage.accessSubcatTransactionDetail();
                } else {
                    await categorizationPage.accessTransactionDetail();
                }
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new PfmTransactionDetail();
