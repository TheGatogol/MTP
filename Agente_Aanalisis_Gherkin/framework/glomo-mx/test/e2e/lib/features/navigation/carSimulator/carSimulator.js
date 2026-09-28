import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import sustainability from '../../pages/sustainability/sustainability';
import sustainabilityLandingSection from '../../pages/sustainability/sustainabilityLandingSection';
import carbonFootprintSection from '../../pages/sustainability/carbonFootprintSection';

// Page Objects IDs
const SUSTAINABILITY = sustainability.getId();
const SUSTAINABILITY_LANDING = sustainabilityLandingSection.getId();
const CARBON_FOOTPRINT = carbonFootprintSection.getId();

class CarSimulator extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'carSimulator/carSimulator', parentNavigation: 'sustainability/sustainability'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case SUSTAINABILITY_LANDING:
                await sustainabilityLandingSection.accessToCarSimulator();
                break;
            case SUSTAINABILITY:
                await sustainability.accessToCarSimulator();
                break;
            case CARBON_FOOTPRINT:
                await carbonFootprintSection.goToSimulator();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CarSimulator();
