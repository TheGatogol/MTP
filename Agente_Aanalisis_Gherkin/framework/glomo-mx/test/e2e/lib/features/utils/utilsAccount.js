export function getAccountByCurrency(accounts, currency) {
    return accounts.find(account => {
        const currencyItem = account.currencies[0];
        return currencyItem.currency.toLowerCase() === currency.toLowerCase() && currencyItem.isMajor;
    });
}

export function getCurrentBalance(specificAmounts = {}) {
    return specificAmounts.find(element => {
        return element.id === 'CURRENT_BALANCE';
    }).amounts[0];
}

export function getAccountChecksData(currency, user) {
    const productIds = ['CH', 'AH'];
    return user.products.accounts.find(element => {
        const currencyId = getCurrentBalance(element.detail.specificAmounts).currency;
        return productIds.find(item => item === element.product.id) && currencyId === currency;
    });
}

/**
 * Returns an upgradable account associated to the DM user.
 * @returns {object}
 */
export function getUpgradableAccount() {
    return user.products.accounts.find((acc) => acc.shouldUpgrade);
}
