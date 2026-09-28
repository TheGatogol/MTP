const dictionaryErrorService = {
    'always returns error 500 in the installments plans simulations': 'always 500 error simulations installment',
    'always returns error 500 in the installments plans': 'always 500 error final installment',
    'always returns error 400 in the offers': 'always error 400 cards offers',
    'always returns error 404 in the conditions': 'always error 404 cards conditions',
    'return balance error': 'return balance error'
};

export function getCardByPaymentMethod(cards, paymentMethod) {
    return cards.find(debtCard => {
        if (paymentMethod === 'MINIMUM_AMOUNT') {
            return debtCard.cardType.id === 'CREDIT_CARD' && (debtCard.status.id === 'ACTIVATED' || debtCard.status.id === 'OPERATIVE') && debtCard.physicalSupport.id === 'NORMAL_PLASTIC' &&
                debtCard.participants[0].participantType.id === 'HOLDER' && debtCard.currencies[0].currency === 'MXN' &&
                debtCard.currencies[0].isMajor === true &&
                (debtCard.paymentMethods[0].paymentAmounts[0].id = paymentMethod && debtCard.paymentMethods[0].paymentAmounts[0].values[0].amount > 0);
        }
        throw new Error('the payment method is invalid or its logic has not yet been implement');

    });
}

export function getCardByNumberTickets(cards, cardType, ticketsValue) {
    let card;
    switch (cardType) {
        case 'card without enough points to buy tickets':
            card = this.getCardWithInsufficientPointsToBuyTickets(cards, ticketsValue);
            break;
        case 'card with zero ticket to buy':
            card = this.getCardWithZeroTicket(cards);
            break;
        case 'card with at least one ticket to buy':
            card = this.getCardWithLeastOneTicket(cards, ticketsValue);
            break;
        case 'card with more one ticket to buy':
            card = this.getCardWithMoreOneTicket(cards, ticketsValue);
            break;
        default:
            throw new Error(`The card type is not correct, received: ${cardType}`);
    }
    return card;
}

export function getMaxNumTickets(card, ticketsValuePrice) {
    return Math.floor(card.rewards[0].nonMonetaryValue / ticketsValuePrice);
}

export function getCardWithZeroTicket(cards) {
    return cards.find(card => card.rewards[0].nonMonetaryValue === 0);
}

export function getCardWithInsufficientPointsToBuyTickets(cards, ticketsValuePrice) {
    return cards.find(card => card.rewards[0].nonMonetaryValue > 0 && card.rewards[0].nonMonetaryValue < ticketsValuePrice);
}

export function getCardWithLeastOneTicket(cards, ticketsValuePrice) {
    return cards.find(card => card.rewards[0].nonMonetaryValue > ticketsValuePrice);
}

export function getCardWithMoreOneTicket(cards, ticketsValuePrice) {
    return cards.find(card => card.rewards[0].nonMonetaryValue >= 2 * ticketsValuePrice);
}

/**
 * in dataManager add the errorSimulationConfig field to the card for which the error is configured
 */
export function getCreditCardByErrorService(cards, errorService) {
    const error = dictionaryErrorService[errorService.toLowerCase()];
    return cards.find(element => element.cardType.id === 'CREDIT_CARD' && (element.status.id === 'ACTIVATED' || element.status.id === 'OPERATIVE')
        && (element.errorSimulationConfig && element.errorSimulationConfig === error));
}

/**
 * This function searches for a card within global.user.products.cards
 * that matches all the criteria specified in the tableData object.
 * For each card, it compares every key and value from tableData with the corresponding values in card.configCard.
 * If it finds a card that meets all the criteria, it returns its cardId; otherwise, it returns undefined.
 */

export function findCardByCriteria(tableData) {
    const cards = global?.user?.products?.cards;
    const card = cards.find(card => {
        const {configCard} = card;
        if (!configCard) {
            return false;
        }
        return Object.entries(tableData).every(([key, value]) => {
            if (value === undefined || value === null || value === '') {
                return true;
            }
            return configCard[key] === value;
        });
    });
    return card ? card.cardId : undefined;
}
