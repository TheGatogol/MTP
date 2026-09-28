import { When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';

When(/^the user accesses to petty expenses$/, async function() {
    await navigation.pfm.pettyExpensesNavigation.pettyExpensesNavigation.go();
});
