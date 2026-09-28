import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

When(/^the user accesses to the panels simulator section$/, async function() {
    await navigation.solarPanelsSimulator.solarPanelsSimulator.go();
});

When(/^the user accesses the pre approved panels loan offer from panels simulator$/, async function() {
    await navigation.ocLoanOffer.ocLoanOfferSpherica.go();
});
