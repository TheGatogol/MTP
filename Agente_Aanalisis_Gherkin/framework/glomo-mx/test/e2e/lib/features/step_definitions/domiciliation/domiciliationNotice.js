import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import domiciliationNoticeDetail from '../../pages/domiciliation/domiciliationNoticeDetail.js';

When(/^the user decides to exit the flow$/, async function() {
    await domiciliationNoticeDetail.exitDirectDebitMessage();
});

When(/^the user accepts domiciliation payment$/, async function() {
    await domiciliationNoticeDetail.acceptDirectDebit();
});

When(/^the user declines domiciliation payment$/, async function() {
    await domiciliationNoticeDetail.rejectedDirectDebit();
});

When(/^the user completes the direct debit successfully$/, async function() {
    await navigation.domiciliationNotice.domiciliationNoticeSuccess.go();
});

When(/^the user declines direct debit notice$/, async function() {
    await navigation.domiciliationNotice.domiciliationNoticeDecline.go();
});
