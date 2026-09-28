import {Given, When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import callMeBack from '../../pages/redirectCallMeBack/redirectCallMeBack';

Given(/^the user accesses to I want to call a personal advisor "([^"]*)"(| in step "([^"]*)")$/, async function(access, step) {
    await navigation.redirectCallMeBack.redirectCallMeBack.go({access, step});
});

Given(/^the user selects schedule$/, async function() {
    await callMeBack.scheduleCall();
});

Given(/^the user confirms the shown schedule$/, async function() {
    await callMeBack.confirmSchedule();
});

Given(/^the user access day of the call$/, async function() {
    await callMeBack.accessDate();
});

When(/^the user advances to the schedule call screen$/, async function() {
    await callMeBack.nonWorkingScheduleCall();
});

When(/^the user confirms the call$/, async function() {
    await callMeBack.confirmCall();
});
