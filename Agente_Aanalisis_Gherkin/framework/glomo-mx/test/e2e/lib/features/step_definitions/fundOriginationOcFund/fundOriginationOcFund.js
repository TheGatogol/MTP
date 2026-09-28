import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import fundOriginationOcFund from '../../pages/fundOriginationOcFund/fundOriginationOcFund.js';

When(/^the user accesses contract product section from "([^"]*)"$/, async function(option) {
    await navigation.contractProductSection.go({option});
});

When(/^the user accesses to fund card from opportunities$/, async function(){
    await navigation.fundOriginationOcFund.fundOriginationOcFund.go();
});

When(/^the user selects the "([^"]*)" menu operative$/, async function(operative) {
    await fundOriginationOcFund.selectsOperative({operative});
});

When(/^the user successfully completed the investment$/, async function() {
    await currentPage.finish();
});

When(/^the user consult the "([^"]*)" question from the FAQ list$/, async function(faq) {
    await currentPage.openFaq(faq);
});

When(/^the user enters an amount of "([^"]*)"$/, async function(amount) {
    await currentPage.enterAmount(amount);
});

When(/^the user selects a valid account$/, async function() {
    await currentPage.selectsAccount();
});

When(/^the user confirms exit the operative$/, async function() {
    await currentPage.exitPage();
});

When(/^the user confirms the investment operation$/, async function() {
    await currentPage.confirmPurchase();
});

When(/^the user selects the "([^"]*)" document$/, async function(document) {
    await currentPage.selectsDocument(document);
});
