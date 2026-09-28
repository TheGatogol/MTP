import { When } from '@cucumber/cucumber';

import * as navigation from '../../navigation';
import landingPage from '../../pages/landing/landing';
import landingPublicPage from '../../pages/landing/landingPublic';

When(/^the user logs in and logs out$/, async function() {
    await navigation.landing.go();
});

When(/^the user logs in and reset app$/, async function() {
    await navigation.landing.go({option: 'restartingApp'});
});

When(/^the user begins the login flow with remembered credentials$/, async function() {
    await navigation.cachedLogin.go();
});

When(/^the user forgets the current credentials$/, async function() {
    await navigation.landingPublic.go();
});

When(/^the user accesses to "([^"]*)" screen from shortcuts$/, async function(option) {
    switch (option) {
        case 'become a client':
            await landingPublicPage.access({functionality: option});
            break;
        case 'atm locator':
            await navigation.atmLocator.atmLocator.go();
            break;
        default:
            throw new Error(`${option} shortcut item is not available to navigate to...`);
    }
});

When(/^the user try to contract a new card$/, async function() {
    await navigation.contractProductSection.go();
});

When(/^the discarded "([^"]*)" section will not be visible$/, async function (option) {
    await currentPage.checkSectionVisibility({section: option, reverse: true});
});

When(/^the section for "([^"]*)" will be visible$/, async function (option) {
    await landingPage.checkSectionVisibility({section: option, reverse: false});
});

When(/^the user accesses to public Landing Screen$/, async function () {
    await navigation.landingPublic.go();
});

When(/^the user accesses to "([^"]*)" screen from messages$/, async function(option) {
    switch (option) {
        case 'emergency zone':
            await navigation.emergencyZone.dashboard.go();
            break;
        default:
            throw new Error(`${option} message item is not available to navigate to...`);
    }
});

When(/^the user selects "([^"]*)" from wApp section$/, async function(option) {
    switch (option) {
        case 'QR':
            await navigation.codiOperations.codiBeginRegister.go({forceLogin: true});
            break;
        case 'card':
            await navigation.emergencyZone.dashboard.go();
            break;
        default:
            throw new Error(`${option} message item is not available to navigate to...`);
    }
});
