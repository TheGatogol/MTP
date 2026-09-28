import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation/index.js';
import fundsBuy from '../../pages/diy/fundsContribution/fundsContributionBuySection.js';
import fundContractedDetail from '../../pages/fund/fundContracted.js';

When(/^the user accesses to buy option$/, async function() {
    await navigation.diy.fundsContribution.fundsBuy.go();
});

When(/^the user completes the buy$/, async function() {
    await fundsBuy.confirmBuy();
});

When(/^the user closes the buy section$/, async function() {
    await fundsBuy.closeBuy();
});

When(/^the user enters "([^"]*)" as the purchase amount$/, async function(amount) {
    await  fundsBuy.amountOption(amount);
});

When(/^the user "([^"]*)" buy and complete the process$/, async function(option) {
    await fundsBuy.amountOption('300');
    if(option === 'edits'){
        await fundsBuy.editBuyAmount();
    }
    await fundsBuy.confirmBuy();
});

When(/^the user tries to close the section but continue with the buy$/, async function() {
    await fundsBuy.amountOption('300');
    await fundsBuy.closeBuy();
    await fundsBuy.cancelCloseSection();
    await fundsBuy.confirmBuy();
});

When(/^the user does a change in the amount and confirm the exit$/, async function() {
    await fundsBuy.amountOption('300');
    await fundsBuy.closeBuy();
    await fundsBuy.confirmClose();
});

When(/^the user selects "([^"]*)" tooltip$/, async function(tooltip) {
    await fundContractedDetail.goTooltip(tooltip);
});
