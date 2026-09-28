import { When } from '@cucumber/cucumber';
import adviceFinancialCoach from '../../pages/adviceFinancialCoach/adviceFinancialCoach';

When(/^the user skip "([^"]*)" slide to change onboarding coach slides$/, async function(times) {
    await adviceFinancialCoach.clickToChangeSlides(times);
});

When(/^the user pause onboarding coach page$/, async function() {
    await adviceFinancialCoach.pauseOnboarding();
});

When(/^the user accesses to your financial situation coach page$/, async function() {
    await adviceFinancialCoach.goToYourFinancialSituation();
});

When(/^the user go to pfm dashboard detail from coach$/, async function() {
    await adviceFinancialCoach.goToPfm();
});

When(/^the user selects "([^"]*)" info button in a coach modal$/, async function(modalName) {
    await adviceFinancialCoach.openInfoModal(modalName);
});

When(/^the user open the coach targets modal$/, async function() {
    await adviceFinancialCoach.goToTargetsModal();
});

When(/^the user selects a target in coach operational$/, async function() {
    await adviceFinancialCoach.selectTarget();
});

When(/^the user selects cushion target in coach operational$/, async function() {
    await adviceFinancialCoach.selectCushionTarget();
});

When(/^the user delete a target in coach operational$/, async function() {
    await adviceFinancialCoach.deleteTarget();
});

When(/^the user confirms delete target$/, async function() {
    await adviceFinancialCoach.confirmDeleteTarget();
});

When(/^the user modifies a target in coach operational$/, async function() {
    await adviceFinancialCoach.modifyTarget();
});

When(/^the user open step 1 of the coach targets modal$/, async function() {
    await adviceFinancialCoach.openStep1TargetsModal();
});

When(/^the user open step 2 of the coach targets modal$/, async function() {
    await adviceFinancialCoach.openStep2TargetsModal();
});

When(/^the user navigates to the coach proposals dashboard$/, async function() {
    await adviceFinancialCoach.goToProposalsDashboard();
});

When(/^the user selects "([^"]*)" coach proposal to view the details$/, async function(proposalType) {
    await adviceFinancialCoach.openProposalModal(proposalType);
});

When(/^the user navigates to the coach badges dashboard$/, async function() {
    await adviceFinancialCoach.goToBadgesDashboard();
});

When(/^the user selects "([^"]*)" coach badge to view the details$/, async function(badgeType) {
    await adviceFinancialCoach.openBadgeModal(badgeType);
});

When(/^the user selects "([^"]*)" badge on coach dashboard to view the details$/, async function(badgeType) {
    await adviceFinancialCoach.openBadgetModalFromDashboard(badgeType);
});

When(/^the user accesses to coach proposal internal link$/, async function() {
    await adviceFinancialCoach.clickProposalButton();
});

When(/^the user accesses to coach badge internal link$/, async function() {
    await adviceFinancialCoach.clickBadgeButton();
});

When(/^the user switch to coach obtained badges tab$/, async function() {
    await adviceFinancialCoach.switchToObtainedBadgesTab();
});

When(/^the user first obtained coach badge on dashboard to view the details$/, async function() {
    await adviceFinancialCoach.openObtainedBadgetModalFromDashboard();
});

When(/^the user close onboarding coach$/, async function() {
    await adviceFinancialCoach.closeOnboarding();
});

When(/^the user selects change target in the change target modal$/, async function() {
    await adviceFinancialCoach.confirmChangeTarget();
});

When(/^the user closes the coach targets modal$/, async function() {
    await adviceFinancialCoach.closeTargetModal();
});

When(/^the user selects continue without target in the continue without target modal$/, async function() {
    await adviceFinancialCoach.confirmContinueWithoutTarget();
});
