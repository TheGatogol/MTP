import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import contractProductSection from '../../pages/contractProductSection/contractProductSection';
import dashboard from '../../pages/dashboard/dashboard';
import sidebarPage from '../../pages/sidebar/sideBar';

const DASHBOARD = dashboard.getId();
const CONTRACT_PRODUCT_SECTION = contractProductSection.getId();
const SIDEBAR = sidebarPage.getId();

class OcCashZone extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'ocCashZone/ocCashZone', parentNavigation: 'contractProductSection'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboard.enterOffer('ZONA DE COBRO');
                break;
            case CONTRACT_PRODUCT_SECTION:
                await contractProductSection.selectProduct('mpos-openpay');
                break;
            case SIDEBAR:
                await sidebarPage.access({functionality: 'cash zone payments mpos'});
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OcCashZone();
