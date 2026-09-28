import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import cardlessWithdrawalDetail from '../../pages/cardlessWithdrawal/cardlessWithdrawalDetail';
import cardlessWithdrawalHistoric from '../../pages/cardlessWithdrawal/cardlessWithdrawalHistoric';

When(/^the user accesses to cardless withdrawal with "([^"]*)" status$/, async function(withdrawalStatus) {
    await navigation.cardlessWithdrawal.cardlessWithdrawalDetail.go(withdrawalStatus);
});

When(/^the user cancel the withdrawal$/, async function() {
    await cardlessWithdrawalDetail.cancelWithdrawal();
    await currentPage.confirmDialog({isConfirmed: true});
});

When(/^the user accesses info modal cardlessWithdrawal$/, async function() {
    await currentPage.goInfo();
});

When(/^the user selects cardless withdrawal commerce$/, async function() {
    await navigation.cardlessWithdrawal.cardlessWithdrawalCommerce.go();
});

When(/^the user returns to previous pages$/, async function() {
    await cardlessWithdrawalDetail.goBack();
    await cardlessWithdrawalHistoric.goBack();
});
