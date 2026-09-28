import {Then, When} from '@cucumber/cucumber';
// Utility requires
import * as navigation from '../../navigation';
// Page Objects
import editAliasPage from '../../pages/operatives/editAlias';
import orangeCardProductDetail from '../../pages/productDetails/orangeCardProductDetail';
import accountProductDetail from '../../pages/productDetails/accountProductDetail';
import loanPage from '../../pages/loan/loanPage';
import equity from '../../pages/equity/equityPage';
import unitLinked from '../../pages/unitLinked/unitLinked';

Then(/^the user accesses the edit alias$/, async function() {
    const pageName = 'operatives';
    await navigation.card.editAlias.go({pageName});
});

Then(/^the user accesses the edit alias account$/, async function() {
    await navigation.account.editAlias.go();
});

Then(/^the user updates the current alias with the new alias "([^"]*)"$/, async function(alias) {
    if (alias !== 'for analytics') {
        await editAliasPage.updateAlias(alias);
    }
    await editAliasPage.save();
});

Then(/^the user cancels the edit alias operation$/, async function() {
    await editAliasPage.cancelAlias();
});

When(/^the user cancels return$/, async function() {
    await editAliasPage.cancelReturn();
});

When(/^the user sees in "([^"]*)" screen correctly updated "([^"]*)" alias$/, async function(screen, newAlias) {
    switch(screen.toLowerCase()) {
        case 'orange card detail':
            await orangeCardProductDetail.verifyAliasCardName(newAlias);
            break;
        case 'loan detail':
            await loanPage.verifyAliasLoanName(newAlias);
            break;
        case 'equity detail':
            await equity.verifyAliasEquityName();
            break;
        case 'Unit Linked Detail':
            await unitLinked.verifyAliasUnitLinkedName(newAlias);
            break;
        default:
            logger.debug('Your page its not defined');
            break;
    }
});

Then(/^the user cancel the edit alias and back to the previous page$/, async function() {
    await editAliasPage.backEditAlias();
});

Then(/^The user modifies the alias to "([^"]*)" and cancels the alias editing$/, async function(alias) {
    await editAliasPage.modifyEditAlias(alias);
});

Then(/^the user try updates the current alias with the new alias "([^"]*)"$/, async function(alias) {
    await editAliasPage.updateAlias(alias);
});

Then(/^the user clears and updates the alias with "([^"]*)"$/, async function(alias) {
    await editAliasPage.cleanAlias();
    await editAliasPage.updateNewAlias(alias);
    await editAliasPage.saveNewAlias();
});

Then(/^the user sees save button disabled on the screen$/, async function() {
    await editAliasPage.acceptButtonIsDisabled();
});

When(/^the user sees correctly updated "([^"]*)" alias account$/, async function(newAlias) {
    await accountProductDetail.verifyAliasAccountName(newAlias);
});

When(/^the user sees correctly updated "([^"]*)" alias$/, async function(newAlias) {
    await orangeCardProductDetail.verifyAliasCardName(newAlias);
});

When(/^the user cancels edit alias operation$/, async function() {
    await editAliasPage.cancelNewAlias();
});

When(/^the user close edit alias operation$/, async function() {
    await editAliasPage.closeNewAlias();
});

When(/^the user updates the alias with the new alias "([^"]*)"$/, async function(alias) {
    await editAliasPage.updateNewAlias(alias);
});

When(/^the user "([^"]*)" the new alias$/, async function(option) {
    await editAliasPage.handleAliasOption(option);
});

When(/^the user return to product detail account$/, async function() {
    await navigation.account.productDetail.go();
});
