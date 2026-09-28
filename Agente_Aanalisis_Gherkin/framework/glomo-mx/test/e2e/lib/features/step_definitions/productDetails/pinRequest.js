import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import pinRequest from '../../pages/operatives/pinRequest';

function getAccountDetail(account){
    let accountFound;
    switch (account.toLowerCase()){
        case 'debit':
            accountFound= user.products[0].accounts[1];
            break;
        case 'credit':
            accountFound= user.products[0].accounts[2];
            break;
        case 'platinum':
            accountFound= user.products[0].accounts[3];
            break;
        case 'blue':
            accountFound= user.products[0].accounts[4];
            break;
        case 'education':
            accountFound= user.products[0].accounts[0];
            break;
        case 'gold':
            accountFound= user.products[0].accounts[5];
            break;
        case 'vive':
            accountFound= user.products[0].accounts[6];
            break;
        case 'unam':
            accountFound= user.products[0].accounts[7];
            break;
        case 'ipn':
            accountFound= user.products[0].accounts[8];
            break;
        case 'rayados':
            accountFound= user.products[0].accounts[9];
            break;
        case 'infinite':
            accountFound= user.products[0].accounts[1];
            break;
        case 'crea':
            accountFound= user.products[0].accounts[14];
            break;
        case 'wrong cvv':
            accountFound= user.products[0].accounts[11];
            break;
        case 'alfanumeric cvv':
            accountFound= user.products[0].accounts[12];
            break;
        case 'less than three cvv':
            accountFound= user.products[0].accounts[13];
            break;
        default:
            throw new Error(`${account} Account detail is not available to navigate to...`);
    }
    return accountFound;
}

When(/^the user access to an "([^"]*)" card$/, async function(product) {
    const account= getAccountDetail(product);
    await navigation.pinViewCvv.pinViewCvv.go({account});
});

When(/^the user access to view more operatives$/, async function() {
    await currentPage.viewMoreOperatives();
});

When(/^the user accesses to an "([^"]*)" card and go to view more operatives and select the view nip option$/, async function(product) {
    const account= getAccountDetail(product);
    const pageName = 'operatives';
    await navigation.pinViewCvv.pinViewCvv.go({account});
    await currentPage.viewMoreOperatives();
    await navigation.card.pinRequest.go({pageName});
});

When(/^the user input a cvv to "([^"]*)" card$/, async function(account) {
    const {cvv: cvv} = getAccountDetail(account);
    await pinRequest.entersCvv(cvv);
});

When(/^the user select the "([^"]*)" option$/, async function(operative) {
    await pinRequest.continueOperative(operative);
});

When(/^the user confirms he leaves to operative$/, async function() {
    await navigation.pinViewCvv.pinViewCvv.go();
});
