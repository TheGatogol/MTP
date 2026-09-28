import {When } from '@cucumber/cucumber';
import carbonFootprint from '../../pages/sustainability/carbonFootprintSection';

// Utility requires
import * as navigation from '../../navigation';
// STEP DEFINITIONS
When(/^the user accesses to Sustainability carbon footprint section$/, async function() {
    await navigation.sustainability.carbonFootprintSection.go({onboardingComplete:true});
});

When(/^the user opens expandable legend toggle$/, async function() {
    await carbonFootprint.expandLegend();
});

When(/^the user accesses to (light|fuel|gas) detail$/, async function(subcat) {
    await carbonFootprint.accessToDetail(subcat);
});

When(/^the user consults the FAQs$/, async function() {
    await carbonFootprint.accessToFAQs();
});

When(/^the user consults to actions list$/, async function() {
    await carbonFootprint.accessToActionsList();
});

When(/^the user accesses to forestry section$/, async function() {
    await carbonFootprint.goToAtmosFromActions();
});
