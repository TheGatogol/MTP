import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import financialEducation from '../../pages/financialEducation/financialEducation';

When(/^the user accesses the financial education operation/, async function() {
    await navigation.financialEducation.financialEducation.go();
});

When(/^the user accesses the account category/, async function() {
    await financialEducation.selectAccountTips();
});

When(/^the user selects first slider from the recent posts section/, async function() {
    await financialEducation.selectCard();
});

When(/^the user accesses the goals category/, async function() {
    await financialEducation.selectGoalsTips();
});

When(/^the user accesses the saving category/, async function() {
    await financialEducation.selectSavingTips();
});

When(/^the user accesses the security category/, async function() {
    await financialEducation.selectSecurityTips();
});

When(/^the user selects "([^"]*)" from the recent posts section$/, async function(slider) {
    await financialEducation.selectItemCard(slider);
});

When(/^the user accesses the first slider item in the recent posts section in the financial education operation/, async function() {
    await navigation.financialEducation.financialEducation.go();
    await financialEducation.selectCard();
});

When(/^the user plays the video/, async function() {
    await financialEducation.playVideo();
});

When(/^the user accesses any category/, async function() {
    await financialEducation.selectAccountTips();
});

When(/^the user accesses any category in the financial education operation/, async function() {
    await navigation.financialEducation.financialEducation.go();
});

When(/^the user selects any tab for any category/, async function() {
    await financialEducation.selectAccountTips();
});

When(/^the user selects "([^"]*)" tip in tabs/, async function(category) {
    await financialEducation.selectTab(category);
});
