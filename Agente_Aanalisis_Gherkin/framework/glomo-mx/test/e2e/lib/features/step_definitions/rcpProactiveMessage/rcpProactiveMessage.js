import {When} from '@cucumber/cucumber';
import accountProductDetail from '../../pages/productDetails/accountProductDetail';
import upgradeCustomer from '../../pages/upgradeCustomer/upgradeCustomer';
import * as navigation from '../../navigation';

When(/^the user open rcp more info modal with "([^"]*)" level$/, async function(level) {
    await accountProductDetail.openRcpMoreInfo(level);
});

When(/^the user close the account limit container "([^"]*)"$/, async function(level) {
    await accountProductDetail.closeRcpMessage(level);
});

When(/^the user retry error to remove the limit$/, async function() {
    await upgradeCustomer.retryError();
});

When(/^the user accesses to upgrade customer from rcp message with "([^"]*)" level$/, async function(level) {
    await navigation.upgradeCustomer.upgradeCustomer.go({ entryPoint: 'rcp message', level });
});
