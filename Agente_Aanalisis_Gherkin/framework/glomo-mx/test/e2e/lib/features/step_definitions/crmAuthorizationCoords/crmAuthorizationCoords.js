import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import crmAuthorizationCoords from '../../pages/crmAuthorizationCoords/crmAuthorizationCoords';

When(/^the user accesses the geolocation permission screen for collection purposes$/, async function() {
    await navigation.dashboard.go();
    await navigation.landing.go({resetApp: true});
    await navigation.digitalToken.go();
    await navigation.inAppCrmAdvancedPage.inAppCrmAdvancedPage.go({activeLaterToken: false});
    await navigation.crmAuthorizationCoords.crmAuthorizationCoords.go();
});

When(/^the user accepts geolocation permission$/, async function() {
    await crmAuthorizationCoords.authorizeInAppGeolocation();
});
