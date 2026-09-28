import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

When(/^the user accesses equity funds contributions/, async function () {
    await navigation.equity.equityFundContribution.fundContributions.go();
});

When(/^the user accesses in the "([^"]*)" section of equity fund contributions$/, async function (option) {
    switch (option.toLowerCase()) {
        case 'simulation step':
            await currentPage.fillSimulationAmount();
            break;
        case 'summary step':
            await currentPage.accessEquityFundContributionsSummary();
            break;
        case 'confirm step':
            await currentPage.confirmEquityFundContribution();
            break;
        default:
            throw new Error(`${option} option is not available to navigate...`);
    }
});

When(/^the user completes the equity fund contributions process with "([^"]*)" otp code$/, async function (otp) {
    await navigation.equity.equityFundContribution.success.go({otp});
});
