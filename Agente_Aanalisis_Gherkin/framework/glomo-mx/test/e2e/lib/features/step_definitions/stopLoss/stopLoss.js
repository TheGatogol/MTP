import { When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import creditCardHolder from '../../pages/creditCardApplication/creditCardHolder/creditCardHolder';
import ocLoanOfferSpherica from '../../pages/ocLoanOffer/ocLoanOfferSpherica';

const commonNavigations = async () => {
    await navigation.contractProductSection.go();
    await navigation.ocLoanOffer.ocLoanOfferSpherica.go('consumer loan');
};

When(/^the user accesses to the credit card holder section from "([^"]*)"$/, async function (section) {
    await navigation.dashboard.go();
    await navigation.creditCardApplication.creditCardHolder.creditCardHolder.go({ section });
});

When(/^the user accesses to the "([^"]*)" section from oportunities$/, async function (operative) {
    await navigation.ocLoanOffer.ocLoanOfferSpherica.go(operative);
});

When(/^the user exits the consumer loan section from the "([^"]*)"$/, async function (from) {
    await ocLoanOfferSpherica.exitStopLoss(from);
});

When(/^the user "([^"]*)" of the credit card holder offer$/, async function (action) {
    await creditCardHolder.performAction(action);
});

When(/^the user exits for the second time from simulation$/, async function () {
    await ocLoanOfferSpherica.exitStopLoss('simulation');
    await commonNavigations();
    await ocLoanOfferSpherica.exitStopLoss('simulation');
});

When(/^the user exits for the second time terms and conditions$/, async function () {
    await ocLoanOfferSpherica.exitStopLoss('terms and conditions');
    await commonNavigations();
    await ocLoanOfferSpherica.exitStopLoss('terms and conditions');
});
