import {When} from '@cucumber/cucumber';
import investAdvisoryPortfolio from '../../pages/investAdvisory/investAdvisoryPortfolio.js';

When(/^the user fills out profiling questionnaire (up to )?the "([^"]*)" step$/, async function (complete, step) {
    const completeStep = complete ? true : false;
    switch (step) {
        case 'experience':
            await investAdvisoryPortfolio.startQuestionaire();
            break;
        case 'initial amount':
            await investAdvisoryPortfolio.fillExperienceStep(completeStep);
            break;
        case 'investment term':
            await investAdvisoryPortfolio.fillAmountStep(completeStep);
            break;
        case 'investment percentage':
            await investAdvisoryPortfolio.fillTermStep(completeStep);
            break;
        case 'investment expectations':
            await investAdvisoryPortfolio.fillPercentageStep(completeStep);
            break;
        case 'performance':
            await investAdvisoryPortfolio.fillRiskStep(completeStep);
            break;
        case 'lost attitude':
            await investAdvisoryPortfolio.fillPerformanceStep(completeStep);
            break;
        default:
            throw new Error(`The step is not correct, received: ${step}`);
    }
});

When(/^the user selects all the options of experience step$/, async function () {
    await investAdvisoryPortfolio.startQuestionaire();
    await investAdvisoryPortfolio.checkAllExperienceOptions();
});

When(/^the user "([^"]*)" the amount in the initial amount step$/, async function (option) {
    if(option === 'edit') {
        await investAdvisoryPortfolio.fillAmountStep(false, '500');
    } else if(option.includes('not')) {
        await investAdvisoryPortfolio.fillMinimunAmountStep('1000');
    } else {
        await investAdvisoryPortfolio.fillAmountStep(false);
    }
});

When(/^the user enters an amount less than the minimum allowed in the initial amount step$/, async function () {
    await investAdvisoryPortfolio.fillMinimunAmountStep('5');
});

When(/^the user starts the profiling with "([^"]*)" experience and "([^"]*)" amount$/, async function (experienceLabel, amountLabel) {
    await investAdvisoryPortfolio.startQuestionaire();
    await investAdvisoryPortfolio.fillExperienceStep(false, experienceLabel);
    await investAdvisoryPortfolio.fillAmountStep(false, amountLabel);
});

When(/^the user starts the profiling with "([^"]*)" experience, "([^"]*)" amount, and "([^"]*)" term without continuing$/, async function (experienceLabel, amountLabel, termLabel) {
    await investAdvisoryPortfolio.startQuestionaire();
    await investAdvisoryPortfolio.fillExperienceStep(false, experienceLabel);
    await investAdvisoryPortfolio.fillAmountStep(false, amountLabel);
    await investAdvisoryPortfolio.fillTermStep(false, termLabel, false);
});

When(/^the user "([^"]*)" profiling questionnaire$/, async function (option) {
    if (option === 'starts') {
        await investAdvisoryPortfolio.fillAttitudeStep();
    } else {
        await investAdvisoryPortfolio.fillAttitudeStep(false);
    }
});

When(/^the user sends questionnaire and is redirected to the result page$/, async function () {
    await investAdvisoryPortfolio.sendQuestionnaire(false);
});

When(/^the user only accepts the assigned profile$/, async function () {
    await investAdvisoryPortfolio.acceptProfile(false);
});

When(/^the user accepts the assigned profile$/, async function () {
    await investAdvisoryPortfolio.acceptSimplifiedProfile();
    await investAdvisoryPortfolio.startHiringProcess();
    await investAdvisoryPortfolio.selectAccount();
});

When(/^the user accepts the assigned profile and start hiring$/, async function () {
    await investAdvisoryPortfolio.acceptSimplifiedProfile();
    await investAdvisoryPortfolio.startHiringProcess();
});

When(/^the user accepts the "([^"]*)" assigned profile, "([^"]*)" process "([^"]*)" from the proposal$/, async function (option, start, select) {
    if(option === 'initial') {
        await investAdvisoryPortfolio.acceptProfile();
    } else if(option === 'last') {
        await investAdvisoryPortfolio.acceptProfile(false);
    }
    if(start === 'starts') await investAdvisoryPortfolio.startHiringProcess();
    if(select === 'selects') await investAdvisoryPortfolio.selectAccount();
});

When(/^the user starts profiling again$/, async function () {
    await investAdvisoryPortfolio.profileAgain();
});

When(/^the user accesses to invest scenarios modal$/, async function () {
    await investAdvisoryPortfolio.showInvestmentScenarios();
});

When(/^the user edits the amount$/, async function () {
    await investAdvisoryPortfolio.editAmountIcon();
    await investAdvisoryPortfolio.editAmountFromProposal();
});

When(/^the user accesses the details of the "([^"]*)" strategy$/, async function (strategy) {
    const strategies = ['capital preservation', 'flow generation', 'capital growth'];
    const index = strategy === 'liquidity' ? 0 : strategies.indexOf(strategy);
    await investAdvisoryPortfolio.showInvestmentStrategy(`strategy${index}`);
});

When(/^the user starts the invest hiring process$/, async function () {
    await investAdvisoryPortfolio.startHiringProcess();
});

When(/^the user selects an account of his accounts$/, async function () {
    await investAdvisoryPortfolio.selectAccount();
});

When(/^the user "([^"]*)" the terms and conditions$/, async function (option) {
    await investAdvisoryPortfolio.acceptTermsConditions();
    if(option === 'accepts') {
        await investAdvisoryPortfolio.showConfirmationModal();
    }
});

When(/^the user selects on the profiling PDF link$/, async function () {
    await investAdvisoryPortfolio.clickProfilingPDF();
});

When(/^the user clicks on the contract PDF link$/, async function () {
    await investAdvisoryPortfolio.clickContractPDF();
});

When(/^the user clicks on the reasonableness letter link$/, async function () {
    await investAdvisoryPortfolio.clickReasonablenessLetter();
});

When(/^the user exits the hiring section$/, async function() {
    await investAdvisoryPortfolio.exitHiring();
});

When(/^the user exits the invest hiring flow$/, async function() {
    await investAdvisoryPortfolio.exitHiringFromHeader();
});

When(/^the user view privacy notice$/, async function() {
    await investAdvisoryPortfolio.viewPrivacyNotice();
});

When(/^the user view terms conditions consult$/, async function() {
    await investAdvisoryPortfolio.viewTermsConditionsConsult();
});

When(/^the user decides to change the account in the multi-step summary$/, async function() {
    await investAdvisoryPortfolio.changeAccountInResumen();
});

When(/^the user proceeds to investment confirmation modal$/, async function () {
    await investAdvisoryPortfolio.showConfirmationModal();
});

When(/^the user concretes the investment hiring process$/, async function () {
    await investAdvisoryPortfolio.confirmInvestmentHiring();
});

When(/^the user selects on the hiring documents link$/, async function () {
    await investAdvisoryPortfolio.clickViewDocuments();
});

When(/^the user reviews the hiring documents share$/, async function () {
    await investAdvisoryPortfolio.reviewHiringDocuments();
});

When(/^the user "([^"]*)" the investment hiring process$/, async function (option) {
    const confirm = option.includes('confirm') || false;
    const finish = option.includes('finish') || false;
    await investAdvisoryPortfolio.finalizeProposedHiring(option, confirm, finish);
});

When(/^the user completes the hiring process and selects blue$/, async function () {
    await investAdvisoryPortfolio.hiringSummary();
    await investAdvisoryPortfolio.selectBlueIcon();
});

When(/^the user completes the hiring process and selects cmb$/, async function () {
    await investAdvisoryPortfolio.hiringSummary();
    await investAdvisoryPortfolio.selectCmbHiring();
});

When(/^the user tries to leave the questionnaire$/, async function () {
    await investAdvisoryPortfolio.exitProfiling();
});

When(/^the user completes his profiling$/, async function () {
    await investAdvisoryPortfolio.getProfile();
});

When(/^the user accepts his profiling "([^"]*)"( then "([^"]*)")?$/, async function (profile, option) {
    await investAdvisoryPortfolio.completeProfiling(profile, option);
});

When(/^the user accepts her profile and fills out the form again$/, async function () {
    await investAdvisoryPortfolio.completeProfilingAndReturn();
});

When(/^the user completes and edits "([^"]*)" sections of the profile$/, async function (option) {
    await investAdvisoryPortfolio.editAllProfilingSteps(option);
});

When(/^the user accepts their profiles and views the scenarios$/, async function () {
    await investAdvisoryPortfolio.completeProfilingAndViewScenarios();
});

When(/^the user accepts their profiles and backs to personalized proposal$/, async function () {
    await investAdvisoryPortfolio.completeProfilingAndBack();
});

When(/^the user accepts the profile and validates the "([^"]*)" of the proposal$/, async function (option) {
    await investAdvisoryPortfolio.completeProfilingAndSeeStrategies(option);
});

When(/^the user selling the profiling process from "([^"]*)"$/, async function (option) {
    await investAdvisoryPortfolio.exitProfilingProcess(option);
});

When(/^the user completes his profile with a risk level "([^"]*)"$/, async function (option) {
    await investAdvisoryPortfolio.completeProfilingRiskLevel(option);
});

When(/^the user tries to invest as little as posible( "([^"]*)" the assigned profile)?$/, async function (option) {
    await investAdvisoryPortfolio.profileAgain();
    await investAdvisoryPortfolio.fillQuestionnaire('traditional', true, '1');
    await investAdvisoryPortfolio.finalizeProfiling(option);
});

When(/^the user user completes his profiling and access to call me back$/, async function () {
    await investAdvisoryPortfolio.profileAgain();
    await investAdvisoryPortfolio.getProfile('traditional', true, '1');
});

When(/^the user starts his profiling and accesses to blue$/, async function () {
    await investAdvisoryPortfolio.profileBlue();
});

When(/^the user ends questionnaire and selects callme back$/, async function () {
    await investAdvisoryPortfolio.profileAgain();
    await investAdvisoryPortfolio.getProfile('traditional', true, '1');
    await investAdvisoryPortfolio.selectCMB();
});

When(/^the user reviews the pdf guide$/, async function () {
    await investAdvisoryPortfolio.showguidepdf();
});

When(/^the user shares the personalized proposal$/, async function () {
    await investAdvisoryPortfolio.sharePersonalizedProposal();
});

When(/^the user selects edit amount icon$/, async function () {
    await investAdvisoryPortfolio.editAmountIconLink();
});
