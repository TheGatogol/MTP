import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import profilePage from '../../pages/profile/profile';
import updateEmailPage from '../../pages/emailManagement/updateEmail';

When(/^the user accesses to "([^"]*)" email screen$/, async function(screen) {
    await navigation.profile.go({forceLogin: true});
    if (screen === 'add')
        await navigation.emailManagement.updateEmail.go({add: true});
    else {
        await profilePage.unmaskEmailData();
        await navigation.emailManagement.updateEmail.go({add: false});
    }
});

When(/^the user adds or updates its mail "([^"]*)"$/, async function(type) {
    await updateEmailPage.fillInput('both');
    await updateEmailPage.addEmail();
    if (type === 'successfully') {
        await navigation.emailManagement.validateEmail.go();
    }
});

When(/^the user fills the first input with an ([^"]*) mail$/, async function(input) {
    await updateEmailPage.fillInput(input);
});

When(/^the user sees an error message below the "([^"]*)" input$/, async function(value) {
    await updateEmailPage.isErrorMessageShowed(value);
});

When(/^the user acceses to review the privacy notice$/, async function() {
    await updateEmailPage.showPrivacyNotice();
});

When(/^the user is in the validate email screen$/, async function() {
    await navigation.emailManagement.validateEmail.assert();
});

When(/^the user fills both inputs but mails dont match$/, async function() {
    await updateEmailPage.fillInput('discord');
});

When(/^the user delete ([^"]*) entered$/, async function(email) {
    if(email === 'format'){
        await updateEmailPage.fillInput('format');
        await updateEmailPage.deleteEmailAddress();
    } else {
        await updateEmailPage.fillInput('both');
        await updateEmailPage.deleteEmailConfirm();
    }
});

When(/^the user delete ([^"]*) entered pending$/, async function (email) {
    await navigation.emailManagement.updateEmail.go({add: false});
    if (email === 'format') {
        await updateEmailPage.deleteEmailAddress();
    } else {
        await updateEmailPage.fillInput('both');
        await updateEmailPage.deleteEmailConfirm();
    }
});

When(/^the user closes screen add email$/, async function () {
    await updateEmailPage.closePage();
});
