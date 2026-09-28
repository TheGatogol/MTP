import { Given, When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import { Commands, utils } from '@csqe/radish';

import atmLocator from '../../pages/atmLocator/atmLocator';
import searchPlace from '../../pages/atmLocator/searchPlace';
import poisDetail from '../../pages/atmLocator/poisDetail';

async function accessAtm(
    {page = 'atmLocator', zoneType = 'public', firstTime = false, atmType = 'branch', navigateFrom = 'map', connectionStatus = ' with connection'} = {},
) {
    await Commands.execute({ script: (key, val) => localStorage.setItem(key, val), args: ['atm_visited', `${!firstTime}`]});
    switch (page) {
        case 'atmLocator':
            await navigation.atmLocator.atmLocator.go({forceLogin: zoneType === 'private', connectionStatus});
            break;
        case 'searchPlace':
            await navigation.atmLocator.searchPlace.go({forceLogin: zoneType === 'private'});
            break;
        case 'poisDetail':
            await navigation.atmLocator.poisDetail.go({forceLogin: zoneType === 'private', atmType, navigateFrom});
            break;
        default:
            throw new Error(`${page} page is not available to navigate to...`);
    }
}

function getBranchLocation() {
    return user.location[0];
}

When(/^the user accesses to (public|private) "([^"]*)"( without connection|)$/, async function(zoneType, page, connectionStatus) {
    await accessAtm({ page, zoneType, connectionStatus });
});

When(/^the user enters (public|private) Branches and ATMs Locator page( for the first time|)$/, async function(zoneType, firstTime) {
    await accessAtm({ zoneType, firstTime: !!firstTime });
});

When(/^the user enters Branches and ATMs Locator page( for the first time|)$/, async function(firstTime) {
    await accessAtm({ firstTime });
});

Given(/^a moves to the location "([^"]*)" "([^"]*)"$/, async function(latitude, longitude) {
    const geoLocation = {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        altitude: 0,
    };
    await Commands.setGeoLocation(geoLocation);
});

Given(/^a moves to the branch location$/, async function() {
    const location = getBranchLocation();
    const geoLocation = {
        latitude: parseFloat(location.latitude),
        longitude: parseFloat(location.longitude),
        altitude: 0,
    };
    await Commands.setGeoLocation(geoLocation);
});

When(/^user swipes "([^"]*)" times "([^"]*)" along the map$/, async function(times, direction) {
    let startMovement, endMovement;
    switch (direction) {
        case 'left':
            startMovement = 'right';
            endMovement = 'left';
            break;
        case 'right':
            startMovement = 'left';
            endMovement = 'right';
            break;
        case 'top':
        case 'up':
            startMovement = 'bottom';
            endMovement = 'up';
            break;
        case 'bottom':
        case 'down':
            startMovement = 'up';
            endMovement = 'bottom';
            break;
        default:
            throw new Error('Unknown direction for swiping');
    }

    await atmLocator.waitUntilSpinnerVeil({timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.L});
    for (let i = 0; i <= times; i++) {
        await utils.runInContext({
            context: 'NATIVE_APP', action: async () => await utils.swipeView({
                start: startMovement,
                moveTo: endMovement,
            })
        });
    }
});

When(/^the user interacts with the google map and navigate into the view$/, async function() {
    await atmLocator.interactsMap();
});

When(/^the user show list atms and branches again$/, async function() {
    await atmLocator.showList();
});

When(/^the user swipe up over the atms and branches list$/, async function() {
    await atmLocator.swipeList();
});

When(/^the user enters search place page from Branches and ATMs Locator page$/, async function() {
    await navigation.sidebar.go();
    await accessAtm({ page: 'searchPlace' });
});

When(/^the user starts typing on the search input the desire location address$/, async function() {
    await searchPlace.typePlace('Polanco');
});

When(/^the user starts typing on the search input the desire location address with no near pois$/, async function() {
    await searchPlace.typePlace('Desierto de los leones');
});

When(/^the user shares location of the branch$/, async function() {
    await poisDetail.operationActions('share');
});

When(/^the user book a branch appointment$/, async function() {
    await poisDetail.operationActions('turn');
});

When(/^the user wants to know the route to the branch$/, async function() {
    await poisDetail.operationActions('route');
});

When(/^the user accesses to the branches list$/, async function() {
    await atmLocator.fullList();
});

When(/^the user starts a search in this area$/, async function() {
    await atmLocator.searchPoisInArea();
});

When(/^the user selects one of the items on the list$/, async function() {
    await searchPlace.selectListItem();
    await navigation.atmLocator.atmLocator.assert();
});

When(/^the user selects one of the items on the list but no near pois were found$/, async function() {
    await searchPlace.selectListItem();
    await navigation.atmLocator.searchPlace.assert();
});

When(/^the user uses the cross button to delete the entered words to reset the input$/, async function() {
    await searchPlace.resetInput();
});

When(/^the user enters a non valid location text$/, async function() {
    await searchPlace.typeNoResult();
});

When(/^the user wants to know the poi detail "([^"]*)"$/, async function(withZoom) {
    await atmLocator.accessPoiDetail(withZoom);
});

When(/^the user selects another point in the map$/, async function() {
    await atmLocator.showPoiCard();
});

When(/^the user enters a branch or atm detail from detail list$/, async function() {
    await poisDetail.showDetail();
});

When(/^the user enters (branch|atm) detail page from (list|map)$/, async function(atmType, navigateFrom) {
    await navigation.sidebar.go();
    await accessAtm({ page: 'poisDetail', atmType, navigateFrom });
});

When(/^the user hides all nearby (atms|branches)$/, async function(atmType) {
    const atmsType = (atmType === 'atms') ? 'branch' : 'atm';
    await atmLocator.validateAtmType(atmsType);
});

When(/^the user closes the search screen$/, async function () {
    await searchPlace.closeSearch();
});
