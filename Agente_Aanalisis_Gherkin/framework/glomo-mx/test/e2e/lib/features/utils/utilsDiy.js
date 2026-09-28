export function getFirstValidPaymentMethodName() {
    const paymentMethodName = this.getValidPaymentMethods()[0];
    logger.debug(`Selecting the payment method: ${paymentMethodName}`);
    return paymentMethodName;
}

export function getFirstValidCardName() {
    const cardName = this.getValidCards()[0];
    logger.debug(`Selecting card: ${cardName}`);
    return cardName;
}

export function getValidPaymentMethods() {
    const paymentMethods = Object.values(_.merge(user.products.cards, user.products.accounts));
    const paymentMethodsFiltered = this._filterValidPaymentMethods(paymentMethods);
    return this._createPaymentMethodsNameArray(paymentMethodsFiltered);
}

export function getEmails() {
    const constactDetails = user.people.customer.contactDetails;
    const emailArray = Array();
    for (const contactDetail of constactDetails) {
        if (contactDetail.contactType.id === 'EMAIL') {
            emailArray.push(contactDetail.contact);
        }
    }
    return emailArray;
}

export function _createPaymentMethodsNameArray(paymentMethods) {
    const nameArray = Array();
    for (const paymentMethod of paymentMethods) {
        nameArray.push(paymentMethod.title.name);
    }
    return nameArray;
}

export function getValidCards() {
    const cardsFiltered = this._filterValidPaymentMethods(user.products.cards);
    return this._createPaymentMethodsNameArray(cardsFiltered);
}

export function _filterValidPaymentMethods(paymentMethods) {
    return paymentMethods.filter(paymentMethod => paymentMethod.status.id === 'OPERATIVE'
        || paymentMethod.status.id === 'ACTIVATED');
}

export function getJointAccounts() {
    const {accounts} = user.products;
    const signedAccounts = accounts.filter(account => account.signedAuthorization);
    return signedAccounts.filter(signedAccount => signedAccount.signedAuthorization.id === 'JOINT');
}

export function getJointAccountsNames() {
    const accountNames = [];
    for (const account of this.getJointAccounts()) {
        accountNames.push(account.title.name);
    }
    return accountNames;
}

export function getEnabledAccountsToDeposits() {
    const {accounts} = user.products;
    const {deposits} = user.products;
    const enabledAccounts = accounts.filter(account => account.status.id === 'ACTIVATED' && account.currency === 'PEN');
    return enabledAccounts.filter(enableAccount => enableAccount.availableBalance.currentBalances[0].amount >= deposits.currentBalances[0].amount);
}

export function screenFromModal(screen) {
    switch (screen) {
        case 'modal':
            return true;
        case 'payment methods':
            return false;
        default:
            throw new Error(`Checking payment methods from the screen ${screen} have not been implemented`);
    }
}

export function getAccountsNamesByType(type) {
    switch (type) {
        case 'joint account':
            return this.getJointAccountsNames();
        default:
            throw new Error(`Checking account types ${type} has not been implemented`);
    }
}
