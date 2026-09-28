import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

When(/^the user accesses to parental control (account|card) limits$/, async function(context) {
    switch(context.toLowerCase()){
        case 'account':
            await navigation.account.productDetail.go({account: global.user.products.accounts[0]});
            await navigation.parentalControl.parentalControlAccounts.go();
            break;
        case 'card':
            await navigation.card.orangeCardProductDetail.go({card: global.user.products.cards.cardId});
            await navigation.parentalControl.parentalControlCards.go();
            break;
        default:
            throw new Error(`The ${context} option is not available or was not found`);
    }
});

When(/^the user accepts the "([^"]*)" modal$/, async function(helpModal){
    await currentPage.closeModal(helpModal);
});

When(/^the user cancels the limit editing process$/, async function(){
    await currentPage.cancelLimitEditing();
});

When(/^the user selects the limit edit space$/, async function(){
    await currentPage.focusLimitEditing();
});
