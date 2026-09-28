import {When} from '@cucumber/cucumber';
import piggyBanksPercentageRule from '../../pages/piggyBanksPercentageRule/piggyBanksPercentageRule';

When(/^the user closes piggy bank percentage rule onboarding$/, async function() {
    await piggyBanksPercentageRule.closeOnboarding();
});

When(/^the user select its TDC$/, async function() {
    await piggyBanksPercentageRule.selectTdc();
});

When(/^the user completes piggy bank steps$/, async function() {
    await piggyBanksPercentageRule.completeMultistep();
});

When(/^the user "([^"]*)" piggy bank summary$/, async function(step) {
    await piggyBanksPercentageRule.showSummary(step);
});

When(/^the user confirms piggy bank percentage rule creation$/, async function() {
    await piggyBanksPercentageRule.confirmCreation();
});

When(/^the user creates piggy bank percentage rule$/, async function() {
    await piggyBanksPercentageRule.completeCreationRule();
});
