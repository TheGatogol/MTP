import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import financialHealthPushAdvice from '../../pages/financialHealthPushAdvice/financialHealthPushAdvice';

When(/^the user closes the modal recurrent payroll$/, async function () {
    await financialHealthPushAdvice.closeModal();
});

When(/^the user votes positively$/, async function () {
    await navigation.financialHealthPushAdvice.financialHealthPushAdviceFeedback.go();
});

When(/^the user accesses to pockets$/, async function () {
    await financialHealthPushAdvice.accessToPockets();
});
