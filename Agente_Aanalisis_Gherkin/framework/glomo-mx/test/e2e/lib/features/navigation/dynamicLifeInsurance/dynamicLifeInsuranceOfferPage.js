import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import dynamicLifeInsurance from '../../pages/dynamicLifeInsurance/dynamicLifeInsurance';

// Page Objects IDs
const DYNAMIC_LIFE_INSURANCE_PAGE = dynamicLifeInsurance.getId();

class DynamicLifeInsuranceOfferPage extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'dynamicLifeInsurance/dynamicLifeInsuranceOfferPage', parentNavigation: 'dynamicLifeInsurance/dynamicLifeInsuranceMainPage'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DYNAMIC_LIFE_INSURANCE_PAGE:
                await dynamicLifeInsurance.acceptCoverages();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new DynamicLifeInsuranceOfferPage();
