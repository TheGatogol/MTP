import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import dynamicLifeInsuranceOfferPage from '../../pages/dynamicLifeInsurance/dynamicLifeInsuranceOfferPage';

// Page Objects IDs
const DYNAMIC_LIFE_INSURANCE_OFFER = dynamicLifeInsuranceOfferPage.getId();

class DynamicLifeInsuranceAddBeneficiaryPage extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'dynamicLifeInsurance/dynamicLifeInsuranceAddBeneficiaryPage', parentNavigation: 'dynamicLifeInsurance/dynamicLifeInsuranceMainPage'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DYNAMIC_LIFE_INSURANCE_OFFER:
                await dynamicLifeInsuranceOfferPage.wantInsurance();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new DynamicLifeInsuranceAddBeneficiaryPage();
