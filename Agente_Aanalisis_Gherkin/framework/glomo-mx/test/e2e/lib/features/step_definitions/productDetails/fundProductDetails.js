import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import fundProductDetail from '../../pages/productDetails/fundProductDetail';
import fundMoreInfo from '../../pages/fund/fundMoreInfo';

function selectFundContract(investmentFundPosition) {
    const investmentFund = global.user.products.investmentFunds[investmentFundPosition];
    storage['selectedProduct'] = investmentFund;
    return investmentFund.id;
}

// STEP DEFINITIONS

When(/^the user accesses to fund product detail$/, async function() {
    const fund = selectFundContract(0);
    await navigation.fund.productDetail.go({fund});
});

When(/^the user enter to multiple date "([^"]*)" statement funds "([^"]*)"$/, async function(year, month) {
    await fundProductDetail.accesessMultipleDate(year, month);
});

When(/^the user enter to single date statement funds$/, async function() {
    await fundProductDetail.accesessSingleDate();
});

When(/^the user accesses to fund contract detail$/, async function() {
    await navigation.fund.moreInfo.go();
});

When(/^the user accesses to the fund$/, async function() {
    await navigation.fund.contractedFundDetail.go();
});

When(/^the user copies its fund "([^"]*)"$/, async function(field) {
    await fundMoreInfo.copyField(field);
});

When(/^the user wants to know about funds$/, async function() {
    await fundProductDetail.showTermsModal();
});

When(/^the user goes to "([^"]*)" fund contract$/, async function(operative) {
    await fundProductDetail.accessToOperative(operative.toLowerCase());
});
