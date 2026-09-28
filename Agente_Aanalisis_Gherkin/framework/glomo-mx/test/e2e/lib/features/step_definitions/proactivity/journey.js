import {When} from '@cucumber/cucumber';
import pfmDashboard from '../../pages/pfm/dashboard/dashboardDetail';

When(/^the user does not see the invitation$/, async function() {
    await pfmDashboard.doNotSeeTheInvitation();
});
