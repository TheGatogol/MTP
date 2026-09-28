import { When } from '@cucumber/cucumber';
import tipsFinanceProfiling from '../../pages/tipsFinanceProfiling/tipsFinanceProfiling.js';

When(/^the user close tips finance profiling onboarding$/, async function () {
    await tipsFinanceProfiling.closeOnboarding();
});

When(/^the user navigates to "([^"]*)" badges section$/, async function (badgeType) {
    if (badgeType === 'unique') {
        await tipsFinanceProfiling.enterUniqueBadges();
    } else {
        await tipsFinanceProfiling.returnCommonBadges();
    }
});

When(/^the user accesses their "([^"]*)" badges collection$/, async function (badgeType) {
    await tipsFinanceProfiling.showCollection(badgeType);
});

When(/^the user accesses an obtained "([^"]*)" badge from their collection$/, async function (badgeType) {
    await tipsFinanceProfiling.showCollection(badgeType);
    await tipsFinanceProfiling.selectBadge();
});

When(/^the user enters to view their season history$/, async function () {
    await tipsFinanceProfiling.showHistoricalSeasonSection();
});

When(/^the user enters a "([^"]*)" to view pending content$/, async function (contentType) {
    await tipsFinanceProfiling.badgeSelection();
    if (contentType === 'mission') {
        await tipsFinanceProfiling.missionSelection();
    }
});

When(/^the user goes to their "([^"]*)" badges collection$/, async function (badgeType) {
    await tipsFinanceProfiling.goBadgesCollection(badgeType);
});

When(/^the user "([^"]*)" the pending badge interaction$/, async function (context) {
    await tipsFinanceProfiling.badgePendingSelection();
    await tipsFinanceProfiling.closeModals(context);
});

When(/^the user discover "([^"]*)" success$/, async function (option) {
    await tipsFinanceProfiling.selectAnswerProfile(option);
});

When(/^the user discovers profile$/, async function () {
    await tipsFinanceProfiling.selectAnswerProfile('Money apprentice');
    await tipsFinanceProfiling.closeProfillingSuccess();
});

When(/^the user accesses profiling$/, async function () {
    await tipsFinanceProfiling.closeProfilling();
});

When(/^the user discovers profile with "([^"]*)" service error$/, async function (context) {
    if (context === 'customer profiling') {
        await tipsFinanceProfiling.selectAnswerProfile('Mastermind');
    }
    await tipsFinanceProfiling.closeErrorModal();
});

When(/^the user accesses the faq in season info$/, async function () {
    await tipsFinanceProfiling.selectFAQ();
});

When(/^the user enters a mission in a pending season badge two$/, async function () {
    await tipsFinanceProfiling.badgeSelectionTwo();
    await tipsFinanceProfiling.firstMissionSelection();
    await tipsFinanceProfiling.closeModals('confirm');
});

When(/^the user accesses to profiling form$/, async function () {
    await tipsFinanceProfiling.discoverProfiler();
});

When(/^the user retries error modal$/, async function () {
    await tipsFinanceProfiling.retryErrorModal();
});
