import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import mortgageTrackingPage from '../../pages/mortgageTracking/mortgageTracking';

When (/^the user accesses to mortgage tracking card$/, async function () {
    await navigation.mortgageTracking.mortgageTracking.go();
});

When (/^the user accesses to request detail page$/, async function () {
    await mortgageTrackingPage.visualizeDetail();
});

When (/^the user accesses to the detail step link$/, async function () {
    await mortgageTrackingPage.visualizeMortgageStatusInformation();
});

When (/^the user chooses the "([^"]*)" information$/, async function (action) {
    switch (action.toLowerCase()) {
        case 'expiration':
            await mortgageTrackingPage.visualizeTooltipExpiration();
            break;
        case 'amount':
            await mortgageTrackingPage.visualizeTooltipAmount();
            break;
        case 'payment':
            await mortgageTrackingPage.visualizeTooltipPayment();
            break;
        default:
            throw new Error(`${action} select is not available to show...`);
    }
});
