import {When} from '@cucumber/cucumber';
import dashboard from '../../pages/dashboard/dashboard';
import OrangeCardProductDetail from '../../pages/productDetails/orangeCardProductDetail';
import accountProductDetail from '../../pages/productDetails/accountProductDetail';
import transfersPendingMovements from '../../pages/productDetails/transfersPendingMovements';
import accountTransaction from '../../pages/productDetails/accountTransactions';
import * as navigation from '../../navigation';
import accountTransactionDetail from '../../pages/productDetails/accountTransactionDetail';

When(/^the user goes to the standin account page/, async function() {
    await dashboard.accessAccount();
});

When(/^the user accesses to standin card detail page/, async function() {
    await dashboard.accessCardDetail();
});

When (/^the user access more info message/, async function () {
    await navigation.limitedOperativesInfo.limitedOperativesInfo.go();
});

When(/^the user selects "([^"]*)"$/, async function(option) {
    switch (option.toLowerCase()) {
        case 'detail movement standin':
            await navigation.account.accountTransactionDetail.go({standIn:true});
            break;
        case 'detail movement spei':
            await accountProductDetail.seeMovementDetail();
            break;
        case 'movement with informative modal':
            await accountTransaction.seeMovementDetail();
            break;
        case 'movement detail':
            await navigation.account.accountTransactionDetail.go({standIn:false});
            break;
        case 'share transaction':
            await accountTransactionDetail.shareTransaction();
            break;
        case 'switch off option':
            await OrangeCardProductDetail.standInSwitchCard();
            break;
        case 'paycard operative':
            await OrangeCardProductDetail.standInOperativeCard();
            break;
        case 'more info':
            await accountProductDetail.accountMoreInfoMessage();
            break;
        case 'view account data':
            await accountProductDetail.viewAccountData();
            break;
        case 'transfer operative':
            await accountProductDetail.verifyTransfer();
            break;
        case 'transfer operative disabled':
            await accountProductDetail.verifyTransferStandIn();
            break;
        case 'view more operative':
            await accountProductDetail.viewMoreOperatives();
            break;
        case 'contact footer option from dashboard':
            await currentPage.accessFooterTab(dashboard.FOOTER_TABS.CONTACT);
            break;
        case 'help section':
            await dashboard.goToFaqs();
            break;
        default:
            throw new Error(`${option} option is not available to navigate to...`);
    }
});

When(/^the user accesses to more operatives of the card in stand in mode$/, async function() {
    await OrangeCardProductDetail.viewMoreOperatives({closeTooltip: false });
});

When(/^the user selects a pending movement/, async function () {
    await transfersPendingMovements.selectPendingMovement();
});

When(/^the user cancels the pending movement with otp/, async function () {
    await transfersPendingMovements.cancelPendingMovement();
    await transfersPendingMovements.acceptCancelPendingMovement();
});

When(/^the user selects an account in pesos in stand in mode/, async function() {
    await navigation.dashboard.go();
    await dashboard.validateStandInAccess();
    const account = user.products[0].accounts[0];
    await navigation.account.productDetail.go({ account });
});

When(/^the user opens the info about a pending movement/, async function() {
    await transfersPendingMovements.openPendingMovementsInfoModal();
});

When(/^the user accesses to dashboard in stand in mode/, async function() {
    await navigation.dashboard.go();
    await dashboard.validateStandInAccess();
});
