const dictionaryStatus = {
    'operative': 'OPERATIVE',
    'inoperative': 'INOPERATIVE',
    'off': 'OFF',
    'on': 'ON',
    'blocked': 'BLOCKED',
    'overdraft': 'OVERDRAFT',
    'expired': 'EXPIRED',
    'pending delivery': 'PENDING_DELIVERY',
    'pending embossing': 'PENDING_EMBOSSING',
    'virtual association': 'VIRTUAL_ASSOCIATION',
    'balance in favour': 'BALANCE_IN_FAVOUR',
    'error additional': 'ERROR_ADDITIONAL',
    'no additional': 'NO_ADDITIONAL',
    'stolen': 'STOLEN',
    'lost': 'LOST',
    'current': 'CURRENT',
    'pdt.receipt.s': 'PDT.RECEIPT.S',
    'pdt.shipment': 'PDT.SHIPMENT',
    'pdt.shipment2': 'PDT.SHIPMENT2',
    'pdt.stamp': 'PDT.STAMP',
    'pdt.delivery': 'PDT.DELIVERY',
    'pdt.delivery2': 'PDT.DELIVERY2',
    'tj.stolen': 'TJ.STOLEN',
    'tj.lost': 'TJ.LOST',
    'expired2': 'EXPIRED2',
    'limit exceeded': 'LIMIT_EXCEEDED',
    'error': 'ERROR',
    'inactive': 'INACTIVE'
};

const dictionaryAdditionalCardStatus = {
    'STOLEN': 'ROBADA',
    'THEFT': 'ROBADA',
    'LOST': 'EXTRAVIADA',
    'CURRENT': 'VIGENTE',
    'PDT.RECEIPT.S': 'PDT.RECB.S',
    'PDT.SHIPMENT': 'PDT.REMESA',
    'PDT.SHIPMENT2': 'PDT.REMESA',
    'PDT.DELIVERY': 'PDT.ENTREG',
    'PDT.DELIVERY2': 'PDT.ENTREG',
    'EXPIRED': 'VENCIDA',
    'EXPIRED2': 'VENCIDA',
    'TJ.STOLEN': 'TJ. ROBADA',
    'TJ.LOST': 'TJ. PERDIDA',
    'PDT.STAMP': 'PDT.ESTAMP',
    'LIMIT EXCEEDED': 'LIMIT_EXCEEDED',
    'TRANSACTION ERROR': 'ERROR',
    'ON': 'ON',
    'OFF': 'OFF',
    'SWITCH ERROR': 'SWITCH_ERROR',
    '2 ERRORS GET LIMITS': 'ERROR',
    'ALWAYS ERROR GET LIMITS': 'ERROR',
    '2 ERRORS PUT LIMITS': 'ERROR',
    'ALWAYS ERROR PUT LIMITS': 'ERROR',
};

export function getDataCard(additionalStatus, additionalDescriptionStatus, cardType) {
    const additionalCardStatus = dictionaryStatus[additionalStatus.toLowerCase()];
    let cardProducts;
    let cardProduct;
    let additionalCards;
    let isAdditional;
    switch (cardType.toLowerCase()) {
        case 'operative credit card':
            isAdditional = global.user.products.cards.filter(element => element.indicators.find(element =>
                element.indicatorId === 'ASSOCIABLE_TO_ADDITIONAL_CARDS' && element.isActive === true));
            for (let nAgreements = 0; nAgreements < isAdditional.length; nAgreements++) {
                if (additionalCards === undefined || additionalCards.length === 0) {
                    cardProducts = isAdditional.filter(element => element.status.id === 'OPERATIVE');
                    cardProduct = cardProducts[nAgreements];
                    for (let nAdditionalCards = 0; nAdditionalCards < cardProducts.length; nAdditionalCards++) {
                        additionalCards = this.getAdditionalCards(cardProduct, additionalCardStatus, additionalDescriptionStatus, additionalCards);
                    }
                }
            }
            storage['additionalCardId'] = additionalCards[0];
            break;
        case 'inoperative credit card':
            isAdditional = global.user.products.cards.filter(element => element.indicators.find(element =>
                element.indicatorId === 'ASSOCIABLE_TO_ADDITIONAL_CARDS' && element.isActive === true));
            cardProducts = isAdditional.filter(element => element.status.id === 'INOPERATIVE');
            cardProduct = cardProducts[0];
            additionalCards = this.getAdditionalCards(cardProduct, additionalCardStatus, additionalDescriptionStatus, additionalCards);
            storage['additionalCardId'] = additionalCards[0];
            break;
        case 'debt credit card':
            isAdditional = global.user.products.cards.filter(element => element.indicators.find(element =>
                element.indicatorId === 'ASSOCIABLE_TO_ADDITIONAL_CARDS' && element.isActive === true));
            cardProducts = isAdditional.filter(element => element.status.id === 'OPERATIVE');
            cardProduct = cardProducts[0];
            for (let nAgreements = 0; nAgreements < isAdditional.length; nAgreements++) {
                if (additionalCards === undefined || additionalCards.length === 0) {
                    cardProducts = isAdditional.filter(element => element.status.id === 'OPERATIVE');
                    cardProduct = cardProducts[nAgreements];
                    for (let nAdditionalCards = 0; nAdditionalCards < cardProducts.length; nAdditionalCards++) {
                        additionalCards = this.getAdditionalCards(cardProduct, additionalCardStatus, additionalDescriptionStatus, additionalCards);
                    }
                }
            }
            storage['additionalCardId'] = additionalCards[0];
            break;
        case 'blocked expired credit card':
            isAdditional = global.user.products.cards.filter(element => element.indicators.find(element =>
                element.indicatorId === 'ASSOCIABLE_TO_ADDITIONAL_CARDS' && element.isActive === true));
            cardProducts = isAdditional.filter(element => element.status.id === 'BLOCKED' &&
                element.status.description === 'VENCIDA');
            cardProduct = cardProducts[0];
            additionalCards = this.getAdditionalCards(cardProduct, additionalCardStatus, additionalDescriptionStatus, additionalCards);
            storage['additionalCardId'] = additionalCards[0];
            break;
        case 'blocked pdt.receipt.s credit card':
            isAdditional = global.user.products.cards.filter(element => element.indicators.find(element =>
                element.indicatorId === 'ASSOCIABLE_TO_ADDITIONAL_CARDS' && element.isActive === true));
            cardProducts = isAdditional.filter(element => element.status.id === 'BLOCKED' &&
                element.status.description === 'PDT.RECB.S');
            cardProduct = cardProducts[0];
            additionalCards = this.getAdditionalCards(cardProduct, additionalCardStatus, additionalDescriptionStatus, additionalCards);
            storage['additionalCardId'] = additionalCards[0];
            break;
        case 'negative balance':
            isAdditional = global.user.products.cards.filter(element => element.indicators.find(element =>
                element.indicatorId === 'ASSOCIABLE_TO_ADDITIONAL_CARDS' && element.isActive === true));
            cardProducts = isAdditional.filter(element =>
                element.availableBalance.currentBalances[0].amount === 0 || element.availableBalance.currentBalances[0].amount < 0);
            cardProduct = cardProducts[0];
            additionalCards = this.getAdditionalCards(cardProduct, additionalCardStatus, additionalDescriptionStatus, additionalCards);
            storage['additionalCardId'] = additionalCards[0];
            break;
        default:
            cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD');
    }

    storage['selectedProduct'] = cardProduct;
}

export function getAdditionalCards(cardProduct, additionalCardStatus, additionalDescriptionStatus, additionalCards, additionalCards1) {
    const additionalDescriptionCardStatus = dictionaryAdditionalCardStatus[additionalDescriptionStatus.toUpperCase()];
    const additionalError = additionalDescriptionStatus.toUpperCase().replace(/ /g, '_');

    switch (additionalDescriptionCardStatus.toUpperCase()) {
        case 'LIMIT_EXCEEDED':
            return global.user.products.cards.filter(element => element.indicators.find(element =>
                element.indicatorId === 'IS_ADDITIONAL' && element.isActive === true) && element.grantedCredits[0].amount < element.disposedBalance.currentBalances[0].amount &&
                element.cardAgreement === cardProduct.cardAgreement);
        case 'ERROR':
            return global.user.products.cards.filter(element => element.indicators.find(element =>
                element.indicatorId === 'IS_ADDITIONAL' && element.isActive === true) && element.errorSimulationConfig === additionalError &&
                element.cardAgreement === cardProduct.cardAgreement);
        case 'ON':
            switch (additionalCardStatus.toUpperCase()) {
                case 'BLOCKED':
                    if (additionalCards === undefined || additionalCards.length === 0) {
                        additionalCards1 = global.user.products.cards.filter(element => element.activations[0].isActive === true);
                        additionalCards = additionalCards1.filter(element => element.status.description === 'TJ. ROBADA' ||
                            element.status.description === 'EXTRAVIADA' &&
                            element.status.id === 'BLOCKED' &&
                            element.cardAgreement === cardProduct.cardAgreement);
                        return additionalCards;
                    }
                    break;
                case 'EXPIRED':
                    if (additionalCards === undefined || additionalCards.length === 0) {
                        additionalCards1 = global.user.products.cards.filter(element => element.activations[0].isActive === true);
                        additionalCards = additionalCards1.filter(element => element.status.description === 'VENCIDA' &&
                            element.status.id === 'INOPERATIVE' ||
                            element.status.id === 'BLOCKED' &&
                            element.cardAgreement === cardProduct.cardAgreement);
                        return additionalCards;
                    }
                    break;
                case 'INACTIVE':
                    if (additionalCards === undefined || additionalCards.length === 0) {
                        additionalCards1 = global.user.products.cards.filter(element => element.activations[0].isActive === true);
                        additionalCards = additionalCards1.filter(element => element.status.description === 'PDT.ESTAMP' &&
                            element.status.id === 'PENDING_EMBOSSING' &&
                            element.cardAgreement === cardProduct.cardAgreement);
                        return additionalCards;
                    }
                    break;
                case 'OPERATIVE':
                    if (additionalCards === undefined || additionalCards.length === 0) {
                        additionalCards1 = global.user.products.cards.filter(element => element.activations[0].isActive === true);
                        additionalCards = additionalCards1.filter(element => element.cardAgreement === cardProduct.cardAgreement &&
                            element.status.description === 'VIGENTE' &&
                            element.indicators.find(element => element.indicatorId === 'IS_ADDITIONAL' &&
                                element.isActive === true) && element.errorSimulationConfig === undefined);
                        return additionalCards;
                    }
                    break;
                case 'LIMIT_EXCEEDED':
                    if (additionalCards === undefined || additionalCards.length === 0) {
                        additionalCards1 = global.user.products.cards.filter(element => element.activations[0].isActive === true);
                        additionalCards = additionalCards1.filter(element => element.cardAgreement === cardProduct.cardAgreement &&
                            element.grantedCredits[0].amount < element.disposedBalance.currentBalances[0].amount);
                        return additionalCards;
                    }
                    break;
                case 'BLOCKED LOST':
                    if (additionalCards === undefined || additionalCards.length === 0) {
                        additionalCards1 = global.user.products.cards.filter(element => element.activations[0].isActive === true);
                        additionalCards = additionalCards1.filter(element => element.status.description === 'TJ. ROBADA' ||
                            element.status.description === 'EXTRAVIADA' &&
                            element.status.id === 'BLOCKED' &&
                            element.cardAgreement === cardProduct.cardAgreement);
                        return additionalCards;
                    }
                    break;
                case 'BLOCKED STOLEN':
                    if (additionalCards === undefined || additionalCards.length === 0) {
                        additionalCards1 = global.user.products.cards.filter(element => element.activations[0].isActive === true);
                        additionalCards = additionalCards1.filter(element => element.status.description === 'TJ. ROBADA' ||
                            element.status.description === 'EXTRAVIADA' &&
                            element.status.id === 'BLOCKED' &&
                            element.cardAgreement === cardProduct.cardAgreement);
                        return additionalCards;
                    }
                    break;
                default:
                    throw new Error(`Unknown status: ${additionalCardStatus}`);
            }
            break;
        case 'OFF':
            switch (additionalCardStatus.toUpperCase()) {
                case 'BLOCKED':
                    if (additionalCards === undefined || additionalCards.length === 0) {
                        additionalCards1 = global.user.products.cards.filter(element => element.activations[0].isActive === false);
                        additionalCards = additionalCards1.filter(element => element.status.description === 'TJ. ROBADA' ||
                            element.status.description === 'EXTRAVIADA' ||
                            element.status.description === 'ROBADA' &&
                            element.status.id === 'BLOCKED' &&
                            element.cardAgreement === cardProduct.cardAgreement);
                        return additionalCards;
                    }
                    break;
                case 'EXPIRED':
                    if (additionalCards === undefined || additionalCards.length === 0) {
                        additionalCards1 = global.user.products.cards.filter(element => element.activations[0].isActive === false);
                        additionalCards = additionalCards1.filter(element => element.status.description === 'VENCIDA' &&
                            element.status.id === 'INOPERATIVE' ||
                            element.status.id === 'BLOCKED' &&
                            element.cardAgreement === cardProduct.cardAgreement);
                        return additionalCards;
                    }
                    break;
                case 'INACTIVE':
                    if (additionalCards === undefined || additionalCards.length === 0) {
                        additionalCards1 = global.user.products.cards.filter(element => element.activations[0].isActive === false);
                        additionalCards = additionalCards1.filter(element => element.status.description === 'PDT.REMESA' &&
                            element.status.id === 'PENDING_EMBOSSING' &&
                            element.cardAgreement === cardProduct.cardAgreement);
                        return additionalCards;
                    }
                    break;
                case 'OPERATIVE':
                    if (additionalCards === undefined || additionalCards.length === 0) {
                        additionalCards1 = global.user.products.cards.filter(element => element.activations[0].isActive === false);
                        additionalCards = additionalCards1.filter(element => element.cardAgreement === cardProduct.cardAgreement &&
                            element.indicators.find(element => element.indicatorId === 'IS_ADDITIONAL' &&
                                element.isActive === true) && element.errorSimulationConfig === undefined);
                        return additionalCards;
                    }
                    break;
                case 'LIMIT_EXCEEDED':
                    if (additionalCards === undefined || additionalCards.length === 0) {
                        additionalCards1 = global.user.products.cards.filter(element => element.activations[0].isActive === false);
                        additionalCards = additionalCards1.filter(element => element.cardAgreement === cardProduct.cardAgreement &&
                            element.grantedCredits[0].amount < element.disposedBalance.currentBalances[0].amount);
                        return additionalCards;
                    }
                    break;
                default:
                    throw new Error(`Unknown status: ${additionalCardStatus}`);
            }
            break;
        case 'SWITCH_ERROR':
            return global.user.products.cards.filter(element => element.indicators.find(element =>
                element.indicatorId === 'IS_ADDITIONAL' && element.isActive === true) && element.errorSimulationConfig === 'onoff_errors' &&
                element.status.description === 'VIGENTE' &&
                element.cardAgreement === cardProduct.cardAgreement);
        default:
            return global.user.products.cards.filter(element => element.indicators.find(element =>
                element.indicatorId === 'IS_ADDITIONAL' && element.isActive === true) && element.cardAgreement === cardProduct.cardAgreement &&
                element.activations[0].isActive === true &&
                element.status.id === additionalCardStatus && element.status.description === additionalDescriptionCardStatus);
    }
}
