import {When} from '@cucumber/cucumber';
import assistancePage from '../../pages/assistance/assistance';
import * as navigation from '../../navigation';

When(/^the user calls to assistance$/, async function() {
    await assistancePage.callAssistance();
});

When(/^the user accesses the assistance screen$/, async function() {
    await navigation.assistance.go();
});
