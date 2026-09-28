import {When} from '@cucumber/cucumber';

// Page Objects
import accountsOtherOperativesPage from '../../pages/operatives/accountsOtherOperativesPage';

When(/^the user access to "([^"]*)" operation$/, async function(operative) {
    await accountsOtherOperativesPage.operations(operative);
});

When(/^the user access to "([^"]*)" operative$/, async function(operative) {
    switch(operative) {
        case 'cardless withdrawal':
            await accountsOtherOperativesPage.operations(operative);
            break;
        default:
    }
});
