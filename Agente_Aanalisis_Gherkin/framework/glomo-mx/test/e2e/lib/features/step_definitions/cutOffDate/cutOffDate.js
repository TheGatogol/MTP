import { When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import cutOffDate from '../../pages/cutOffDate/cutOffDate';

When(/^the user accesses to cut off date operative$/, async function () {
    await navigation.cutOffDate.cutOffDate.go();
});

When(/^the user "([^"]*)" card cut off date operation$/, async function (option) {
    if (option === 'changes') {
        await cutOffDate.selectDate();
    }
    await cutOffDate.confirmOperation();
    await cutOffDate.fillOtp('12345678');
});

When(/^the user "([^"]*)" a new date$/, async function (option) {
    await cutOffDate.selectDate(option);
});

When(/^the user "([^"]*)" in the "([^"]*)" modal$/, async function (action, modalType) {
    const completeProfile = modalType.toLowerCase() === 'complete profile' && action.toLowerCase() === 'accepts';
    if (completeProfile) {
        await navigation.profile.go();
    } else {
        await navigation.card.orangeCardProductDetail.go({step: modalType, action});
    }
});

When(/^the user "([^"]*)" the cut off date operative$/, async function (action) {
    await cutOffDate.exitOperative(action);
    if (action.toLowerCase() === 'accepts') {
        await navigation.card.orangeCardProductDetail.go({ action });
    }
});
