import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import changeLimitsPage from '../../pages/additionalCards/changeLimits';
import additionalCardsDetailPage from '../../pages/productDetails/additionalCardDetail';

When(/^the user accesses to change limits$/, async function() {
    await navigation.additionalCards.changeLimits.go();
});

When(/^the user tries access to change limits$/, async function() {
    await additionalCardsDetailPage.editLimitOperative();
});

When(/^the user changes limits of a additional card$/, async function() {
    await navigation.additionalCards.changeLimits.go();
    await changeLimitsPage.enterValue(1000);
    await navigation.card.additionalCardDetail.go();
});

When(/^the user introduces "([^"]*)" as new limit amount$/, async function(amount) {
    await changeLimitsPage.enterValue(amount);
});

When(/^the user retries to access "([^"]*)" more times$/, async function(retries) {
    await navigation.additionalCards.changeLimits.attempt({retries: retries});
});

When(/^the user retries "([^"]*)" times to finish operative$/, async function(retries) {
    await navigation.card.additionalCardDetail.attempt({retries: retries});
});

