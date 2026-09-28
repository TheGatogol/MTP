import { When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import internationalTransfersPanelPage from '../../pages/internationalTransfer/internationalTransfersPanel';

When(/^the user accesses to international transfers panel screen$/, async function() {
    await navigation.internationalTransfer.internationalTransfersPanel.go();
});

When(/^the user accesses to make an international transfer and has "([^"]*)"$/, async function (accountsQty) {
    await navigation.internationalTransfer.internationalTransfersPanel.go();
    switch(accountsQty.toLowerCase()) {
        case 'one n4 account':
            await navigation.internationalTransfer.internationalTransfer.go({previousScreen: 'internationalTransfersPanel'});
            break;
        case 'many n4 account':
            await internationalTransfersPanelPage.goToInternationalTransfers();
            break;
        default:
            throw new Error(`Option "${accountsQty}" is not valid`);
    }
});

When(/^the user accesses to view movements "([^"]*)"$/, async function (movementType) {
    await navigation.internationalTransfer.internationalTransfersHistorical.go(movementType.toLowerCase());
});

When(/^the user selects the first account$/, async function () {
    await navigation.internationalTransfer.internationalTransfer.go({previousScreen: 'accountListModal'});
});
