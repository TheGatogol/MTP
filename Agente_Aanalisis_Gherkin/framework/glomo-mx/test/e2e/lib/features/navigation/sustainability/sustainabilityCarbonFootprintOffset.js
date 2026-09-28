import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import sustainabilityLandingSection from '../../pages/sustainability/sustainabilityLandingSection';
import carbonFootprint from '../../pages/sustainability/carbonFootprintSection';

// Page Objects IDs
const SUSTAINABILITY_LANDING_SECTION = sustainabilityLandingSection.getId();
const CARBON_FOOTPRINT = carbonFootprint.getId();

class SustainabilityCarbonFootprintOffset extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'sustainability/sustainabilityCarbonFootprintOffset', parentNavigation: 'sustainability/sustainabilityLandingSection'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CARBON_FOOTPRINT:
                await carbonFootprint.goToAtmos();
                break;
            case SUSTAINABILITY_LANDING_SECTION:
                await sustainabilityLandingSection.accessToForestryProyectCardLink();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new SustainabilityCarbonFootprintOffset();
