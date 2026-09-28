import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import ocDebitCardInmediateDelivery from '../../pages/ocDebitCardInmediateDelivery/ocDebitCardInmediateDelivery';

When(/^the user accesses to childs linkcard$/, async function() {
    await navigation.card.orangeCardProductDetail.go({card: global.user.products.cards.cardId});
    await navigation.card.ocDebitCardInmediateDelivery.go();
    await ocDebitCardInmediateDelivery.openAccordeon();
});

When(/^the user taps the "([^"]*)" in the debit card immediate delivery screen$/, async function(action) {
    await ocDebitCardInmediateDelivery.continueMultistepPage();
    await ocDebitCardInmediateDelivery.sectionToSee(action);
});

When(/^the user modifies the (address|card cover) from the request summary$/, async function(context) {
    const step = context.toLowerCase();
    await ocDebitCardInmediateDelivery.modifiedStep(step);
});

When(/^the user leaves the linkcard flow from (offer|multistep) step$/, async function(context) {
    const step = context.toLowerCase();
    await navigation.card.orangeCardProductDetail.go({step});
});

When(/^the user continues the linkcard process$/, async function() {
    await ocDebitCardInmediateDelivery.selectContinueFlow();
});

When(/^the user (finishes|tries finishes) the process$/, async function(retry) {
    await ocDebitCardInmediateDelivery.finishProcess();
    if (retry==='tries finishes') {
        await ocDebitCardInmediateDelivery.retryProcess();
    }
});

When(/^the user taps the finish resume with another address and (with|without) internal number$/, async function(context) {
    const withInternalNumber = context.toLowerCase() === 'without' ? true : false;
    await ocDebitCardInmediateDelivery.continueMultistepPage();
    await ocDebitCardInmediateDelivery.continueCardCoversStep('otherAddress', withInternalNumber);
    await ocDebitCardInmediateDelivery.continueSummary();
});

When(/^the user accesses to card detail$/, async function() {
    await navigation.card.orangeCardProductDetail.go({card: global.user.products.cards.cardId});
});

When(/^the user accesses to linkcard$/, async function() {
    await navigation.card.ocDebitCardInmediateDelivery.go();
});

When(/^the user continues multistep$/, async function() {
    await ocDebitCardInmediateDelivery.continueMultistepPage();
});

When(/^the user continues card cover$/, async function() {
    await ocDebitCardInmediateDelivery.continueCardCoversStep();
});

When(/^the user continues card cover step$/, async function() {
    await ocDebitCardInmediateDelivery.selectContinueAddressStep();
});

When(/^the user continues step card cover$/, async function() {
    await ocDebitCardInmediateDelivery.finishCardCoverStep();
});

When(/^the user updates the card nickname in the personalization section$/, async function() {
    await ocDebitCardInmediateDelivery.updateCardNickname();
});
