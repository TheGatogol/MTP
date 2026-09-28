import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import customerContractsPage from '../../pages/profile/customerContracts';

When(/^the user accesses to profile contracts list$/, async function () {
    await navigation.customerContracts.go();
});

When(/^the user returns to profile screen$/, async function() {
    await navigation.profile.go();
});

When(/^the user consult file with level up$/, async function() {
    await customerContractsPage.consultContract();
});
