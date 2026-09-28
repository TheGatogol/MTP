import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

import creditCardTracking from '../../pages/productDetails/creditCardTracking';

When(/^the user access Track my card$/, async function() {
    await navigation.card.creditCardTracking.go();
});

When(/^the user hides the address$/, async function() {
    await creditCardTracking.accessShow();
    await creditCardTracking.showAddress();
    await creditCardTracking.fillOtp('12345678');
    await creditCardTracking.disableAddress();
});

When(/^the user access the address$/, async function() {
    await creditCardTracking.accessShow();
});

When(/^the user access the help information$/, async function() {
    await creditCardTracking.accessShow();
    await creditCardTracking.showInformationHelp();
});
