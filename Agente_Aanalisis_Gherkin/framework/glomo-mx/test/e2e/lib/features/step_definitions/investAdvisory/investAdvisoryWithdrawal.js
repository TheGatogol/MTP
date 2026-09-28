import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import investAdvisoryProductDetail from '../../pages/investAdvisory/investAdvisoryProductDetail.js';
import investAdvisoryWithdrawalAndContribution from '../../pages/investAdvisory/investAdvisoryWithdrawalAndContribution.js';

When(/^the user accesses to withdrawal page$/, async function() {
    await navigation.investAdvisory.investAdvisoryWithdrawalAndContribution.go('withdrawal');
});

When(/^the user starts a partial withdrawal$/, async function() {
    await investAdvisoryWithdrawalAndContribution.selectPartialWithdrawal();
});

When(/^the user completes its withdrawal until "([^"]*)" step( selling "([^"]*)")?$/, async function(step, sellingAmount) {
    const amount = sellingAmount?.toLowerCase().includes('almost') ? '10029' : '500';
    switch(step.toLowerCase()) {
        case 'summary':
        case 'sign':
            await investAdvisoryWithdrawalAndContribution.fillWithdrawalSteps(true, amount);
            if (step.toLowerCase() === 'sign') {
                await investAdvisoryWithdrawalAndContribution.confirmOperation();
            }
            break;
        case 'distribution':
            await investAdvisoryWithdrawalAndContribution.fillWithdrawalSteps(false);
            break;
        default:
            throw new Error(`Step ${step} not found`);
    }
});

When(/^the user confirms the withdrawal distribution$/, async function() {
    await investAdvisoryWithdrawalAndContribution.confirmWithdrawalDistribution();
});

When(/^the user confirms the withdrawal$/, async function() {
    await investAdvisoryWithdrawalAndContribution.confirmOperation();
});

When(/^the user performs a funds sell operation "([^"]*)"$/, async function(type) {
    await investAdvisoryProductDetail.goNextFund();
    await navigation.investAdvisory.investAdvisoryWithdrawalAndContribution.go('withdrawal');
    await investAdvisoryWithdrawalAndContribution.performFundSell(type);
    if(type.toLowerCase().includes('complete')) {
        await navigation.investAdvisory.investAdvisoryProductDetail.go();
    }
});

When(/^the user tries to sell funds for \$"([^"]*)"$/, async function(amount) {
    await investAdvisoryProductDetail.goNextFund();
    await navigation.investAdvisory.investAdvisoryWithdrawalAndContribution.go('withdrawal');
    await investAdvisoryWithdrawalAndContribution.setAmountToSell(amount);
});

When(/^the user leaves sell fund page$/, async function() {
    await investAdvisoryProductDetail.goNextFund();
    await navigation.investAdvisory.investAdvisoryWithdrawalAndContribution.go('withdrawal');
    await investAdvisoryWithdrawalAndContribution.fillWithdrawalSteps();
    await navigation.investAdvisory.investAdvisoryProductDetail.go('withdrawal');
});

When(/^the user edits "([^"]*)" step$/, async function(step) {
    await investAdvisoryProductDetail.goNextFund();
    await navigation.investAdvisory.investAdvisoryWithdrawalAndContribution.go('withdrawal');
    await investAdvisoryWithdrawalAndContribution.editFromStep(step);
});
