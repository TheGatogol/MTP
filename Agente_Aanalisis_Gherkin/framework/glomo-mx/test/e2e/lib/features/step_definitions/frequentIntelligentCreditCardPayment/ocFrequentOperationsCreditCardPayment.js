import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import frequentIntelligentCreditCardPayment from '../../pages/frequentIntelligentCreditCardPayment/ocFrequentOperationsCreditCardPayment';

When(/^the user selects open notification for "([^"]*)" payment method$/, async function(paymentType) {
    await frequentIntelligentCreditCardPayment.selectTypeOfPayment(paymentType);
});

When(/^the user execute frequent credit card payment receipt operation$/, async function() {
    await navigation.creditCardPayment.operationReceipt.go();
});

When(/^the user change the payment amount$/, async function() {
    await frequentIntelligentCreditCardPayment.changeAmount();
});
