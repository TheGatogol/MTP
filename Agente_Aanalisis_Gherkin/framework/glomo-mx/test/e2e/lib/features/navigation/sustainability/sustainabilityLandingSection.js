import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import sidebarPage from '../../pages/sidebar/sideBar';
import dashboardPage from '../../pages/dashboard/dashboard';
import sidebar from '../sidebar';
import sustainability from '../../pages/sustainability/sustainability';
import sustainabilityCarbonFootprintOffset from '../../pages/sustainability/sustainabilityCarbonFootprintOffset';

// Page Objects IDs
const SIDEBAR = sidebarPage.getId();
const DASHBOARD = dashboardPage.getId();
const SUSTAINABILITY = sustainability.getId();
const SUSTAINABILITY_CARBON_FOOTPRINT_OFFSET = sustainabilityCarbonFootprintOffset.getId();

class SustainabilityLandingSection extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'sustainability/sustainabilityLandingSection', parentNavigation: 'dashboard'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await sidebar.go();
                await this.go_impl();
                break;
            case SIDEBAR:
                await sidebarPage.access({functionality: 'sustainability'});
                break;
            case SUSTAINABILITY:
                await sustainability.goBack();
                break;
            case SUSTAINABILITY_CARBON_FOOTPRINT_OFFSET:
                await sustainabilityCarbonFootprintOffset.actionsSeeMore();
                break;
            default:
                throw new NotPathNavigationError();
        }

    }
}

export default new SustainabilityLandingSection();
