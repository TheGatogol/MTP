import { Commands } from '@csqe/radish';
import { Given, When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import login from '../../pages/loginLogout/login';

Given(/^the user "([^"]*)" with password "([^"]*)"$/, async function(user, password) {
    navigation.setUser({username: user, password: password});
    await navigation.dashboard.go();
});

Given(/^the user "([^"]*)" and "([^"]*)"$/, async function(user, password) {
    navigation.setUser({username: user, password: password});
    await navigation.dashboard.go();
});

Given(/^the user is not logged but cached$/, async function() {
    await navigation.cachedLogin.go();
});

When(/^the user accesses the Login Screen$/, async function() {
    await navigation.login.go();
});

Given('the user resets the app', async function() {
    await navigation.landing.go({resetApp: true});
});

Given(/^the user closes the app and does login again$/, async function() {
    await navigation.landing.go();
    await navigation.dashboard.go();
});

When(/^the user does login$/, async function () {
    await navigation.login.go();
    await login.login();
});

When(/^the user does login again$/, async function() {
    await navigation.dashboard.go();
});

Given(/^a user logs in with the following info "([^"]*)" and "([^"]*)" with the location "([^"]*)" "([^"]*)"$/, async function(user, password, latitude, longitude) {
    const geoLocation = {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        altitude: 0,
    };

    logger.info(JSON.stringify(geoLocation, null, 2));

    await Commands.setGeoLocation(geoLocation);

    navigation.setUser({username: user, password: password});
    await navigation.dashboard.go();
});

When(/^the user goes to unlock password$/, async function() {
    await login.unlock();
});
