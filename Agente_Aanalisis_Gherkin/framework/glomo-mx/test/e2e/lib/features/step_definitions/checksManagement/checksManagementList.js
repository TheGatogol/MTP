import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import * as utilsAccount from '../../utils/utilsAccount';
import checksManagementList from '../../pages/checksManagement/checksManagementList';

async function navigateToProductDetailWithChecks() {
    const account = utilsAccount.getAccountChecksData('MXN', user);
    await navigation.account.productDetail.go({account});
}

When('the user selects the option to add check', async function() {
    await navigation.checksManagement.checksManagement.go();
});

When('the user accesses to checks management view all', async function() {
    await navigateToProductDetailWithChecks();
    await navigation.checksManagement.checksManagementList.go();
    await checksManagementList.viewAllChecks();
});

When('the user accesses to checks management list', async function() {
    await navigateToProductDetailWithChecks();
    await navigation.checksManagement.checksManagementList.go();
});

When('the user accesses view all checks from the list', async function() {
    await checksManagementList.viewAllChecks();
});

When('the user accesses to checks management tap button filter', async function() {
    await navigateToProductDetailWithChecks();
    await navigation.checksManagement.checksManagementList.go();
    await checksManagementList.viewAllChecks();
    await navigation.checksManagement.checksManagementListSearcher.go();
});

When('the user filters by accepted status checks', async function() {
    await currentPage.editFilter({ status: 'charged' });
    await navigation.checksManagement.checksManagementList.go();
});

When('the user filters by last month to checks management', async function() {
    await currentPage.editFilter({ dateSelector: 'last month' });
    await navigation.checksManagement.checksManagementList.go();
});

When('the user filters by from amount to checks management', async function() {
    await currentPage.editFilter({ fromAmount: 'amount', toAmount: 'maxAmount', status: 'other than all' });
    await navigation.checksManagement.checksManagementList.go();
});

When('the user filters with no results to checks management', async function() {
    await currentPage.editFilter({ dateSelector: 'today', status: 'rejected' });
    await navigation.checksManagement.checksManagementList.go();
});

When('the user selects the filters and then deselects them', async function() {
    await currentPage.editFilter({ dateSelector: 'today', status: 'rejected' });
    await currentPage.deleteFilters();
});
