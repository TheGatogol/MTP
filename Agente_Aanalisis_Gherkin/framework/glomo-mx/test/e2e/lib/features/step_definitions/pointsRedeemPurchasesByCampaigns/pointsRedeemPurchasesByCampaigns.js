import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import notificationsCenter from '../../pages/notificationsCenter/notificationsCenter';
import pointsRedeemPurchasesByCampaigns from '../../pages/pointsRedeemPurchasesByCampaigns/pointsRedeemPurchasesByCampaigns';

When(/^the user accesses the pay with points detail notification$/, async function() {
    await notificationsCenter.detailPromotion(user.notifications.notifictationId);
    await navigation.pointsRedeemPurchasesByCampaigns.pointsRedeemPurchasesByCampaigns.go();
});

When(/^the user completes a payment with points for a "([^"]*)" transaction$/, async function (type) {
    await pointsRedeemPurchasesByCampaigns.completedConversion(type);
});

When(/^the user closes the success screen$/, async function () {
    await pointsRedeemPurchasesByCampaigns.closeSuccessScreen();
});

When(/^the user opens the "([^"]*)" modal for a "([^"]*)" transaction$/, async function (action, type) {
    await pointsRedeemPurchasesByCampaigns.selectMoreDetailsModal(action, type);
});

When(/^the user closes the "([^"]*)" points modal$/, async function (action) {
    await pointsRedeemPurchasesByCampaigns.closeMoreDetailsModal(action);
});

When(/^the user exits the pay with points flow without completing the transaction$/, async function () {
    await pointsRedeemPurchasesByCampaigns.exitPayWithPointsFlow();
});

When(/^the user accesses points and promotions$/, async function () {
    await pointsRedeemPurchasesByCampaigns.goToPointsAndPromotions();
});

When(/^the user accesses the help section and selects "?([^"]*)"?$/, async function (type) {
    await pointsRedeemPurchasesByCampaigns.goToHelpSection(type);
});
