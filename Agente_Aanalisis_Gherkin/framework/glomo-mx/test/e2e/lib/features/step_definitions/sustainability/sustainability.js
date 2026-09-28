import {When, Then} from '@cucumber/cucumber';
import glossaryPage from '../../pages/sustainability/glossarySection';

// Utility requires
import * as navigation from '../../navigation';
// STEP DEFINITIONS

When(/^the user accesses the glossary section$/, async function() {
    await navigation.sustainability.glossaryDasboard.go();
});

When(/^the user searches for a word "([^"]*)"$/, async function(word) {
    await glossaryPage.setWordsGlossary(word);
});

When(/^the user accesses to news section$/, async function() {
    await navigation.sustainability.newsDasboard.go();
});

When(/^the user accesses a tip$/, async function() {
    await currentPage.showRelatedTip();
});

When(/^the user opens a news item$/, async function() {
    await navigation.sustainability.newsItem.go();
});

When(/^the user accesses to Sustainability carbon footprint overview section$/, async function() {
    await navigation.sustainability.Sustainability.go({onboardingComplete:true});
});

When(/^the user accesses more information about the word$/, async function() {
    await glossaryPage.selectedWord();
});

When(/^the user accesses more information about any word$/, async function() {
    await glossaryPage.selectedAnyWord();
});

When(/^the user select another word$/, async function() {
    await glossaryPage.selectedAnotherWord();
});

When(/^the user follows links to pay receipts from no footprint section$/, async function() {
    await currentPage.goToPayReceipts();
});

Then(/^the feature has the following operatives with their corresponding status$/, async function(table) {
    await currentPage.checkFeatures(table);
});

When(/^the user accesses to related tip of notice at sustainability section and close$/, async function() {
    await navigation.sustainability.newsItem.go({onboardingComplete:true});
    await currentPage.showRelatedTip();
    await currentPage.closeDialog();
});

When(/^the user returns to sustainability section screen from sustainability$/, async function() {
    await navigation.sustainability.newsDasboard.go();
    await navigation.sustainability.Sustainability.go({onboardingComplete:false});
    await currentPage.goBack();
});
