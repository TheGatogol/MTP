import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import contractProductPage from '../../pages/contractProductSection/contractProductSection';
import applianceSimulator from '../../pages/applianceSimulator/applianceSimulator';
import solarPanelsSimulator from '../../pages/solarPanelsSimulator/solarPanelsSimulator';
import dashboardPage from '../../pages/dashboard/dashboard';
import ocLoanOfferCatalog from '../../pages/ocLoanSustainableCatalog/ocLoanSustainableCatalog';
import ocloanSustainableSimulator from '../../pages/ocLoanOffer/ocLoanSustainableSimulator';
import notificationsCenter from '../../pages/notificationsCenter/notificationsCenter';

// Page Objects IDs
const CONTRACT_PRODUCT_SECTION = contractProductPage.getId();
const DASHBOARD = dashboardPage.getId();
const LOAN_OFFER_CATALOG = ocLoanOfferCatalog.getId();
const LOAN_OFFER_SIMULATOR = ocloanSustainableSimulator.getId();
const APPLIANCE_SIMULATOR = applianceSimulator.getId();
const SOLAR_PANELS_SIMULATOR = solarPanelsSimulator.getId();
const NOTIFICATIONS_CENTER = notificationsCenter.getId();

class OcLoanOfferSpherica extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'ocLoanOffer/ocLoanOfferSpherica', parentNavigation: 'contractProductSection'});
    }

    async go_impl(offerId) {
        switch (currentPage.getId()) {
            case CONTRACT_PRODUCT_SECTION:
                await contractProductPage.selectOfferByType(offerId);
                break;
            case APPLIANCE_SIMULATOR:
                await applianceSimulator.goToProductAccess();
                break;
            case SOLAR_PANELS_SIMULATOR:
                await solarPanelsSimulator.goToProductAccess();
                break;
            case DASHBOARD:
                await dashboardPage.enterOffer(offerId);
                break;
            case LOAN_OFFER_CATALOG:
                await ocLoanOfferCatalog.userCloseCatalog();
                break;
            case LOAN_OFFER_SIMULATOR:
                await ocloanSustainableSimulator.userCloseSimulator();
                break;
            case NOTIFICATIONS_CENTER:
                await notificationsCenter.continueProcess();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OcLoanOfferSpherica();
