import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import ChangePassword from '../../pages/keyRecoveryUpdate/keyRecoveryUpdate';
import accessAndSignaturesDashboard from '../../pages/securityAccess/securityAccess';

When(/^the user goes to change password option$/, async function () {
    await navigation.changePassword.ChangePassword.go();
});

When(/^the user goes to password help option$/, async function () {
    await ChangePassword.selecButtonHelp();
});

When(/^the user enter new "([^"]*)" password$/, async function (typeNewPassword) {
    switch(typeNewPassword){
        case'valid':
            await ChangePassword.enterTheNewPassword('Glomo2025');
            break;
        case'invalid':
            await ChangePassword.enterTheNewPassword('glomo20');
            break;
        case'equal consecutive numbers invalid':
            await ChangePassword.enterTheNewPassword('11111111');
            break;
        case'consecutive numbers invalid':
            await ChangePassword.enterTheNewPassword('12345678');
            break;
        default:
            throw new Error(`Not recognized option "${typeNewPassword}"`);
    }
});
When(/^the user enter valid password$/, async function () {
    await ChangePassword.enterPassword('Glomo2000');
});

When(/^the user confirm with "([^"]*)" password$/, async function (typeCOnfirmNewPassword) {
    switch(typeCOnfirmNewPassword){
        case'valid':
            await ChangePassword.confirmTheNewPassword('Glomo2025');
            break;
        case'invalid':
            await ChangePassword.confirmTheNewPassword('glomo20');
            break;
        default:
            throw new Error(`Not recognized option "${typeCOnfirmNewPassword}"`);
    }
});

When(/^the user cancel password change$/, async function () {
    await ChangePassword.cancelPasswordChange();
});

When(/^the user confirm the password change$/, async function () {
    await ChangePassword.confirmChangePassword('11111111');
});

When(/^the user completes the change password with the same password$/, async function () {
    await ChangePassword.enterPassword('Glomo2024');
    await ChangePassword.enterTheNewPassword('Glomo2024');
    await ChangePassword.confirmTheNewPassword('Glomo2024');
    await ChangePassword.continueChangePassword();
});

When(/^the user enter "([^"]*)" current password$/, async function (typePassword) {
    switch(typePassword){
        case'correct':
            await ChangePassword.enterPassword('Glomo2023');
            break;
        case'wrong':
            await ChangePassword.enterPassword('glomo20');
            break;
        default:
            throw new Error(`Not recognized option "${typePassword}"`);
    }
});

When(/^the user continue with password change$/, async function () {
    await ChangePassword.continueChangePassword();
});

When(/^the user closes the access and signatures tips screen$/, async function () {
    await accessAndSignaturesDashboard.closeFirstModal();
});

When(/^the user completes the change password$/, async function () {
    await ChangePassword.enterPassword('Glomo2023');
    await ChangePassword.enterTheNewPassword('Glomo2024');
    await ChangePassword.confirmTheNewPassword('Glomo2024');
    await ChangePassword.continueChangePassword();
    await ChangePassword.confirmChangePassword('11111111');
    await navigation.accessAndSignatures.accessAndSignaturesDashboard.assert();
});

When(/^the user closes initial modal in access and signatures screen$/, async function () {
    await navigation.accessAndSignatures.accessAndSignaturesDashboard.go();
    await accessAndSignaturesDashboard.closeFirstModal();
});

When(/^the user access to change password screen$/, async function () {
    await accessAndSignaturesDashboard.closeFirstModal();
    await navigation.changePassword.ChangePassword.go();
});

When(/^the user completes form with "([^"]*)" current password$/, async function (typePassword) {
    if(typePassword === 'correct') {
        await ChangePassword.enterPassword('Glomo2023');
    } else {
        await ChangePassword.enterPassword('Glomo2020');
    }
    await ChangePassword.enterTheNewPassword('Glomo2026');
    await ChangePassword.confirmTheNewPassword('Glomo2026');
});

When(/^the user completes form with valid current password$/, async function () {
    await ChangePassword.enterPassword('Glomo2020');
    await ChangePassword.enterTheNewPassword('Glomo2026');
    await ChangePassword.confirmTheNewPassword('Glomo2026');
    await ChangePassword.continueChangePassword();
    await ChangePassword.confirmChangePassword('11111111');
});

When(/^the user retries to update password twice$/, async function () {
    await ChangePassword.changePassword();
});

When(/^the user retries change password operation "([^"]*)" times$/, async function (times) {
    await ChangePassword.retryOperative(times);
});
