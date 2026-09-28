import {Then, When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import pointsTransferPage from '../../pages/reward/pointsTransfer';

When(/^the user sees error modal of that not have enough points/, async function() {
    await currentPage.checkModal({size: 'small', title: false});
});

When(/^the user accesses all cards/, async function() {
    await navigation.reward.myBbvaCards.go();
});

When(/^the user selects the target card to points transfer/, async function() {
    await pointsTransferPage.selectTargetCard();
});

When(/^the user selects change "([^"]*)"/, async function(step) {
    await pointsTransferPage.multiStepChangeOption(step);
});

When(/^the user fills amount of "([^"]*)" to transfer to target card$/, async function(amount) {
    await pointsTransferPage.selectTargetCard();
    await pointsTransferPage.selectPointsType('another amount of points');
    await pointsTransferPage.insertAmount(amount);

});

When(/^the user sees the section of target card change$/, async function() {
    await pointsTransferPage.sectionTargetCardChange();
});

When(/^the user changes to step "([^"]*)" and confirm the card change$/, async function(step) {
    await pointsTransferPage.multiStepChangeOption(step);
    await pointsTransferPage.confirmChangeCard();
});

When(/^the user changes to step "([^"]*)" and keep the card change$/, async function(step) {
    await pointsTransferPage.multiStepChangeOption(step);
    await pointsTransferPage.keepChangeCard();
});

Then(/^the user transfer all "([^"]*)" to target card$/, async function(pointsType) {
    await pointsTransferPage.selectTargetCard();
    await pointsTransferPage.selectPointsType(pointsType);
    await pointsTransferPage.confirmPoints();
});

Then(/^the user transfer "([^"]*)" points to target card$/, async function(amount) {
    await pointsTransferPage.selectTargetCard();
    await pointsTransferPage.confirmSpecificPoints(amount);
});

When(/^the user selects the target card to transfer points from all my cards$/, async function() {
    await navigation.reward.myBbvaCards.go();
    await navigation.reward.pointsTransfer.go();
});

Then(/^the user changes to step "([^"]*)" and confirm points$/, async function(step) {
    await pointsTransferPage.multiStepChangeOption(step);
    await pointsTransferPage.confirmSpecificPoints(300);
});
