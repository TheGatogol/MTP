import {When} from '@cucumber/cucumber';
import sustainabilityLandingSection from '../../pages/sustainability/sustainabilityLandingSection';

// Utility requires
import * as navigation from '../../navigation';

When(/^the user accesses to sustainability section$/, async function() {
    await navigation.sustainability.mainpage.go();
});

When(/^the user accesses to sustainability product section$/, async function() {
    await sustainabilityLandingSection.goToProduct();
});
