import{When} from '@cucumber/cucumber';
import *as navigation from '../../navigation';
import mortgagePayment from '../../pages/mortgagePayment/mortgagePaymentPage';

function getAccountDetail(account){
    let accountFound;
    switch (account.toLowerCase()){
        case 'check':
        case 'mxn':
            accountFound= user.products[0].accounts[0];
            break;
        case 'udi':
            accountFound= user.products[0].accounts[1];
            break;
        case 'vsm':
            accountFound= user.products[0].accounts[2];
            break;
        default:
            throw new Error(`${account} Account detail is not available to navigate to...`);
    }
    return accountFound;
}

When(/^the user accesses to credit loan with "([^"]*)" money$/, async function(product) {
    const account= getAccountDetail(product);
    await navigation.mortgagePayment.mortgagePayment.go({account});
});

When (/^the user accesses to pay credit with the option "([^"]*)"$/, async function(option) {
    await navigation.mortgagePayment.mortgagePaymentAccess.go('pay loan');
    await mortgagePayment.accessOption(option);
});

When (/^the user select payment type "([^"]*)"$/, async function(option) {
    await mortgagePayment.continueSummary(option);
});

When (/^the user selects an "([^"]*)" and then change "([^"]*)" but selects "([^"]*)"$/, async function(account, operative, option) {
    await mortgagePayment.selectsAccount(account);
    await mortgagePayment.changeOneOperative(operative);
    await mortgagePayment.selectsOneStep(option);
});

When (/^the user return to mortgage detail$/, async function() {
    await navigation.mortgagePayment.mortgageCredit.go();
});

When (/^the user inputs "([^"]*)" an amount$/, async function(ammount) {
    await mortgagePayment.insertAmmount(ammount);
});

When (/^the user accesses to pay credit with the option "([^"]*)" and continue$/, async function(option) {
    await navigation.mortgagePayment.mortgagePaymentAccess.go('pay loan');
    await mortgagePayment.accessOption(option);
    await mortgagePayment.continueSummary(option);
});

When (/^the user pay the credit with "([^"]*)"$/, async function(account) {
    await mortgagePayment.selectsAccount(account);
    await mortgagePayment.payMortgage();
});

When (/^the user enters "([^"]*)" an amount and continue$/, async function(ammount) {
    await mortgagePayment.insertAmmount(ammount);
    await mortgagePayment.continueSummary('other amount');
    await mortgagePayment.continueSummary('detail other amount');
});

When (/^the user enters "([^"]*)" an amount and continue but decides choose other amount$/, async function(ammount) {
    await mortgagePayment.insertAmmount(ammount);
    await mortgagePayment.continueSummary('other amount');
    await mortgagePayment.goBackToEnterAmmount();
});

When (/^the user selects an "([^"]*)"$/, async function(account) {
    await mortgagePayment.selectsAccount(account);
});
