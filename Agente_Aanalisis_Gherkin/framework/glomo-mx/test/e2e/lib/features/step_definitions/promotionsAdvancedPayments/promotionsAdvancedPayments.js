import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import promotionsAdvancedPayments from '../../pages/promotionsAdvancedPayments/promotionsAdvancedPayments';

When(/^the user accesses to promotions advanced payments$/, async function() {
    await navigation.promotionsAdvancedPayments.promotionsAdvancedPayments.go();
});

When(/^the user reaches to "([^"]*)" payment$/, async function(type) {
    await promotionsAdvancedPayments.typePayment(type);
});

When(/^the user pays promotion advanced$/, async function() {
    await promotionsAdvancedPayments.summaryScreen();
});

When(/^the user enters import "([^"]*)" in amount pay step$/, async function(amount) {
    await promotionsAdvancedPayments.selectPromotions('0');
    await promotionsAdvancedPayments.continuePromotionStep();
    await promotionsAdvancedPayments.selectAmount('other amount');
    await promotionsAdvancedPayments.valueAmount(amount);
});

When(/^the user changes of "([^"]*)" and pay promotion advanced$/, async function(change) {
    await promotionsAdvancedPayments.selectAccount();
    await promotionsAdvancedPayments.selectChange(change);
    await promotionsAdvancedPayments.selectAccount();
    await promotionsAdvancedPayments.accessSummary();
});

When(/^the user accesses to show more accounts$/, async function() {
    await promotionsAdvancedPayments.selectPromotions('0');
    await promotionsAdvancedPayments.continuePromotionStep();
    await promotionsAdvancedPayments.selectAmount('monthly payment');
    await promotionsAdvancedPayments.continueAmountPayStep();
    await promotionsAdvancedPayments.selectAccount();
    await promotionsAdvancedPayments.selectChange('account');
    await promotionsAdvancedPayments.accessToViewMore();
});

When(/^the user accesses to show more promotions$/, async function() {
    await promotionsAdvancedPayments.accessToViewMorePromotions();
});

When(/^the user "([^"]*)" promotions advanced payments screen$/, async function(exit) {
    await promotionsAdvancedPayments.selectAccount();
    await promotionsAdvancedPayments.showModalExit();
    await promotionsAdvancedPayments.backModal(exit);
});

When(/^the user deposits an amount greater than his balance$/, async function() {
    await promotionsAdvancedPayments.selectPromotions('0');
    await promotionsAdvancedPayments.continuePromotionStep();
    await promotionsAdvancedPayments.selectAmount('monthly payment');
    await promotionsAdvancedPayments.continueAmountPayStep();
    await promotionsAdvancedPayments.selectAccount();
    await promotionsAdvancedPayments.changeAmount();
    await promotionsAdvancedPayments.selectAmount('other amount');
    await promotionsAdvancedPayments.valueAmount('14000');
});

When(/^the user exits promotions advanced payments when "([^"]*)"$/, async function (option) {
    switch(option){
        case 'promotion not applicable':
            await navigation.card.orangeCardProductDetail.go({card:'promotion not applicable'});
            break;
        case 'minimum not applicable':
            await navigation.card.orangeCardProductDetail.go({card:'minimum not applicable'});
            break;
        case 'on the summary screen':
            await promotionsAdvancedPayments.selectAccount();
            await promotionsAdvancedPayments.showModalExit();
            await navigation.card.orangeCardProductDetail.go({card:'exit'});
            break;
        default:
            throw new Error('undefined '<option>' option');
    }
});
