import {Given, When} from '@cucumber/cucumber';
import callMeBackAssistanceManagerPage from '../../pages/callMeBack/callMeBackAssistanceManager';
import ocLoanOfferPage from '../../pages/ocLoanOffer/ocLoanOffer';
import * as navigation from '../../navigation';

Given(/^the user accesses to I want to call a personal advisor from "([^"]*)"$/, async function(accessFrom) {
    await navigation.callMeBack.callMeBackAssistanceManager.go({accessFrom});
});

Given(/^the user accesses to call me back with an assintance manager from "([^"]*)"$/, async function(accessFrom) {
    await ocLoanOfferPage.accessToCallMeBackAssistanceManager(accessFrom);
});

Given(/^the user agrees to schedule a call$/, async function() {
    await callMeBackAssistanceManagerPage.scheduleCall();
});

When(/^the user selects a schedule$/, async function() {
    await callMeBackAssistanceManagerPage.selectSchedule();
    await navigation.callMeBack.callMeBackAssistanceManagerSuccess.go();
});
