import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import clarificationsManagementCarePage from '../../pages/clarifications/clarificationsManagementCarePage';

function getDataCard(cardType, cardName) {
    const cardProduct = global.user.products.cards.find(element => element.cardType.name === cardType && element.status.id === 'OPERATIVE' && element.status.name === 'VIGENTE' && element.product.name === cardName);
    storage['selectedProduct'] = cardProduct;
}

function getAccountData() {
    storage['selectedProduct'] = global.user.products.account[0];
}

When(/^the user accesses to "([^"]*)" "([^"]*)" card and selects "([^"]*)" movement$/, async function(cardName, cardType, movementSelector)  {
    getDataCard(cardType, cardName);
    await navigation.card.orangeCardProductDetail.go({card: storage['selectedProduct'].cardId});
    await navigation.clarifications.clarificationsManagementCarePage.go({movementSelector});
});

When(/^the user accesses to "([^"]*)" "([^"]*)" card and selects "([^"]*)" from all transit movements$/, async function(cardName, cardType, movementSelector)  {
    getDataCard(cardType, cardName);
    await navigation.card.orangeCardProductDetail.go({card: storage['selectedProduct'].cardId});
    await navigation.card.movementsDetail.go();
    await navigation.clarifications.clarificationsManagementCarePage.go({movementSelector, forTransit: true});
});

When(/^the user accesses to clarification movement detail of "([^"]*)" "([^"]*)"$/, async function(cardName, cardType)  {
    await getDataCard(cardType, cardName);
    await navigation.card.orangeCardProductDetail.go({card: storage['selectedProduct'].cardId});
    await navigation.card.movementsDetail.go({movementSelector: 'request payment'});
});

When(/^the user accesses to account and selects a movement from "([^"]*)" displacement$/, async function(access)  {
    getAccountData();
    await navigation.account.productDetail.go({account: storage['selectedProduct']});
    await navigation.account.accountTransactionDetail.go({origin: access});
    await navigation.clarifications.clarificationsManagementCarePage.go();
});

When(/^the user accesses to clarification screen$/, async function() {
    await navigation.clarifications.clarificationsManagementCarePage.go();
});

When(/^the user selects "([^"]*)" option of clarifications payment$/, async function(clarificationReason) {
    await clarificationsManagementCarePage.clarificationsReason(clarificationReason);
});

When(/^the user selects the "([^"]*)" option of clarifications payment$/, async function(clarificationReason) {
    await clarificationsManagementCarePage.selectRadioButton(clarificationReason);
});

When(/^the user selects "([^"]*)" attention type$/, async function(attentionType) {
    await clarificationsManagementCarePage.attentionType(attentionType);
});

When(/^the user confirms payment clarifications/, async function() {
    await navigation.clarifications.clarificationsManagementClarificationSuccessPage.go();
});

When(/^the user confirms payment refund/, async function() {
    await navigation.clarifications.clarificationsManagementCareSuccessPage.go();
});

When(/^the user authorizes and confirms block of "([^"]*)" "([^"]*)"$/, async function(blockType, attentionType) {
    if (blockType.includes('payment') || blockType.includes('direct debit')) {
        await clarificationsManagementCarePage.blockPaymentAccept(blockType);
    }
    if (blockType.includes('card')) {
        await clarificationsManagementCarePage.blockCardAccept();
    }
    const successPage = attentionType === 'clarification' ? navigation.clarifications.clarificationsManagementClarificationSuccessPage : navigation.clarifications.clarificationsManagementCareSuccessPage;
    await successPage.go({blockType});
});

When(/^the user authorizes block of recurrent payment/, async function() {
    await clarificationsManagementCarePage.blockPaymentAccept();
});

When(/^the user authorizes block of card/, async function() {
    await clarificationsManagementCarePage.blockCardAccept();
});
