import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import insuranceProductDetails from '../../pages/productDetails/insuranceProductDetail';

// Page Objects IDs
const CANCEL_INSURANCE_PD = insuranceProductDetails.getId();

class CancelInsurance extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'cancelInsurance/cancelInsurance', parentNavigation: 'insurance/insuranceProductDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CANCEL_INSURANCE_PD:
                await insuranceProductDetails.accessCancelInsurance();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CancelInsurance();
