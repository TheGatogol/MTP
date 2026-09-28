import * as navigation from '../../navigation';

import {When} from '@cucumber/cucumber';

When('the user accesses to the Funds add new contract screen', async function() {
    await navigation.diy.fundAddNewContract.multiStep.go();
});

When('the user completes a simulation in the Funds add new contract screen', async function() {
    await currentPage.goToStep('amount');
    await currentPage.simulateAmountContribution();
});

When('the user confirms to add a new fund contract', async function() {
    await currentPage.goToStep('summary');
    await currentPage.doContinue();
});

When('the user successfully add a new fund contract', async function() {
    await navigation.diy.fundAddNewContract.receipt.go();
});
