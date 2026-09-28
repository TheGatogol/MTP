import {When} from '@cucumber/cucumber';
import billPaymentsSipare from '../../pages/billPaymentsDashboard/billPaymentsDashboard';

function getLineCaptureCaseOne() {
    return user.lineCapture;
}

When(/^the user select payment "([^"]*)"$/, async function(service) {
    await billPaymentsSipare.searchServicesList(service);
});

When(/^the user select wrong name service payment "([^"]*)"$/, async function(service) {
    await billPaymentsSipare.searchWrongServicesList(service);
});

When(/^the user select payment of contributions "([^"]*)" with reference$/, async function(service) {
    const lineCapture = getLineCaptureCaseOne();
    await billPaymentsSipare.addCaptureLine(service, lineCapture);
});

When(/^the user continue after entering capture line$/, async function() {
    await billPaymentsSipare.makePaymentSipare();
});

When(/^the user continue with the payment process$/, async function() {
    await billPaymentsSipare.makePaymentSipareComplete();
});
