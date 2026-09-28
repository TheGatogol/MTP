import {When} from '@cucumber/cucumber';

import sustainabilityCarbonFootprintOffset from '../../pages/sustainability/sustainabilityCarbonFootprintOffset';

import * as navigation from '../../navigation';

When(/^the user accesses to sustainability carbon footprint offset section$/, async function() {
    await navigation.sustainability.sustainabilityCarbonFootprintOffset.go();
});

When(/^the user accesses to the contribution project$/, async function() {
    await sustainabilityCarbonFootprintOffset.accessToContributionProjects();
});

When(/^the user selects a different project in step one the "([^"]*)"$/, async function(type) {
    await sustainabilityCarbonFootprintOffset.stepOneSelectProject(type);
});

When(/^the user accesses to the contribution of second step$/, async function() {
    await sustainabilityCarbonFootprintOffset.accessToContribution();
});

When(/^the user "([^"]*)" to continue to the next step$/, async function(typeContribution) {
    await sustainabilityCarbonFootprintOffset.updateContribution(typeContribution);
});

When(/^the user accesses to the payment method of third step$/, async function() {
    await sustainabilityCarbonFootprintOffset.accessToPaymentMethod();
});

When(/^the user enters the "([^"]*)"$/, async function(step) {
    await sustainabilityCarbonFootprintOffset.selectPaymentMethod(step);
});

When(/^the user accesses the payment method and selects to pay with BBVA points$/, async function() {
    await sustainabilityCarbonFootprintOffset.selectsToPayWithPoints();
});

When(/^the user accesses to the summary of the entire operation$/, async function() {
    await sustainabilityCarbonFootprintOffset.transferDetails();
});

When(/^the user accesses to project detail from carousel$/, async function() {
    await sustainabilityCarbonFootprintOffset.seeProjectDetail();
});

When(/^the user accesses to forestry project detail in step one$/, async function() {
    await sustainabilityCarbonFootprintOffset.seeProjectDetailStepOne();
});

When(/^the user goes back to forestry projects$/, async function() {
    await sustainabilityCarbonFootprintOffset.goBackFromCarouselDetail();
});

When(/^the user goes back to project detail in step one$/, async function() {
    await sustainabilityCarbonFootprintOffset.goBackProjectDetail();
});

When(/^the user accesses to how to contribute$/, async function() {
    await sustainabilityCarbonFootprintOffset.howToContributeModal();
});

When(/^the user accesses to the help section$/, async function() {
    await sustainabilityCarbonFootprintOffset.accessToHelp();
});

When(/^the user accesses to the project management question$/, async function() {
    await sustainabilityCarbonFootprintOffset.accessToFaqProjectManagement();
});

When(/^the user exits the question modal$/, async function() {
    await sustainabilityCarbonFootprintOffset.exitFaqHeader();
});

When(/^the user accesses to what is mexico$/, async function() {
    await sustainabilityCarbonFootprintOffset.accessToFaqWhatIsMexico();
});

When(/^the user exits the how to contribute modal$/, async function() {
    await sustainabilityCarbonFootprintOffset.exitHowToContribute();
});

When(/^the user accesses to how to use points$/, async function() {
    await sustainabilityCarbonFootprintOffset.accessToFaqHowToUsePoints();
});

When(/^the user accesses to payment security$/, async function() {
    await sustainabilityCarbonFootprintOffset.accessToFaqPaymentSecurity();
});

When(/^the user accesses to why cant you contribute$/, async function() {
    await sustainabilityCarbonFootprintOffset.accessToFaqNotContribute();
});

When(/^the user exits in the first step of multiStep without selecting any project$/, async function() {
    await sustainabilityCarbonFootprintOffset.exitsWithoutData();
});

When(/^the user exits from warning modal/, async function() {
    await sustainabilityCarbonFootprintOffset.exitsWarningModal();
});

When(/^the user modifies the project selection/, async function() {
    await sustainabilityCarbonFootprintOffset.updateTheProjectSelected();
});

When(/^the user selects another project with "([^"]*)"$/, async function(type) {
    await sustainabilityCarbonFootprintOffset.projectModificationScenarios(type);
});

When(/^the user selects a project in step one$/, async function() {
    await sustainabilityCarbonFootprintOffset.selectProjectInStepOne();
});

When(/^the user accesses to projects list in the project carousel$/, async function() {
    await sustainabilityCarbonFootprintOffset.seeMoreInProjectCarousel();
});

When(/^the user accesses to the payment method$/, async function() {
    await sustainabilityCarbonFootprintOffset.paymentMethod();
});

When(/^the user selects a different project in step one to continue$/, async function() {
    await sustainabilityCarbonFootprintOffset.stepOneUserCanContinue();
});

When(/^the user enters into the "([^"]*)" screen$/, async function(query) {
    await sustainabilityCarbonFootprintOffset.tooltipConsult(query);
});

When(/^the user enters into the contribution detail$/, async function() {
    await sustainabilityCarbonFootprintOffset.contributionDetail();
});

When(/^the user returns to sustainability carbon footprint offset section$/, async function() {
    await sustainabilityCarbonFootprintOffset.returnFootprintOffsetSection();
});

When(/^the user modifies the contribution amount$/, async function() {
    await sustainabilityCarbonFootprintOffset.modifyAmount();
});

When(/^the user modifies the payment method$/, async function() {
    await sustainabilityCarbonFootprintOffset.modifyPaymentMethod();
});

When(/^the user modifies the payment with points$/, async function() {
    await sustainabilityCarbonFootprintOffset.modifyPaymentWithPoints();
});

When(/^the user accesses to the actions section$/, async function() {
    await navigation.sustainability.sustainabilityLandingSection.go();
});

When(/^the user accesses to the emissions learn more screen$/, async function() {
    await navigation.sustainability.Sustainability.go();
});

When(/^the user retrys operation with the "([^"]*)"$/, async function(type) {
    await sustainabilityCarbonFootprintOffset.errorRetry(type);
});

When(/^the user enters into the sustainability detail page$/, async function() {
    await sustainabilityCarbonFootprintOffset.sustainabilityLanding();
});
