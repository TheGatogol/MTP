import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import fundsContributionStep1 from '../../pages/diy/fundsContribution/fundsContributionStep1';
import fundsContributionStep2 from '../../pages/diy/fundsContribution/fundsContributionStep2';
import fundsContributionStep4 from '../../pages/diy/fundsContribution/fundsContributionStep4';

// STEP DEFINITIONS

When(/^the user accesses to the funds contribution screen$/, async function() {
    await navigation.diy.fundsContribution.step1.go();
    await fundsContributionStep1.waitForAnalytics();
});

When(/^the user completes a fund contribution$/, async function() {
    await navigation.diy.fundsContribution.review.go();
});

When(/^the user enters an amount to invest$/, async function() {
    await navigation.diy.fundsContribution.step2.go();
    await fundsContributionStep2.enterAmount();
});

When(/^the user changes the amount to purchase$/, async function() {
    await fundsContributionStep4.changeAmount();
});

When(/^the user tries completes a fund contribution$/, async function() {
    await navigation.diy.fundsContribution.step5.go();
    await currentPage.confirmContribution();
});

When(/^the user exits the process on the summary screen$/, async function() {
    await fundsContributionStep4.exitProcess();
});

When(/^the user consults the details of the fund$/, async function() {
    await navigation.diy.fundsContribution.step4.go();
    await fundsContributionStep4.consultDetails();
});

When(/^the user does not complete a fund contribution by series is not available$/, async function() {
    await navigation.diy.fundsContribution.step5.go();
    await currentPage.confirmContribution();
});

When(/^the user accesses to the "([^"]*)" section of the funds contribution screen$/, async function(option) {
    switch (option.toLowerCase()) {
        case 'step 2':
            await navigation.diy.fundsContribution.step2.go();
            break;
        case 'step 3':
            await navigation.diy.fundsContribution.step3.go();
            break;
        case 'step 4':
            await navigation.diy.fundsContribution.step4.go();
            break;
        case 'step 5':
            await navigation.diy.fundsContribution.step5.go();
            break;
        case 'review':
            await navigation.diy.fundsContribution.review.go();
            break;
        default:
            throw new Error(`${option} option is not available to navigate...`);
    }
});
