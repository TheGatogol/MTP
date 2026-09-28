import {When} from '@cucumber/cucumber';
import mgmPayrollPortability from '../../pages/memberGetMemberPayrollPortability/memberGetMemberPayrollPortability';

When(/^the user invites someone else$/, async function() {
    await mgmPayrollPortability.registerOtherInvite();
});

When(/^the user "([^"]*)" the referrals personal information portabilidad$/, async function(option) {
    switch (option.toLowerCase()) {
        case 'registers':
            await mgmPayrollPortability.registerPersonalInformation();
            break;
        default:
            throw new Error(`Unknown deeplinking navigation: ${screen}`);
    }
});

When(/^the user fills out the form input up to the "([^"]*)" incorrectly$/, async function(option) {
    switch (option.toLowerCase()) {
        case 'first last name':
            await mgmPayrollPortability.fillOutFormIncorrectlyUntilFirstLastName();
            break;
        case 'second last name':
            await mgmPayrollPortability.fillOutFormIncorrectlyUntilSecondLastName();
            break;
        case 'email':
            await mgmPayrollPortability.fillOutFormIncorrectlyUntilEmail();
            break;
        case 'birthday':
            await mgmPayrollPortability.fillOutFormIncorrectlyUntilBirthday();
            break;
        default:
            throw new Error(`Unknown deeplinking navigation: ${screen}`);
    }
});
