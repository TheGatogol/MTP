import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import contractProductSection from '../../pages/contractProductSection/contractProductSection';

// Page Objects IDs
const CONTRACT_PRODUCT_SECTION = contractProductSection.getId();

class MortgageCertificateReview extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'mortgageCertificateReview/mortgageCertificateReview', parentNavigation: 'contractProductSection'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CONTRACT_PRODUCT_SECTION:
                await contractProductSection.selectProduct('mortgage-certificate-review');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new MortgageCertificateReview();
