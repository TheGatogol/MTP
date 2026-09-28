import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

// eslint-disable-next-line no-unused-vars
When(/^the user is in "([^"]*)" page$/, async function(operationFlow) {
    await navigation.feedback.demoFeedback.go({forceLogin: true});
});

// eslint-disable-next-line no-unused-vars
When(/^the user completes "([^"]*)" operative$/, async function(operationFlow) {
    await navigation.feedback.demoFeedback.go({forceLogin: true});
});

When(/^the user waits for the operation to exit$/, async function() {
    await navigation.feedback.feedbackContextualNPS.assert();
});

When(/^the user exits feedback page$/, async function() {
    await navigation.feedback.feedbackContextualNPS.assert();
    await currentPage.exitsFeedback();
});
