import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

When(/^the user accesses to the Application Feedback screen$/, async function() {
    await navigation.feedback.applicationFeedback.go();
});

When(/^the user leaves the feedback process$/, async function() {
    await currentPage.leaveTheProcess();
});
