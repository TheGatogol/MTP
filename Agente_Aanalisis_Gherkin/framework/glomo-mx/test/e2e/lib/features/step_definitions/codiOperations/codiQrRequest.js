import {When} from '@cucumber/cucumber';
import codiQrRequestSteps from '../../pages/codiOperations/codiQrRequestSteps';

When(/^the user selects the account to deposit$/, async function() {
    await codiQrRequestSteps.selectAccount();
});

When(/^the user enters amount to request$/, async function() {
    await codiQrRequestSteps.insertAmount();
});

When(/^the user enters concept$/, async function() {
    await codiQrRequestSteps.insertConcept();
});

When(/^the user creates QR$/, async function() {
    await codiQrRequestSteps.createQr();
});

