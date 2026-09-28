import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import investAdvisoryProductDetail from '../../pages/investAdvisory/investAdvisoryProductDetail';

When(/^the user accesses to product detail invest advisory$/, async function() {
    await navigation.investAdvisory.investAdvisoryProductDetail.go();
});

When(/^the user opens contract detail$/, async function() {
    await investAdvisoryProductDetail.accessContractDetail();
});

When(/^the user selects the fund liquidity option$/, async function() {
    await investAdvisoryProductDetail.reviewStrategyLiquidity();
});

When(/^the user selects the capital preservation option$/, async function() {
    await investAdvisoryProductDetail.reviewStrategyCapitalPreservation();
});

When(/^the user selects the flow generation option$/, async function() {
    await investAdvisoryProductDetail.reviewStrategyFlowGeneration();
});

When(/^the user selects the capital growth option$/, async function() {
    await investAdvisoryProductDetail.reviewStrategyCapitalGrowth();
});

When(/^the user funds can be loaded$/, async function() {
    await investAdvisoryProductDetail.buyFunds();
});

When(/^user funds can not be loaded$/, async function() {
    await investAdvisoryProductDetail.closeModalError();
    await investAdvisoryProductDetail.buyFunds();
});

When(/^the user "([^"]*)" investment contract alias$/, async function(option) {
    await investAdvisoryProductDetail.accessContractDetail();
    if (option === 'edits') {
        await navigation.investAdvisory.investAdvisoryProductDetailEditAlias.go();
    }
});

When(/^the user needs to copy "([^"]*)"$/, async function(number) {
    if(number.toLowerCase() === 'investment contract') {
        await investAdvisoryProductDetail.copyContractNumber();
    } else {
        await investAdvisoryProductDetail.copyAccountNumber();
    }
});

When(/^the user wants to "([^"]*)" some investment funds$/, async function(operation) {
    const sell = operation === 'sell';
    if (sell) {
        await investAdvisoryProductDetail.goNextFund();
    }
    await navigation.investAdvisory.investAdvisoryWithdrawalAndContribution.go(sell ? 'withdrawal': '');
});

When(/^the user reviews "([^"]*)" strategy$/, async function(stategy) {
    await investAdvisoryProductDetail.reviewStrategy(stategy);
});

When(/^the user opens terms and conditions$/, async function() {
    await investAdvisoryProductDetail.openTermsAndConditions();
});
