import {When} from '@cucumber/cucumber';
import cardCreditCardPaymentPromise from '../../pages/cardCreditCardPaymentPromise/cardCreditCardPaymentPromise';

When(/^the user select payment promise option$/, async function() {
    await cardCreditCardPaymentPromise.openPromiseOption();
});

When(/^the user open the promise calendar to select date$/, async function() {
    await cardCreditCardPaymentPromise.openCalendar();
});

When(/^select a available date from promise calendar$/, async function() {
    await cardCreditCardPaymentPromise.selectDate();
});

When(/^the user open payment promise form and select a payment date$/, async function() {
    await cardCreditCardPaymentPromise.openPromiseOption();
    await cardCreditCardPaymentPromise.openCalendar();
    await cardCreditCardPaymentPromise.selectDate();
});

When(/^the user confirm payment promise date$/, async function() {
    await cardCreditCardPaymentPromise.confirmDate();
});

When(/^the user open payment promise form and confirm a payment date$/, async function() {
    await cardCreditCardPaymentPromise.openPromiseOption();
    await cardCreditCardPaymentPromise.openCalendar();
    await cardCreditCardPaymentPromise.selectDate();
    await cardCreditCardPaymentPromise.confirmDate();
});

When(/^the user select a payment promise amount$/, async function() {
    await cardCreditCardPaymentPromise.selectOtherAmount();
});

When(/^the user open payment promise form to fill date and amount steps$/, async function() {
    await cardCreditCardPaymentPromise.openPromiseOption();
    await cardCreditCardPaymentPromise.openCalendar();
    await cardCreditCardPaymentPromise.selectDate();
    await cardCreditCardPaymentPromise.confirmDate();
    await cardCreditCardPaymentPromise.selectOtherAmount();
});

When(/^the user select a payment method$/, async function() {
    await cardCreditCardPaymentPromise.selectPaymentMethod();
});

When(/^the open and fill payment promise form$/, async function() {
    await cardCreditCardPaymentPromise.openPromiseOption();
    await cardCreditCardPaymentPromise.openCalendar();
    await cardCreditCardPaymentPromise.selectDate();
    await cardCreditCardPaymentPromise.confirmDate();
    await cardCreditCardPaymentPromise.selectOtherAmount();
    await cardCreditCardPaymentPromise.selectPaymentMethod();
});

When(/^the user generate a promise$/, async function() {
    await cardCreditCardPaymentPromise.confirmPromise();
});

When(/^the user exit payment promise form$/, async function() {
    await cardCreditCardPaymentPromise.leavePromisePage();
});
