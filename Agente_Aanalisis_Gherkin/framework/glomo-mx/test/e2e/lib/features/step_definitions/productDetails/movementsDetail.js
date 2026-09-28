import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import movementsDetail from '../../pages/productDetails/movementsDetail';

When(/^the user selects pending transaction help$/, async function() {
    await movementsDetail.inTransitHelp();
});

When(/^the user returns to the previous screen$/, async function(){
    await navigation.card.orangeCardProductDetail.go();
});

When(/^the user enters to pay with points$/, async function() {
    const pageName = 'cardTransactionDetail';
    await movementsDetail.selectPayWhith();
    await navigation.reward.pointsPurchase.go({pageName});
});

When(/^the user logs in to pay with points, exits the screen$/, async function() {
    await movementsDetail.selectPayWhith();
    await movementsDetail.clousePay();
});

When(/^the user enters the screen to pay with points$/, async function() {
    await movementsDetail.selectPayWhith();
});

When(/^the user enters the help section and closes it$/, async function() {
    const pageName = 'cardTransactionDetail';
    await navigation.reward.faqDetailPoints.go({pageName});
    await navigation.card.movementsDetail.go();
});

When(/^the user closes the modal with "([^"]*)"$/, async function(option) {
    switch (option) {
        case 'cancel':
            await movementsDetail.exitSecondaryModal();
            break;
        case 'undershoot':
            await movementsDetail.acceptModal();
            break;
        case 'go out':
            await movementsDetail.exitModal();
            break;
        default:
            throw new Error('this option does not exist');
    }
});

When(/^the user opens help modal message$/, async function() {
    await movementsDetail.helpModal();
});

When(/^the user expands detail information$/, async function() {
    await movementsDetail.expandableSection();
});

When(/^the user copies the merchant address$/, async function() {
    await movementsDetail.copyMerchantAddress();
});

