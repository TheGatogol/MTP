import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import dynamicLifeInsuranceTermsAndConditions from '../../pages/dynamicLifeInsurance/dynamicLifeInsuranceTermsAndConditions';

// Page Objects IDs
const DYNAMIC_LIFE_INSURANCE_TERMS_AND_CONDITIONS = dynamicLifeInsuranceTermsAndConditions.getId();

class DynamicLifeInsuranceConfirm extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'dynamicLifeInsurance/dynamicLifeInsuranceConfirm', parentNavigation: 'dynamicLifeInsurance/dynamicLifeInsuranceTermsAndConditions'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DYNAMIC_LIFE_INSURANCE_TERMS_AND_CONDITIONS:
                await dynamicLifeInsuranceTermsAndConditions.acceptTermsAndConditions();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new DynamicLifeInsuranceConfirm();
