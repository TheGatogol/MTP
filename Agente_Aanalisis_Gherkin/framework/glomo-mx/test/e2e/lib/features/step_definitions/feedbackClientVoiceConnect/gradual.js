import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import transfer from '../../pages/diy/transfer/transfer';
import dashboard from '../../pages/dashboard/dashboard';
import internationalTransferSuccess from '../../pages/internationalTransfer/internationalTransferSuccess';
import internationalTransfer from '../../pages/internationalTransfer/internationalTransfer';
import myConversation from '../../pages/myConversation/myConversation';
import ocLoanOffer from '../../pages/ocLoanOffer/ocLoanOffer';
import payrollPortability from '../../pages/payrollPortability/payrollPortability';
import transferSuccess from '../../pages/diy/transfer/transferSuccess';

When(/^the user ends the session$/, async function() {
    await navigation.sidebar.go({forceLogin: true});
    await navigation.dashboard.go();
});

When(/^the user selects a rating from my conversations form$/, async function() {
    await myConversation.selectRating();
});

When (/^the user completes feedback form successfully from my conversations form$/, async function() {
    await myConversation.sendFeedback();
});

When(/^the user selects a rating$/, async function() {
    await dashboard.selectRating();
});

When(/^the user changes the survey rating and sends it$/, async function() {
    await dashboard.changeRateAndSend();
});

When(/^the user logout from the gradual feedback survey "([^"]*)"$/, async function(option) {
    if (option==='uncompleted questionnaire'){
        await dashboard.selectTheRating();
    }
    await navigation.login.go({option: option});
});

When(/^the user rates foreign currency request flow$/, async function() {
    const otp= '12345678';
    await navigation.diy.transfers.transferSuccess.go({otp});
    await transferSuccess.closeTransferSuccess();
    await transferSuccess.answerFeedbackForm('foreign currency request');
});

When (/^the user rates "([^"]*)" flow$/, async function(feedback) {
    switch (feedback) {
        case 'international transfer abandonment':
            await internationalTransfer.answerFeedbackForm(feedback);
            break;
        case 'international transfer success':
            await internationalTransferSuccess.answerFeedbackForm(feedback);
            break;
        case 'log out':
        case 'log out analytics':
            await dashboard.answerFeedbackForm(feedback);
            break;
        case 'my conversations analytics':
        case 'my conversations':
            await myConversation.answerFeedbackForm(feedback);
            break;
        case 'loan offer abandonment':
            await ocLoanOffer.answerFeedbackForm(feedback);
            break;
        case 'payroll portability abandonment':
        case 'payroll portability successful':
            await payrollPortability.answerFeedbackForm(feedback);
            break;
        case 'foreign currency request abandonment':
            await transfer.answerFeedbackForm(feedback);
            break;
        default:
            throw new Error(`Not recognized option "${feedback}"`);
    }
});

When (/^the user completes feedback form successfully$/, async function() {
    await dashboard.sendFeedback();
});

When(/^the user rates and sends$/, async function() {
    await dashboard.resolvedWithoutQuestion();
});

When (/^the user is presented with the "([^"]*)" survey$/, async function(feedback) {
    const otp = '12345678';
    switch (feedback) {
        case 'international transfer abandonment':
            await internationalTransfer.abandonProcess();
            break;
        case 'log out':
            await dashboard.confirmLogout();
            break;
        case 'international transfer success':
            await internationalTransferSuccess.exitProcess();
            break;
        case 'foreign currency success':
            await navigation.diy.transfers.transferSuccess.go({otp});
            await transferSuccess.closeTransferSuccess();
            break;
        case 'foreign currency request abandonment':
            await transfer.setAmountAndConcept('150', 'donativo');
            await transfer.cancelTransferWithModal();
            break;
        case 'payroll portability abandonment':
            await payrollPortability.abandonProcess();
            break;
        case 'loan offer abandonment':
            await ocLoanOffer.abandonProcess();
            break;
        case 'my conversations':
            await myConversation.exitProcess();
            break;
        case 'payroll portability successful':
            await payrollPortability.exitProcess();
            break;
        default:
            throw new Error(`Not recognized option "${feedback}"`);
    }
});
