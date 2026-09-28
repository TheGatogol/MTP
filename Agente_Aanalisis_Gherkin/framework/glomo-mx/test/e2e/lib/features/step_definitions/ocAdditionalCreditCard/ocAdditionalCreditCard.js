import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import ocAdditionalCreditCard from '../../pages/ocAdditionalCreditCard/ocAdditionalCreditCard';

When(/^the user accesses to additional credit card$/, async function() {
    await navigation.card.ocAdditionalCreditCard.go();
});

When(/^the user navigates back to the card details section in the "([^"]*)"$/, async function(flow) {
    await ocAdditionalCreditCard.goBack(flow);
});

When(/^the user modifies the "([^"]*)" step$/, async function(selector) {
    await ocAdditionalCreditCard.editStep(selector);
});

When(/^the user proceeds to "([^"]*)" step$/, async function(selector) {
    await ocAdditionalCreditCard.advanceProcessStep(selector);
});

When(/^the user confirms the token signature$/, async function() {
    await ocAdditionalCreditCard.fillOtp('11111111');
});
