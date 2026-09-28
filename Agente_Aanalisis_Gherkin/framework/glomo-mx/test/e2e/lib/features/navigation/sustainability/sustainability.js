import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages

import sustainabilityLandingSection from '../../pages/sustainability/sustainabilityLandingSection';
import newsSection from '../../pages/sustainability/newsSection';
import sustainabilityCarbonFootprintOffset from '../../pages/sustainability/sustainabilityCarbonFootprintOffset';

// Page Objects IDs
const SUSTAINABILITY_LANDING_SECTION = sustainabilityLandingSection.getId();
const NEWS_ITEM = newsSection.getId();
const SUSTAINABILITY_CARBON_FOOTPRINT_OFFSET = sustainabilityCarbonFootprintOffset.getId();

class Sustainability extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'sustainability/sustainability', parentNavigation: 'sustainability/sustainabilityLandingSection'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case SUSTAINABILITY_LANDING_SECTION:
                await sustainabilityLandingSection.accessToCarbonFootprint({functionality: 'sustainability'});
                break;
            case NEWS_ITEM:
                await newsSection.goBack();
                break;
            case SUSTAINABILITY_CARBON_FOOTPRINT_OFFSET:
                await sustainabilityCarbonFootprintOffset.emissionsSeeMore();
                break;
            default:
                throw new NotPathNavigationError();
        }

    }
}

export default new Sustainability();
