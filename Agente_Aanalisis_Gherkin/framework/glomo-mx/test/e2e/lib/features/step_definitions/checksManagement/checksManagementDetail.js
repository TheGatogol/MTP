import {When} from '@cucumber/cucumber';
import * as utilsAccount from '../../utils/utilsAccount';
import * as navigation from '../../navigation';
import checksManagementList from '../../pages/checksManagement/checksManagementList';
import checksManagementDetail from '../../pages/checksManagement/checksManagementDetail';

async function navigateToProductDetailWithChecks() {
    const account = utilsAccount.getAccountChecksData('MXN', user);
    await navigation.account.productDetail.go({account});
}

When('the user accesses to options management screen', async function() {
    await navigateToProductDetailWithChecks();
    await navigation.checksManagement.checksManagementList.go();
    await checksManagementList.viewAllChecks();
});

When('the user accesses a {string} option Management screen', async function(status) {
    await navigation.checksManagement.checksManagementDetail.go({status});
});

When('the user cancels the operation', async function() {
    await checksManagementDetail.cancelCheckRelease();
});

When('the user enters the otp screen', async function() {
    await checksManagementDetail.cancelCheckRelease();
});

When('the user cancels a released check', async function() {
    await checksManagementDetail.cancelCheckRelease();
});

