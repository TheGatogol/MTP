import {When} from '@cucumber/cucumber';

When(/^the user accesses to proposed action$/, async function() {
    await currentPage.accessProactivityTicketAction();
});
