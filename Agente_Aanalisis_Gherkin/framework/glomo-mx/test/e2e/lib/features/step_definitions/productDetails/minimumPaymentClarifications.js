import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import minimumPaymentClarifications from '../../pages/productDetails/minimumPaymentClarifications';

When(/^the user accesses the minimum payment clarifications$/, async function() {
    await navigation.card.minimumPaymentClarifications.go();
});

When(/^the user accesses to payment to avoid accruing interest help screen$/, async function() {
    await minimumPaymentClarifications.accessToNotInterestHelpScreen();
});
