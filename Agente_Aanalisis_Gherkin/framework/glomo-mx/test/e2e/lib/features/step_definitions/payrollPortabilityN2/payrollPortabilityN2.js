import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

When(/^the user accesses the payroll portability n2$/, async function() {
    await navigation.account.productDetail.go({account: user.products.accounts[0]});
    await navigation.payrollPortabilityDocument.payrollPortabilityDocument.go();
});
