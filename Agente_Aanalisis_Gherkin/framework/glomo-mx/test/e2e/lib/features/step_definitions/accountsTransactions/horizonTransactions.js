import {When} from '@cucumber/cucumber';
import accountTransactions from '../../pages/productDetails/accountTransactions';
import * as navigation from '../../navigation';

When(/^the user views the list of movements$/, async function() {
    await navigation.account.accountTransactions.go();
    await accountTransactions.accessListMovements();
});

When(/^the user views informative modal$/, async function() {
    await accountTransactions.openHelpModal();
});
