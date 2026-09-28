import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import equityAssistancePage from '../../pages/equity/equityAssistancePage';

function selectContract(equityContractPosition) {
    const equityContract = global.user.products.equityContract[equityContractPosition];
    storage['selectedProduct'] = equityContract;
    return equityContract.id;
}

When(/^the user accesses to contract patrimonial$/, async function() {
    const account = selectContract(0);
    await navigation.equity.equity.go({account});
});

When(/^the user agrees to contact banker$/, async function() {
    await navigation.equity.equityAssistance.go();
});

When(/^the user calls office banker$/, async function() {
    await equityAssistancePage.callOfficeAssistance();
});

When(/^the user calls line equity assistance$/, async function() {
    await equityAssistancePage.callLineEquityAssistance();
});

When(/^the user accesses to second banker$/, async function() {
    await equityAssistancePage.accessBankerTwo();
});

When(/^the user accesses list of contracts$/, async function() {
    await equityAssistancePage.accessListContract();
});
