import { When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';

When(/^the user enter to invitation non account page from "([^"]*)" section$/, async function(access) {
    await navigation.invitationNonAccountClient.invitationNonAccountClient.go(access);
});

When( /^the user enter to invitation non account page from "([^"]*)" option in configure products/, async function (access) {
    await navigation.invitationNonAccountClient.invitationNonAccountClient.go(access);
});
