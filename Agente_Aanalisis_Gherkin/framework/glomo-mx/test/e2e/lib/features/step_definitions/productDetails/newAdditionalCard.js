import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import orangeCardProductDetail from '../../pages/productDetails/orangeCardProductDetail';

When(/^the user go to detail card to add cards$/, async function() {
    await navigation.dashboard.go();
    await navigation.card.orangeCardProductDetail.go({card: user.products.cards[0].cardId});
});

When(/^the user go to request an additional credit card$/, async function() {
    await navigation.dashboard.go();
    await navigation.card.orangeCardProductDetail.go({card: user.products.cards[0].cardId});
    await orangeCardProductDetail.displayAdditionalCcModule();
    await navigation.card.newAdditionalCard.go();
    await currentPage.acceptOffer();
});

When(/^the user access to map from address step$/, async function() {
    await currentPage.interactStep({step:'all data'});
    await navigation.branchLocator.branchLocator.go();
});

When(/^the user "([^"]*)" "([^"]*)" from branch locator$/, async function(action, search) {
    await currentPage.interactStep({step:'all data'});
    await navigation.branchLocator.branchLocator.go();
    await navigation.branchLocator.searchBranch.go();
    (action==='search')?
        await currentPage.searchBranch(search):
        await navigation.branchLocator.branchLocator.go({flag: false});
});

When(/^the user opens help info from address step$/, async function() {
    await currentPage.interactStep({step:'all data'});
    await currentPage.accessAddressHelpInfo();
});

When(/^the user confirm modal/, async function() {
    await currentPage.goBack();
    await navigation.card.orangeCardProductDetail.go({card: ''});
});

When(/^the set an amount of "([^"]*)" pesos for credit limit$/, async function(value) {
    await currentPage.setCreditLimit(value);
});

When(/^the user try request additional credit card$/, async function() {
    await currentPage.requestAdditionalCard();
});

When(/^the user interact with "([^"]*)" step and "([^"]*)" flag state$/, async function(step, state) {
    const flagTranslate = {
        'active': true,
        'inactive': false
    };
    await currentPage.interactStep({step: step, flag: flagTranslate[state]});
});
