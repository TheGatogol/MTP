import {Given, When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import * as utilsCards from '../../utils/utilsCards';
import financeTransactionPage from '../../pages/financeTransaction/financeTransaction';

When(/^the user applies the financing offer$/, async function() {
    await navigation.card.financeTransaction.financeTransactionReview.go();
});

When(/^the user attempts to apply the financing offer$/, async function() {
    await navigation.card.financeTransaction.financeTransactionReview.attempt();
});

When(/^the user closes the finance transaction operative$/, async function() {
    await financeTransactionPage.closeOperative();
});

Given(/^the user changes the instalment number$/, async function() {
    await financeTransactionPage.changesTheFeeNumber();
});

When(/^the user accepts terms and conditions$/, async function() {
    await financeTransactionPage.acceptTerms();
});

When(/^the user accesses to "([^"]*)" help modal$/, async function(helpIcon) {
    await currentPage.openHelp(helpIcon);
});

When(/^the user accepts terms and conditions of promotion$/, async function() {
    await financeTransactionPage.acceptTerms();
});

Given(/^the user accesses the product detail of a card that "([^"]*)" service$/, async function(errorService) {
    const {cards} = global.user.products;
    const card = utilsCards.getCreditCardByErrorService(cards, errorService);
    await navigation.card.orangeCardProductDetail.go({card: card.cardId});
});

Given(/^the user attempts to access the promotion conditions from a fundable movement$/, async function() {
    await navigation.card.financeTransaction.financeTransaction.go();
});

When(/^the user attempts to access the installments simulation from a fundable movement$/, async function() {
    await navigation.card.financeTransaction.financeTransaction.go();
    await financeTransactionPage.acceptFinancingConsiderations();
});
