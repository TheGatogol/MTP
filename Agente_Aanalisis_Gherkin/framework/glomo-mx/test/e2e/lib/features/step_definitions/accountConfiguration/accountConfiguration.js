import {When} from '@cucumber/cucumber';
import accountConfigurationPage from '../../pages/accountConfiguration/accountConfiguration';

When(/^the user enters to "([^"]*)"$/, async function(link) {
    await accountConfigurationPage.interactionWithLinks(link);
});

When(/^the user enters to configure after$/, async function() {
    await accountConfigurationPage.interactionWithModal();
});

When(/^the user closes the modal "([^"]*)"$/, async function(close) {
    await accountConfigurationPage.exitModal(close);
});
