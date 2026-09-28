import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import operativesPage from '../../pages/billPaymentsHome/billPaymentsHome';
import applianceSimulator from '../../pages/applianceSimulator/applianceSimulator';
import carbonFootprintPage from '../../pages/sustainability/carbonFootprintSection';

// Page Objects IDs
const BILL_PAYMENTS_HOME_PAGE = operativesPage.getId();
const APPLIANCE_SIMULATOR = applianceSimulator.getId();
const CARBON_FOOTPRINT = carbonFootprintPage.getId();

class BillPaymentsDashboard extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'billPaymentsDashboard/billPaymentsDashboard', parentNavigation: 'billPaymentsHome/billPaymentsHome'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case BILL_PAYMENTS_HOME_PAGE:
                await operativesPage.accessToBillPaymentsDashboard();
                break;
            case APPLIANCE_SIMULATOR:
                await applianceSimulator.goToPayYourBills();
                break;
            case CARBON_FOOTPRINT:
                await carbonFootprintPage.goToPayReceipts();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new BillPaymentsDashboard();
