import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import creditCardPaymentReminderSettings from '../../pages/creditCardPaymentReminderSettings/creditCardPaymentReminderSettings';

When(/^the user accesses to credit card payment reminder settings$/, async function() {
    await navigation.creditCardPaymentReminderSettings.creditCardPaymentReminderSettings.go();
});

When(/^the user accesses the reminder settings edition$/, async function() {
    await creditCardPaymentReminderSettings.accessReminderSettingsEdition();
});

When(/^the user requests help about payment reminders$/, async function() {
    await creditCardPaymentReminderSettings.openHelpModal();
});

When(/^the user closes the payment reminders help$/, async function() {
    await creditCardPaymentReminderSettings.closePaymentReminderHelp();
});

When(/^the user confirms the reminder settings changes$/, async function() {
    await creditCardPaymentReminderSettings.confirmReminderSettingsChanges();
});

When(/^the user selects "([^"]*)" from the days dropdown$/, async function(option) {
    await creditCardPaymentReminderSettings.chooseReminderDays(option);
});

When(/^the user toggles off the toggle$/, async function () {
    await creditCardPaymentReminderSettings.deactivateReminders();
});

When('the user toggles on the toggle', async function () {
    await creditCardPaymentReminderSettings.activateReminders();
});

When(/^the user disables the custom day reminder option$/, async function () {
    await creditCardPaymentReminderSettings.disableCustomDayOption();
});

When(/^the user disables the business day reminder option$/, async function () {
    await creditCardPaymentReminderSettings.disableBusinessDayOption();
});

When(/^the user sets the reminder notification channel to email$/, async function () {
    await creditCardPaymentReminderSettings.chooseEmailNotificationChannel();
});

When(/^the user disables all reminder options$/, async function () {
    await currentPage.disableAllReminderOptions();
});
