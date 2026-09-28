import {When} from '@cucumber/cucumber';

When('the user declines the service terms', async function() {
    await currentPage.declineServiceTerms();
});

When('the user closes the declination modal', async function() {
    await currentPage.closeDialog();
});
