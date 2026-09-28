import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages

import sustainabilityLandingSection from '../../pages/sustainability/sustainabilityLandingSection';
import applianceSimulator from '../../pages/applianceSimulator/applianceSimulator';
import solarPanelsSimulator from '../../pages/solarPanelsSimulator/solarPanelsSimulator';
import carSimulator from '../../pages/carSimulator/carSimulator';
import sustainabilityCarbonFootprintOffset from '../../pages/sustainability/sustainabilityCarbonFootprintOffset';

// Page Objects IDs
const SUSTAINABILITY_LANDING_SECTION = sustainabilityLandingSection.getId();
const APPLIANCE_SIMULATOR = applianceSimulator.getId();
const SOLAR_PANELS_SIMULATOR = solarPanelsSimulator.getId();
const CAR_SIMULATOR = carSimulator.getId();
const SUSTAINABILITY_CARBON_FOOTPRINT_OFFSET = sustainabilityCarbonFootprintOffset.getId();

class CarbonFootprint extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'sustainability/carbonFootprintSection', parentNavigation: 'sustainability/sustainabilityLandingSection'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case SUSTAINABILITY_LANDING_SECTION:
                await sustainabilityLandingSection.accessToCarbonFootprint({functionality: 'sustainability'});
                break;
            case SOLAR_PANELS_SIMULATOR:
                await solarPanelsSimulator.goBack();
                break;
            case APPLIANCE_SIMULATOR:
                await applianceSimulator.goBack();
                break;
            case CAR_SIMULATOR:
                await carSimulator.goBack();
                break;
            case SUSTAINABILITY_CARBON_FOOTPRINT_OFFSET:
                await sustainabilityCarbonFootprintOffset.goBack();
                break;
            default:
                throw new NotPathNavigationError();
        }

    }
}

export default new CarbonFootprint();
