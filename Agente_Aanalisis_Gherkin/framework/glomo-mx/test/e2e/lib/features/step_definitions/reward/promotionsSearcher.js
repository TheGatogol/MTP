import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import rewardsLanding from '../../pages/reward/rewardsLanding';

When('the user accesses to promotions searcher from {string}', async function (option) {
    switch (option.toLowerCase()) {
        case 'dashboard sidebar':
            await navigation.sidebar.go({forceLogin: true});
            await navigation.reward.rewardsLanding.go();
            await rewardsLanding.accessOnboarding('enter');
            await rewardsLanding.accessPromotions();
            await rewardsLanding.openSearcher();
            break;
        case 'dashboard sidebar for the second time':
            await navigation.reward.rewardsLanding.go();
            await rewardsLanding.accessPromotions();
            await rewardsLanding.openSearcher();
            break;
        case 'dashboard banner':
            await navigation.reward.rewardsLanding.go();
            await rewardsLanding.accessOnboarding('enter');
            await rewardsLanding.accessPromotions();
            await rewardsLanding.openSearcher();
            break;
        case 'promotions landing':
            await rewardsLanding.openSearcher();
            break;
        default:
            throw new Error('Selected option is not available...');
    }
});

When('the user filters promotions by {string}', async function (typePromotion) {
    await rewardsLanding.filterPromotions(typePromotion);
    await rewardsLanding.searchPromos();
});

When(/^the user searches promotions by "([^"]*)"(| and removes)$/, async function (input, removes) {
    await rewardsLanding.insertPromos(input);
    await rewardsLanding.searchPromos();
    if (removes) {
        await rewardsLanding.removeTags();
    }
});

When(/^the user (selects|searches promotions by) "([^"]*)" and "([^"]*)" filters$/, async function (findBy, input, typePromotion) {
    await rewardsLanding.insertPromos(input);
    await rewardsLanding.filterPromotions(typePromotion);
    if (findBy === 'searches promotions by') {
        await rewardsLanding.searchPromos();
    }
});

When('the user edits tags of search', async function () {
    await rewardsLanding.editTagsFilter();
    await rewardsLanding.searchPromos();
});

When('the user removes a search', async function () {
    await rewardsLanding.removeTags();
});

When('the user removes promotion filter', async function () {
    await rewardsLanding.removeFilters();
});

When('the user removes a old search', async function () {
    await rewardsLanding.removeHistory();
});

When('the user tries to search using open input', async function () {
    await rewardsLanding.searchForPromotions();
});

When('the user displays all categories', async function () {
    await rewardsLanding.displayAllCategories();
});

When('the user clears tags with result {string}', async function (resultTags) {
    await rewardsLanding.removesFilters(resultTags);
});

When('the user scrolls down to the last result', async function () {
    await rewardsLanding.scrollsDownLatestResult();
});

When(/^the user retries promotions modal error "([^"]*)" more times$/, async function (times) {
    await rewardsLanding.retryModalError(times);
});
