import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import contractProductPage from '../../../pages/contractProductSection/contractProductSection';
import applianceSimulator from '../../../pages/applianceSimulator/applianceSimulator';
import dashboard from '../../../pages/dashboard/dashboard';
import notificationsCenter from '../../../pages/notificationsCenter/notificationsCenter';

const DASHBOARD = dashboard.getId();
const CONTRACT_PRODUCT_SECTION = contractProductPage.getId();
const APPLIANCE_SIMULATOR = applianceSimulator.getId();
const NOTIFICATIONS_CENTER = notificationsCenter.getId();

class CreditCardHolder extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'creditCardApplication/creditCardHolder/creditCardHolder', parentNavigation: 'contractProductSection'});
    }

    async go_impl({ section } = {}) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboard.accessCreditCardHolder(section);
                break;
            case CONTRACT_PRODUCT_SECTION:
                await contractProductPage.selectProduct(section);
                break;
            case APPLIANCE_SIMULATOR:
                await applianceSimulator.goToProductAccess();
                break;
            case NOTIFICATIONS_CENTER:
                await notificationsCenter.continueProcess();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CreditCardHolder();
