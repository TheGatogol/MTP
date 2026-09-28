import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import securityProfile from '../../pages/securityProfile/securityProfile';

When(/^the user access to security profile$/, async function () {
    await navigation.securitySettings.securityMenu.go({forceLogin: true});
    await navigation.securityProfile.securityProfile.go();
});

When(/^the user access to completed actions$/, async function () {
    await securityProfile.accessCompletedActionsPage();
});

When(/^the user accesses to pending actions$/, async function () {
    await securityProfile.accessAllPendingActions();
});

When(/^the user accesses to update identity document page$/, async function () {
    await securityProfile.accessIdentityDocumentPage();
});

When(/^the user accesses to "([^"]*)" option on the security profile site$/, async function(option) {
    switch (option.toLowerCase()) {
        case 'notifications':
            await securityProfile.accessNotifications();
            break;
        case 'fido':
            await securityProfile.accessSoftwareToken();
            break;
        case 'email verification':
            await securityProfile.accessVerifyMail();
            break;
        case 'security tips':
            await securityProfile.accessSecurityTips();
            break;
        case 'online shopping':
            await securityProfile.accessOnlineShopping();
            break;
        case 'discreet mode':
            await securityProfile.accessDiscreetMode();
            break;
        case 'screen lock':
            await securityProfile.accessScreenLock();
            break;
        case 'app update':
            await securityProfile.accessAppUpdate();
            break;
        case 'identity document':
            await securityProfile.accessIdentityDocumentCard();
            break;
        default:
            throw new Error(`${option} option is not available to navigate to...`);
    }
});

