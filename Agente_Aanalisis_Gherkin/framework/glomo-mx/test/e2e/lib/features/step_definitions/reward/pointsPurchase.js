import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import pointsPurchasePage from '../../pages/reward/pointsPurchase';
import movementsDetailPage from '../../pages/productDetails/movementsDetail';
import faqDetailPointsPage from '../../pages/reward/faqDetailPoints';

When(/^the user accesses to Pay with Points$/, async function() {
    await navigation.reward.pointsPurchase.go();
});

When(/^the user attempts to accesses to Pay with Points$/, async function() {
    await navigation.reward.pointsPurchase.attempt();
});

When(/^the user continues with the pay process$/, async function() {
    await navigation.reward.pointsPurchaseReceipt.attempt();
});

When(/^the user accesses to faq questions page$/, async function() {
    const pageName = 'cardTransactionDetail';
    await navigation.reward.faqDetailPoints.attempt({pageName});
});

When(/^the user accesses the points pay summary$/, async function() {
    await currentPage.continueProcess();
    await pointsPurchasePage.verifySummary();
});

When(/^the user goes to Pay with Points$/, async function() {
    await movementsDetailPage.accessPayWithPoints();
});

When(/^the user selects use my points$/, async function() {
    const pageName = 'cardTransactionDetail';
    await navigation.reward.pointsPurchase.go({pageName});
});

When(/^the user completes Pay with Points process$/, async function() {
    await navigation.reward.pointsPurchase.go();
    await navigation.reward.pointsPurchaseReceipt.attempt();
});

When(/^the user goes to back to the "([^"]*)" using the exit action$/, async function(action) {
    switch(action.toLowerCase()) {
        case 'transaction detail':
            await movementsDetailPage.closePobModal();
            break;
        case 'target audience purchase modal':
            await faqDetailPointsPage.closeFaqs();
            break;
        default:
            throw new Error('Selected option is not available...');
    }
});

When(/^the user exits the pay with points screen$/, async function() {
    await navigation.card.movementsDetail.go();
});

When(/^the user will pay with points$/, async function() {
    await pointsPurchasePage.continueProcess();
});

When(/^the user exits the success screen using the option "([^"]*)"$/, async function(type) {
    await navigation.card.orangeCardProductDetail.go(type);
});
