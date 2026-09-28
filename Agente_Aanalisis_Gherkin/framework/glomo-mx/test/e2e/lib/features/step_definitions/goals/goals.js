import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import goals from '../../pages/goals/goals';
import selfDrivenRoundUp from '../../pages/goals/selfDrivenRoundUp';

When(/^the user accesses to goals dashboard( as minor)?$/, async function(minor) {
    await navigation.goals.goals.go({minor});
});
When(/^the user accesses to self driven round up from "([^"]*)"$/, async function(route) {
    await navigation.goals.selfDrivenRoundUp.go(route);
});

When(/^the user navigates until "([^"]*)"$/, async function(page) {
    await goals.navigateToSection(page);
});

When(/^the user "([^"]*)" to its goal$/, async function(operation) {
    await goals.performGoalOperation(operation);
});

When(/^the user reads more information about plan$/, async function() {
    await goals.readAboutPlan();
});

When(/^the user add a new contribution formula$/, async function() {
    await goals.addContributionFormula();
});

When(/^the user visits "([^"]*)" contribution form$/, async function(contribution) {
    await goals.addContribution(contribution);
});

When(/^the user activates a successful periodic contribution from (formulas|step 3)$/, async function(location) {
    const enabled = location === 'formulas';
    if (location === 'step 3') {
        await goals.editContribution('periodic');
    }
    await goals.activatePeriodicContribution(enabled);
});

When(/^the user chooses its goal purpose$/, async function() {
    await goals.chooseGoalPurpose();
});

When(/^the user completes goal form$/, async function() {
    await goals.fillGoalForm();
});

When(/^the user creates a goal for the first time$/, async function() {
    await goals.createGoal();
});

When(/^the user creates a successful rounding rule$/, async function() {
    await selfDrivenRoundUp.createRule();
});

When(/^the user edits the successful rounding rule$/, async function() {
    await selfDrivenRoundUp.editRule();
});

When(/^the user starts goal creation from "([^"]*)"$/, async function(accessPoint) {
    await goals.startGoalCreation(accessPoint);
});

When(/^the user create its "([^"]*)" rule$/, async function(rule) {
    await goals.navigateToSection('automatic contributions');
    await navigation.goals.selfDrivenRoundUp.go('automatic contributions');
    await selfDrivenRoundUp.createRuleByRule(rule);
});

When(/^the user turns on\/off (scheduled )?contribution$/, async function(scheduled) {
    await goals.turnOnOffContribution(scheduled);
});

When(/^the user review algorithm advice$/, async function() {
    await goals.openAlgorithmAdvice();
});

When(/^the user completes all form steps$/, async function() {
    await goals.showSummary();
});

When(/^the user reviews more information about how the plan works$/, async function() {
    await goals.showMoreInfoPlan();
});

When(/^the user completes goal creation process$/, async function() {
    await goals.completeCreation();
});

When(/^the user completes account contracting$/, async function() {
    await goals.createAccount();
});

When(/^the user makes a "([^"]*)"$/, async function(action) {
    switch (action) {
        case 'complete contribution':
        case 'contribution':
            if (action.startsWith('complete')) {
                await goals.navigateToSection('goal contribution form');
            }
            await goals.makeContribution();
            break;
        case 'complete withdrawal':
        case 'withdrawal':
            if (action.startsWith('complete')) {
                await goals.navigateToSection('goal withdrawal form');
            }
            await goals.makeWithdrawal();
            break;
        default:
            throw new Error(`${action} is not a valid action`);
    }
});

When(/^the user (edits its "([^"]*)" rule|reads more about plan from purchases contribution)$/, async function(rule) {
    await goals.navigateToSection('contribution plan');
    await navigation.goals.selfDrivenRoundUp.go('edit purchases contribution');
    if (rule === 'purchases' || rule === 'percentage') {
        await selfDrivenRoundUp.editRule(rule);
    } else {
        await selfDrivenRoundUp.moreInfo();
    }

});

When(/^the user edits savings goal$/, async function() {
    await goals.editGoalPurpose();
});

When(/^the user edit contribution and save$/, async function() {
    await navigation.goals.selfDrivenRoundUp.go('edit purchases contribution from step');
    await selfDrivenRoundUp.editRule('percentage');
    await navigation.goals.goals.go();
    await goals.showSummary();
});

When(/^the user "([^"]*)" a periodic contribution$/, async function(action) {
    switch (action) {
        case 'creates':
            await goals.createPeriodicContribution();
            break;
        case 'edits':
            await goals.modifyPeriodicContribution();
            break;
        default:
            throw new Error(`${action} is not a valid action`);
    }
});

When(/^the user deletes a purchases contribution$/, async function() {
    await goals.removePurchasesContribution();
});

When(/^the user edits its goal$/, async function() {
    await goals.editGoal();
});

When(/^the user deletes a goal "([^"]*)" balance$/, async function(type) {
    await goals.deleteGoal(type);
});

When(/^the user withdraws from a goal completed$/, async function() {
    await goals.completeGoal();
});

When(/^the user creates a goal after completing one$/, async function() {
    await goals.createGoalFromCompletion();
});

When(/^the leaves the withdrawal process$/, async function() {
    await goals.leaveWithdrawal();
});

When(/^the user withdraws from a goal expired$/, async function() {
    await goals.withdrawFromExpired();
});

When(/^the user hires plan and creates a goal$/, async function() {
    await goals.setUpPlan();
});
