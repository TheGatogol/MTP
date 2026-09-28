import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import depositSalePage from '../../pages/depositSale/depositSale.js';

When(/^the user select deposit sale$/, async function() {
    await navigation.depositSale.depositSale.go();
});

When(/^the user accesses deposit sale review$/, async function() {
    await navigation.depositSale.depositSaleReview.go();
});

When(/^the user select continue sale$/, async function() {
    await depositSalePage.selectDeposit();
});
