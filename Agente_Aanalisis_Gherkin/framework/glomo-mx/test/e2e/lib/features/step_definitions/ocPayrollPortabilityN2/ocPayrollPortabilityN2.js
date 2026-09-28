import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import payrollPortability from '../../pages/payrollPortability/payrollPortability';

When(/^the user accesses to the oc payroll portability n2$/, async function() {
    await navigation.contractProductSection.go();
    await navigation.proceedings.proceedings.go();
    await navigation.payrollPortability.payrollPortability.go();
});

When(/^the user accesses proceedings from "([^"]*)"$/, async function(action) {
    if (action === 'opportunities') {
        await navigation.contractProductSection.go();
    } else {
        await navigation.dashboard.go();
    }
    await navigation.proceedings.proceedings.go();
});

When(/^the user closes the success portability$/, async function() {
    await payrollPortability.exitProcess();
    await navigation.dashboard.assert();
});
