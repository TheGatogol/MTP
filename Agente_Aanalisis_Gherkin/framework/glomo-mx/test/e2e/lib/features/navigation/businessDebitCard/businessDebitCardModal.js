import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

import emergencyZoneDashboard from '../../pages/emergencyZone/emergencyZoneDashboard';
import dashboard from '../../pages/dashboard/dashboard';
import configureProducts from '../../pages/configureProducts/configureProducts';

const EMERGENCYZONEDASHBOARD = emergencyZoneDashboard.getId();
const DASHBOARD = dashboard.getId();
const CONFIGURE_PRODUCTS = configureProducts.getId();

class BusinessDebitCardModal extends AbstractGlomoNavigation {
    constructor() {
        super({ page: 'businessDebitCard/businessDebitCardModal' });
    }

    async go_impl(access) {
        switch (currentPage.getId()) {
            case EMERGENCYZONEDASHBOARD:
                await emergencyZoneDashboard.pressNeedCash();
                break;
            case DASHBOARD:
                switch (access) {
                    case 'assitance':
                        await dashboard.accessFooterTab(dashboard.FOOTER_TABS.CONTACT);
                        break;
                    case 'pfm':
                        await dashboard.accessFooterTab(dashboard.FOOTER_TABS.CHECK_UP);
                        break;
                    case 'add':
                        await dashboard.accessFooterTab(dashboard.FOOTER_TABS.ADD);
                        break;
                    default:
                        throw new Error(`The option ${access} is not implemented`);
                }
                break;
            case CONFIGURE_PRODUCTS:
                await configureProducts.goNextPageFromConfigurationProducts(access);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new BusinessDebitCardModal();
