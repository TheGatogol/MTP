import { When } from '@cucumber/cucumber';
import requestMoneyPage from '../../pages/requestMoney/requestMoney';

When(/^the user accesses to request money page$/, async function() {
    await requestMoneyPage.goToRequestMoneyPage();
});

When(/^the user types in the text box$/, async function() {
    await requestMoneyPage.writeMessage();
});

When(/^the user sends message and accesses to pending request page$/, async function() {
    await requestMoneyPage.goToRequestMoneyPage();
    await requestMoneyPage.writeMessage();
    await requestMoneyPage.sendMessage();
});

When(/^the user change next slide number "([^"]*)"$/, async function(moves) {
    await requestMoneyPage.changeNextSlide(moves);
});

When(/^the user accesses to all the slides and goes to the request money page$/, async function() {
    await requestMoneyPage.changeNextSlide(3);
    await requestMoneyPage.goToRequestMoneyPage();
});

When(/^the user accesses to all the slides and sends message$/, async function() {
    await requestMoneyPage.changeNextSlide(3);
    await requestMoneyPage.goToRequestMoneyPage();
    await requestMoneyPage.writeMessage();
    await requestMoneyPage.sendMessage();
    await requestMoneyPage.closePendingRequestPage();
});

When(/^the user close operative$/, async function() {
    await requestMoneyPage.writeMessage();
    await requestMoneyPage.closeOperative();
});
