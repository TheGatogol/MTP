import { When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';

import accountCreditCardPayment from '../../pages/creditCardPayment/accountCreditCardPayment';
import accountProductDetail from '../../pages/productDetails/accountProductDetail';

When(/^the user select a card$/, async function () {
    await accountCreditCardPayment.selectCreditCard();
});

When(/^the user selects card payment method "([^"]*)"$/, async function (paymentMethod) {
    await accountCreditCardPayment.selectCreditCard();
    await accountCreditCardPayment.selectedPaymentMethod(paymentMethod);
});

When(/^the user selects payment method "([^"]*)"$/, async function (paymentMethod) {
    await accountCreditCardPayment.selectedPaymentMethod(paymentMethod);
});

When(/^the user continue with the payment$/, async function () {
    await accountCreditCardPayment.continuePayment();
});

When(/^the user continue with confirm modal$/, async function () {
    await accountCreditCardPayment.continuePayment();
    await navigation.creditCardPayment.operationReceipt.go();
});

When(/^the user accesses the pay card operative$/, async function () {
    await accountProductDetail.viewMoreOperatives();
    await accountProductDetail.operations('pay credit card');
});

When(/^the user wants to change the selected card$/, async function () {
    await accountCreditCardPayment.changeCreditCard();
});

When(/^the user selects an account without funds$/, async function () {
    const account = user.products.accounts[1];
    await navigation.account.productDetail.go({account});
});

When(/^the user accesses to the payCard operative$/, async function () {
    await navigation.creditCardPayment.accountCreditCardPayment.go();
});

When(/^the user wants to switch accounts$/, async function () {
    await accountCreditCardPayment.selectChangeAccount();
});
