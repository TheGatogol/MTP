import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import dynamicLifeInsurancePaymentMethod from '../../pages/dynamicLifeInsurance/dynamicLifeInsurancePaymentMethod';

// Page Objects IDs
const DYNAMIC_LIFE_INSURANCE_PAYMENT_METHOD = dynamicLifeInsurancePaymentMethod.getId();

class DynamicLifeInsuranceTermsAndConditions extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'dynamicLifeInsurance/dynamicLifeInsuranceTermsAndConditions', parentNavigation: 'dynamicLifeInsurance/dynamicLifeInsurancePaymentMethod'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DYNAMIC_LIFE_INSURANCE_PAYMENT_METHOD:
                await dynamicLifeInsurancePaymentMethod.payment();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new DynamicLifeInsuranceTermsAndConditions();
