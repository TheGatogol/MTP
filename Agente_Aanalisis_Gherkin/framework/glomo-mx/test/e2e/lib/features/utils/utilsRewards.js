const expReg = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

export function getCardWithCutoffExpirePointsReported(cards, rewards, points, typeOfCard) {
    const cardsByPoints = this.getCardsByPoints(cards, points, typeOfCard);
    const rewardsByCards = this.getRewardsByCards(rewards, cardsByPoints);
    const reward = this.getCutoffAndExpirePointsNodes(rewardsByCards);
    return this.getCardByReward(cards, reward);
}

export function getCardWithCutoffAndWithoutExpirePoints(cards, rewards, points, typeOfCard) {
    const cardsByPoints = this.getCardsByPoints(cards, points, typeOfCard);
    const rewardsByCards = this.getRewardsByCards(rewards, cardsByPoints);
    const reward = this.getCutoffPoints(rewardsByCards, false);
    return this.getCardByReward(cards, reward);
}

export function getCardExpirePointsMalformedDate(cards, rewards) {
    const malformedReward = this.getMalformedReward(rewards, true);
    return this.getCardByReward(cards, malformedReward);
}

export function getCardCutoffPointsMalformedDate(cards, rewards) {
    const malformedReward = this.getMalformedReward(rewards, false);
    return this.getCardByReward(cards, malformedReward);
}

export function getCardWithoutRewards(cards, rewards) {
    const contractIds = rewards.map((reward) => reward.contract.id);
    for (const card of cards) {
        if (!contractIds.includes(card.cardId)) {
            if (card.cardType.id === 'CREDIT_CARD') {
                return card;
            }
        }
    }
}

export function getCardWithZeroCutoffPoints(cards, rewards) {
    const reward = this.getCutoffPoints(rewards, false);
    return this.getCardByReward(cards, reward);

}

export function getCardWithCutoffPoints(cards, rewards) {
    const reward = this.getCutoffPoints(rewards, true);
    return this.getCardByReward(cards, reward);

}

export function getCardMoreOneExpirePointsNode(cards, rewards) {
    const reward = this.getMoreOneExpirePoints(rewards);
    return this.getCardByReward(cards, reward);
}

export function getCardOneExpirePointsNode(cards, rewards) {
    const reward = this.getOneExpirePoints(rewards);
    return this.getCardByReward(cards, reward);
}

export function getCardWithoutExpirePoints(cards, rewards) {
    const reward = this.getZeroExpirePoints(rewards);
    return this.getCardByReward(cards, reward);
}

export function getCardByReward(cards, reward) {
    return cards.find(el => reward.contract.id !== undefined && el.cardId === reward.contract.id);
}

export function getMalformedReward(rewards, mustBeCloseToExpire) {
    let malformedReward = {};
    rewards.forEach((reward) => {
        (reward.balances || []).forEach((balance) => {
            const isClosedToExpire = balance.itemizedBalances.every(el => mustBeCloseToExpire ? el.id === 'CLOSE_TO_EXPIRE' : el.id !== 'CLOSE_TO_EXPIRE');
            if (isClosedToExpire) {
                if (!expReg.test(balance.startDate) || !expReg.test(balance.endDate)) { malformedReward = reward;
                }
            }
        });
    });
    return malformedReward;
}

export function getRewardsByCards(rewards, cards) {
    const rewardsByCards = [];
    const cardId = cards.map((card) => card.cardId);
    for (const reward of rewards) {
        if (cardId.includes(reward.contract.id)) {
            rewardsByCards.push(reward);
        }
    }
    return rewardsByCards;
}

export function getCutoffPoints(rewards, cutoffPoints) {
    let points = {};
    rewards.forEach((reward) => {
        reward.balances.forEach((balance) => {
            const isCutPoints = balance.itemizedBalances.every(el => cutoffPoints ? (el.id !== 'CLOSE_TO_EXPIRE' && el.nonMonetaryValue > 0)
                : (el.id !== 'CLOSE_TO_EXPIRE' && el.nonMonetaryValue === 0));
            if (isCutPoints) {
                if (expReg.test(balance.startDate) && expReg.test(balance.endDate)) {
                    points = reward;
                }
            }
        });
    });
    return points;
}

export function getMoreOneExpirePoints(rewards) {
    let rewardNode = {};
    for (const reward of rewards) {
        const itemList = this.getItemListClosedToExpire(reward);
        const isCutPoints = this.isListCutOffPoints(reward);
        const itemMoreThanZeroPoints = itemList.filter(item => item.amount > 0);
        if (itemMoreThanZeroPoints.length >= 2 && isCutPoints) {
            rewardNode = reward;

        }
    }
    if (rewards.length === 0) {
        throw new Error('no rewards found');
    }
    return rewardNode;
}

export function getOneExpirePoints(rewards) {
    let rewardNode = {};
    for (const reward of rewards) {
        const itemList = this.getItemListClosedToExpire(reward);
        const isCutPoints = this.isListCutOffPoints(reward);
        const itemMoreThanZeroPoints = itemList.filter(item => item.amount > 0);
        if (itemMoreThanZeroPoints.length === 1 && isCutPoints) {
            rewardNode = reward;

        }
    }
    if (rewards.length === 0) {
        throw new Error('no rewards found');
    }
    return rewardNode;
}

export function getZeroExpirePoints(rewards) {
    let rewardNode = {};
    for (const reward of rewards) {
        const itemList = this.getItemListClosedToExpire(reward);
        const isCutPoints = this.isListCutOffPoints(reward);
        const itemEqualZeroPoints = itemList.every(item => item.amount === 0);
        if (itemEqualZeroPoints && isCutPoints) {
            rewardNode = reward;

        }
    }
    if (rewards.length === 0) {
        throw new Error('no rewards found');
    }
    return rewardNode;
}

export function getItemListClosedToExpire(reward) {
    const itemListClosedToExpire = [];
    const {balances} = reward;
    for (const balance of balances) {
        const isClosedToExpire = balance.itemizedBalances.every(el => el.id === 'CLOSE_TO_EXPIRE');
        if (isClosedToExpire) {
            const points = balance.itemizedBalances[0].nonMonetaryValue;
            const {endDate} = balance;
            if (this._isCloseToExpiredValid(points, endDate)) {
                itemListClosedToExpire.push({
                    date: endDate,
                    amount: points
                });
            }
        }
    }
    return itemListClosedToExpire;
}

export function isListCutOffPoints(reward) {
    let isCutOff;
    reward.balances.forEach((balance) => {
        isCutOff = balance.itemizedBalances.every(el => el.id !== 'CLOSE_TO_EXPIRE');
    });
    return isCutOff;
}

export function _isCloseToExpiredValid(points, endDate) {
    return (points !== undefined && !isNaN(points) && expReg.test(endDate));
}

export function getCardsByPoints(cards, points, typeOfCard) {
    switch (typeOfCard) {
        case 'card without overdraft':
            return cards.filter(card => points ? (card.title.id !== 'AG' && card.title.id !== 'CC' && card.title.id !== 'CE' && card.disposedBalance.currentBalances[0].amount < card.grantedCredits[0].amount
                && card.rewards[0].nonMonetaryValue > 0) : (card.title.id !== 'AG' && card.title.id !== 'CC' && card.title.id !== 'CE' && card.disposedBalance.currentBalances[0].amount < card.grantedCredits[0].amount
                && card.rewards[0].nonMonetaryValue === 0));
        case 'card with overdraft':
            return cards.filter(card => points ? (card.title.id !== 'AG' && card.title.id !== 'CC' && card.title.id !== 'CE' && card.disposedBalance.currentBalances[0].amount > card.grantedCredits[0].amount
                && card.rewards[0].nonMonetaryValue > 0) : (card.title.id !== 'AG' && card.title.id !== 'CC' && card.title.id !== 'CE' && card.disposedBalance.currentBalances[0].amount > card.grantedCredits[0].amount
                && card.rewards[0].nonMonetaryValue === 0));
        case 'crea card without overdraft':
            return cards.filter(card => points ? (card.title.id === 'AG' && card.disposedBalance.currentBalances[0].amount < card.grantedCredits[0].amount
                && card.rewards[0].nonMonetaryValue > 0) : (card.title.id === 'AG' && card.disposedBalance.currentBalances[0].amount < card.grantedCredits[0].amount
                && card.rewards[0].nonMonetaryValue === 0));
        case 'corporate card without overdraft':
            return cards.filter(card => points ? (card.title.id === 'CC' && card.status.id === 'OPERATIVE' && card.disposedBalance.currentBalances[0].amount < card.grantedCredits[0].amount
                && card.rewards[0].nonMonetaryValue > 0) : (card.title.id === 'CC' && card.disposedBalance.currentBalances[0].amount < card.grantedCredits[0].amount
                && card.rewards[0].nonMonetaryValue === 0));
        case 'business card without overdraft':
            return cards.filter(card => points ? (card.title.id === 'CE' && card.status.id === 'OPERATIVE' && card.disposedBalance.currentBalances[0].amount < card.grantedCredits[0].amount
                && card.rewards[0].nonMonetaryValue > 0) : (card.title.id === 'CE' && card.disposedBalance.currentBalances[0].amount < card.grantedCredits[0].amount
                && card.rewards[0].nonMonetaryValue === 0));
        case 'card not operative without overdraft':
            return cards.filter(card => points ? (card.title.id !== 'AG' && card.title.id !== 'CC' && card.title.id !== 'CE' && card.status.id !== 'OPERATIVE' && card.disposedBalance.currentBalances[0].amount < card.grantedCredits[0].amount
                && card.rewards[0].nonMonetaryValue > 0) : (card.title.id !== 'AG' && card.title.id !== 'CC' && card.title.id !== 'CE' && card.status.id !== 'OPERATIVE' && card.disposedBalance.currentBalances[0].amount < card.grantedCredits[0].amount
                && card.rewards[0].nonMonetaryValue === 0));
        case 'card off with points and without overdraft':
            return cards.filter(card => points ? (card.title.id !== 'AG' && card.title.id !== 'CC' && card.title.id !== 'CE' && card.activations[0].isActive === false && card.disposedBalance.currentBalances[0].amount < card.grantedCredits[0].amount
                 && card.rewards[0].nonMonetaryValue > 0) : (card.title.id !== 'AG' && card.title.id !== 'CC' && card.title.id !== 'CE' && card.activations[0].isActive === false && card.disposedBalance.currentBalances[0].amount < card.grantedCredits[0].amount
                 && card.rewards[0].nonMonetaryValue === 0));
        case 'card inoperative with points and without overdraft':
            return cards.filter(card => points ? (card.title.id !== 'AG' && card.title.id !== 'CC' && card.title.id !== 'CE' && card.status.id === 'INOPERATIVE' && card.disposedBalance.currentBalances[0].amount < card.grantedCredits[0].amount
                && card.rewards[0].nonMonetaryValue > 0) : (card.title.id !== 'AG' && card.title.id !== 'CC' && card.title.id !== 'CE' && card.status.id === 'INOPERATIVE' && card.disposedBalance.currentBalances[0].amount < card.grantedCredits[0].amount
                && card.rewards[0].nonMonetaryValue === 0));
        default:
            throw new Error(`the type of card is not correct, received: ${typeOfCard}`);
    }
}

export function getCutoffAndExpirePointsNodes(rewards) {
    for (const reward of rewards) {
        const isCloseToExpire = reward.balances.find(el => el.itemizedBalances[0].id === 'CLOSE_TO_EXPIRE');
        if (isCloseToExpire) {
            const isCutPoints = reward.balances.find(el => el.itemizedBalances[0].id !== 'CLOSE_TO_EXPIRE');
            if (isCutPoints) {
                return reward;
            }
        }
    }
    throw new Error('no rewards found');
}

export function getDataCardPoints(cardType) {
    const {cards} = global.user.products;
    let cardsByPoints;
    let cardId;
    let cardsWithTransactions;
    let cardsBlocked;
    switch (cardType.toLowerCase()) {
        case 'card with points':
            cardsWithTransactions = cards.filter(element => element.transactions.find(element =>
                element.additionalInformation !== undefined));
            cardId = cardsWithTransactions.filter(element => element.transactions[0].additionalInformation.rewardBenefits !== undefined);
            break;
        case 'card blocked with points and without overdraft':
            cardsByPoints = this.getCardsByPoints(cards, 'yes', 'card without overdraft');
            cardsBlocked = cardsByPoints.filter(element => element.status.id === 'BLOCKED');
            cardsWithTransactions = cardsBlocked.filter(element => element.transactions.find(element =>
                element.additionalInformation !== undefined));
            cardId = cardsWithTransactions.filter(element => element.transactions[0].additionalInformation.rewardBenefits !== undefined);
            break;
        default:
            throw new Error(`the type of card is not correct, received: ${cardType}`);

    }
    storage['selectedProduct'] = cardId[0];
}

export function getCardWithExpiredRaffle(cards) {
    const cardId = cards.filter(element => element.errorSimulationConfig !== undefined);
    return cardId.find(element => element.errorSimulationConfig === 'expiredRaffle');
}
