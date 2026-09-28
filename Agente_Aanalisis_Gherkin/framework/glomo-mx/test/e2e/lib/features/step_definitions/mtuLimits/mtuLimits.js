import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import mtuException from '../../pages/mtuLimits/mtuException';
import confirmModification from '../../pages/mtuLimits/userTransactionAmountDetailNotification';

When(/^the user continues the action to confirm or reject mtu modification$/, async function() {
    await navigation.mtuLimits.userTransactionAmountDetailNotification.go();
});

When(/^the user selects action "([^"]*)" modification$/, async function(option) {
    await confirmModification.selectedConfirmRejectButton(option);
    switch (option.toLowerCase()) {
        case 'confirm':
            await navigation.mtuLimits.userTransactionAmountConfirmation.go();
            break;
        case 'reject':
            await navigation.mtuLimits.userTransactionAmountRejection.go();
            break;
        case 'confirm error':
            await navigation.mtuLimits.userTransactionAmountError.go();
            break;
        default:
            throw new Error(`The option: ${option} is not implemented`);
    }
});

When(/^the user accesses MTU limit exceeded$/, async function() {
    await navigation.mtuLimits.mtuException.go();
});

When(/^the user confirms the MTU exception$/, async function() {
    await mtuException.confirmMTUException();
});

When(/^the user confirms operation with MTU exception$/, async function() {
    await navigation.mtuLimits.mtuException.go();
    await mtuException.processMtuException();
});
