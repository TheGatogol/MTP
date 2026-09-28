import { When } from '@cucumber/cucumber';
import dashboardDetail from '../../pages/pfm/dashboard/dashboardDetail';
import creditScore from '../../pages/creditScore/creditScore';
import * as navigation from '../../navigation';

When(/^the user accesses to credit report$/, async function() {
    await navigation.creditScore.creditScore.go();
});

When(/^the user accepts the credit score terms and conditions$/, async function() {
    await creditScore.creditTyC();
});

When(/^the user closes tooltips$/, async function() {
    await dashboardDetail.closeTooltips();
});

When(/^the user enters information about the score into the modal$/, async function() {
    await creditScore.modalScoring();
});

When(/^the user exits the terms and conditions screen$/, async function() {
    await creditScore.creditGoBackTyC();
});

When(/^the user expands the "([^"]*)"$/, async function(option) {
    await creditScore.expandOption(option);
});

When(/^the user enters the learn more container$/, async function() {
    await creditScore.accessLinkLearnMore();
});

When(/^the user accesses the challenges section$/, async function() {
    await creditScore.challengesSection();
});

When(/^the user opens their credit status level$/, async function() {
    await creditScore.expandCreditContainer();
});

When(/^the user opens the credit score challenge detail screen$/, async function() {
    await creditScore.openChallengeDetail();
});
