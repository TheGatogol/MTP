import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import contractProductPage from '../../pages/contractProductSection/contractProductSection';
import dashboardPage from '../../pages/dashboard/dashboard';

// Page Objects IDs
const CONTRACT_PRODUCT_SECTION = contractProductPage.getId();
const DASHBOARD = dashboardPage.getId();

class OnboardingBbvaTrader extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'onboardingBbvaTrader/onboardingBbvaTrader', parentNavigation: 'contractProductSection'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CONTRACT_PRODUCT_SECTION:
                await contractProductPage.selectProduct('onboarding-bbva-trader');
                break;
            case DASHBOARD:
                await dashboardPage.enterOffer('Invierte en bolsa a tu manera');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OnboardingBbvaTrader();
