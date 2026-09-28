import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

function getAccountDetail(account){
    let accountFound;
    switch (account.toLowerCase()){
        case 'check':
        case 'loan':
            accountFound= user.products[0].accounts[0];
            break;
        case 'none':
            accountFound= user.products[0].accounts[1];
            break;
        default:
            throw new Error(`${account} Account detail is not available to navigate to...`);
    }
    return accountFound;
}

When(/^the user access an account with "([^"]*)" transactions$/, async function(product) {
    const account= getAccountDetail(product);
    await navigation.account.productDetail.go({account});

});

When(/^the user access at "([^"]*)" movement$/, async function(movement) {
    await navigation.account.accountTransactionDetail.go({movement});
});
