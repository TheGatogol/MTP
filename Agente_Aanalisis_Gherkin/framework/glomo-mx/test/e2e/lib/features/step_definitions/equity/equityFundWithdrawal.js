import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import fundsWithdrawalStep1 from '../../pages/diy/fundsWithdrawal/fundsWithdrawalStep1';

When(/^the user accesses equity funds withdrawal/, async function () {
    await navigation.equity.equityFundWithdrawal.fundWithdrawal.go();
});

When(/^the user accesses in the "([^"]*)" section of equity fund withdrawal$/, async function (option) {
    switch (option.toLowerCase()) {
        case 'simulation step':
            await currentPage.accessToPartialOperation();
            break;
        case 'fill simulation step':
            await currentPage.fillSimulation();
            break;
        case 'confirm simulation step':
            await currentPage.fillSimulationAmount();
            break;
        case 'summary step':
            await currentPage.accessEquityFundWithdrawalSummary();
            break;
        case 'confirm step':
            await currentPage.confirmEquityFundWithdrawal();
            break;
        default:
            throw new Error(`${option} option is not available to navigate...`);
    }
});

When(/^the user completes the equity fund withdrawal process with "([^"]*)" otp code$/, async function (otp) {
    await navigation.equity.equityFundWithdrawal.success.go({otp});
});

When('fund withdrawal simulation is finished', async function (){
    await currentPage.simulationFullLoaded();
});

When(/^the user accesses to equity fund$/, async function () {
    await navigation.fund.contractedDetail.go();
    await navigation.diy.fundsWithdrawal.step1.go();
    await fundsWithdrawalStep1.confirmAccountSelection();
});

When(/^the user chooses "([^"]*)" sale$/, async function (option) {
    await fundsWithdrawalStep1.saleSelection(option);
});

When(/^the user changes withdrawal amount$/, async function() {
    await fundsWithdrawalStep1.changeAmount();
});

When(/^the user enters the amount "([^"]*)" to withdraw from the fund$/, async function (amount) {
    await fundsWithdrawalStep1.inputAmount(amount);
});

When(/^the user cancels the process of entering amount$/, async function() {
    await fundsWithdrawalStep1.closePage();
});

When(/^the user makes the withdrawal of the "([^"]*)" sale$/, async function(sale) {
    if(sale === 'partial'){
        await fundsWithdrawalStep1.calculateFund();
        await fundsWithdrawalStep1.successfulSale();
        await navigation.diy.fundsWithdrawal.fundsWithdrawalSuccess.go();
    }else{
        await fundsWithdrawalStep1.successfulSale();
        await navigation.diy.fundsWithdrawal.fundsWithdrawalSuccess.go();
    }
});

When(/^the user enters the otp to complete the withdrawal of funds$/, async function() {
    await navigation.diy.fundsWithdrawal.fundsWithdrawalSuccess.go();
});
