import {Given, Then, When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

import cardCreditCardPaymentPage from '../../pages/creditCardPayment/cardCreditCardPayment';
import * as utilsCards from '../../utils/utilsCards';

const PAYMENT_TYPES = {
    'total debt': 'TOTAL_DEBT_AMOUNT',
    'minimum amount': 'MINIMUM_AMOUNT',
};

const dictionaryCardPayment = {
    'non-interest': 'MINIMUM_AMOUNT_TO_AVOID_INTEREST',
    'minimum amount': 'MINIMUM_AMOUNT',
    'total debt': 'TOTAL_DEBT_AMOUNT',
    'another amount': 'LAST_PERIOD_AMOUNT',
};

Then(/^the user accesses to pay the "([^"]*)" debt on one of his credit cards$/, async function(paymentMethod) {
    paymentMethod = PAYMENT_TYPES[paymentMethod.toLowerCase()];
    const debtCard = utilsCards.getCardByPaymentMethod(global.user.products.cards, paymentMethod);
    const pageName = 'operatives';
    await navigation.creditCardPayment.cardCreditCardPayment.go({card: debtCard.cardId, pageName});
});

When(/^the user goes to the card payment receipt operation$/, async function() {
    await navigation.creditCardPayment.operationReceipt.go();
});

When(/^the user proceeds to make the payment$/, async function() {
    await cardCreditCardPaymentPage.confirmSummary();
});

When(/^the user selects "([^"]*)" payment method and account with "([^"]*)" currency$/, async function(paymentType, accountCurrency) {
    const account = global.user.products.accounts.find(account => (account.availableBalance.currentBalances[0]).currency === accountCurrency).number;
    let paymentAmount;
    if (paymentType.toLowerCase() === 'another amount') {
        const cardPayment = dictionaryCardPayment[paymentType.toLowerCase()];
        paymentAmount = global.user.products.cards[0].paymentMethods[0].paymentAmounts.find(paymentAmount => paymentAmount.id === cardPayment).values[0].amount;
    }
    await cardCreditCardPaymentPage.selectTypeOfPayment(paymentType, paymentAmount);
    await cardCreditCardPaymentPage.selectAccount(account);
});

When(/^the user finishes "([^"]*)" payment method$/, async function(paymentType) {
    const cardPayment = dictionaryCardPayment[paymentType.toLowerCase()];
    const {amount} = global.debtCard.paymentMethods[0].paymentAmounts.find(paymentAmount => paymentAmount.id === cardPayment).values[0];
    await navigation.creditCardPayment.operationReceipt.go(paymentType, amount);
});

Given(/^the user accesses to more operatives of the card "([^"]*)"$/, async function(pan) {
    await navigation.card.orangeCardProductDetail.go({card: pan});
    await currentPage.viewMoreOperatives();
});
