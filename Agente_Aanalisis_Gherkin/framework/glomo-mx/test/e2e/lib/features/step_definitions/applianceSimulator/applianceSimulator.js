import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

When(/^the user accesses to the appliance simulator section$/, async function() {
    await navigation.applianceSimulator.applianceSimulator.go();
});

When(/^the user selects pre approved loan offer from products card$/, async function() {
    await navigation.ocLoanOffer.ocLoanOfferSpherica.go();
});

When(/^the user selects "([^"]*)" card$/, async function(operative) {
    switch (operative.toLowerCase()) {
        case 'credit card holder':
            await navigation.creditCardApplication.creditCardHolder.creditCardHolder.go({section: 'credit-card-holder'});
            break;
        case 'increase your line of credit':
            await navigation.card.increaseCardLimit.go();
            break;
        default:
            throw new Error(`Card option not supported from appliance simulator: ${operative}`);
    }
});
