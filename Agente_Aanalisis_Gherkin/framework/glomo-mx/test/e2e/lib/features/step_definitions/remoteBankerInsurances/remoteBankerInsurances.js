import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

When(/^the user accesses to "([^"]*)" from notifications$/, async function(option) {
    await navigation.notificationsCenter.notificationsCenter.go();
    switch (option.toLowerCase()) {
        case 'life insurance':
            await navigation.remoteBankerInsurance.lifeInsurance.go({notificationId: global.user.products.lifeInsurance.id});
            break;
        case 'car insurance':
            await navigation.remoteBankerInsurance.carInsurance.go({notificationId: global.user.products.carInsurance.id});
            break;
        default:
            throw new Error(`The option: ${option} is not implemented`);
    }
});

When(/^the user accesses to the "([^"]*)" section of the insurance contract$/, async function(section) {
    await currentPage.continueToSection(section);
});

When(/^the user "([^"]*)" of the insurance contract$/, async function(action) {
    await currentPage.continueToAction(action);
});

When(/^the user exit from error modal$/, async function() {
    await currentPage.exitFromErrorModal();
});

When(/^the user completed of summary section$/, async function() {
    await currentPage.completeToSummary();
});
