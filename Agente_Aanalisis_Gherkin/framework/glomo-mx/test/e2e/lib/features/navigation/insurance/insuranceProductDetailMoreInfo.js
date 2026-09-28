import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import insuranceProductDetailPage from '../../pages/productDetails/insuranceProductDetail';

// Page Objects IDs
const INSURANCE_PD = insuranceProductDetailPage.getId();

class InsuranceProductDetailMoreInfo extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'productDetails/insuranceProductDetailMoreInfo', parentNavigation: 'insurance/insuranceProductDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case INSURANCE_PD:
                await insuranceProductDetailPage.accessMoreInfo();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new InsuranceProductDetailMoreInfo();
