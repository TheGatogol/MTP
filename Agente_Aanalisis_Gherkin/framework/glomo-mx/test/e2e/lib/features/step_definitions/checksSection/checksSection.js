import {When} from '@cucumber/cucumber';
import * as utilsAccount from '../../utils/utilsAccount';
import * as navigation from '../../navigation';
import checkSection from '../../pages/checksSection/checksSection';
import accountProductDetail from '../../pages/productDetails/accountProductDetail';

async function navigateToProductDetailWithChecks() {
    const account = utilsAccount.getAccountChecksData('MXN', user);
    await navigation.account.productDetail.go({account});
}

When('the user accesses to checks operatives with checks management active', async function() {
    await navigateToProductDetailWithChecks();
    await navigation.checksSection.checksSection.go();
});

When('the user access account product detail with checks', async function() {
    await navigateToProductDetailWithChecks();
    await accountProductDetail.viewMoreOperatives();
});

When('the user accesses checks deposit option', async function() {
    await currentPage.goToSection('deposit');
});

When(/^the user selects the checks management option with "([^"]*)" service terms$/, async function(state) {
    switch (state.toLowerCase()) {
        case 'activated':
            await navigation.checksManagement.checksManagementList.go();
            break;
        case 'not activated':
            await navigation.checksManagement.checksManagementServiceTerms.go();
            break;
        default:
            logger.info(`State ${state} is invalid`);
            break;
    }
});

When('the user selects the checks management option', async function() {
    await navigation.checksManagement.checksManagementServiceTerms.go();
});

When('the user accesses checks management option', async function() {
    await currentPage.goToSection('management');
});

When('the user closes the Service Terms of the Checks Deposit modal', async function() {
    await currentPage.confirmDialog();
});

When('the user accesses the checks deposit list screen', async function() {
    await navigateToProductDetailWithChecks();
    await navigation.checksSection.checksSection.go();
    await navigation.checksDeposits.checksDepositsList.go();
});

When('the user accesses the filter check deposits list options screen', async function() {
    await navigateToProductDetailWithChecks();
    await navigation.checksSection.checksSection.go();
    await navigation.checksDeposits.checksDepositsList.go();
    await currentPage.viewMoreChecks();
    await navigation.checksDeposits.checksDepositsListSearcher.go();
});

When('the user attempts to access to the checks deposit list screen', async function() {
    await navigateToProductDetailWithChecks();
    await navigation.checksSection.checksSection.go();
    await currentPage.navigationAttempt('deposit');
});
When('the user attempts to access to the filter check deposits list options screen', async function() {
    await navigateToProductDetailWithChecks();
    await navigation.checksSection.checksSection.go();
    await navigation.checksDeposits.checksDepositsList.go();
    await currentPage.viewMoreChecks();
    await navigation.checksDeposits.checksDepositsListSearcher.go();
    await currentPage.editFilter({dateSelector: 'today'});
    await navigation.checksDeposits.checksDepositsList.go();
});

When('the user accesses to check deposits list options screen', async function() {
    await checkSection.goNextPage();
    await checkSection.acceptServiceTerms();
});

When('the user accesses to checks deposit option and accepts terms and conditions', async function() {
    await currentPage.goToSection('deposit');
    await checkSection.acceptServiceTermsSingleButton();
});
