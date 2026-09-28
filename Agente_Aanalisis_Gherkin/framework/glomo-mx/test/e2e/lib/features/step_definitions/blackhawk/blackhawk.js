import { When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';

When(/^the user consults more information about gift cards from the "([^"]*)"$/, async function(entry) {
    switch (entry) {
        case 'onBoarding':
            await navigation.blackhawk.blackhawkInformation.go();
            break;
        case 'list':
            await currentPage.goToSectionInfoCard();
            break;
        default:
            throw new Error(`Entry point for '${entry}' information is not found in section list.`);
    }
});

When(/^the user consults more information about the "([^"]*)" brand of gift cards$/, async function(brand) {
    await currentPage.infoBrandCard(brand);
});

When(/^the user consults the list of card brands$/, async function() {
    await navigation.blackhawk.blackhawkCardList.go();
});

When(/^the user goes to gift FAQ section$/, async function() {
    await navigation.blackhawk.blackhawkFaqs.go();
});
When(/^the user consult the "([^"]*)" question$/, async function(question) {
    await navigation.blackhawk.blackhawkAnswerFaqs.go({question});
});

When(/^the user goes to purchase, choosing the "([^"]*)" brand and "([^"]*)" amount card$/, async function(brand, type) {
    await navigation.blackhawk.blackhawkPurchase.go({brand});
    switch (type) {
        case 'fixed':
            await currentPage.buyFixedAmountCard();
            break;
        case 'custom':
            await currentPage.buyCustomAmountCard();
            break;
        case 'invalid custom':
            await currentPage.buyCustomAmountCard();
            await currentPage.enterErrorAmount(4000);
            break;
        case 'valid custom':
            await currentPage.buyCustomAmountCard();
            await currentPage.enterCorrectAmount(200);
            break;
        default:
            throw new Error(`The '${type}' option was not found in the purchase options.`);
    }
});

When(/^the user goes to purchase, choosing the "([^"]*)" brand$/, async function(brand) {
    await navigation.blackhawk.blackhawkPurchase.go({brand});
});

When(/^the user continues to the "([^"]*)" step of the card purchase$/, async function(step) {
    switch (step) {
        case 'summary':
            await currentPage.selectAccountWithFunds();
            await currentPage.checkTerms();
            break;
        case 'terms':
            await currentPage.selectAccountWithFunds();
            break;
        default:
            throw new Error(`The '${step}' step was not declared in the options.`);
    }
});

When(/^the user completes the card purchase$/, async function() {
    await navigation.blackhawk.blackhawkPurchaseReview.attempt();
});

When(/^the user pays for a gift card with an amount greater than the established MTU$/, async function() {
    await navigation.mtuLimits.mtuException.attempt();
});

When(/^the user "([^"]*)" gift card code$/, async function(action) {
    await currentPage.obtaincardcode();
    if (action === 'accepts get'){
        await currentPage.acceptMessageCode();
    }
});
