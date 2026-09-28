import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import pointsTransferReviewPage from '../../pages/reward/pointsTransferReview';

When(/^the user finishes the points transfer process$/, async function() {
    await navigation.reward.pointsTransferReview.go();
});

When(/^the user attempts finish the points transfer process$/, async function() {
    await navigation.reward.pointsTransferReview.attempt();
});

When(/^the user goes back to reward after using the different exit actions "([^"]*)"$/, async function (action) {
    await pointsTransferReviewPage.goBack(action);
});
