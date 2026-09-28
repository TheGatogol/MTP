import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import dynamicLifeInsuranceAddBeneficiaryPage from '../../pages/dynamicLifeInsurance/dynamicLifeInsuranceAddBeneficiaryPage';

// Page Objects IDs
const DYNAMIC_LIFE_INSURANCE_BENEFICIARY = dynamicLifeInsuranceAddBeneficiaryPage.getId();

class DynamicLifeInsurancePaymentMethod extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'dynamicLifeInsurance/dynamicLifeInsurancePaymentMethod', parentNavigation: 'dynamicLifeInsurance/dynamicLifeInsuranceAddBeneficiaryPage'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DYNAMIC_LIFE_INSURANCE_BENEFICIARY:
                await dynamicLifeInsuranceAddBeneficiaryPage.fillData();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new DynamicLifeInsurancePaymentMethod();
