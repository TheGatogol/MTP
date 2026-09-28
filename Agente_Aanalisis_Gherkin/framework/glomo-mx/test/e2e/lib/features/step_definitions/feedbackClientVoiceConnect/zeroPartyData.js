import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import zeroPartyData from '../../pages/feedbackClientVoiceConnect/zeroPartyData';

When(/^the user open the zero party data form$/, async function() {
    await navigation.dashboard.go();
    await navigation.zeroPartyData.go();
});

When(/^the user selects exit from your lifestyle screen$/, async function() {
    await zeroPartyData.exitYourLifestyle();
});

When(/^the user fills out the "([^"]*)" form$/, async function(typeForm) {
    await zeroPartyData.showQuestions();
    await zeroPartyData.fillForms(typeForm);

});

When(/^the user accesses questionnaire zero party data$/, async function() {
    await zeroPartyData.showQuestions();
});

When(/^the user exits the screen "([^"]*)" form about you$/, async function(typeForm) {
    await zeroPartyData.exitAboutYou(typeForm);
});

When(/^the user opens the notice privacy "([^"]*)"$/, async function(type) {
    await zeroPartyData.openNoticePrivacy(type);
});

When(/^the user fill first step$/, async function() {
    await zeroPartyData.fillFirstStep();
});

When(/^the user fill second step$/, async function() {
    await zeroPartyData.fillSecondStep();
});

When(/^the user accesses to dashboard from "([^"]*)"$/, async function(typeForm) {
    await navigation.dashboard.go({button: typeForm});
});
