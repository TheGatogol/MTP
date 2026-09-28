import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import carbonFootprintSection from '../../pages/sustainability/carbonFootprintSection';
import sustainability from '../../pages/sustainability/sustainability';
import sustainabilityLandingSection from '../../pages/sustainability/sustainabilityLandingSection';

// Page Objects IDs
const CARBON_FOOTPRINT = carbonFootprintSection.getId();
const SUSTAINABILITY = sustainability.getId();
const SUSTAINABILITY_LANDING = sustainabilityLandingSection.getId();

class ApplianceSimulator extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'applianceSimulator/applianceSimulator', parentNavigation: 'sustainability/sustainability'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case SUSTAINABILITY_LANDING:
                await sustainabilityLandingSection.accessToApplianceSimulator();
                break;
            case SUSTAINABILITY:
                await sustainability.accessToApplianceSimulator();
                break;
            case CARBON_FOOTPRINT:
                await carbonFootprintSection.goToSimulator();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ApplianceSimulator();
