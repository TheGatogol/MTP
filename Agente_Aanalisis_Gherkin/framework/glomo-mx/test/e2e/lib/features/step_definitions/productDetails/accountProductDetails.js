import { When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import accountProductDetailPage from '../../pages/productDetails/accountProductDetail';
import accountTransactionDetailPage from '../../pages/productDetails/accountTransactionDetail';

const CURRENCIES_ID = {
    'pesos': 'MXN',
    'usd': 'USD',
    'eur': 'EUR'
};

function getAccount() {
    return user.products.accounts[0];
}

function getCurrentBalance(specificAmounts = {}) {
    return specificAmounts.find(element => {
        return element.id === 'CURRENT_BALANCE';
    }).amounts[0];
}

function getAccountData(checkAccount, currency, subProductType) {
    const productId = checkAccount === 'allowed' ? 'CH' : 'AH';
    return user.products.accounts.find(element => {
        const subProductTypeValid = subProductType === 'valid' ?
            (element.subProductType.id !== '0230' && element.subProductType.id !== '0231') :
            (element.subProductType.id === '0230' || element.subProductType.id === '0231');
        const currencyId = getCurrentBalance(element.detail.specificAmounts).currency;
        return subProductTypeValid && element.product.id === productId && currencyId === CURRENCIES_ID[currency];
    });
}

function getDataAccount(accountType) {
    let accountProduct;
    let creditCard;
    switch (accountType.toUpperCase()) {
        case 'CREDIT CARDS':
            creditCard = global.user.products.accounts.filter(element => element.subProductType.id === 'CREDIT_CARD');
            if (creditCard.length === 0) {
                accountProduct = global.user.products.accounts[0];
            }
            break;
        case 'NO CREDIT CARDS':
            creditCard = global.user.products.accounts.filter(element => element.subProductType.id === 'CREDIT_CARD');
            if (creditCard.length === 0) {
                accountProduct = global.user.products.accounts[0];
            }
            break;
        case 'LESS THAN 5 MOVEMENTS':
            accountProduct = global.user.products.accounts.find(element => element.transactions.length > 0);
            break;
        case 'MORE THAN 5 MOVEMENTS':
            accountProduct = global.user.products.accounts.find(element => element.transactions.length > 5);
            break;
        case 'NO MOVEMENTS':
            accountProduct = global.user.products.accounts.find(element => element.product.id === 'CH' && element.transactions.length === 0);
            break;
        default:
            throw new Error(`Unknown status: ${accountProduct}`);
    }
    storage['selectedProduct'] = accountProduct;
}

When('the user accesses to the first account product detail', async function () {
    const account = getAccount();
    await navigation.account.productDetail.go({
        account
    });
});

When('the user accesses to the account product detail with subProduct type {string}, checks {string} and currency {string}',
    async function(subProductType, checkAccount, currency) {
        const account = getAccountData(checkAccount, currency, subProductType);
        await navigation.account.productDetail.go({
            account
        });
    }
);

When('the user accesses to checks operative in account with checks {string} and currency {string}', async function(checkAccount, currency) {
    const account = getAccountData(checkAccount, currency, 'valid');
    await navigation.account.productDetail.go({
        account
    });
    await navigation.checksSection.checksSection.go();
});

When(/^the user accesses to the operative account product detail$/, async function() {
    const account = getAccount();
    await navigation.dashboard.go();
    await navigation.account.productDetail.go({
        account
    });
});

When(/^the user accesses to view account data$/, async function() {
    await accountProductDetailPage.viewAccountData();
});

When(/^the user selects an account in the carrousel$/, async function() {
    await accountProductDetailPage.selectAccount();
});

When(/^the user accesses to the view more operatives$/, async function() {
    await accountProductDetailPage.viewMoreOperatives();
});

When(/^the user accesses to the view pending movements$/, async function() {
    await navigation.account.pendingMovements.go();
});

When(/^the user accesses the money request operation$/, async function() {
    const account = getAccount();
    await navigation.account.productDetail.go({
        account
    });
    await navigation.account.requestMoney.go();
});

When(/^the user retries to "([^"]*)" access "([^"]*)" more times$/, async function(card, retries) {
    switch (card.toUpperCase()) {
        case 'ACCOUNT INFORMATION':
            await accountProductDetailPage.accountInfoCardRetry(retries);
            break;
        case 'POCKETS':
            await accountProductDetailPage.pocketsCardRetry(retries);
            break;
        default:
            throw new Error(`The card is not correct, received: ${card}`);
    }
});

When(/^the user accesses to the a checking account product detail with "([^"]*)"$/, async function(accountType) {
    getDataAccount(accountType);
    await navigation.dashboard.go();
    await navigation.account.productDetail.go({
        account: storage['selectedProduct']
    });
});

When(/^the user accesses to all his account movements$/, async function() {
    await accountProductDetailPage.seeAllMovements();
});

When (/^the user opens the all movements informative modal/, async function () {
    await accountProductDetailPage.openHelpModal();
});

When(/^the user accesses the details of a movement from "([^"]*)"$/, async function(access) {
    await navigation.account.accountTransactionDetail.go({origin: access});
});

When(/^the user accesses a spei movement in all transactions in standin mode$/, async function() {
    await accountProductDetailPage.seeMovementDetailFromAllTransactions();
});

When(/^the user accesses a spei movement in standin mode$/, async function() {
    await accountProductDetailPage.seeLastMovementDetail();
});

When(/^the user selects the corresponding operative$/, async function() {
    await accountTransactionDetailPage.firstOperative();
});

When(/^the user accesses on message interbank transfers$/, async function() {
    await navigation.internationalTransfer.internationalTransfersPanel.go({ useBoost: true });
});

When(/^the user accesses to the "([^"]*)" account product detail$/, async function(currency) {
    const account = getAccountData('not allowed', currency, 'invalid');
    await navigation.account.productDetail.go({account});
});

When(/^the user accesses on message cv currency$/, async function() {
    await navigation.diy.transfers.transfers.go('interbank transfer');
});

When(/^the user wants share his data$/, async function() {
    await accountProductDetailPage.shareCustomerInfo();
});

When(/^the user uses the good balance help button$/, async function(){
    await accountProductDetailPage.helpGoodBalanceCollection();
});

When(/^the user accesses view the data for the second account$/, async function(){
    await accountProductDetailPage.seeMoreForAccount();
});

When(/^the user accepts the modal confirmation$/, async function() {
    await accountProductDetailPage.acceptHelpModal();
});

When(/^the user closes the modal account data$/, async function() {
    await accountProductDetailPage.closeHelpModal();
});

When(/^the user access to "([^"]*)" account operation$/, async function(operative) {
    await accountProductDetailPage.operations(operative);
});

When(/^the user accesses to why should i upgrade modal$/, async function(){
    await accountProductDetailPage.accessToRestrictedModal();
});

When(/^the user exits the why should I upgrade modal$/, async function(){
    await accountProductDetailPage.acceptHelpModal();
});

When(/^the user shares certificate voucher with error$/, async function() {
    await accountTransactionDetailPage.shareVoucherReceiptWithServiceError();
});

When(/^the user generates the QR deposit$/, async function () {
    await accountProductDetailPage.generateQrDeposit();
});

When(/^the user generates the QR deposit with an error$/, async function () {
    await accountProductDetailPage.generateQrDepositWithError();
});

When(/^the user taps on share QR deposit$/, async function () {
    await accountProductDetailPage.handleShareReceipt();
});
When(/^the user accesses to the first time to bill payments from accounts$/, async function() {
    const account = getAccount();
    await navigation.account.productDetail.go({
        account
    });
    await navigation.billPaymentsProductAccounts.billPaymentsProductAccounts.go();
});
