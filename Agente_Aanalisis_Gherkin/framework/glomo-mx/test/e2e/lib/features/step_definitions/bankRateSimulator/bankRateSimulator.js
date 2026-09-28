import {When} from '@cucumber/cucumber';
// Utility requires
import * as navigation from '../../navigation';
// Page Objects
import bankRateSimulator from '../../pages/bankRateSimulator/bankRateSimulator';
import orangeCardProductDetail from '../../pages/productDetails/orangeCardProductDetail';

const dictionaryCardPayment = {
    'non-interest': 'MINIMUM_AMOUNT_TO_AVOID_INTEREST',
    'minimum amount': 'MINIMUM_AMOUNT',
    'total debt': 'TOTAL_DEBT_AMOUNT',
    'another amount': 'LAST_PERIOD_AMOUNT',
};

When(/^the user accesses to bank rate simulator$/, async function() {
    global.debtCard = global.user.products.cards.find(card => card.paymentMethods[0] && card.cardType.id === 'CREDIT_CARD' &&
        card.status.id === 'OPERATIVE' && card.physicalSupport.id === 'NORMAL_PLASTIC' && card.participants[0].participantType.id === 'HOLDER' &&
        card.currencies[0].currency === 'MXN' && card.currencies[0].isMajor === true);
    await navigation.card.bankRateSimulator.go({card: global.debtCard.number});
});

When(/^the user accesses to bank rate simulator with "([^"]*)"$/, async function(paymentType) {
    if (paymentType.toLowerCase() === 'insufficient balance') {
        global.debtCard = global.user.products.cards.find(card => card.cardType.id === 'CREDIT_CARD' &&
            card.status.id === 'OPERATIVE' && card.physicalSupport.id === 'NORMAL_PLASTIC' && card.participants[0].participantType.id === 'HOLDER' &&
            (card.paymentMethods[0].paymentAmounts[0].values[0].amount > global.user.products.accounts[0].availableBalance.currentBalances[0].amount));
    } else if (paymentType.toLowerCase() === 'service card error') {
        global.debtCard = global.user.products.cards.find(card => card.cardType.id === 'CREDIT_CARD' &&
            card.status.id === 'OPERATIVE' && card.physicalSupport.id === 'NORMAL_PLASTIC' && card.participants[0].participantType.id === 'HOLDER' && card.errorSimulationConfig !== undefined);
    } else if (paymentType.toLowerCase() === 'positive balance') {
        global.debtCard = global.user.products.cards.find(card => card.cardType.id === 'CREDIT_CARD' &&
            card.status.id === 'OPERATIVE' && card.physicalSupport.id === 'NORMAL_PLASTIC' && card.participants[0].participantType.id === 'HOLDER' &&
            (card.disposedBalance.currentBalances[0].amount < 0));
    }
    await navigation.card.bankRateSimulator.go({card: global.debtCard.number});
});

When(/^the user shows onboarding simulator modal$/, async function() {
    await orangeCardProductDetail.accessOnboarding();
});

When(/^the user hovers over all slides$/, async function() {
    await orangeCardProductDetail.accessAcceptTerms();
});

When(/^the user exits the onboarding screen$/, async function() {
    await orangeCardProductDetail.exitOnboarding();
});

When(/^the user accesses to more information screen$/, async function() {
    await bankRateSimulator.closeTooltipBar();
    await bankRateSimulator.accessMoreInformation();
});

When(/^the user defines "([^"]*)" payment card process$/, async function(cardPaymentType) {
    const cardPayment = dictionaryCardPayment[cardPaymentType.toLowerCase()];
    const {amount} = global.debtCard.paymentMethods[0].paymentAmounts.find(paymentAmount => paymentAmount.id === cardPayment).values[0];
    await bankRateSimulator.closeTooltipBar();
    await bankRateSimulator.defineAmount(cardPayment, amount);
});

When(/^the user closes the tooltip$/, async function() {
    await bankRateSimulator.closeTooltipBar();
});

When(/^the user completes "([^"]*)" payment card process$/, async function(cardPaymentType) {
    const cardPayment = dictionaryCardPayment[cardPaymentType.toLowerCase()];
    const {amount} = global.debtCard.paymentMethods[0].paymentAmounts.find(paymentAmount => paymentAmount.id === cardPayment).values[0];
    await bankRateSimulator.closeTooltipBar();
    await bankRateSimulator.completesAmount(cardPayment, amount);
    await navigation.creditCardPayment.cardCreditCardPayment.assert();
});
