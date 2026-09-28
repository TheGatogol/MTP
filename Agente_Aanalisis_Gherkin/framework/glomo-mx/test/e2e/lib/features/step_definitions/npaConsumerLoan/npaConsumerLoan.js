import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import npaConsumerLoan from '../../pages/npaConsumerLoan/npaConsumerLoan';

When(/^the user accesses on non pre approved consumer loan "([^"]*)"$/, async function (result) {
    switch (result.toLowerCase()) {
        case 'successfully':
            await navigation.npaConsumerLoanSpherica.go();
            break;
        case 'unsuccessfully':
            await navigation.npaConsumerLoanSpherica.attempt({ successfullAttempt: false });
            break;
        default:
            throw new Error('Selected option is not available...');
    }
});

When(/^the user continue and select the check main$/, async function () {
    await npaConsumerLoan.continueOffer();
    await npaConsumerLoan.selectChecks();
});

When(/^the user tries to exit and continue with the loan application$/, async function () {
    await npaConsumerLoan.closeChecksPage();
});

When(/^the user continues to the evaluation$/, async function () {
    await npaConsumerLoan.continueChecks();
});

When(/^the user opens the bureau authorization$/, async function () {
    await npaConsumerLoan.bureauAuthorization();
});

When(/^the user opens the work history authorization$/, async function () {
    await npaConsumerLoan.workHistoryAuthorization();
});

When(/^the user opens the privacy advice modal$/, async function () {
    await npaConsumerLoan.privacyAdvice();
});

When(/^the user "([^"]*)" from the rejected screen$/, async function (value) {
    await npaConsumerLoan.returnToEntryPoint(value);
});

When(/^the user obtains a result for your evaluation$/, async function () {
    await npaConsumerLoan.continueChecks();
    await npaConsumerLoan.continueOTP();
}); 

When(/^the user tries to exit the flow$/, async function () {
    await npaConsumerLoan.closeChecksPage();
});

When(/^the user goes with "([^"]*)" from npa consumer loan$/, async function (button) {
    switch (button.toLowerCase()) {
        case 'continue':
            await npaConsumerLoan.continueSuccess();
            break;
        case 'exit':
            await npaConsumerLoan.closeModalRejection();
            break;
        default:
            throw new Error('Selected option is not available...');
    }
});
