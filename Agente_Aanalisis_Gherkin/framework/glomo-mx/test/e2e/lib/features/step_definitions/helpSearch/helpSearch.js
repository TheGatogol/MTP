import {Then, When} from '@cucumber/cucumber';

// Utility requires
import * as navigation from '../../navigation';

import helpSearchPage from '../../pages/helpSearch/helpSearch';

When(/^the user accesses to the Help Section screen$/, async function() {
    await navigation.helpSearch.helpSearch.go();
});
When(/^the user introduces "([^"]*)" in the input$/, async function(word) {
    await helpSearchPage.searchFaqs(word);
});

Then(/^the user is in the dashboard screen$/, async function() {
    await navigation.dashboard.assert();
});

