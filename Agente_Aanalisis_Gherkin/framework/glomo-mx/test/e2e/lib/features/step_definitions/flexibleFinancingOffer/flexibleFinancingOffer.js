import {When} from '@cucumber/cucumber';
import flexibleFinancingOffer from '../../pages/flexibleFinancingOffer/flexibleFinancingOffer.js';

When(/^the user confirms to apply the promotion$/, async function() {
    await flexibleFinancingOffer.continueFixedStep();
});

When(/^the user accepts the onboarding$/, async function() {
    await flexibleFinancingOffer.continueOnboarding();
});

When(/^the user "([^"]*)" the promotion summary$/, async function(option) {
    if (option.toLowerCase() === 'goes to') {
        await flexibleFinancingOffer.goToSummaryView();
    } else {
        await flexibleFinancingOffer.applyPromotionMultistep();
    }
});

When(/^the user "([^"]*)" "([^"]*)" promotion to apply$/, async function(selection, promotion) {
    await flexibleFinancingOffer.selectPromotion(promotion.toLowerCase(), selection.toLowerCase());
});

When(/^the user "([^"]*)" the promotion selected(| with installments| with skip payment| with combo)$/, async function(selection, change) {
    await flexibleFinancingOffer.modifyPromotionSelected();
    const promotion = change.replace('with', '').trim().toLowerCase();
    await flexibleFinancingOffer.selectPromotion(promotion, selection.toLowerCase());
});

When(/^the user consults the promotion selected$/, async function() {
    await flexibleFinancingOffer.modifyPromotionSelected();
});

When(/^the user deploys the "([^"]*)" modal$/, async function(modalType) {
    await flexibleFinancingOffer.deployModal(modalType.toLowerCase());
});

When(/^the user accesses to the faqs section$/, async function() {
    await flexibleFinancingOffer.accessToFAQs();
});

When(/^the user deploys the "([^"]*)" question in the list$/, async function(question) {
    await flexibleFinancingOffer.accessToQuestionDetail(question.toLowerCase());
});

When(/^the user accepts the promotion$/, async function() {
    await flexibleFinancingOffer.continueMultistep();
});
