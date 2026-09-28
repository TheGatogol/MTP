import {When, Then} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import rewardsLanding from '../../pages/reward/rewardsLanding';

When('the user does Onboarding by {string} option', async function (option) {
    await rewardsLanding.accessOnboarding(option);
});

When('the user accesses to {string} carousel list promotions', async function (typePromotion) {
    await rewardsLanding.viewMorePromotions(typePromotion);
});

When('the user views all promotions after does pagination', async function () {
    await rewardsLanding.validateAllPromotions();
});

When(/^the user accesses to Landing Promotions from (sidebar|dashboard|dashboard for second time)$/, async function (option) {
    if (option === 'sidebar') {
        await navigation.sidebar.go({forceLogin: true});
    }
    await navigation.reward.rewardsLanding.go();
    if (option === 'sidebar' || option === 'dashboard') {
        await rewardsLanding.accessOnboarding('enter');
    }
    await rewardsLanding.accessPromotions();
});

Then('the user closes big modal with {string}', async function (action) {
    await rewardsLanding.closeBigModal(action);
});

When('the user closes big error modal in rewards landing with {string}', async function (action) {
    await rewardsLanding.closeBigError(action);
});

Then('the user scrolls to last carousel promotions', async function () {
    await rewardsLanding.scrollLastCarousel();
});

Then('the user scrolls to last promotion', async function () {
    await rewardsLanding.scrollLastPromotion();
});

When('the user accesses to {string} promotion detail {string} from {string}', async function (typePromotion, type, from) {
    if (from === 'carrousel') {
        await rewardsLanding.accessPromotion();
    } else {
        await rewardsLanding.viewMorePromotions(typePromotion, type);
        await rewardsLanding.accessToDetail(typePromotion, type);
    }
});

When(/^the user (?:accesses|attempts to access) to "([^"]*)" promotion detail "([^"]*)"$/, async function (typePromotion, type) {
    await rewardsLanding.viewMorePromotions(typePromotion, type);
    await rewardsLanding.accessToDetail(typePromotion, type);
});

When('the user accesses to terms and conditions of offer', async function () {
    await rewardsLanding.accessToTerms();
});

When(/^the user accesses (coronita|spherica) favorite categories selection screen$/, async function (access) {
    await rewardsLanding.accessToCategoriesConfigure(access);
});

When(/^the user selects "([^"]*)" (favorite categories|favorite categories and confirms|favorite categories and accepts)$/, async function (number, confirmation) {
    await rewardsLanding.selectCategories(number);
    if (confirmation === 'favorite categories and confirms') {
        await rewardsLanding.confirmCategories();
    }
    else if (confirmation === 'favorite categories and accepts') {
        await rewardsLanding.acceptFavourites();
    }
});

When('the user deletes the selected favorite categories from {string} screen', async function (screen) {
    await rewardsLanding.deleteCategories(screen);
    if (rewardsLanding.isSpherica()) {
        await rewardsLanding.confirmCategoriesSpherica();
    }
});

When('the user keeps the selected favorite categories from {string} screen', async function (screen) {
    await rewardsLanding.keepCategories(screen);
});

When('the user accesses to modify the selected favorite categories', async function () {
    await rewardsLanding.modifyToCategoriesConfigure();
});

When('the user changes selection favorite categories and confirm', async function () {
    await rewardsLanding.changeCategories();
});

When('the user keep up the selected favorite categories from carousel categories screen', async function () {
    await rewardsLanding.keepUpCategories();
});

When('the user closes selection screen {string}', async function (type) {
    await rewardsLanding.closeSelection(type);
});
