import {Given, When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import storesMap from '../../pages/storesMap/storesMap';
import rewardsLanding from '../../pages/reward/rewardsLanding';

Given(/^the user (accesses|attempts to access|tries to opens) to map of commerce from rewards landing$/, async function(isAttempt) {
    await navigation.reward.rewardsLanding.go();
    await rewardsLanding.accessOnboarding();
    if (isAttempt === 'attempts to access') {
        await navigation.storesMap.storesMap.attempt({permissions: false});
    } else if (isAttempt === 'accesses'){
        await navigation.storesMap.storesMap.go();
    } else {
        await rewardsLanding.useMyPoints();
        await rewardsLanding.accessToMapOfCommerce();
    }
    await currentPage.waitUntilSpinnerVeil({
        timeoutToAppear: config.wait.XS,
        timeoutToDisappear: config.wait.XXXL
    });
});

When('the user selects {string} commerce on the map', async function(commerce) {
    await storesMap.selectCommerce(commerce);
});

When('the user accesses {string} commerce on the map', async function(commerce) {
    await storesMap.selectCommerce(commerce);
    await storesMap.accessCommerceDetail();
});

When('the user accesses to search a commerce', async function() {
    await storesMap.searchCommerce();
});

When('the user changes to list mode', async function() {
    await storesMap.showCommerceList();
});

When('the user searches {string} commerce', async function(commerce) {
    await storesMap.findCommerce(commerce);
});

When('the user closes permissions map of commerce modal', async function() {
    await storesMap.closeAllowLocationModal();
    await storesMap.closeNoCommerceModal();
});
