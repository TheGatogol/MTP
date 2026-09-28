import {When} from '@cucumber/cucumber';
import codiPaymentRequestMain from '../../pages/codiOperations/codiPaymentRequestMain';

When(/^the user selects the account from which you need to receive the money you request$/, async function() {
    await codiPaymentRequestMain.selectReceivingAccount();
});

When(/^the user enters a contact$/, async function() {
    await codiPaymentRequestMain.setInputContact();
});

When(/^the user enters the amount to request$/, async function() {
    await codiPaymentRequestMain.setInputAmount();
});

When(/^the user enters a concept to the payment request$/, async function() {
    await codiPaymentRequestMain.setInputConcept();
});

When(/^the user confirms request payments$/, async function() {
    await codiPaymentRequestMain.confirmPaymentsRequest();
});
