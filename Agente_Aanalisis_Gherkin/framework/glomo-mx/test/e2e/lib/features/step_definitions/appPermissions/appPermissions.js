import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
// import accessAndSignarutes from '../../pages/accessAndSignatures/accessAndSignaturesDashboard';
import appPermissionPage from '../../pages/appPermissions/appPermissions';

// STEP DEFINITIONS

When(/^the user accesses to app permissions$/, async function() {
    await navigation.appPermissions.appPermissionsDashBoard.go();
    await appPermissionPage.showPermissions();
});

When(/^the user accesses to app permissions helps screen$/, async function() {
    await navigation.appPermissions.appPermissionsDashBoard.go();
    await appPermissionPage.showModalHelp();
});
