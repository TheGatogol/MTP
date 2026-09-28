import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import investAdvisoryWithdrawalAndContribution from '../../pages/investAdvisory/investAdvisoryWithdrawalAndContribution.js';

When(/^the user accesses to withdrawal and contribution page$/, async function() {
    await navigation.investAdvisory.investAdvisoryWithdrawalAndContribution.go();
});

When(/^the user set amount to invest$/, async function() {
    await investAdvisoryWithdrawalAndContribution.setAmountContribution();
});

When(/^the user selects the share receipt$/, async function() {
    await investAdvisoryWithdrawalAndContribution.selectsOperative();
});

When(/^the user completes "([^"]*)" step$/, async function(step) {
    if (step === 'all') {
        await investAdvisoryWithdrawalAndContribution.performFundSell('purchase', false);
    } else {
        await investAdvisoryWithdrawalAndContribution.fillPurchaseSteps(step);
    }
});

When(/^the user confirms the "([^"]*)"$/, async function(origin) {
    switch(origin.toLowerCase()) {
        case 'amount':
            await investAdvisoryWithdrawalAndContribution.confirmAmount();
            break;
        case 'distribution':
            await investAdvisoryWithdrawalAndContribution.confirmDistribution();
            break;
        case 'contribution':
            await investAdvisoryWithdrawalAndContribution.confirmOperation();
            break;
        default:
            throw new Error(`Origin: ${origin} not found`);
    }
});

When(/^the user performs a funds purchase operation$/, async function() {
    await navigation.investAdvisory.investAdvisoryWithdrawalAndContribution.go();
    await investAdvisoryWithdrawalAndContribution.performFundSell();
});

When(/^the user edits the amount to purchase from "([^"]*)"$/, async function(origin) {
    await navigation.investAdvisory.investAdvisoryWithdrawalAndContribution.go();
    await investAdvisoryWithdrawalAndContribution.fillPurchaseSteps(origin, true);
});

When(/^the user leaves buy fund page$/, async function() {
    await navigation.investAdvisory.investAdvisoryWithdrawalAndContribution.go();
    await navigation.investAdvisory.investAdvisoryProductDetail.go('contribution');
});

When(/^the user tries to buy funds for \$"([^"]*)"$/, async function(amount) {
    await navigation.investAdvisory.investAdvisoryWithdrawalAndContribution.go();
    await investAdvisoryWithdrawalAndContribution.setAmountContribution(amount);
});

When(/^the user can't buy funds$/, async function() {
    await navigation.investAdvisory.investAdvisoryWithdrawalAndContribution.go();
    await investAdvisoryWithdrawalAndContribution.setAmountToBuy();
});
